import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="brand-mark">S</span>
            <span>
              <strong>SmileCare</strong>
              <small>Dental Clinic</small>
            </span>
          </Link>

          <p>
            Modern dental care focused on healthy smiles,
            comfortable treatment and personalized attention.
          </p>

          <Link to="/book-appointment" className="footer-appointment">
            Book an Appointment
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/doctors">Our Doctors</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <Link to="/services">Dental Cleaning</Link>
          <Link to="/services">Dental Implants</Link>
          <Link to="/services">Teeth Whitening</Link>
          <Link to="/services">Braces & Aligners</Link>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact</h3>

          <div>
            <Phone size={15} />
            <span>+91 98765 43210</span>
          </div>

          <div>
            <Mail size={15} />
            <span>hello@smilecare.com</span>
          </div>

          <div>
            <MapPin size={15} />
            <span>MG Road, Vijayawada</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 SmileCare Dental Clinic</span>

        <div>
          <Link to="/login">Patient Login</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;