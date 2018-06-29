using System.ComponentModel.DataAnnotations;

namespace practice.ViewModels
{
    public class LoginVM
    {
        [Required(ErrorMessage = "Empty_Email")]
        [DataType(DataType.EmailAddress)]
        // [EmailAddress(ErrorMessage = "Email_Invalid")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Empty_Password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

    }
}