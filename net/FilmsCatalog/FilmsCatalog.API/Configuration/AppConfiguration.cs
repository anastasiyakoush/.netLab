using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace FilmsCatalog.API.Configuration
{
    public class AppConfiguration
    {
        public static string ConnectionString;

        public AppConfiguration(IConfiguration configuration)
        {
            ConnectionString = configuration.GetConnectionString("FilmsCatalogConnection");
        }
    }
}