﻿using System.ComponentModel.DataAnnotations;

namespace practice.ViewModels
{
    public class RegisterVM
    {
        [Required(ErrorMessage = "Empty_Email")]
        [DataType(DataType.EmailAddress)]
        //
        [EmailAddress(ErrorMessage = "Email_Invalid")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Empty_Password")]
        [MinLength(6, ErrorMessage = "Pass_To_Short")]
        [RegularExpression("^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{6,}$", ErrorMessage = "Pass_Invalid")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Password_Not_Confirmed")]
        public string ConfirmPassword { get; set; }
    }
}