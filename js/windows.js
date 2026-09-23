/* =====================================================
   PROJECT WINDOWS
   ===================================================== */

const desktopIcons = document.querySelectorAll(
    ".desktop-icon"
);

desktopIcons.forEach(function (icon) {

    icon.addEventListener("click", function () {

        const windowId = icon.dataset.window;

        const windowToOpen =
            document.getElementById(windowId);

        if (windowToOpen) {

            windowToOpen.classList.add("active");

        }

    });

});


/* =====================================================
   DOCK WINDOWS
   ===================================================== */

const dockIcons = document.querySelectorAll(
    ".dock-icon[data-window]"
);

dockIcons.forEach(function (icon) {

    icon.addEventListener("click", function () {

        const windowId = icon.dataset.window;

        const windowToOpen =
            document.getElementById(windowId);

        if (windowToOpen) {

            windowToOpen.classList.add("active");

        }

    });

});


/* =====================================================
   TOP MENU LINKS
   ===================================================== */

const menuLinks = document.querySelectorAll(
    ".menu-link, .menu-name"
);

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const windowId = link.dataset.window;

        const windowToOpen =
            document.getElementById(windowId);

        if (windowToOpen) {

            windowToOpen.classList.add("active");

        }

    });

});


/* =====================================================
   CLOSE WINDOWS
   ===================================================== */

const closeButtons = document.querySelectorAll(
    ".close-window"
);

closeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const windowToClose =
            button.closest(".portfolio-window");

        if (windowToClose) {

            windowToClose.classList.remove("active");

        }

    });

});


/* =====================================================
   LINKEDIN
   ===================================================== */

const linkedinButton =
    document.getElementById("linkedin-button");

if (linkedinButton) {

    linkedinButton.addEventListener(
        "click",
        function () {

            window.open(
                "https://www.linkedin.com/in/magdalena-szymanska-492b30425/",
                "_blank"
            );

        }
    );

}