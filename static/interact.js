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
    order: [[3, 'desc']],
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
            previous: "Previous"
        },
    },
   
  });
});
