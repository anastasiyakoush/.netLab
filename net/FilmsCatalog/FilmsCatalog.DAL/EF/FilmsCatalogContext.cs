using Microsoft.EntityFrameworkCore;
using FilmsCatalog.DAL.Core.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace FilmsCatalog.DAL.EF.EF
{
    public class FilmsCatalogContext : IdentityDbContext<User>
    {
        public FilmsCatalogContext(DbContextOptions options) : base(options) { }

        public DbSet<Film> Films { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<FilmImage> FilmImages { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.SeedFilms();
            builder.SeedImages();

            builder.Entity<User>()
                .Ignore(p => p.PhoneNumber)
                .Ignore(p => p.PhoneNumberConfirmed)
                .Ignore(p => p.TwoFactorEnabled)
                .Ignore(p => p.AccessFailedCount)
                .Ignore(p => p.EmailConfirmed);

            builder.Entity<Rating>().HasKey(x => new { x.FilmId, x.UserId });

            builder.Entity<FilmImage>().Property(x => x.Url).IsRequired();
            builder.Entity<FilmImage>().Property(x => x.FilmId).IsRequired();
        }
    }
}
