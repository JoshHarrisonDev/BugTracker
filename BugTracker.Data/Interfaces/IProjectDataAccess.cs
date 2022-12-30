using BugTracker.Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.Data.Interfaces
{
    public interface IProjectDataAccess
    {
        Task<Project> AddProject(Project project);

        Task RemoveProject(int id);

        Task<List<Project>> GetAllProjects();

        Task<Project> GetProjectById(int id);

        Task UpdateProject(Project project);
    }
}
