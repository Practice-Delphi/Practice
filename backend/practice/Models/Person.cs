using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace practice.Models
{
    public class Person
    {
        public string Login { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public double Tokens { get; set; }
        public string PersonalUrl { get; set; }
        public string ETHAdrress { get; set; }
        public int Registers { get; set; }
        public double Commision { get; set; }
    }
}
