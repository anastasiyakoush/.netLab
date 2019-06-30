using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using AutoMapper;
using FluentValidation;
using FluentValidation.AspNetCore;
using FilmsCatalog.API.Configuration.Filters;
using FilmsCatalog.API.Configuration.Profiles;
using FilmsCatalog.API.Logging.Filters;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.Configuration.Profiles;
using FilmsCatalog.DAL.EF.EF;
using Microsoft.EntityFrameworkCore;
using FilmsCatalog.DAL.Core.Interfaces;
using FilmsCatalog.API.Validators;
using FilmsCatalog.BLL.Services;
using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.DAL.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using FilmsCatalog.Core.Configuration;
using FilmsCatalog.BLL.Core.Interfaces;

namespace FilmsCatalog.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            AppConfiguration appConfiguration = new AppConfiguration(Configuration);
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            //services for mvc and api model validation
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<FilmModelValidator>());
            services.AddTransient<IValidator<FilmModel>, FilmModelValidator>();
            services.AddTransient<IValidator<RegisterUserModel>, RegisterUserModelValidator>();
            services.AddTransient<IValidator<LoginModel>, LoginModelValidator>();

            //services for context and films table
            services.AddDbContext<FilmsCatalogContext>(options => options.UseSqlServer(AppConfiguration.ConnectionString));
            services.AddTransient<IUnitOfWork, UnitOfWork>();

            //services
            services.AddTransient<IFilmService, FilmService>();
            services.AddTransient<ICommentService, CommentService>();
            services.AddTransient<IRatingService, RatingService>();
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IImageService, ImageService>();

            //services for identity
            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<FilmsCatalogContext>()
                .AddDefaultTokenProviders();

            //add authentication
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = false;
                    options.SaveToken = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(AppConfiguration.Secret),
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true
                    };
                });
            services.AddTransient<IAccountService, AccountService>();


            //mapping
            services.AddAutoMapper(cfg =>
            {
                cfg.AddProfile<FilmProfile>();
                cfg.AddProfile<UserProfile>();
                cfg.AddProfile<RatingProfile>();
                cfg.AddProfile<BLLFilmProfile>();
                cfg.AddProfile<BLLUserProfile>();
                cfg.AddProfile<BLLCommentProfile>();
                cfg.AddProfile<BLLRatingProfile>();
            },
           typeof(BLLFilmProfile), typeof(FilmProfile)
           );

            //services for loggers
            services.AddScoped<LoggingFilter>();
            services.AddScoped<ExceptionFilter>();
            //for appConfiguration class
            services.AddSingleton<IConfiguration>(Configuration);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseCors(x=>x.AllowAnyOrigin());
            app.UseDeveloperExceptionPage();
            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
