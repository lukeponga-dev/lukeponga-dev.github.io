// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
            e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                                behavior: 'smooth'
                                        });
                                            });
                                            });

                                            // Navbar style change on scroll
                                            window.addEventListener('scroll', function() {
                                                const navbar = document.querySelector('.navbar');
                                                    const navLinks = document.querySelectorAll('.nav-link');
                                                        const navbarBrand = document.querySelector('.navbar-brand');
                                                            
                                                                if (window.scrollY > 50) {
                                                                        navbar.style.backgroundColor = "rgba(30, 42, 71, 0.98)";
                                                                                navbar.style.padding = '10px 0';
                                                                                        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.2)';
                                                                                                navbarBrand.style.color = 'var(--light)';
                                                                                                        navLinks.forEach(link => link.style.color = 'var(--light)');
                                                                                                            } else {
                                                                                                                    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                                                                                                                            navbar.style.padding = '20px 0';
                                                                                                                                    navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
                                                                                                                                            navbarBrand.style.color = 'var(--primary)';
                                                                                                                                                    navLinks.forEach(link => link.style.color = 'var(--dark)');
                                                                                                                                                        }
                                                                                                                                                        });

                                                                                                                                                        // Animate elements on scroll
                                                                                                                                                        const animateOnScroll = function() {
                                                                                                                                                            const elements = document.querySelectorAll('.animate-on-scroll');
                                                                                                                                                                
                                                                                                                                                                    elements.forEach(element => {
                                                                                                                                                                            const elementPosition = element.getBoundingClientRect().top;
                                                                                                                                                                                    const screenPosition = window.innerHeight / 1.2;
                                                                                                                                                                                            
                                                                                                                                                                                                    if (elementPosition < screenPosition) {
                                                                                                                                                                                                                element.classList.add('visible');
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                            });
                                                                                                                                                                                                                            };

                                                                                                                                                                                                                            // Initialize scroll animation on load and on scroll
                                                                                                                                                                                                                            window.addEventListener('load', animateOnScroll);
                                                                                                                                                                                                                            window.addEventListener('scroll', animateOnScroll);
                                                                                                                                                                                                                            