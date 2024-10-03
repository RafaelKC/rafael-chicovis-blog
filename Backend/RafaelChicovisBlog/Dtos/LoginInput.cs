using System.ComponentModel.DataAnnotations;

namespace RafaelChicovisBlog.Dtos;

public class LoginInput
{
  [Required]
  [MinLength(5)]
  public string Email { get; set; }

  [Required]
  [MinLength(5)]
  public string Password { get; set; }
}
