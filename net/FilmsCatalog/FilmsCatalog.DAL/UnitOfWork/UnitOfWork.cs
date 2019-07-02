using System;
using FilmsCatalog.DAL.Core.Interfaces;
using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.DAL.EF.Repositories;
using System.Threading.Tasks;

namespace FilmsCatalog.DAL.EF.EF
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly FilmsCatalogContext _db;
        private readonly IGenericRepository<Film> _filmRepository;
        private readonly IGenericRepository<Comment> _commentRepository;
        private readonly IGenericRepository<FilmImage> _filmImageRepository;
        private readonly IGenericRepository<Rating> _ratingRepository;
        private bool disposed = false;

        public UnitOfWork(FilmsCatalogContext context)
        {
            _db = context;
        }

        public IGenericRepository<Film> Films => _filmRepository ?? new GenericRepository<Film>(_db);
        public IGenericRepository<Comment> Comments => _commentRepository ?? new GenericRepository<Comment>(_db);
        public IGenericRepository<Rating> Ratings => _ratingRepository ?? new GenericRepository<Rating>(_db);
        public IGenericRepository<FilmImage> Images => _filmImageRepository ?? new GenericRepository<FilmImage>(_db);

        public async Task SaveAsync()
        {
            await _db.SaveChangesAsync();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    _db.Dispose();
                }
                disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
