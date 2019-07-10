using Microsoft.EntityFrameworkCore.Migrations;

namespace FilmsCatalog.DAL.EF.Migrations
{
    public partial class Changeratingtypetodouble : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "Rate",
                table: "Ratings",
                nullable: false,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Rate",
                table: "Ratings",
                nullable: false,
                oldClrType: typeof(double));
        }
    }
}
