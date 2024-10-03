using Microsoft.EntityFrameworkCore;

namespace RafaelChicovisBlog.Database;

public static class AddDatabaseExtension
{
  public static IServiceCollection AddDatabase(this IServiceCollection services, IConfiguration configuration)
  {
    services
      .AddDbContext<RCBlogDbContext>(op =>
      {
        op.UseNpgsql(configuration.GetConnectionString("DefaultConnection"));
      });

    return services;
  }
}
