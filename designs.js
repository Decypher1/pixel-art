// Select color input
// Select size input

// Defining the variables using let keyword 
let gridHeight, gridWidth;

function makeGrid(a, b) {

    //Your code goes here!   
    let table = $("#pixelCanvas");
    table.empty();

    for (let x = 1; x <= a; x++) {
        table.append("<tr id = tableRow" + x + "></tr>");
        for (let y = 1; y <= b; y++) {
            $("#tableRow" + x).append("<td></td>");
        }
    }


    // Color gotten from the user input
    let tableData = $("td");

    tableData.click(function() {
        let pickedColor = $("#colorPicker").val();

        if ($(this).attr("style")) {
            $(this).removeAttr("style")
        } else {
            $(this).attr("style", "background-color:" + pickedColor);
        }
    });
}

/* When size is submitted by the user, call makeGrid()
   And event.preventDefault in other to prevent the default values from being submitted
   when the user inputs new values*/

$("#sizePicker").click("submit", function(event) {
  event.preventDefault();
  gridHeight = $("#inputHeight").val();
  gridWidth = $("#inputWidth").val();
  makeGrid(gridHeight, gridWidth);
});


