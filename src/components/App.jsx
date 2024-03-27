import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import Experience from './Experience';
import NavBar from './NavBar';
import NotFound from './NotFound';
import '../style/App.css'

function App() {
    useEffect(() => {
        // Function to scroll to the top
        const scrollToTop = () => {
            window.scrollTo(0, 0);
        };

        // Add event listener for page reload
        window.addEventListener('beforeunload', scrollToTop);

        // Remove event listener when component unmounts
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
                    <Route path="/work" element={<Work />}></Route>
                    <Route path="/experience" element={<Experience />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;