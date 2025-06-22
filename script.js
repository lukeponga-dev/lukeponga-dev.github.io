// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent default anchor click behavior
                // Scroll to the target section with smooth animation
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                });
        });
});

// Navbar style change on scroll
window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.nav-link');
        const navbarBrand = document.querySelector('.navbar-brand');

        // Change navbar style when scrolled down
        if (window.scrollY > 50) {
                navbar.style.backgroundColor = "rgba(17, 24, 39, 0.98)"; // Darker background
                navbar.style.padding = '10px 0'; // Reduced padding
                navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.3)'; // More prominent shadow
                navbarBrand.style.color = 'var(--primary)'; // Keep primary brand color
                navLinks.forEach(link => link.style.color = 'var(--light)'); // Light link colors
        } else {
                // Original navbar style when at the top
                navbar.style.backgroundColor = "rgba(17, 24, 39, 0.95)"; // Dark background
                navbar.style.padding = '20px 0'; // Original padding
                navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.2)'; // Original shadow
                navbarBrand.style.color = 'var(--primary)'; // Primary brand color
                navLinks.forEach(link => link.style.color = 'var(--light)'); // Light link colors
        }
});

// Animate elements on scroll
const animateOnScroll = function () {
        // Select all elements with the 'animate-on-scroll' class
        const elements = document.querySelectorAll('.animate-on-scroll');

        elements.forEach(element => {
                // Get the position of the element relative to the viewport
                const elementPosition = element.getBoundingClientRect().top;
                // Define the scroll position at which the animation should trigger (e.g., 80% of screen height)
                const screenPosition = window.innerHeight / 1.2;

                // If the element is within the triggerable area, add the 'visible' class to trigger animation
                if (elementPosition < screenPosition) {
                        element.classList.add('visible');
                }
        });
};

// Initialize scroll animation on page load and attach to scroll event
window.addEventListener('load', animateOnScroll); // Trigger on page load
window.addEventListener('scroll', animateOnScroll); // Trigger on scroll