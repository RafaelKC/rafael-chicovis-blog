using RafaelChicovisBlog.Dtos;
using RafaelChicovisBlog.Infra.Supabse;

namespace RafaelChicovisBlog.Infra.Auth;

public interface IAuthenticationService
{
  Task<LoginOutput> Login(LoginInput input);
}

public class AuthenticationService: IAuthenticationService
{
  private readonly ISupabseClient _supabseClient;

  public AuthenticationService(ISupabseClient supabseClient)
  {
    _supabseClient = supabseClient;
  }

  public async Task<LoginOutput> Login(LoginInput input)
  {
    try
    {
      var session = await _supabseClient.Auth.SignIn(input.Email, input.Password);

      return new LoginOutput
      {
        Success = session.User is not null,
        Token = session.AccessToken,
      };
    }
    catch (Exception)
    {
      return new LoginOutput
      {
        Success = false
      };
    }
  }
}
