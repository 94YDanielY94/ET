import $ from "jquery";
import DataTable from "datatables.net-dt"; // Use the specific package name

// This line is often the missing link:
// It explicitly attaches DataTable to your jQuery instance
DataTable(window, $);

$(document).ready(function () {
  $(".dataframe").DataTable({
    responsive: true,
    filter: true,
    paging: true,
    info: false,
    pageLength: 10,
    autoFill: true,
    language: {
      search: " ",
      searchPlaceholder: "search...",
      lengthMenu: "Data preview",
      paginate: {
        first: "First",
        last: "Last",
        next: "Next",
        previous: "Previous",
      },
    },
  });
});

$(document).ready(function () {
  if (!$.fn.DataTable.isDataTable("#rankingTable")) {
    $("#rankingTable").DataTable({
      pageLength: 5, // Show only 5 at a time
      lengthChange: false, // Don't let user change to 10/25/50
      info: false, // Hide "Showing 1 of 5"
      dom: "frtp", // 'f' is search, 'r' processing, 't' table, 'p' pagination
      language: {
        search: "", // Remove the "Search:" label
        searchPlaceholder: "Search for a student...",
      },
    });
  }
});
