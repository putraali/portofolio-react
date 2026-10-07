import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "nav-link active fw-bold text-white" : "nav-link text-light";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-barbatos-frame fixed-top shadow-sm py-3 border-bottom border-dark">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-4">
          Putra<span className="text-barbatos-red">.</span>
        </Link>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav align-items-center text-center">
            <li className="nav-item mx-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={isActive('/')}>Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/projects" onClick={() => setIsMenuOpen(false)} className={isActive('/projects')}>Portfolio</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={isActive('/contact')}>Contact</Link>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-decoration-none">
                <button className="btn btn-accent-barbatos rounded-pill px-4 fw-bold shadow-sm">
                  Hire Me
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;