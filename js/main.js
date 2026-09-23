/*
    ============================================
    MAIN JAVASCRIPT
    ============================================

    JavaScript makes the website INTERACTIVE.

    This file controls the first transition:

    OPENING PAGE
          ↓
    COMPUTER DESKTOP
*/


/*
    ============================================
    FINDING HTML ELEMENTS
    ============================================

    document.getElementById()

    means:

    "Go into the HTML and find the element
    with this ID."
*/


// Find the "Get to know me!" button

const enterButton =
    document.getElementById("enter-button");


// Find the opening page

const openingPage =
    document.getElementById("opening-page");


// Find the desktop

const desktop =
    document.getElementById("desktop");



/*
    ============================================
    BUTTON CLICK
    ============================================
*/


/*
    addEventListener()

    means:

    "Wait for something to happen."

    In this case:

    "Wait until the button is clicked."
*/


enterButton.addEventListener("click", function () {


    /*
        Add the class "fade-out".

        Our CSS knows that "fade-out"
        should make the opening page disappear.
    */

    openingPage.classList.add("fade-out");



    /*
        setTimeout means:

        "Wait this amount of time,
        then do something."

        600 = 600 milliseconds
        = 0.6 seconds
    */


    setTimeout(function () {


        /*
            Completely hide the opening page.
        */

        openingPage.classList.add("hidden");


        /*
            Show the computer desktop.

            Remember:
            It was hidden when the page loaded.
        */

        desktop.classList.remove("hidden");


    }, 600);

});

/*
    ============================================
    LIVE DATE AND TIME
    ============================================

    This makes the computer's clock show
    the visitor's actual local date and time.
*/


// Find the element in our HTML

const dateTime =
    document.getElementById("date-time");



/*
    This function gets the current date
    and puts it into our website.
*/

function updateDateTime() {


    // Get the current date and time

    const now = new Date();



    /*
        Create the date.

        Example:

        Mon, Jan 22
    */

    const date = now.toLocaleDateString("en-US", {

        weekday: "short",

        month: "short",

        day: "numeric"

    });



    /*
        Create the time.

        Example:

        9:41 AM
    */

    const time = now.toLocaleTimeString("en-US", {

        hour: "numeric",

        minute: "2-digit",

        hour12: true

    });



    /*
        Put the date and time together.

        Example:

        Mon, Jan 22  9:41 AM
    */

    dateTime.textContent =
        `${date}  ${time}`;

}



// Run the function immediately
// so we don't have to wait.

updateDateTime();



/*
    Run the function every 30 seconds.

    This means the clock will stay updated
    while someone is looking at your portfolio.
*/

setInterval(updateDateTime, 30000);