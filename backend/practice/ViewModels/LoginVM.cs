using System.ComponentModel.DataAnnotations;

namespace practice.ViewModels
{
    public class LoginVM
    {
        [Required(ErrorMessage = "Не указан Email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Не указан пароль")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public string EtheriumAddress { get; set; }
        public int NumberOfReferals { get; set; }
        public int Income { get; set; }
    }
}