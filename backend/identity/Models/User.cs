using Microsoft.AspNetCore.Identity;

namespace identity.Models
{
    public class User : IdentityUser
    {
        public int Year { get; set; }


    }
}