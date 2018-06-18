using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;

namespace practice.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        [Authorize]
        [Route("getlogin")]
        public IActionResult GetLogin()
        {
            return Json(new { login = User.Identity.Name });
        }

        [Authorize(Roles = "user")]
        [Route("getrole")]
        public IActionResult GetRole()
        {
            return Json(new { role = "User" });
        }
    }
}