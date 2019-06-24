using System;
using FilmsCatalog.DAL.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace FilmsCatalog.DAL.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        DbContext Context { get; }
        IGenericRepository<FilmModel> Films { get; }
        void SaveAsync();
    }
}
