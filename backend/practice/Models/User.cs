using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace practice.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string EtheriumAddress { get; set; }
        public int NumberOfReferals { get; set; }
        public int Income { get; set; }
        public int Tokens { get; set; }
    }
}
