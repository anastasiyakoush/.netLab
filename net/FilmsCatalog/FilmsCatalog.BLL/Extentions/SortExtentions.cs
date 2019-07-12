using FilmsCatalog.Core.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace FilmsCatalog.BLL.Extentions
{
    public static class SortExtentions
    {
        private static bool IsOrdered<T>(this IQueryable<T> queryable)
        {
            return queryable.Expression.Type == typeof(IOrderedQueryable<T>);
        }

        public static IQueryable<T> SortBy<T, TKey>(this IQueryable<T> queryable, Expression<Func<T, TKey>> expression, SortTypesEnum type)
        {
            if (IsOrdered<T>(queryable))
            {
                
                switch (type)
                {
                    case SortTypesEnum.Asc:
                        {
                            return orderedQueryOrderBy().ThenBy(expression);
                        }
                    case SortTypesEnum.Desc:
                        {
                            return orderedQuery.ThenByDescending(expression);
                        }
                }
            }
            else
            {
                switch (type)
                {
                    case SortTypesEnum.Asc:
                        {
                            return queryable.OrderBy(expression);
                        }
                    case SortTypesEnum.Desc:
                        {
                            return queryable.OrderBYDescen(expression);
                        }
                }
            }
        }
    }
}
