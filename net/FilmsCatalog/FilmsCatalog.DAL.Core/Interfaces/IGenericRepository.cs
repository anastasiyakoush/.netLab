using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.DAL.Core.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        Task CreateAsync(T entity);
        Task<T> GetAsync(int id);
        IQueryable<T> GetAll();
        void Update(T entity);
        void Delete(T entity);
    }
}
