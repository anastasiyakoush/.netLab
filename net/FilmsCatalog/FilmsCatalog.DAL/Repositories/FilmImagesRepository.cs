using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.DAL.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using FilmsCatalog.DAL.EF.EF;

namespace FilmsCatalog.DAL.EF.Repositories
{
    public class FilmImagesRepository : GenericRepository<FilmImage>, IFilmImageRepository
    {
        private FilmsCatalogContext _db;

        public FilmImagesRepository(FilmsCatalogContext db) : base(db)
        {
            _db = db;
        }

        public async Task<IQueryable<string>> GetUrlsAsync(int filmId)
        {
            return await Task.Run(() => _db.FilmImages
                                        .Where(x => x.FilmId == filmId)
                                        .Select(x => x.Url));
        }
    }
}
