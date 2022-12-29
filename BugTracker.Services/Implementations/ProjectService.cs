using BugTracker.Common.Models;
using BugTracker.Data.Interfaces;
using BugTracker.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.Services.Implementations
{
    public class ProjectService : IProjectService
    {
        private readonly IProjectDataAccess _projectDataAccess;

        public ProjectService(IProjectDataAccess projectDataAccess)
        {
            _projectDataAccess = projectDataAccess;
        }

        public async Task AddProject(Project project)
        {
            await _projectDataAccess.AddProject(project);
        }

        public async Task<List<Project>> GetAllProjects()
        {
           return await _projectDataAccess.GetAllProjects();
        }

        public async Task<Project> GetProjectById(int id)
        {
            return await _projectDataAccess.GetProjectById(id);
        }

        public async Task RemoveProject(int id)
        {
            await _projectDataAccess.RemoveProject(id);
        }

        public async Task UpdateProject(Project project)
        {
            await _projectDataAccess.UpdateProject(project);
        }
    }
}
