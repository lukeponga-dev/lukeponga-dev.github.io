    document.addEventListener('DOMContentLoaded', function() {
      // Back to top button
      const backToTopBtn = document.getElementById('back-to-top');
      
      window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      });
      
      backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      
      // Navbar active state
      const navLinks = document.querySelectorAll('.nav-link');
      
      function setActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        document.querySelectorAll('section').forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              }
            });
          }
        });
      }
      
      window.addEventListener('scroll', setActiveNav);
      setActiveNav(); // Initialize on load
      
      // Smooth scrolling
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
            window.scrollTo({
              top: targetSection.offsetTop - 70,
              behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
              const toggler = document.querySelector('.navbar-toggler');
              toggler.click(); // Simulate click to close
            }
          }
        });
      });
      
      // Animation on scroll
      const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate');
        elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
          
          if (elementPosition < screenPosition) {
            element.style.opacity = 1;
          }
        });
      };
      
      // Initialize animations
      window.addEventListener('scroll', animateOnScroll);
      animateOnScroll(); // Initial check
    });
