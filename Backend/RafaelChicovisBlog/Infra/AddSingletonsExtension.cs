using RafaelChicovisBlog.Services;

namespace RafaelChicovisBlog.Infra;

public static class AddSingletonsExtension
{
  public static IServiceCollection AddTransients(this IServiceCollection services)
  {
    return services
      .AddTransient<IPostService, PostService>()
      .AddTransient<IHttpContextAccessor, HttpContextAccessor>();
  }
}
