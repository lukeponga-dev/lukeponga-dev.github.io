// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Prevent default anchor behavior

    const targetId = link.getAttribute('href').substring(1); // Get the target ID
    const targetSection = document.getElementById(targetId); // Find the section

    // Scroll smoothly to the target
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
