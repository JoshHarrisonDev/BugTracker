using System.ComponentModel.DataAnnotations;

namespace BugTracker.Common.Models
{
    public class Project
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public virtual ICollection<Issue> Issues { get; set; }
    }
}
