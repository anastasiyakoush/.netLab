using Microsoft.Extensions.Configuration;
using System.Text;
using System;

namespace FilmsCatalog.Core.Configuration
{
    public class AppConfiguration
    {
        public static string ConnectionString;
        public static byte[] Secret;
        public static int Lifetime;

        public AppConfiguration(IConfiguration configuration)
        {
            ConnectionString = configuration.GetConnectionString("FilmsCatalogConnection");
            Secret = Encoding.ASCII.GetBytes(configuration.GetSection("Token").GetSection("secret").Value);
            Lifetime = Convert.ToInt32(configuration.GetSection("Token").GetSection("lifetime").Value);
        }
    }
}