using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace practice.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public double Tokens { get; set; }
        public string PersonalUrl { get; set; }
        public string ETHAdrress { get; set; }
        public int Registers { get; set; }
        public double Commision { get; set; }
    }

    public class PersonContext: DbContext {
        public PersonContext(DbContextOptions<PersonContext> options) : base(options) {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Person>().ToTable("Person");
        }
    }
}
