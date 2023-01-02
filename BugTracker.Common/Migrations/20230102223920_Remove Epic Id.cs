using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BugTracker.Common.Migrations
{
    /// <inheritdoc />
    public partial class RemoveEpicId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "EpicId",
                table: "Issues",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EpicId",
                table: "Issues");
        }
    }
}
