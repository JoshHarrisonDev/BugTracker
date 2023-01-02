using BugTracker.Common.Enums;
using BugTracker.Data.Enums;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.Common.Models
{
    public class IssueDto
    {
        public int Id { get; set; }

        public string Name { get; set; } = default!;

        public string Description { get; set; } = default!;

        public IssueStatus Status { get; set; }

        public IssueType IssueType { get; set; }
    }
}
