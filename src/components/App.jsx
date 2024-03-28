import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import NavBar from './NavBar';
import NotFound from './NotFound';
import '../style/App.css'

function App() {
    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo(0, 0);
        };
        window.addEventListener('beforeunload', scrollToTop);
        
        return () => {
            window.removeEventListener('beforeunload', scrollToTop);
        };
    }, []);

    return (
        <div className='App'>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/experience" element={<Experience />}></Route>
                    <Route path="/projects" element={<Projects />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;