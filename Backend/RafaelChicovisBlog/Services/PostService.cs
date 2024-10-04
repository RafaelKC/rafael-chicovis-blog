using Microsoft.EntityFrameworkCore;
using RafaelChicovisBlog.Domains;
using RafaelChicovisBlog.Dtos;
using RafaelChicovisBlog.Infra.Database;
using RafaelChicovisBlog.Infra.Supabse;
using RafaelChicovisBlog.Utils;
using FileOptions = Supabase.Storage.FileOptions;

namespace RafaelChicovisBlog.Services;

public interface IPostService
{
  public Task<Post?> Get(Guid postId);
  public Task<Post> Create(PostInput post);
  public Task<List<Post>> GetList(GetListInput? input);
}

public class PostService: IPostService
{
  private readonly RCBlogDbContext _dbContext;
  private readonly ISupabseClient _supabseClient;
  private readonly IHttpContextAccessor _httpContextAccessor;

  public PostService(RCBlogDbContext dbContext, ISupabseClient supabseClient, IHttpContextAccessor httpContextAccessor)
  {
    _dbContext = dbContext;
    _supabseClient = supabseClient;
    _httpContextAccessor = httpContextAccessor;
  }

  public async Task<Post?> Get(Guid postId)
  {
    return  await _dbContext.Posts.AsNoTracking()
      .FirstOrDefaultAsync(post => post.Id == postId);
  }

  public async Task<Post> Create(PostInput input)
  {
    var files =  _httpContextAccessor.HttpContext.Request.Form.Files.ToList();

    var thumbFile = await GetThumnail(files);
    var postFile = await GetPost(files);

    var storage = await _supabseClient.PostsStorage.Value;

    var thumbPath = Path.Combine("thumbs", $"{Guid.NewGuid()}-{thumbFile.Item2.FileName}");
    await storage.Upload(thumbFile.Item1, thumbPath, new FileOptions
    {
      ContentType = thumbFile.Item2.ContentType,
      Upsert = true,
    });

    var postPath = Path.Combine("posts", $"{Guid.NewGuid()}-{postFile.Item2.FileName}");
    await storage.Upload(postFile.Item1, postPath, new FileOptions
    {
      ContentType = postFile.Item2.ContentType,
      Upsert = true,
    });

    var post = new Post(input)
    {
      PostDownloadUrl = storage.GetPublicUrl(postPath),
      ThumbnailUrl = storage.GetPublicUrl(thumbPath),
    };

    var entity = await _dbContext.Posts.AddAsync(post);
    await _dbContext.SaveChangesAsync();
    return entity.Entity;
  }

  public Task<List<Post>> GetList(GetListInput? input)
  {
    var posts = _dbContext.Posts.AsNoTracking()
      .OrderByDescending(post => post.PostDate)
      .AsQueryable();
    if (!string.IsNullOrEmpty(input.Filter))
    {
      posts = posts.Where(p => p.Name.ToLower().Contains(input.Filter.ToLower()));
    }

    return posts.Skip(input.SkipCount).Take(input.MaxResultCount).ToListAsync();
  }

  private async Task<(Byte[], IFormFile)> GetThumnail(List<IFormFile> files)
  {
    var thumnailFile = files.FirstOrDefault(f => f.ContentType.Contains("image"));
    if (thumnailFile is null) throw new FileNotFoundException();

    var tempPath = Path.Combine(Path.GetTempPath(), Path.GetRandomFileName());
    await using (var stream = FileStreamInitializer.Initializer(tempPath))
    {
      await thumnailFile.CopyToAsync(stream);
      return (File.ReadAllBytes(tempPath), thumnailFile);
    }
  }

  private async Task<(Byte[], IFormFile)> GetPost(List<IFormFile> files)
  {
    var postFile = files.FirstOrDefault(f => f.ContentType.Contains("markdown"));
    if (postFile is null) throw new FileNotFoundException();

    var tempPath = Path.Combine(Path.GetTempPath(), Path.GetRandomFileName());
    await using (var stream = FileStreamInitializer.Initializer(tempPath))
    {
      await postFile.CopyToAsync(stream);
      return (File.ReadAllBytes(tempPath), postFile);
    }
  }
}

