using System;
using System.Collections.Generic;
using System.Text;

namespace FilmsCatalog.DAL.Core.Interfaces
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        void Create(TEntity entity);
        void Update(TEntity entity);
        void Delete(TEntity entity);
        TEntity Get(int id);
        IEnumerable<TEntity> GetAll();
    }
}
