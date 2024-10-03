using Microsoft.EntityFrameworkCore;

namespace RafaelChicovisBlog.Infra.Database;

public class RCBlogDbContext : DbContext
{

  public RCBlogDbContext()
  {
  }

  public RCBlogDbContext(DbContextOptions<RCBlogDbContext> options, bool migrate = true) : base(options)
  {
    if (migrate)
    {
      Database.Migrate();
    }
  }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);
    modelBuilder.HasDefaultSchema("public");
  }

}
