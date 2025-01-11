//adds a scroll event listener so code is fired one the page is scrolled - ties this to the onScroll() function
document.addEventListener('scroll', onScroll);

//baseline for code taken from the following URL and then adapted to meet my needs (added uppoer and lower thresholds and changed styling to better suit the needs of my webpage - also wrote the methods for hiding and showing the navbar):

//Matthijs, 'Header that appears after scrolling down the page', 2016, [Online], Available: https://stackoverflow.com/questions/35941535/header-that-apears-after-scrolling-down-the-page [Accessed: 2-Dec-2022]

//gets the current scroll level of the page and determines whether
//to show or hide the navbar
function onScroll() {
    //declares a variable that is equal to the current scroll level of the page
    var scrollPos = window.scrollY;
    //determines the lower threshold for hiding the navbar
    //- the navbar is only hidden after 90 units of scroll
    var scrollThresholdLower = 90;
    //if the scroll position is below the upper limit (here as 300)
    //and above the lower threshold (90) then the navbar gets hidden
    if ((scrollPos <= scrollThresholdLower || scrollPos < 1) || scrollPos > 300) {
        showNavBar();
    } else { //otherwise the navbar is visible
        hideNavBar();
    }
}

//function for making the navbar disappear
function hideNavBar() {
    //grabs the navbar by it's ID from the DOM and stores it in a variable
    var nav = document.getElementById('aboutScroll');
    //hides the navbar and sets its opacity to 0 to ensure the
    //transition works as intended and it fades out
    nav.style.visibility = 'hidden';
    nav.style.opacity = 0;
}

//function for making the navbar visible
function showNavBar() {
    //grabs the navbar by it's ID from the DOM and stores it in a variable
    var nav = document.getElementById('aboutScroll');
    //shows the navbar and sets its opacity to 1 to ensure the
    //transition works as intended and it fades into view
    nav.style.visibility = 'visible';
    nav.style.opacity = 1;
}

//ensures that the onscroll event for the entire page fires the onScroll() function
document.getElementsByTagName('html').onscroll = onScroll;