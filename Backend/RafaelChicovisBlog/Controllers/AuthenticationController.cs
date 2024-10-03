using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RafaelChicovisBlog.Dtos;
using RafaelChicovisBlog.Infra.Auth;

namespace RafaelChicovisBlog.Controllers;

[Route("auths")]
public class AuthenticationController: ControllerBase
{
  private readonly IAuthenticationService _authenticationService;

  public AuthenticationController(IAuthenticationService authenticationService)
  {
    _authenticationService = authenticationService;
  }

  [HttpPost("login")]
  [AllowAnonymous]
  public async Task<ActionResult<LoginOutput>> Login([FromBody] LoginInput loginInput)
  {
    var result = await _authenticationService.Login(loginInput);
    if (result.Success) return Ok(result);
    return UnprocessableEntity();
  }
}
