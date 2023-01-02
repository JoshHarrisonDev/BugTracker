using BugTracker.Common.Models;
using BugTracker.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace BugTracker.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IssueController : ControllerBase
    {
        private readonly IIssueService _issueService;

        public IssueController(IIssueService issueService)
        {
            _issueService = issueService;
        }

        [HttpGet]
        [Route("GetIssuesForProject")]
        public async Task<ResponseModel<List<IssueDto>>> GetIssuesForProjects(int projectId)
        {
            return new ResponseModel<List<IssueDto>>
            {
                Data = await _issueService.GetIssuesForProject(projectId),
                StatusCode = HttpStatusCode.OK,
            };
            
        }

        [HttpPost]
        [Route("CreateIssueForProject/{projectId}")]
        public async Task<ResponseModel<bool>> CreateIssueForProject(IssueDto issue, int projectId)
        {
            var isIssueCreated = await _issueService.CreateIssue(issue, projectId);
            return new ResponseModel<bool>
            {   
                Data = isIssueCreated,
                StatusCode = isIssueCreated ? HttpStatusCode.OK : HttpStatusCode.BadRequest,
                Message = isIssueCreated ? issue.Name : string.Empty
            };
        }
    }
}
