using System;
using FilmsCatalog.DAL.Core.Entities;
using System.Threading.Tasks;

namespace FilmsCatalog.DAL.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IGenericRepository<Film> Films { get; }
        IGenericRepository<Comment> Comments { get; }
        IGenericRepository<Rating> Ratings { get; }
        IGenericRepository<FilmImage> Images { get; }
        Task SaveAsync();
    }
}
