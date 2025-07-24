import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.className = '';
        document.body.classList.add(theme === 'dark' ? 'dark-mode' : '');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;