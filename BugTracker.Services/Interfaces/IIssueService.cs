using BugTracker.Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.Services.Interfaces
{
    public interface IIssueService
    {
        Task<List<IssueDto>> GetIssuesForProject(int projectId);

        Task<bool> CreateIssue(IssueDto issueDto, int projectId);
    }
}
