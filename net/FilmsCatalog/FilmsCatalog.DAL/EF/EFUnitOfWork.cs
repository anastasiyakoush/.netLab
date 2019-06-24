using System;
using FilmsCatalog.DAL.Core.Interfaces;
using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.DAL.EF.Repositories;
using Microsoft.EntityFrameworkCore;

namespace FilmsCatalog.DAL.EF.EF
{
    public class EFUnitOfWork : IUnitOfWork
    {
        private FilmsCatalogContext db;
        private GenericRepository<FilmModel> filmRepository;
        private bool disposed = false;

        public EFUnitOfWork(/*DbContextOptions<FilmsCatalogContext> options*/)
        {
            db = new FilmsCatalogContext();
        }

        public DbContext Context
        {
            get { return db; }
        }

        public IGenericRepository<FilmModel> Films
        {
            get
            {
                if (filmRepository == null)
                {
                    filmRepository = new GenericRepository<FilmModel>(this);
                    return filmRepository;
                }
                return filmRepository;
            }
        }

        public void SaveAsync()
        {
            db.SaveChangesAsync();
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
