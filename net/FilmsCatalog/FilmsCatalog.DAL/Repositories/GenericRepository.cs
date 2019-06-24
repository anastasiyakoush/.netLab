using System.Collections.Generic;
using FilmsCatalog.DAL.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace FilmsCatalog.DAL.EF.Repositories
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        private DbContext db;
        private DbSet<TEntity> entities;

        public GenericRepository(IUnitOfWork unitOfWork)
        {
            db = unitOfWork.Context;
            entities = unitOfWork.Context.Set<TEntity>();
        }

        public async void CreateAsync(TEntity entity)
        {
            await entities.AddAsync(entity);
        }

        public void Delete(TEntity entity)
        {
            entities.Remove(entity);
        }

        public async Task<TEntity> GetAsync(int id)
        {
            return await entities.FindAsync(id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return entities;
        }

        public void Update(TEntity entity)
        {
            db.Update(entity);
        }
    }
}
