import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from "./components/Header"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"

function App() {
    useEffect(() => {
        let cleanup: (() => void) | null = null;
        
        // Import and initialize the starfield animation
        // @ts-ignore
        import('./js/animateHome.js').then((module: any) => {
            cleanup = module.initStarfield();
        }).catch(error => {
            console.error('Failed to load starfield animation:', error);
        });
        
        // Cleanup function
        return () => {
            if (cleanup) {
                cleanup();
            }
        };
    }, []);

    return (
        <Router>
            <canvas id="background-canvas"/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App
