using Microsoft.EntityFrameworkCore;
using FilmsCatalog.DAL.Core.Entities;

namespace FilmsCatalog.DAL.EF.EF
{
    public class FilmsCatalogContext : DbContext
    {
        public FilmsCatalogContext(DbContextOptions options) : base(options) { }

        public DbSet<Film> Films { get; set; }
    }
}
