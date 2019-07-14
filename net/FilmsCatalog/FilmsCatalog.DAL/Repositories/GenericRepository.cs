using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using FilmsCatalog.DAL.Core.Interfaces;
using System.Linq;
using System.Linq.Expressions;
using System;

namespace FilmsCatalog.DAL.EF.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private DbContext db;
        private DbSet<T> entities;

        public GenericRepository(DbContext context)
        {
            db = context;
            entities = db.Set<T>();
        }

        public async Task CreateAsync(T entity)
        {
            await entities.AddAsync(entity);
        }

        public void Delete(T entity)
        {
            entities.Remove(entity);
        }

        public async Task<T> GetAsync(int id)
        {
            return await entities.FindAsync(id);
        }

        public IQueryable<T> GetAll()
        {
            return entities;
        }

        public void Update(T entity)
        {
            db.Update(entity);
        }
    }
}
