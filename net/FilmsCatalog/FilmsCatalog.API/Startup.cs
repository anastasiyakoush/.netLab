﻿using AutoMapper;
using FilmsCatalog.API.Configuration.Filters;
using FilmsCatalog.API.Configuration.Profiles;
using FilmsCatalog.API.Logging.Filters;
using FilmsCatalog.BLL.Core.Configuration.Profiles;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using NLog.Extensions.Logging;

namespace FilmsCatalog.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddFluentValidation();

           
            services.AddAutoMapper(cfg =>
            {
                cfg.AddProfile<FilmProfile>();
                cfg.AddProfile<BLLFilmProfile>();
            },
           typeof(BLLFilmProfile), typeof(FilmProfile)
           );

            services.AddScoped<LoggingFilter>();
            services.AddScoped<ExceptionFilter>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseDeveloperExceptionPage();

            app.UseHttpsRedirection();
            app.UseMvc();

            //Logging and added UseNLog to Program.cs
            loggerFactory.AddNLog();
        }
    }
}
