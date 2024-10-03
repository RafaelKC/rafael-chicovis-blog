using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace RafaelChicovisBlog.Infra.Auth;

public static class AddAuthenticationExtension
{
  public static IServiceCollection AddAuthentication(this IServiceCollection services, IConfiguration configuration)
  {
    services
      .AddSingleton<IAuthenticationService, AuthenticationService>()
      .AddAuthentication(options =>
      {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
      })
      .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
      {
        options.Audience = configuration[AppConfig.AuthenticationAudience];

        options.IncludeErrorDetails = true;
        options.TokenValidationParameters = new TokenValidationParameters
        {
          ValidateIssuer = true,
          ValidIssuer = configuration[AppConfig.AuthenticationIssuer],
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(configuration[AppConfig.AuthenticationKey])
          ),

          ValidateLifetime = true,
          ValidateAudience = true,
          ValidAudience = configuration[AppConfig.AuthenticationAudience],
        };
      });

    return services;
  }
}
