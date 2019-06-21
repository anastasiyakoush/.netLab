using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FilmsCatalog.DAL.Core.Interfaces
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        void CreateAsync(TEntity entity);
        Task<TEntity> GetAsync(int id);
        IEnumerable<TEntity> GetAll();
        void Update(TEntity entity);
        void Delete(TEntity entity);
    }
}
