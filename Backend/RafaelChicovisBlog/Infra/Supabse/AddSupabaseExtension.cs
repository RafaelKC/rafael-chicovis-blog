using Supabase;

namespace RafaelChicovisBlog.Infra.Supabse;


public static class AddSupabaseExtension
{
    public static IServiceCollection AddSupabase(this IServiceCollection services, IConfiguration configuration)
    {
        var supabaseUrl = configuration[AppConfig.SupabaseUrlKey];
        var supabaseKey = configuration[AppConfig.SupabaseKey];

        if (string.IsNullOrWhiteSpace(supabaseUrl) || string.IsNullOrWhiteSpace(supabaseKey))
        {
            throw new Exception("Supabase not configured");
        }

        var options = new SupabaseOptions
        {
            AutoRefreshToken = true,
            AutoConnectRealtime = true,
        };

        var supabase = new SupabseClient(supabaseUrl, supabaseKey, options);

        services.AddSingleton<ISupabseClient>(supabase);

        return services;
    }
}
