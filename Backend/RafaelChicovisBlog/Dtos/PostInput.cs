using System.ComponentModel.DataAnnotations;

namespace RafaelChicovisBlog.Dtos;

public class PostInput
{
  [MaxLength(150)]
  [MinLength(5)]
  [Required]
  public string Name { get; set; }

  public DateTime? PostDate { get; set; }
}
