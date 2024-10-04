using System.ComponentModel.DataAnnotations;
using RafaelChicovisBlog.Dtos;

namespace RafaelChicovisBlog.Domains;

public class Post
{
  [Key]
  public Guid Id { get; set; }

  [MaxLength(150)]
  [MinLength(5)]
  public string Name { get; set; }

  public DateTime PostDate { get; set; }

  [MaxLength(450)]
  public string PostDownloadUrl { get; set; }

  [MaxLength(450)]
  public string ThumbnailUrl { get; set; }

  public Post()
  {
  }

  public Post(PostInput post)
  {
    Name = post.Name;
    PostDate = post.PostDate ?? DateTime.Now;
  }

  public void Update(PostInput post)
  {
    Name = post.Name;
    PostDate = post.PostDate ?? DateTime.Now;
  }
}
