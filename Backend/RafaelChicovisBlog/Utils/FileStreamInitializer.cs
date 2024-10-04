namespace RafaelChicovisBlog.Utils;

public static class FileStreamInitializer
{
  public static Stream Initializer(string? path = null)
  {
    var fileStreamOptions = new FileStreamOptions
    {
      Options = FileOptions.DeleteOnClose,
      Access = FileAccess.ReadWrite,
      Mode = FileMode.Create
    };
    return new FileStream(string.IsNullOrWhiteSpace(path) ? Path.GetTempPath() : path, fileStreamOptions);
  }
}
