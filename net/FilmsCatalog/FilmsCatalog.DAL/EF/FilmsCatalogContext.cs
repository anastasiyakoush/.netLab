using Microsoft.EntityFrameworkCore;
using FilmsCatalog.DAL.Core.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace FilmsCatalog.DAL.EF.EF
{
    public class FilmsCatalogContext : IdentityDbContext<User>
    {
        public FilmsCatalogContext(DbContextOptions options) : base(options) { }

        public DbSet<Film> Films { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityUser>()
                .Ignore(p => p.PhoneNumber)
                .Ignore(p => p.PhoneNumberConfirmed)
                .Ignore(p => p.TwoFactorEnabled)
                .Ignore(p => p.AccessFailedCount)
                .Ignore(p => p.EmailConfirmed);
        }
    }
}
