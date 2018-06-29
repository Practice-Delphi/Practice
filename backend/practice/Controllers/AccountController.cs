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
        
        public async Task<IActionResult> Login([FromBody]LoginVM model) 
        {
            if (ModelState.IsValid)
            {
                // var username = model.Email;
                // var password = model.Password;
                // var etaddress = model.EtheriumAddress;
                // var NumOfRef = model.NumberOfReferals;
                // var income = model.Income;

                // var identity = GetIdentity(username, password);

                // if (identity != null) 
                // {
                //     User user = await db.Users.FirstOrDefaultAsync(x => x.Email == model.Email && x.Password == model.Password);
                //     var now = DateTime.UtcNow;
                //     var jwt = new JwtSecurityToken(
                //             issuer: AuthOptions.ISSUER,
                //             audience: AuthOptions.AUDIENCE,
                //             notBefore: now,
                //             claims: identity.Claims,
                //             expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                //             signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
                //     var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
                    User user = await db.Users.FirstOrDefaultAsync(x => x.Email == model.Email && x.Password == model.Password);
                    if (user != null) {
                        var encodedJwt = await CreateToken(user); 
                        if (encodedJwt != null) {
                        
                            var response = new
                            {
                                access_token = encodedJwt,
                                user = user.Email,
                                ethaddress = user.EtheriumAddress,
                                numofref = user.NumberOfReferals,
                                income = user.Income,
                                tokens = user.Tokens
                            };
                            return Json(response);
                        } else {
                            return Json(new { Error = "Authorization failed", ErrorType="Auth_Fail"});
                        }
                    } else {
                        return Json(new { Error = "Wrong Email or Password", ErrorType="Wrong_Email_Password"});
                    }    
                // } 
            } else {
                return Json(new { Error = "Error", ErrorType = ModelState.Values.First().Errors.First().ErrorMessage });
            }

            return Json(new { Error = "Bad requsest", ErrorType = "Bad_Request" });
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
       
        public async Task<IActionResult> Register([FromBody] RegisterVM model, [FromQuery(Name = "ref")] string referal)
        { 
            System.Console.WriteLine(referal);
            if (ModelState.IsValid)
            {
                User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
                if (user == null)
                {
                    db.Users.Add(new User { Email = model.Email, Password = model.Password });
                    if (referal != null) {
                        User Referal = await db.Users.FirstOrDefaultAsync(u => u.Email == referal);
                        if (Referal != null) {
                            db.Users.Attach(Referal);
                            Referal.NumberOfReferals += 1;
                            Referal.Income = Referal.NumberOfReferals * 10;
                            db.Users.Update(Referal);
                        }
                    }
                    await db.SaveChangesAsync();
                    return Json(new { Message = "Register success"});// RedirectToAction("Index", "Home"); ;
                }
                else
                    return Json(new { Error = "Email is already used", ErrorType="Email_In_Use"});
            } else {
                return Json(new { Error = "Error", ErrorType = ModelState.Values.First().Errors.First().ErrorMessage });
            }
            return Json(new { Error = "Bad request", ErrorType="Bad_Request"}); // View(model);
        }

        /* ToDo: Register method
         * 1. Перевірити чи прийшли валідні дані в об'єкті(як в Login)
         * 2. Перевірити чи користувач з таким емейлом не зареєстрований
         * 3. Якщо ні -- зареєструвати користувача, інакше повернути помилку з повідомленням про те, що він вже існує
         * 4. Викликати логінізацію зареєстрованого користувача або повернути код 302(переадресація) з URL логіна*/


        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetUser() {
            var email = User.Identity.Name;
            if (email != null) {
                User user = await db.Users.FirstOrDefaultAsync(u => u.Email == email);
                var response = new
                    {
                        user = user.Email,
                        ethaddress = user.EtheriumAddress,
                        numofref = user.NumberOfReferals,
                        income = user.Income,
                        tokens = user.Tokens,
                    };
                return Json(response);
            } else {
                return Json(new { Error = "Not authorize", ErrorType = "Not_Authorize"});
            }
            return Json(new { Error = "Bad_request", ErrorType = "Bad_Request"});
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Edit()
        {
            var userName = User.Identity.Name;
            if (userName != null)
            {
                User user = await db.Users.FirstOrDefaultAsync(p => p.Email == userName);
                if (user != null)
                    return View(user);
            }
            return NotFound();
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Edit([FromBody] EditVM model)
        {
            var email = User.Identity.Name;
            if (ModelState.IsValid) {
                if (email != null) {
                    if (model.Email == null && model.Password == null) {
                        return Json(new {Error = "All string is empty", ErrorType = "No_Empty_Strings"});
                    } else {
                        if (model.Password != null && model.Password != model.ConfirmPassword) {
                            return Json(new {Error = "Password not confirmed", ErrorType = "Password_Not_Confirmed"});
                        }
                        if (model.Email != null) {
                            User checkuser = await db.Users.FirstOrDefaultAsync(p => p.Email == model.Email);
                            if (checkuser != null) {
                                return Json(new { Error = "Email is already used", ErrorType="Email_In_Use"});
                            }
                        }
                        User oldUser = await db.Users.FirstOrDefaultAsync(p => p.Email == email);
                        db.Users.Attach(oldUser);
                        if (model.Password != null) {
                            oldUser.Password = model.Password;
                        }

                        if (model.Email != null && model.Email != oldUser.Email) {
                            oldUser.Email = model.Email;
                        }
                    // ToDo: Оновлення всіх потрібних полів крім логіну
                    
                    // if(oldUser.Email != user.Email)
                    // {
                
                    //     // ToDo: Обновити емейл і викликати логаут
                    // }
            
                        db.Users.Update(oldUser);
                        await db.SaveChangesAsync();
                        var encodedJwt = await CreateToken(oldUser);
                        if (encodedJwt != null) {
                            var response = new
                            {
                                access_token = encodedJwt,
                                user = oldUser.Email,
                                ethaddress = oldUser.EtheriumAddress,
                                numofref = oldUser.NumberOfReferals,
                                income = oldUser.Income,
                                tokens = oldUser.Tokens
                            };
                            return Json(response);
                        } else {
                            return Json(new {Error = "Authorization failed", ErrorType="Auth_Fail"});
                        }
                    // await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
                    // return Json(new { messenge = "Data is succesfully updated" });
                    }
                } else {
                    return Json(new { Error = "Not authorize", ErrorType = "Not_Authorize"});
                }
            } else {
                return Json(new { Error = "Error", ErrorType = ModelState.Values.First().Errors.First().ErrorMessage });
            }
           return Json(new { Error = "Bad Request", ErrorType = "Bad_Request"});
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> EditEthAddress([FromBody] EditEthVM model) {
          if (ModelState.IsValid) {
                var email = User.Identity.Name;
                if (email != null) {
                    User user = await db.Users.FirstOrDefaultAsync(p => p.Email == email);
                    db.Users.Attach(user);
                    user.EtheriumAddress = model.EtheriumAddress;
                    db.Users.Update(user);
                    await db.SaveChangesAsync();
                    return Json(new { Message = "Update success"});
                } else {
                    return Json(new { Error = "Not authorize", ErrorType = "Not_Authorize"});
                }
          } else {
                return Json(new { Error = "Error", ErrorType = ModelState.Values.First().Errors.First().ErrorMessage });
          }
          return Json(new { Error = "Bad request", ErrorType = "Bad_Request"});
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
            // This is not work
            // await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Json(new {Message = "Log out success"});//RedirectToAction("Login", "Account");
        }

        private async Task<string> CreateToken(User user) {
            
            var identity = GetIdentity(user);
                if (identity != null) 
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
                    return encodedJwt;
                } else {
                    return null;
                }
        }

        private ClaimsIdentity GetIdentity(User user)
        {
            // User user = db.Users.FirstOrDefault(x => x.Email == username && x.Password == password);
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