import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Projects from "./components/Projects.jsx"
import Resume from "./components/Resume.jsx"
import Contact from "./components/Contact.jsx"

function App() {
    return (
        <Router>
            <Header />
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
