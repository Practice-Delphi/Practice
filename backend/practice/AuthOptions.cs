using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace practice
{
    public class AuthOptions
    {
        public const string ISSUER = "MyAuthServer"; // издатель токена
        public const string AUDIENCE = "http://localhost:58996/"; // потребитель токена
        const string KEY = "pizdecogromniykeyname";   // ключ для шифрации
        public const int LIFETIME = 1; // время жизни токена - 1 минута
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
