using System;
using System.Collections.Generic;
using System.Text;
using FilmsCatalog.DAL.Models;
using FilmsCatalog.DAL.EF;
using Microsoft.EntityFrameworkCore;

namespace FilmsCatalog.DAL.Repositories
{
    public class FilmRepository
    {
        private FilmsCatalogContext db;

        public FilmRepository(FilmsCatalogContext context)
        {
            db = context;
        }

        public void Create(Film film)
        {
            db.Films.Add(film);
        }

        public Film Get(int id)
        {
            return db.Films.Find(id);
        }

        public IEnumerable<Film> GetAll()
        {
            return db.Films;
        }

        public void Update(Film film)
        {            
            db.Entry(film).State = EntityState.Modified;
        }

        public void Delete(Film film)
        {
            db.Entry(film).State = EntityState.Deleted;
        }
    }
}
