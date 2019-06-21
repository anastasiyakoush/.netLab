using System;
using System.Collections.Generic;
using System.Text;
using FilmsCatalog.DAL.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace FilmsCatalog.DAL.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        DbContext Context { get; }
        IGenericRepository<Film> Films { get; }
        void SaveAsync();
    }
}
