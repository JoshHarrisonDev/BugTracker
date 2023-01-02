using BugTracker.Common.Models;
using BugTracker.Data.Implementations;
using BugTracker.Data.Interfaces;
using BugTracker.Services.Implementations;
using BugTracker.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<BugTrackerContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("BugTracker")));
builder.Services.AddScoped<IProjectDataAccess, ProjectDataAccess>();
builder.Services.AddScoped<IProjectService, ProjectService>();
builder.Services.AddScoped<IIssueDataAccess, IssueDataAccess>();
builder.Services.AddScoped<IIssueService, IssueService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("Policy", policy => { policy.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod(); });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("Policy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
