using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BugTracker.Common.Migrations
{
    /// <inheritdoc />
    public partial class ChangeIssuetouseIssueTypeEnum : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Issues_Issues_EpicId",
                table: "Issues");

            migrationBuilder.DropIndex(
                name: "IX_Issues_EpicId",
                table: "Issues");

            migrationBuilder.DropColumn(
                name: "EpicId",
                table: "Issues");

            migrationBuilder.AddColumn<int>(
                name: "IssueType",
                table: "Issues",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IssueType",
                table: "Issues");

            migrationBuilder.AddColumn<int>(
                name: "EpicId",
                table: "Issues",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Issues_EpicId",
                table: "Issues",
                column: "EpicId");

            migrationBuilder.AddForeignKey(
                name: "FK_Issues_Issues_EpicId",
                table: "Issues",
                column: "EpicId",
                principalTable: "Issues",
                principalColumn: "Id");
        }
    }
}
