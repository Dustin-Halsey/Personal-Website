import { Link } from 'react-router-dom'
import './Header.css'

/** Simple navigation for portfolio site */
export default function Header() {
    return (
        <nav className="nav-container">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/resume" className="nav-link">Resume</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
    );
}