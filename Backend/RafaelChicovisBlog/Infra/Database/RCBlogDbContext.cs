using Microsoft.EntityFrameworkCore;
using RafaelChicovisBlog.Domains;

namespace RafaelChicovisBlog.Infra.Database;

public class RCBlogDbContext : DbContext
{

  public DbSet<Post> Posts { get; set; }

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
