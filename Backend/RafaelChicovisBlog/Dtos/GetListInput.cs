namespace RafaelChicovisBlog.Dtos;

public class GetListInput
{
  public string? Filter { get; set; }
  public int MaxResultCount { get; set; } = 25;
  public int SkipCount { get; set; } = 0;
}
