using System.Collections.Generic;
using System.Threading.Tasks;

namespace FilmsCatalog.DAL.Core.Interfaces
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        Task CreateAsync(TEntity entity);
        Task<TEntity> GetAsync(int id);
        Task<IEnumerable<TEntity>> GetAllAsync();
        void Update(TEntity entity);
        void Delete(TEntity entity);
    }
}
