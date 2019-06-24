using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.API.Logging.Filters
{
    public class ExceptionFilter : IExceptionFilter
    {
        private ILogger logger;
        public ExceptionFilter(ILoggerFactory loggerFactory)
        {
            logger = loggerFactory.CreateLogger("ExceptionFilter");
        }

        public void OnException(ExceptionContext context)
        {
            logger.LogError(context.Exception,"");
            context.ExceptionHandled = true;
        }
    }
}
