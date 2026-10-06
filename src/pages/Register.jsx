import { Link } from "react-router-dom";
import { ArrowRight, UserPlus } from "lucide-react";

function Register() {
  return (
    <main className="auth-page">
      <div className="auth-image register-image">
        <div className="auth-image-overlay">
          <span>SMILECARE DENTAL</span>
          <h1>Start your journey<br />to a healthier smile.</h1>
          <p>
            Create your patient account and keep your dental
            appointments organized in one place.
          </p>
        </div>
      </div>

      <div className="auth-content">
        <div className="auth-box">
          <div className="auth-icon">
            <UserPlus size={21} />
          </div>

          <span className="auth-label">PATIENT PORTAL</span>
          <h2>Create account</h2>
          <p className="auth-description">
            Register to manage your appointments and stay connected
            with your dental care.
          </p>

          <form className="auth-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
              />
            </div>

            <button type="button" className="auth-submit">
              Create Account
              <ArrowRight size={17} />
            </button>
          </form>

          <p className="auth-switch register-switch">
            Already have an account?
            <Link to="/login">Sign in</Link>
          </p>

          <Link to="/" className="back-home">
            ← Back to website
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Register;