/**
 * Display the list of members in the team
**/
$(document).ready(function() {
    $("#get-employees").click(function() {
    var displayResources = $("#show-employees");
    displayResources.text("Loading data from JSON source...");
    $.ajax({
          type: "GET",
          url: "https://api.myjson.com/bins/lixci", // Using our resources.json file to serve results
    success: function(result) {
    console.log(result);
    var output =
    "<table><thead><tr><th>Name</th><th>Title</th><th>Description</th></thead><tbody>";
    for (var i in result) {
              output +=
    "<tr><td>" +
                result[i].name +
    "</td><td>" +
                result[i].title +
    "</td><td>" +
                result[i].description +
    "</td></tr>";
            }
            output += "</tbody></table>";
    displayResources.html(output);
    $("table").addClass("table");
          }
        });
      });
    });