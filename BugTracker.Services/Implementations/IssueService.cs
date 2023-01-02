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
    public class IssueService : IIssueService
    {
        private readonly IIssueDataAccess _issueDataAccess;

        public IssueService(IIssueDataAccess issueDataAccess)
        {
            _issueDataAccess = issueDataAccess;
        }

        public async Task<bool> CreateIssue(IssueDto issueDto, int projectid)
        {
           var issue = await _issueDataAccess.CreateIssue(new Issue
            {
                Description = issueDto.Description,
                Id = issueDto.Id,
                IssueType = issueDto.IssueType,
                Name = issueDto.Name,
                ProjectId = projectid,
                Status = issueDto.Status,
            });

            if(issue is not null)
            {
                return true;
            }

            return false;
        }

        public async Task<List<IssueDto>> GetIssuesForProject(int projectId)
        {
            var issues = await _issueDataAccess.GetIssuesForProject(projectId);

            var issuesDto = issues.Select(x => new IssueDto
            {
                Description = x.Description,
                Id = x.Id,
                Name = x.Name,
                Status = x.Status,
                IssueType = x.IssueType,

            });

            return issuesDto.ToList();
        }
    }
}
