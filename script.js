document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section');
  const backToTopBtn = document.getElementById('back-to-top');
  
  // Navigation highlight on scroll
  const highlightNav = () => {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Update URL without jumping
        history.pushState(null, null, targetId);
      }
    });
  });
  
  // Back to top button functionality
  const handleBackToTop = () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Initialize event listeners
  window.addEventListener('scroll', () => {
    highlightNav();
    handleBackToTop();
  });
  
  // Initialize scroll position
  highlightNav();
  handleBackToTop();
});
