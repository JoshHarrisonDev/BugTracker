using BugTracker.Common.Enums;
using BugTracker.Data.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BugTracker.Common.Models
{
    public class Issue
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; } = default!;

        public string Description { get; set; } = default!;

        public IssueStatus Status { get; set; }

        public virtual Project Project { get; set; } = default!;

        public int EpicId { get; set; }

        public int ProjectId { get; set; }

        public IssueType IssueType { get; set; }






    }
}
