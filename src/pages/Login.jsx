import { Link } from "react-router-dom";
import { ArrowRight, LockKeyhole } from "lucide-react";

function Login() {
  return (
    <main className="auth-page">
      <div className="auth-image">
        <div className="auth-image-overlay">
          <span>SMILECARE DENTAL</span>
          <h1>Comfortable care.<br />Confident smiles.</h1>
          <p>
            Access your appointments and stay connected with your
            dental care.
          </p>
        </div>
      </div>

      <div className="auth-content">
        <div className="auth-box">
          <div className="auth-icon">
            <LockKeyhole size={21} />
          </div>

          <span className="auth-label">PATIENT PORTAL</span>
          <h2>Welcome back</h2>
          <p className="auth-description">
            Sign in to view your appointments and dental information.
          </p>

          <form className="auth-form">
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <div className="password-label">
                <label>Password</label>
                <a href="#forgot">Forgot password?</a>
              </div>

              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <button type="button" className="auth-submit">
              Sign In
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <p className="auth-switch">
            Don't have an account?
            <Link to="/register">Create an account</Link>
          </p>

          <Link to="/" className="back-home">
            ← Back to website
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;