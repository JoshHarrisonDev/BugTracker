using Microsoft.EntityFrameworkCore;

namespace BugTracker.Common.Models
{
    public class BugTrackerContext : DbContext
    {
        public BugTrackerContext(DbContextOptions<BugTrackerContext> options) : base(options) { }

        public DbSet<Issue> Issues { get; set; }

        public DbSet<Project> Projects { get; set; }

    }
}
