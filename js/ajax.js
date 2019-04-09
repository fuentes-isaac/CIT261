/**
 * Display the list of members in the team
**/
$(document).ready(function() {
    // Uses the get-employees id to trigger the function
    $("#get-employees").click(function() {
    /*Creates a variable that will target the id show-employees in the 
    document to build the table and display the results*/     
    var displayResources = $("#show-employees");
    displayResources.text("Loading data from JSON source...");

    // Uses the GET HTTP request from a specific URL where Json file is located
    $.ajax({
          type: "GET",
          url: "https://api.myjson.com/bins/lixci", 

    // Upon success created the table and loads the data from json file.
    // It will loop through each element in the array and will add it accordingly    
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