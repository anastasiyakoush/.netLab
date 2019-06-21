using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using FilmsCatalog.DAL.Models;

namespace FilmsCatalog.DAL.EF
{
    public class FilmsCatalogContext : DbContext
    {
        public FilmsCatalogContext(DbContextOptions<FilmsCatalogContext> options) : base(options)
        {
        }

        public DbSet<Director> Directors { get; set; }
        public DbSet<Film> Films { get; set; }
    }
}
