// ============================== Toggle Style Switcher ==============================
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

if (styleSwitcherToggle && styleSwitcher) {
    styleSwitcherToggle.addEventListener("click", () => {
        styleSwitcher.classList.toggle("open");
    });

    // Hide style switcher on scroll (optimized with event debounce)
    let scrollTimeout;
    window.addEventListener("scroll", () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (styleSwitcher.classList.contains("open")) {
                styleSwitcher.classList.remove("open");
            }
        }, 200); // Timeout of 200ms to prevent excessive calls
    });
}

// ============================== Theme Colors ==============================
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        const styleTitle = style.getAttribute("title");
        if (color === styleTitle) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// ============================== Theme Light and Dark Mode ==============================
const dayNight = document.querySelector(".day-night");

if (dayNight) {
    const icon = dayNight.querySelector("i");

    dayNight.addEventListener("click", () => {
        icon.classList.toggle("fa-sun");
        icon.classList.toggle("fa-moon");
        document.body.classList.toggle("dark");

        // Save the theme to localStorage
        const isDarkMode = document.body.classList.contains("dark");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });

    // Load theme from localStorage on page load
    window.addEventListener("load", () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.add("fa-moon");
        }
    });
}



// Select all the anchor links in the nav
const navLinks = document.querySelectorAll(".nav a");

// Loop through each link and add a click event listener
navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        // Remove the active class from all links
        navLinks.forEach(link => link.classList.remove("active"));
        
        // Add the active class to the clicked link
        event.target.classList.add("active");
    });
});
