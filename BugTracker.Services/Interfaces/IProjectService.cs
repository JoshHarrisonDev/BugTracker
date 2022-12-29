using BugTracker.Common.Models;

namespace BugTracker.Services.Interfaces
{
    public interface IProjectService
    {
        Task AddProject(Project project);

        Task RemoveProject(int id);

        Task<List<Project>> GetAllProjects();

        Task<Project> GetProjectById(int id);

        Task UpdateProject(Project project);
    }
}
