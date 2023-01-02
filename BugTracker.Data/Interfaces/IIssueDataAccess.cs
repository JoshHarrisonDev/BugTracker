using BugTracker.Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.Data.Interfaces
{
    public interface IIssueDataAccess
    {
        Task<List<Issue>> GetIssuesForProject(int projectId);

        Task<Issue> CreateIssue(Issue issue);
    }
}
