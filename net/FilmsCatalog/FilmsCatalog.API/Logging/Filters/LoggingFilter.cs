using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.API.Configuration.Filters
{
    public class LoggingFilter : IAsyncActionFilter
    {
        private ILogger _logger;

        public LoggingFilter(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger("LoggingFilter");
        }
        
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            //log layout cover all needed info  but logging method doen't contain overload without parameters
            _logger.LogInformation("");
            await next();
        }
    }
}
