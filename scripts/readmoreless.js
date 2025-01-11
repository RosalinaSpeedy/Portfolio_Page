//grabs every button from the DOM and stores them in a variable
var buttons = document.getElementsByClassName("readMore");
//cycles through every button and applies the show/hide function to each
for (let i = 0; i < buttons.length; i++) {
    //adds a click event listener to the button to pass the ID of the button element into the function
    buttons[i].addEventListener("click", function() {
        showTextHideText(buttons[i].id)
    });
}

//baseline for code taken from the following URL and then adapted to meet my needs (adapting the code to handle 3 buttons rather than just one):

//W3Schools, 'How TO - Read More Read Less Button', [Online], Available: https://www.w3schools.com/howto/howto_js_read_more.asp [Accessed: 5-Dec-2022]

function showTextHideText(id) {
    //sets the current button being accessed to a useless
    //value in the variable "index"
    var index = -1;
    //changes the index according to the ID passed into the function
    switch (id) {
    case "readMore1":
        index = 0;
        break;
    case "readMore2":
        index = 1;
        break;
    case "readMore3":
        index = 2;
        break;
    }
    
    //grabs the ellipsis at the end of the paragraph from the DOM
    //and stores it in the "ellipsis" variable so it can be hidden/shown
    var ellipsis = document.getElementsByClassName("readMoreEllipsis");
    //grabs the end of the paragraph from the DOM and stores it
    //in the "continuedText" variable so it can be hidden/shown
    var continuedText = document.getElementsByClassName("readMoreContinued");
    //grabs the button from the DOM and stores it
    //in the "buttonText" variable so the text on it can change
    var buttonText = document.getElementsByClassName("readMore");
    //whether the ellipsis is displayed or not - the elements are affected
    //differently - shown or hidden
    if (ellipsis[index].style.display == "none") {
        //hide the end of the paragraph:
        //set the ellipsis to be displayed
        ellipsis[index].style.display = "inline";
        //changes the text on the button to "Read more..."
        buttonText[index].innerHTML = "Read more...";
        //hide the end of the paragraph
        continuedText[index].style.display = "none";
    }
    else {
        //show the end of the paragraph:
        //hide the ellipsis:
        ellipsis[index].style.display = "none";
        //change the text on the button to "Read less..."
        buttonText[index].innerHTML = "Read less...";
        //Show the end of the paragraph
        continuedText[index].style.display = "inline";
    }
}