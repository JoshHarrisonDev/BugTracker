using Azure;
using BugTracker.Common.Models;
using BugTracker.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

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
        public async Task<ResponseModel<List<Project>>> GetProjects()
        {
            var projects = await _projectService.GetAllProjects();
            return new ResponseModel<List<Project>>
            {
                Data = projects,
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        [Route("CreateProject")]
        public async Task<ResponseModel<Project>> CreateProject(Project project)
        {
            try
            {
                var createdProject = await _projectService.AddProject(project);
                return new ResponseModel<Project>
                {
                    Data = createdProject,
                    StatusCode = HttpStatusCode.Created,
                    Message = "Project Created"
                };
            }
            catch (Exception e)
            {
                return new ResponseModel<Project>
                {
                    StatusCode = HttpStatusCode.BadRequest,
                    Message = e.Message
                };

            }
        }

        [HttpDelete]
        [Route("DeleteProject/{id}")]
        public async Task<ResponseModel<int>> DeleteProject(int id)
        {
            try
            {
                await _projectService.RemoveProject(id);
                return new ResponseModel<int>
                {
                    Data = id,
                    StatusCode = HttpStatusCode.NoContent,
                };
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet]
        [Route("GetProject/{id}")]
        public async Task<ResponseModel<Project>> GetProject(int id)
        {
            var project = await _projectService.GetProjectById(id);
            if (project is not null)
            {
                return new ResponseModel<Project>
                {
                    Data = await _projectService.GetProjectById(id),
                    StatusCode = HttpStatusCode.OK
                };
            }
            else
            {
                return new ResponseModel<Project>
                {
                    StatusCode = HttpStatusCode.NotFound,
                    Message = $"Project with id:{id} could not be found"
                };
            }

        }
    }
}
