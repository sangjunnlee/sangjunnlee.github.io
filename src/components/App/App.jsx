import React, {useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import NavBar from '../NavBar/NavBar';
import './App.css'

function App() {
    useScrollToTop();

    return (
        <div className='App'>
            <BrowserRouter>
                <NavBar />
                <div className="sections">
                    <section id="home">
                        <Home />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="experience">
                        <Experience />
                    </section>
                    <section id="projects">
                        <Projects />
                    </section>
                </div>
            </BrowserRouter>
        </div>
    );
}

function useScrollToTop() {
    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo(0, 0);
        };
        window.addEventListener('beforeunload', scrollToTop);
        
        return () => {
            window.removeEventListener('beforeunload', scrollToTop);
        };
    }, []);
}

export default App;