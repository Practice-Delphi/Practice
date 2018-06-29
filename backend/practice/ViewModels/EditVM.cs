using System.ComponentModel.DataAnnotations;

namespace practice.ViewModels
{
    public class EditVM
    {
        //[EmailAddress(ErrorMessage = "Email_invalid")]
        // [DataType(DataType.EmailAddress)]
        [DataType(DataType.EmailAddress)]
        // [RegularExpression(@"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$", ErrorMessage = "Email_Invalid")]
        [EmailAddress(ErrorMessage = "Email_Invalid")]
        // [MinLength(3, ErrorMessage = "Email_To_Short")]
        public string Email { get; set; }
        
        [DataType(DataType.Password)]
        [MinLength(6, ErrorMessage = "Pass_To_Short")]
        [RegularExpression("^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{6,}$", ErrorMessage = "Pass_Invalid")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Password_Not_Confirmed")]
        public string ConfirmPassword { get; set; }
    }
}
