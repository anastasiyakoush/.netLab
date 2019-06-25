using System;

using Microsoft.EntityFrameworkCore;

using FilmsCatalog.DAL.Core.Entities;

namespace FilmsCatalog.DAL.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        DbContext Context { get; }
        IGenericRepository<Film> Films { get; }
        void SaveAsync();
    }
}
