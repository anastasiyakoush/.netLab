using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace FilmsCatalog.DAL.EF.EF
{
    public class FilmsCatalogContext : DbContext
    {
        public FilmsCatalogContext(DbContextOptions options) : base(options)
        {
        }

        
    }
}
