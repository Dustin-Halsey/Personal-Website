import { Link } from 'react-router-dom'

/** Simple navigation for portfolio site */
export default function Header() {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #dee2e6'
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontWeight: '500'
    };

    return (
        <nav style={style}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
            <Link to="/projects" style={linkStyle}>Projects</Link>
            <Link to="/resume" style={linkStyle}>Resume</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>
    );
}