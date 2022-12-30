using BugTracker.Common.Models;
using BugTracker.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BugTracker.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IProjectService _projectService;

        public ProjectController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpGet]
        [Route("GetProjects")]
        public async Task<List<Project>> GetProjects()
        {
            return await _projectService.GetAllProjects();
        }

        [HttpPost]
        [Route("CreateProject")]
        public async Task<ResponseModel<Project>> CreateProject(Project project)
        {
            try
            {
                var createdProject = await _projectService.AddProject(project);
                return new ResponseModel<Project> { Data = createdProject, StatusCode = System.Net.HttpStatusCode.Created, Message = "Project Created" };
                
            }
            catch (Exception e)
            {
                return new ResponseModel<Project> { StatusCode = System.Net.HttpStatusCode.BadRequest, Message = e.Message };
                throw;
            }
        }
    }
}
