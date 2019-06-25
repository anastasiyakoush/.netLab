using System;
using FilmsCatalog.DAL.Core.Interfaces;
using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.DAL.EF.Repositories;
using System.Threading.Tasks;

namespace FilmsCatalog.DAL.EF.EF
{
    public class UnitOfWork : IUnitOfWork
    {
        private FilmsCatalogContext db;
        private GenericRepository<Film> filmRepository;
        private bool disposed = false;

        public UnitOfWork(FilmsCatalogContext context)
        {
            db = context;
        }

        public IGenericRepository<Film> Films
        {
            get => filmRepository ?? new GenericRepository<Film>(db);
        }

        public async Task SaveAsync()
        {
            await db.SaveChangesAsync();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    db.Dispose();
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
