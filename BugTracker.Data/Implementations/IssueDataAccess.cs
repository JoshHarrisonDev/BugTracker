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
    public class IssueDataAccess : IIssueDataAccess
    {
        private readonly BugTrackerContext _context;

        public IssueDataAccess(BugTrackerContext context)
        {
            _context = context;
        }

        public async Task<Issue> CreateIssue(Issue issue)
        {
            _context.Add(issue);
            await _context.SaveChangesAsync();
            return issue;
        }

        public async Task<List<Issue>> GetIssuesForProject(int projectId)
        {
            return await _context.Issues.Where(x => x.ProjectId == projectId).ToListAsync();
        }




    }
}
