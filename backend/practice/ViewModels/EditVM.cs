using System.ComponentModel.DataAnnotations;

namespace practice.ViewModels
{
    public class EditVM
    {
        [Required]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
