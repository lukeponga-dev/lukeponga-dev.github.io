import { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="#home" onClick={(e) => handleNavLinkClick(e, 'home')}>Luke Ponga</a>
                {/* ... Navbar Toggler and Collapse Div ... */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {['About', 'Skills', 'Projects', 'Education', 'Contact'].map(item => (
                            <li className="nav-item" key={item}>
                                <a className="nav-link" href={`#${item.toLowerCase()}`} onClick={(e) => handleNavLinkClick(e, item.toLowerCase())}>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <button id="theme-toggle" className="btn btn-outline-secondary ms-3" aria-label="Toggle Theme" onClick={toggleTheme}>
                        <i className={`bi ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;