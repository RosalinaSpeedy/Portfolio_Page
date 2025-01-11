/*baseline for pop-up window handling taken from the following URL and then adapted to meet my needs (code adjusted to deal with transitions and change message, title and image of window according to the button pressed by passing the html ID of the element clicked):*/
/*W3Schools, 'How TO - Overlay', [Online], Available: https://www.w3schools.com/howto/howto_css_overlay.asp [Accessed: 2022]*/

//Defines the paragraphs for the pop-up windows in an object
var popupBodies = {
    eLink1: '"My name is Kobina and I run the Kobby Corperation - we specialise in creating applications that make computer case fans run slightly quiter. Ben worked with us on a project called "CaseSilent" which is an application designed to eradicate noisy desktops for good in the workplace. Ben managed to create a simple but effective solution which involved some software that completely stopped the fans from spinning. Granted, it resulted in 17 test computers overheating and 56 melted front-panel connectors but it is really the results that count. Would highly recommend!"',
    
    eLink2: '"My name is Fred and I am the owner of the Freddy Foundation. Our company always strives for more money than we previously had and therefore Ben was an asset to our "profitHere" project. Ben came up with a brilliant solution to alter our current front-end services to forcefully display as many adverts as possible to any users that visited our sites. Therefore, we could maximise profits entirely. As a money-lover: could not recommend highly enough."',
    
    eLink3: '"Ben coded me this little bot that turned all the pictures on my mate Gazza' + "'" + 's work profile account into pictures of this weird-looking sheep we found on the internet it was well funny."',
    
    JavaLink1: "SwirlyWirly was an application designed to make all visuals on screen swirl in an unnatural and nauseating manner. I was tasked with the server-side programming, but it was only upon completion and budget depletion that we realised, as a team, that the application was entirely useless.",
    
    JavaLink2: "Floppy Squares was an application designed to display a series of floppy squares all over the screen. I was tasked with the Java side of things, despite the project falling through when no one on the team could agree what a 'floppy square' actually was, I gained valuable experience from this project.",
    
    JavaLink3: "Adder was an advanced Java program of my own creation that is intended to add two numbers together. Despite it's limited use due to every modern calculator having this function and more, I am proud to say I figured it out myself.",
    
    JavaLink4: "Silkweb was a Java-based project to allow users to create their very own 'digital spiders'. The project was enriching and very beneficial for my Java skills, however never reached full completion due to an oversight in the team where the reality is that people don't like spiders very much.",
    
    JavaLink5: "Cheesegrater was by far my most challenging Java project to date. It is a program with the complex function of providing users with a digital cheesegrater - the company I worked for on this project claims the application will be worth billions once a practical use is found for digital cheese to be grated.",
    
    HTMLLink1: "Purble was a web project where I was in charge of layout and HTML. It is a page displaying lots of purple things and I don't really know what I was doing to be fully honest I got fired from this one on my fourth day. But I needed nine squares to make the page look nice.",
    
    HTMLLink2: "GreyGrid was a simple web project with lots of applicable uses - I was in charge of layouting and HTML. It would allow users to arrange their own photos and images into collages and grids. I just fumbled my way through the entire project but my boss was satisfied so it turned out ok in the end.",
    
    JSLink1: "I was tasked with handling client-side processing on 'The Black Spot' - a web project that was intended to psychologiclly torment those that visited it with nightmares of Davy Jones. Unfortunately the website had to be pulled because Davy Jones is really scary and the majority of the team could not continue development.",
    
    JSLink2: "This was supposed to be a search engine but only for information on glasses and other eyewear - for which I was in charge of JavaScript. The project nearly reached completion, when the CEO of the company halted development when he realised that most modern search engines could just do everything our site could do and better.",
    
    social1: "Social media page coming soon!",
    
    social2: "Social media page coming soon!"
}

//Defines the titles for the pop-up windows in an object
var popupTitles = {
    eLink1: "KOBINA",
    eLink2: "FREDDY",
    eLink3: "MONTGOMERY IGNATIUS",
    pLink1: "SWIRLYWIRLY",
    pLink2: "FLOPPY SQUARES",
    pLink3: "ADDER",
    pLink4: "SILKWEB",
    pLink5: "CHEESEGRATER",
    pLink6: "PURBLE",
    pLink7: "GREYGRID",
    pLink8: "THE BLACK SPOT",
    pLink9: "GOGGLES",
    social1: "COMING SOON!",
    social2: "COMING SOON!"
}

//function to configure and display the corresponding overlay according
//to the ID passed into the function
function showPopUp(idVal) {
    //removes any trace of "FG" from the passed ID should the pop-up come from
    //the full portfolio grid and therefore have FG in its ID
    idVal = idVal.replace("FG", "");
    
    //shows the tinted background for the overlay and sets it to visible
    document.getElementById("popUpOverlay").style.visibility = "visible";
    //sets the opacity to 100% so that the fade animation works as expected
    document.getElementById("popUpOverlay").style.opacity = "100%";
    
    //grabs the paragraph, icon and title from the DOM for the pop-up and stores
    //them in corresponding variables:
    var popupBody = document.getElementsByClassName("popUpBodyText");
    var popupTitle = document.getElementsByClassName("popUpTitle");
    var popupImage = document.getElementsByClassName("popUpImage");
    //shows a different pop-up based on the ID passed into the function
    switch (idVal) {
        case "eLink1":
            //sets the paragraph text to the correct object reference:
            popupBody[0].innerHTML = popupBodies.eLink1;
            //sets the title of the pop-up according to the object reference:
            popupTitle[0].innerHTML = popupTitles.eLink1;
            //sets the image to the corresponding file path for the correct image:
            popupImage[0].src = "../media/kobina.png";
            break;
        //all cases for ID follow a similar structure:
        case "eLink2":
            popupBody[0].innerHTML = popupBodies.eLink2;
            popupTitle[0].innerHTML = popupTitles.eLink2;
            popupImage[0].src = "../media/fred.png";
            break;
        case "eLink3":
            popupBody[0].innerHTML = popupBodies.eLink3;
            popupTitle[0].innerHTML = popupTitles.eLink3;
            popupImage[0].src = "../media/montgomery.png";
            break;
        case "pLink1":
            popupBody[0].innerHTML = popupBodies.JavaLink1;
            popupTitle[0].innerHTML = popupTitles.pLink1;
            popupImage[0].src = "../media/java1.png";
            break;
        case "pLink2":
            popupBody[0].innerHTML = popupBodies.JavaLink2;
            popupTitle[0].innerHTML = popupTitles.pLink2;
            popupImage[0].src = "../media/java2.png";
            break;
        case "pLink3":
            popupBody[0].innerHTML = popupBodies.JavaLink3;
            popupTitle[0].innerHTML = popupTitles.pLink3;
            popupImage[0].src = "../media/java3.png";
            break;
        case "pLink4":
            popupBody[0].innerHTML = popupBodies.JavaLink4;
            popupTitle[0].innerHTML = popupTitles.pLink4;
            popupImage[0].src = "../media/java4.png";
            break;
        case "pLink5":
            popupBody[0].innerHTML = popupBodies.JavaLink5;
            popupTitle[0].innerHTML = popupTitles.pLink5;
            popupImage[0].src = "../media/java5.png";
            break;
        case "pLink6":
            popupBody[0].innerHTML = popupBodies.HTMLLink1;
            popupTitle[0].innerHTML = popupTitles.pLink6;
            popupImage[0].src = "../media/html1.png";
            break;
        case "pLink7":
            popupBody[0].innerHTML = popupBodies.HTMLLink2;
            popupTitle[0].innerHTML = popupTitles.pLink7;
            popupImage[0].src = "../media/html2.png";
            break;
        case "pLink8":
            popupBody[0].innerHTML = popupBodies.JSLink1;   
            popupTitle[0].innerHTML = popupTitles.pLink8;
            popupImage[0].src = "../media/js1.png";
            break;
        case "pLink9":
            popupBody[0].innerHTML = popupBodies.JSLink2;
            popupTitle[0].innerHTML = popupTitles.pLink9;
            popupImage[0].src = "../media/js2.png";
            break;
        case "social1":
            popupBody[0].innerHTML = popupBodies.social1;
            popupTitle[0].innerHTML = popupTitles.social2;
            popupImage[0].src = "../media/socialicon1.png";
            break;
        case "social2":
            popupBody[0].innerHTML = popupBodies.social2;
            popupTitle[0].innerHTML = popupTitles.social2;
            popupImage[0].src = "../media/socialicon2.png";
            break;
    }
}

//function that is called when closing a pop-up window
function hidePopUp() {
    //hides the pop-up overlay by setting the visibility to 'hidden':
    document.getElementById("popUpOverlay").style.visibility = "hidden";
    //Sets the opacity to 0 to ensure that the fade transition
    //works as intended:
    document.getElementById("popUpOverlay").style.opacity = "0%";
}

//adds pop-ups to all experience links:
//grabs all experience links from the DOM and stores
//them in 'experiences' variable:
var experiences = document.getElementsByClassName('experienceLinkHolder');
//cycles through the experiences and adds a click listener to each:
for (let i = 0; i < experiences.length; i++) {
    experiences[i].addEventListener("click", function() {
        //passes the ID of the element clicked into the function:
        showPopUp(this.id)
    });
}
//adds pop-ups to all portfolio links:
//grabs all portfolio links from the DOM and stores
//them in 'portfolios' variable:
var portfolios = document.getElementsByClassName('portfolioLinkHolder');
//cycles through the experiences and adds a click listener to each:
for (let i = 0; i < portfolios.length; i++) {
    portfolios[i].addEventListener("click", function() {
        //passes the ID of the element clicked into the function:
        showPopUp(this.id)
    });
}
//grabs the close button on the pop-up window from the DOM and stores
//it in the closeButton variable
var closeButton = document.getElementById('popUpCloseButton');
//adds a click listener to the close button:
closeButton.addEventListener("click", function() {
    //calls the function to hide the pop-up window:
    hidePopUp()
});

//adds pop-ups to all social links:
//grabs all social links from the DOM and stores
//them in 'socials' variable:
var socials = document.getElementsByClassName('social');
//cycles through the experiences and adds a click listener to each:
for (let i = 0; i < socials.length; i++) {
    socials[i].addEventListener("click", function() {
        //passes the ID of the element clicked into the function:
        showPopUp(this.id)
    });
}
