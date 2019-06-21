using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using FilmsCatalog.DAL.Core.Models;

namespace FilmsCatalog.DAL.EF.EF
{
    public class FilmsCatalogContext : DbContext
    {
        public FilmsCatalogContext(DbContextOptions options) : base(options) { }

        public DbSet<Film> Films { get; set; }
    }
}
