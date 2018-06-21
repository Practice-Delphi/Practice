using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using practice.ViewModels; 
using practice.Models; 
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.IdentityModel.Tokens.Jwt;
using System;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using System.Linq;

namespace practice.Controllers
{
    public class AccountController : Controller
    {
        private UserContext db;
        public AccountController(UserContext context)
        {
            db = context;
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
         // ToDo: Подивитись чи воно взагалі підходить для даної функції.
        public async Task<IActionResult> Login([FromBody]LoginVM model) // ToDo: Вертати лише token(можливо ще якісь поля, якщо необхідно) в форматі JSON
        {
            if (ModelState.IsValid)
            {
                // ToDo: Взяти дані з моделі, яка прийшла в тілі запиту(зі змінної Model).
                var username = model.Email;
                var password = model.Password;

                var identity = GetIdentity(username, password);// У тебе тут приходить "закодована" інфа про цього чувака 

                if (identity != null) //і тут ти маєш перевірити чи найшло такого чувака ToDo: Переписати даний блок ближче до прикладу з JWT-токенами.
                {
                    var now = DateTime.UtcNow;
                    var jwt = new JwtSecurityToken(
                            issuer: AuthOptions.ISSUER,
                            audience: AuthOptions.AUDIENCE,
                            notBefore: now,
                            claims: identity.Claims,
                            expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                            signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
                    var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

                    var response = new
                    {
                        access_token = encodedJwt,
                        user = model.Email,
                        password = model.Password,
                    };

                    Response.ContentType = "application/json";
                    //  await Response.WriteAsync(JsonConvert.SerializeObject(response, new JsonSerializerSettings { Formatting = Formatting.Indented }));
                    return Json(response);

                }


                return Json(new { Error = "Wrong Email or Password" });

            }

            return Json(new { Error = "Bad requsest" });
        }

        private ClaimsIdentity GetIdentity(string username, string password)
        {
            User user = db.Users.FirstOrDefault(x => x.Email == username && x.Password == password);
            if (user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, user.Email),

                };
                ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }

            // если пользователя не найдено
            return null;
        }


        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
       
        public async Task<IActionResult> Register([FromBody]RegisterVM model)
        {
            if (ModelState.IsValid)
            {
                User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
                if (user == null)
                {

                    db.Users.Add(new User { Email = model.Email, Password = model.Password });

                    await db.SaveChangesAsync();


                    return RedirectToAction("Index", "Home"); ;
                }
                else
                    return Json(new { Error = "Login is already used"});
            }
            return View(model);
        }

        /* ToDo: Register method
         * 1. Перевірити чи прийшли валідні дані в об'єкті(як в Login)
         * 2. Перевірити чи користувач з таким емейлом не зареєстрований
         * 3. Якщо ні -- зареєструвати користувача, інакше повернути помилку з повідомленням про те, що він вже існує
         * 4. Викликати логінізацію зареєстрованого користувача або повернути код 302(переадресація) з URL логіна*/


        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Edit(int id)
        {
           
            if (id != null)
            {
                User user = await db.Users.FirstOrDefaultAsync(p => p.Id == id);
                if (user != null)
                    return View(user);
            }
            return NotFound();
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Edit([FromBody]User user)
        {
            db.Users.Update(user);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }
        /* ToDo: UpdateUserData() [HttpGet] method [Authorize]
         * 1. Знайдемо користувача з User.Identity.Name;
         * 2. Вертаєш дані про цього користувача.*/

        /* ToDo: UpdateUserData(User user) [HttpPost] method [Authorize]
         * 1. Апдейт даних https://metanit.com/sharp/aspnet5/12.3.php 
         * 2. Сейв результатів в базі. */
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Logout()
        {
            return Json(new { Name = User.Identity.Name });
            //await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            //return RedirectToAction("Login", "Account");
        }
       
        #region Working
        //[HttpGet]
        //public IActionResult Register()
        //{
        //    return View();
        //}
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Register(RegisterVM model)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
        //        if (user == null)
        //        {
        //            // добавляем пользователя в бд
        //            db.Users.Add(new User { Email = model.Email, Password = model.Password });
        //            await db.SaveChangesAsync();

        //            await Authenticate(model.Email); // аутентификация

        //            return RedirectToAction("Index", "Home");
        //        }
        //        else
        //            ModelState.AddModelError("", "Некорректные логин и(или) пароль");
        //    }
        //    return View(model);
        //}
        //[HttpGet]
        //public IActionResult Edit()
        //{
        //    return View();
        //}
        //public async Task<IActionResult> Edit(EditVM model)
        //{
        //    if (ModelState.IsValid)
        //    {

        //    }
        //    return View(model);
        //}
        //[HttpPost]
        //[ValidateAntiForgeryToken]

        //private async Task Authenticate(string userName)
        //{
        //    // создаем один claim
        //    var claims = new List<Claim>
        //    {
        //        new Claim(ClaimsIdentity.DefaultNameClaimType, userName)
        //    };
        //    // создаем объект ClaimsIdentity
        //    ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
        //    // установка аутентификационных куки
        //    await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        //}

        //public async Task<IActionResult> Logout()
        //{
        //    await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        //    return RedirectToAction("Login", "Account");
        //}
        #endregion
    }
    }