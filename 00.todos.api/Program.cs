using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace todos.api
{
    public class Program
    {
        public static async Task<int> Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            try
            {
                using (var scope = host.Services.CreateScope())
                {
                    var context = scope.ServiceProvider.GetRequiredService<MainDbContext>();
                    await context.Database.MigrateAsync();
                }

                await host.RunAsync();
            }
            catch (Exception e)
            {
                return 1;
            }

            return 0;
        }

        private static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });
    }
}