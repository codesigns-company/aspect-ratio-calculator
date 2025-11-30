// Theme toggle functionality
document.addEventListener("DOMContentLoaded", function () {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Initialize Lenis smooth scroll - respect accessibility preferences
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: !prefersReducedMotion, // Disable smooth scroll if user prefers reduced motion
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    // Only start the animation loop if smooth scrolling is enabled
    let rafId;
    if (!prefersReducedMotion) {
        function raf(time) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);
    }

    // Listen for changes to prefers-reduced-motion
    const motionMediaQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );
    motionMediaQuery.addEventListener("change", (e) => {
        const prefersReduced = e.matches;

        // Update Lenis smooth setting
        lenis.options.smooth = !prefersReduced;

        // Start or stop the animation loop accordingly
        if (prefersReduced && rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        } else if (!prefersReduced && !rafId) {
            function raf(time) {
                lenis.raf(time);
                rafId = requestAnimationFrame(raf);
            }
            rafId = requestAnimationFrame(raf);
        }
    });

    const themeDropdown = document.getElementById("theme-dropdown");
    const dropdownItems = document.querySelectorAll("[data-theme-value]");
    const html = document.documentElement;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);

    // Add click handlers for dropdown items
    dropdownItems.forEach((item) => {
        item.addEventListener("click", function () {
            const selectedTheme = this.getAttribute("data-theme-value");
            setTheme(selectedTheme);
            localStorage.setItem("theme", selectedTheme);

            // Close the dropdown
            const dropdown = bootstrap.Dropdown.getInstance(themeDropdown);
            if (dropdown) {
                dropdown.hide();
            }
        });
    });

    function setTheme(theme) {
        html.setAttribute("data-bs-theme", theme);
        updateDropdownActive(theme);
        updateDropdownIcon(theme);
    }

    function updateDropdownActive(theme) {
        // Remove active class from all items
        dropdownItems.forEach((item) => {
            item.classList.remove("active");
            const checkmark = item.querySelector(".ms-auto");
            if (checkmark) {
                checkmark.classList.add("d-none");
            }
        });

        // Add active class to selected theme
        const activeItem = document.querySelector(
            `[data-theme-value="${theme}"]`
        );
        if (activeItem) {
            activeItem.classList.add("active");
            const checkmark = activeItem.querySelector(".ms-auto");
            if (checkmark) {
                checkmark.classList.remove("d-none");
            }
        }
    }

    function updateDropdownIcon(theme) {
        const iconSvg = themeDropdown.querySelector("svg");

        if (theme === "dark") {
            // Switch to sun icon
            iconSvg.innerHTML =
                '<path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>';
        } else {
            // Switch to moon icon
            iconSvg.innerHTML =
                '<path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>';
        }
    }
});
