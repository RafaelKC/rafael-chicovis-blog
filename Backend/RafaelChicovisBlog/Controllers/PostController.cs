using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RafaelChicovisBlog.Domains;
using RafaelChicovisBlog.Dtos;
using RafaelChicovisBlog.Services;

namespace RafaelChicovisBlog.Controllers;

[Route("posts")]
public class PostController: ControllerBase
{
  private readonly IPostService _postService;

  public PostController(IPostService postService)
  {
    _postService = postService;
  }

  [HttpGet("{postId:guid}")]
  [AllowAnonymous]
  public async Task<ActionResult<Post>> Get(Guid postId)
  {
    var post = await _postService.Get(postId);
    return post != null ? Ok(post) : NotFound();
  }

  [HttpGet]
  [AllowAnonymous]
  public async Task<ActionResult<List<Post>>> GetList([FromBody] GetListInput? input)
  {
    input ??= new GetListInput();
    return await _postService.GetList(input);
  }

  [HttpPost]
  [Authorize]
  public async Task<ActionResult<Post>> Create()
  {
    var hasBody = HttpContext.Request.Form.TryGetValue("body", out var bodyStr);
    if (!hasBody || string.IsNullOrWhiteSpace(bodyStr)) return BadRequest("You must provide a body");

    var body = JsonConvert.DeserializeObject<PostInput>(bodyStr);
    if (body is null) return BadRequest("You must provide a valid body");
    var post = await _postService.Create(body);
    return Created($"posts/{post.Id}", post);
  }
}
