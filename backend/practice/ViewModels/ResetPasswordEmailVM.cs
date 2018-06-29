using System.ComponentModel.DataAnnotations;

namespace practice.ViewModels
{
    public class ResetPasswordEmailVM
    {
        [Required(ErrorMessage = "Empty_Email")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Email_Invalid")]
        public string Email { get; set; }

    }
}