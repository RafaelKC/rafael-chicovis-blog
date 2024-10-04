using RafaelChicovisBlog.Infra.Database;
using RafaelChicovisBlog.Infra.Supabse;
using RafaelChicovisBlog.Infra.Auth;
using RafaelChicovisBlog.Infra;

namespace RafaelChicovisBlog;

public class Startup
{
  public IConfiguration Configuration { get; }

  public Startup(IConfiguration configuration)
  {
    Configuration = configuration;
  }

  public void ConfigureServices(IServiceCollection services)
  {
    services
      .AddDatabase(Configuration)
      .AddSupabase(Configuration)
      .AddAuthentication(Configuration)
      .AddTransients()
      .AddSwaggerGen()
      .AddCors()
      .AddControllers();
  }

  public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
  {
    if (env.IsDevelopment())
    {
      app.UseDeveloperExceptionPage();
      app.UseSwagger();
      app.UseSwaggerUI();
    }

    app.UseCors(e => e
      .AllowAnyOrigin()
      .AllowAnyMethod()
      .AllowAnyHeader());

    app.UseRouting();
    app.UseRouting();

    app.UseAuthentication();
    app.UseAuthorization();

    app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
  }
}
