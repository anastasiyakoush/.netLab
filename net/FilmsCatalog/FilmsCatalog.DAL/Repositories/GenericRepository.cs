using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using FilmsCatalog.DAL.Core.Interfaces;
using System.Linq;

namespace FilmsCatalog.DAL.EF.Repositories
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        private DbContext db;
        private DbSet<TEntity> entities;

        public GenericRepository(DbContext context)
        {
            db = context;
            entities = db.Set<TEntity>();
        }

        public async Task CreateAsync(TEntity entity)
        {
            await entities.AddAsync(entity);
        }

        public void Delete(TEntity entity)
        {
            entities.Remove(entity);
        }

        public virtual async Task<TEntity> GetAsync(int id)
        {
            return await entities.FindAsync(id);
        }

        public Task<IQueryable<TEntity>> GetAllAsync()
        {
            return Task.Run(() => (IQueryable<TEntity>)entities);
        }

        public void Update(TEntity entity)
        {
            db.Update(entity);
        }
    }
}
