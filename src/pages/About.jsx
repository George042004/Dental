import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, ShieldCheck, Users } from "lucide-react";

function About() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <span>ABOUT OUR CLINIC</span>
          <h1>Care that puts your smile first.</h1>
          <p>
            A modern dental clinic focused on comfortable treatment,
            experienced care and healthy smiles.
          </p>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-intro-image">
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85" />
        </div>

        <div className="about-intro-content">
          <span className="section-label">WHO WE ARE</span>
          <h2>A comfortable place for better dental care.</h2>

          <p>
            Our clinic brings together experienced dentists, modern
            equipment and a patient-first approach to make dental care
            simple and comfortable.
          </p>

          <p>
            Whether you need routine cleaning, cosmetic treatment,
            orthodontic care or a more advanced procedure, our team
            is here to guide you through every step.
          </p>

          <Link to="/book-appointment" className="primary-about-btn">
            Book an Appointment
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="about-values">
        <div className="section-heading">
          <span>OUR APPROACH</span>
          <h2>Good dentistry starts with good care.</h2>
          <p>
            We believe every patient deserves clear communication,
            thoughtful treatment and a comfortable experience.
          </p>
        </div>

        <div className="value-grid">
          <div className="value-card">
            <div className="value-icon">
              <HeartPulse size={22} />
            </div>
            <h3>Patient First</h3>
            <p>
              We listen to your concerns and create treatment plans
              around your individual needs.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <ShieldCheck size={22} />
            </div>
            <h3>Trusted Care</h3>
            <p>
              Experienced professionals and careful treatment at
              every stage of your dental journey.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Users size={22} />
            </div>
            <h3>Experienced Team</h3>
            <p>
              A friendly team working together to provide reliable
              and personalized dental care.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-content">
          <span className="section-label">OUR CLINIC</span>
          <h2>Modern dentistry with a personal touch.</h2>
          <p>
            From your first consultation to follow-up care, we focus
            on making your experience clear, comfortable and
            stress-free.
          </p>

          <div className="about-stats">
            <div>
              <strong>10+</strong>
              <span>Years of Experience</span>
            </div>

            <div>
              <strong>5K+</strong>
              <span>Happy Patients</span>
            </div>

            <div>
              <strong>15+</strong>
              <span>Dental Treatments</span>
            </div>
          </div>
        </div>

        <div className="about-story-image">
          <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa2e3?auto=format&fit=crop&w=1000&q=85" />
        </div>
      </section>

      <section className="about-cta">
        <div>
          <span>START YOUR JOURNEY</span>
          <h2>Let's take care of your smile.</h2>
        </div>

        <Link to="/book-appointment" className="white-btn">
          Book Appointment
          <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}

export default About;