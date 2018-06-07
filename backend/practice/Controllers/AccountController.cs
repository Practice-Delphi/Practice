using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Newtonsoft.Json;
using System.Security.Claims;
using practice.Models;
// CORS
using Microsoft.AspNetCore.Cors;

namespace practice.Controllers
{
    public class AccountController : Controller
    {
        private List<Person> people = new List<Person>
        {
            new Person { Login="admin@gmail.com", Password="12345", Role = "admin", Tokens = 4.2, PersonalUrl="http://localhost?q=admin@gmail.com", ETHAdrress = "myETHAddress", Registers = 3, Commision = 2.5 },
            new Person { Login="qwerty", Password="55555", Role = "user", Tokens = 6.3, PersonalUrl="http://localhost?q=qwerty", ETHAdrress = "myETHAddress2", Registers = 1, Commision = 1.5 }
        };

        [HttpPost("/token")]
        [EnableCors("AllowSpecificOrigin")]
        // [DisableCors]
        public async Task Token()
        {
            Console.WriteLine(Request.Form);
            var username = Request.Form["username"];
            var password = Request.Form["password"];

            var identity = GetIdentity(username, password);
            if (identity == null)
            {
                Response.StatusCode = 400;
                await Response.WriteAsync("Invalid username or password.");
                return;
            }

            var now = DateTime.UtcNow;
            // создаем JWT-токен
            string encodedJwt = null;
            try
            {
                Console.WriteLine(identity.Name);
                var jwt = new JwtSecurityToken(
                                issuer: AuthOptions.ISSUER,
                                audience: AuthOptions.AUDIENCE,
                                notBefore: now,
                                claims: identity.Claims,
                                expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

                encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            Person person = GetPersonByClaims(identity);
            var response = new
            {
                access_token = encodedJwt,
                email = identity.Name,
                tokens = person.Tokens,
                url = person.PersonalUrl,
                registers = person.Registers,
                commission = person.Commision
            };

            // сериализация ответа
            Response.ContentType = "application/json";
            await Response.WriteAsync(JsonConvert.SerializeObject(response, new JsonSerializerSettings { Formatting = Formatting.Indented }));
        }

        private ClaimsIdentity GetIdentity(string username, string password)
        {
            Person person = people.FirstOrDefault(x => x.Login == username && x.Password == password);
            if (person != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, person.Login),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, person.Role),
                };
                ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }

            // если пользователя не найдено
            return null;
        }
        private Person GetPersonByClaims(ClaimsIdentity identity) { 
            if (identity == null) {
                throw new ArgumentNullException("No identity");
            }
             Person person = null;
             person = people.FirstOrDefault(x => x.Login == identity.Name);
             return person;
        }
    }
}