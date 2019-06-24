using Microsoft.EntityFrameworkCore;
using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.DAL.Core.Configuration;

namespace FilmsCatalog.DAL.EF.EF
{
    public class FilmsCatalogContext : DbContext
    {
       // public FilmsCatalogContext(DbContextOptions options) : base(options) { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server = (localdb)\\MSSQLLocalDB; Database = filmsCatalog; Trusted_Connection = True;");
        }

        public DbSet<FilmModel> Films { get; set; }
    }
}
