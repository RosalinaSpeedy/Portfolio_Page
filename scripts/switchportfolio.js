//function to display the Java grid:
function switchJavaLinks() {
    //grabs the full grid from the DOM and stores it in the 'fullGrid' variable
    var fullGrid = document.getElementsByClassName('fullGrid');
    //sets the grid to be invisible and reduces the width and height so as to
    //not affect positioning of other elements:
    fullGrid[0].style.display = 'none';
    fullGrid[0].style.width = 0;
    fullGrid[0].style.height = 0;
    //grabs the JavaScript from the DOM and stores it in the 'JSGrid' variable
    var JSGrid = document.getElementsByClassName('JSGrid');
    JSGrid[0].style.display = 'none';
    //sets the grid to be invisible and reduces the width and height so as to
    //not affect positioning of other elements:
    JSGrid[0].style.width = 0;
    JSGrid[0].style.height = 0;
    //grabs the HTML grid from the DOM and stores it in the 'HTMLGrid' variable
    var HTMLGrid = document.getElementsByClassName('HTMLGrid');
    HTMLGrid[0].style.display = 'none';
    //sets the grid to be invisible and reduces the width and height so as to
    //not affect positioning of other elements:
    HTMLGrid[0].style.width = 0;
    HTMLGrid[0].style.height = 0;
    //grabs the Java grid from the DOM and stores it in the 'fullGrid' variable
    var javaGrid = document.getElementsByClassName('JavaGrid');
    //sets the display to 'grid' and adjust the width and
    //height so the images fit:
    javaGrid[0].style.display = 'grid';
    javaGrid[0].style.width = '100%';
    javaGrid[0].style.height = '48.2%';
    //grabs the dropdown button from the DOM and stores it in
    //the 'buttonText' variable
    var buttonText = document.getElementsByClassName('dropDownButton');
    //changes the text of the button and adds an arrow using the <i> element
    buttonText[0].innerHTML = 'Java<i class="dropArrow"></i>';
    //grabs the arrow in the button from the DOM and stores it in the
    //'arrowAdjust' variable:
    var arrowAdjust = document.getElementsByClassName('dropArrow');
    //adjusts the left margin of the arrow to ensure the button remains a decent
    //size after the text gets changed.
    arrowAdjust[0].style.marginLeft = "9.75rem";
}

//the functions for switching the other grids follow a similar proess while
//changing the grid that is affected and shifting the arrow by different amounts:

//function for switching to the JavaScript grid
function switchJavascriptLinks() {
    var fullGrid = document.getElementsByClassName('fullGrid');
    fullGrid[0].style.display = 'none';
    fullGrid[0].style.width = 0;
    fullGrid[0].style.height = 0;
    var JSGrid = document.getElementsByClassName('JSGrid');
    JSGrid[0].style.display = 'grid';
    JSGrid[0].style.width = '100%';
    JSGrid[0].style.height = '100%';
    var HTMLGrid = document.getElementsByClassName('HTMLGrid');
    HTMLGrid[0].style.display = 'none';
    HTMLGrid[0].style.width = 0;
    HTMLGrid[0].style.height = 0;
    var javaGrid = document.getElementsByClassName('JavaGrid');
    javaGrid[0].style.display = 'none';
    javaGrid[0].style.width = 0;
    javaGrid[0].style.height = 0;
    var buttonText = document.getElementsByClassName('dropDownButton');
    buttonText[0].innerHTML = 'Javascript<i class="dropArrow"></i>';
    var arrowAdjust = document.getElementsByClassName('dropArrow');
    arrowAdjust[0].style.marginLeft = "6.6rem";
}

//function for switching to the HTML grid
function switchHTMLLinks() {
    var fullGrid = document.getElementsByClassName('fullGrid');
    fullGrid[0].style.display = 'none';
    fullGrid[0].style.width = 0;
    fullGrid[0].style.height = 0;
    var JSGrid = document.getElementsByClassName('JSGrid');
    JSGrid[0].style.display = 'none';
    JSGrid[0].style.width = 0;
    JSGrid[0].style.height = 0;
    var HTMLGrid = document.getElementsByClassName('HTMLGrid');
    HTMLGrid[0].style.display = 'grid';
    HTMLGrid[0].style.width = '100%';
    HTMLGrid[0].style.height = '100%';
    var javaGrid = document.getElementsByClassName('JavaGrid');
    javaGrid[0].style.display = 'none';
    javaGrid[0].style.width = 0;
    javaGrid[0].style.height = 0;
    var buttonText = document.getElementsByClassName('dropDownButton');
    buttonText[0].innerHTML = 'HTML<i class="dropArrow"></i>';
    var arrowAdjust = document.getElementsByClassName('dropArrow');
    arrowAdjust[0].style.marginLeft = "8.9rem";
}

//function for switching to the full grid
function switchFullGrid() {
    var fullGrid = document.getElementsByClassName('fullGrid');
    fullGrid[0].style.display = 'grid';
    fullGrid[0].style.width = '100%';
    fullGrid[0].style.height = '48.2%';
    var JSGrid = document.getElementsByClassName('JSGrid');
    JSGrid[0].style.display = 'none';
    JSGrid[0].style.width = 0;
    JSGrid[0].style.height = 0;
    var HTMLGrid = document.getElementsByClassName('HTMLGrid');
    HTMLGrid[0].style.display = 'none';
    HTMLGrid[0].style.width = 0;
    HTMLGrid[0].style.height = 0;
    var javaGrid = document.getElementsByClassName('JavaGrid');
    javaGrid[0].style.display = 'none';
    javaGrid[0].style.width = 0;
    javaGrid[0].style.height = 0;
    var buttonText = document.getElementsByClassName('dropDownButton');
    buttonText[0].innerHTML = 'All Platforms<i class="dropArrow"></i>';
    var arrowAdjust = document.getElementsByClassName('dropArrow');
    arrowAdjust[0].style.marginLeft = "5rem";
}

//grabs the dropdown list choices from the DOM and assigns the
//appropriate grid switch functions to them according to the
//'onclick' event:
document.getElementById('dropJava').onclick = switchJavaLinks;
document.getElementById('dropJavascript').onclick = switchJavascriptLinks;
document.getElementById('dropHTML').onclick = switchHTMLLinks;
document.getElementById('dropAll').onclick = switchFullGrid;

//runs the function to switch to the full grid upon loading the script
//so as to display the full grid to the user upon first loading the page
switchFullGrid();