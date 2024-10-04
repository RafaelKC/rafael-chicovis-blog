using Supabase;
using Supabase.Functions.Interfaces;
using Supabase.Gotrue;
using Supabase.Gotrue.Interfaces;
using Supabase.Interfaces;
using Supabase.Postgrest.Interfaces;
using Supabase.Realtime;
using Supabase.Realtime.Interfaces;
using Supabase.Storage;
using Supabase.Storage.Interfaces;
using Client = Supabase.Client;

namespace RafaelChicovisBlog.Infra.Supabse;

public interface ISupabseClient: ISupabaseClient<User, Session, RealtimeSocket, RealtimeChannel, Bucket, FileObject>
{
    public Lazy<Task<IStorageFileApi<FileObject>>> PostsStorage { get; }
}

public class SupabseClient: Client, ISupabseClient
{
  public Lazy<Task<IStorageFileApi<FileObject>>> PostsStorage { get; }

    public SupabseClient(IGotrueClient<User, Session> auth, IRealtimeClient<RealtimeSocket, RealtimeChannel> realtime, IFunctionsClient functions, IPostgrestClient postgrest, IStorageClient<Bucket, FileObject> storage, SupabaseOptions options) : base(auth, realtime, functions, postgrest, storage, options)
    {
      PostsStorage = new Lazy<Task<IStorageFileApi<FileObject>>>(LazyGetPostsStorage);
    }

    public SupabseClient(string supabaseUrl, string? supabaseKey, SupabaseOptions? options = null) : base(supabaseUrl, supabaseKey, options)
    {
      PostsStorage = new Lazy<Task<IStorageFileApi<FileObject>>>(LazyGetPostsStorage);
    }


    private async Task<IStorageFileApi<FileObject>> LazyGetPostsStorage()
    {
        return Storage.From(AppConfig.SupabeseBucketName);
    }
}
