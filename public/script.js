/**
 * Custom JavaScript for Luke Ponga's Portfolio
 * Author: Luke Ponga
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==== 1. Theme Toggle (Dark/Light Mode) ====
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Function to apply the saved theme on page load
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        } else {
            body.classList.remove('dark-mode');
            icon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        }
    };

    // Event listener for the theme toggle button
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        } else {
            localStorage.setItem('theme', 'light');
            icon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        }
    });

    // ==== 2. Navbar Style Change on Scroll ====
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ==== 3. Smooth Scrolling for Navigation Links ====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Apply the theme when the page is loaded
    applySavedTheme();
});
