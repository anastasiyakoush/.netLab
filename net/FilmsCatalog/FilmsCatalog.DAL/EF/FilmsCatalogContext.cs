using Microsoft.EntityFrameworkCore;

using FilmsCatalog.DAL.Core.Entities;

namespace FilmsCatalog.DAL.EF.EF
{
    public class FilmsCatalogContext : DbContext
    {
       // public FilmsCatalogContext(DbContextOptions options) : base(options) { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server = (localdb)\\MSSQLLocalDB; Database = filmsCatalog; Trusted_Connection = True;");
        }

        public DbSet<Film> Films { get; set; }
    }
}
