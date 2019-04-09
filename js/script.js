/**
 * MAIN NAVIGATION MENU
**/


//funtion check on an element toa ttach to the event listener, the type
//for thw event type to listen like load, click and callback the function
//that received the notification.

 function addListener(element, type, callback) {
  if (element.addEventListener) {
      element.addEventListener(type, callback);
  } else if (element.attachEvent) {
      element.attachEvent('on' + type, callback);
  }
}

//Check if documented has been completely loaded and parsed without having to wait
//for stylesheets or images to complete the load.

addListener(document, 'DOMContentLoaded', function () {

//Check if the screen has at least 760 pixel wide.
//Hide the elementId menu_list
  
  var mq = window.matchMedia("(max-width: 760px)");
  if (mq.matches) {
      document.getElementById("menu_list").classList.add("hidden");
  }

// use the toggle to alternate between hidden class or not.

  addListener(document.getElementById("menu_button"), 'click', function () {
      document.getElementById("menu_list").classList.toggle("hidden");
  });
  
  addListener(window, 'resize', function () {
      var width = window.innerWidth ||
                  document.documentElement.clientWidth ||
                  document.body.clientWidth;
      
      if (width > 760) {
          document.getElementById("menu_list").classList.remove("hidden");
      } else {
          document.getElementById("menu_list").classList.add("hidden");
      }
  });
  
});

/**
 * Display the Prices Table using onclick 
**/

function GetPricesTable() {
  //Array of services available and prices.
  var servicesPrice = new Array();
  servicesPrice.push(["Service", "Description", "Price"]);
  servicesPrice.push(["Man Haircut", "A drink and a good haircut", "$120"]);
  servicesPrice.push(["Kids Haircut", "Modern kid haircut", "$100"]);
  servicesPrice.push(["Beard and Mustache", "Clean and nice trimer", "$150"]);
  servicesPrice.push(["Facial Exfolation", "A good face cleanup service", "$250"]);

  //Creates a HTML TABLE
  var table = document.createElement("TABLE");
  table.border = "1";

  //Check the count of the columns
  var columnCount = servicesPrice[0].length;

  //Variable to add the header for each column
  var row = table.insertRow(-1);
  for (var i = 0; i < columnCount; i++) {
      var headerCell = document.createElement("TH");
      headerCell.innerHTML = servicesPrice[0][i];
      row.appendChild(headerCell);
  }

  //loops throug the arry and displays the information in the table
  for (var i = 1; i < servicesPrice.length; i++) {
      row = table.insertRow(-1);
      for (var j = 0; j < columnCount; j++) {
          var cell = row.insertCell(-1);
          cell.innerHTML = servicesPrice[i][j];
      }
  }

  //display the information as a table using the ID of the HTML element
  //using the appendChild element to create the table.

  var dvTable = document.getElementById("pricesTable");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);
}


/**
 * Display the Canvas with promotion.
**/

//function to build a canvas and display text inside with promotion render in 2D
function titleCanvas(){
  var canvas = document.getElementById("mainText"),
  promotion = canvas.getContext("2d");

  //whre the text is going to start moving to the right
  var start = -300;
  setInterval(function(){

  //moving velocity to the right.
  start += 2;

  //backgroung of the canvas
  promotion.fillStyle = "gray";
  promotion.fillRect(0, 0, canvas.width, canvas.height);

  //text for the canvas 
  promotion.fillStyle = "white";
  promotion.font = "30px Arial";
  promotion.fillText("10% Man Haircut", start, 70);

  }, 40);
  }

/**
 * Funtions to change CSS style depending on users selection.
**/

function saveInfo(){
  var value = document.getElementById('Firstname').value;
alert ('Thank you for Registering' + ' ' + value);
}

function smallStyle() {
  document.getElementById("ser_bund").style.color = "#001064";
  document.getElementById("list_ser_bund").style.color = "#001064";
  document.getElementById("list_style").style.color = "#001064";
  document.getElementById("ser_bund").style.font = "italic bold 15px tahoma";
  document.getElementById("list_ser_bund").style.font = "italic bold 10px tahoma";
  document.getElementById("list_style").style.font = "italic bold 8px tahoma";
}

function mediumStyle() {
  document.getElementById("ser_bund").style.color = "#76ff03";
  document.getElementById("list_ser_bund").style.color = "#76ff03";
  document.getElementById("list_style").style.color = "#76ff03";
  document.getElementById("ser_bund").style.font = "italic bold 25px Courier";
  document.getElementById("list_ser_bund").style.font = "italic bold 20px Courier";
  document.getElementById("list_style").style.font = "italic bold 18px Courier";
}

function largeStyle() {
  document.getElementById("ser_bund").style.color = "#ff5bff";
  document.getElementById("list_ser_bund").style.color = "#ff5bff";
  document.getElementById("list_style").style.color = "#ff5bff";
  document.getElementById("ser_bund").style.font = "italic bold 55px Verdana";
  document.getElementById("list_ser_bund").style.font = "italic bold 40px Verdana";
  document.getElementById("list_style").style.font = "italic bold 38px Verdana";
}

function crazyStyle() {
  document.getElementById("ser_bund").style.color = "#ff6f00";
  document.getElementById("list_ser_bund").style.color = "#00c853";
  document.getElementById("list_style").style.color = "#f50057";
  document.getElementById("ser_bund").style.font = "bold 25px Tahoma";
  document.getElementById("list_ser_bund").style.font = "italic bold 35px Courier";
  document.getElementById("list_style").style.font = "italic 29px Verdana";
}










