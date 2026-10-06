import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, CalendarDays } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">S</span>

          <span>
            <strong>SmileCare</strong>
            <small>Dental Clinic</small>
          </span>
        </Link>

        <nav className={menuOpen ? "nav-links mobile-open" : "nav-links"}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <a href="/#services" onClick={closeMenu}>
            Services
          </a>

          <a href="/#doctors" onClick={closeMenu}>
            Doctors
          </a>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <div className="mobile-nav-actions">
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>

            <Link
              to="/book-appointment"
              className="mobile-book-btn"
              onClick={closeMenu}
            >
              Book Appointment
            </Link>
          </div>
        </nav>

        <div className="desktop-nav-actions">
          <Link to="/login" className="nav-login">
            Login
          </Link>

          <Link to="/book-appointment" className="nav-book-btn">
            <CalendarDays size={16} />
            Book Appointment
          </Link>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;