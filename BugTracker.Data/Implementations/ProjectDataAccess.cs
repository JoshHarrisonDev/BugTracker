using BugTracker.Common.Models;
using BugTracker.Data.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.Data.Implementations
{
    public class ProjectDataAccess : IProjectDataAccess
    {
        private readonly BugTrackerContext _context;

        public ProjectDataAccess(BugTrackerContext context)
        {
            _context = context;
        }

        public async Task<Project> AddProject(Project project)
        {
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();
            return project;
        }

        public async Task<List<Project>> GetAllProjects()
        {
            var projects = await _context.Projects.Select(p => new Project
            {
                Name = p.Name,
                Description = p.Description,
                Id = p.Id,
                IssueCount = p.Issues.Count()
            }).ToListAsync();
            return projects;
        }

        public async Task<Project> GetProjectById(int id)
        {
            return await _context.Projects.FirstAsync(p => p.Id == id);
        }

        public async Task RemoveProject(int id)
        {

            _context.Projects.Remove(_context.Projects.Single(p => p.Id == id));
            await _context.SaveChangesAsync();
        }

        public async Task UpdateProject(Project project)
        {
            _context.Projects.Update(project);
            await _context.SaveChangesAsync();
        }
    }
}
