import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";

function Doctors() {
  return (
    <main>
      <section className="page-hero doctors-hero">
        <div>
          <span>OUR DENTISTS</span>
          <h1>Meet the people behind your smile.</h1>
          <p>
            Experienced dental professionals dedicated to providing
            comfortable and personalized care.
          </p>
        </div>
      </section>

      <section className="doctors-page">
        <div className="section-heading">
          <span>OUR TEAM</span>
          <h2>Experienced hands. Personal care.</h2>
          <p>
            Get to know our dental team and find the right specialist
            for your treatment.
          </p>
        </div>

        <div className="doctors-page-grid">
          <div className="doctor-profile">
            <div className="doctor-profile-image">
              <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800&q=85" />
            </div>

            <div className="doctor-profile-info">
              <span>Cosmetic Dentist</span>
              <h3>Dr. Sarah Williams</h3>
              <p>
                Specializes in cosmetic dentistry, smile makeovers
                and aesthetic dental treatments.
              </p>

              <div className="doctor-meta">
                <span>12+ Years Experience</span>
                <span>Cosmetic Dentistry</span>
              </div>

              <Link to="/book-appointment">
                <CalendarDays size={16} />
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="doctor-profile">
            <div className="doctor-profile-image">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=85" />
            </div>

            <div className="doctor-profile-info">
              <span>Implant Specialist</span>
              <h3>Dr. Michael Carter</h3>
              <p>
                Focused on dental implants, restorative procedures
                and long-term oral health.
              </p>

              <div className="doctor-meta">
                <span>10+ Years Experience</span>
                <span>Dental Implants</span>
              </div>

              <Link to="/book-appointment">
                <CalendarDays size={16} />
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="doctor-profile">
            <div className="doctor-profile-image">
              <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=85" />
            </div>

            <div className="doctor-profile-info">
              <span>Orthodontist</span>
              <h3>Dr. Emily Johnson</h3>
              <p>
                Provides modern orthodontic treatments including
                braces and clear aligners.
              </p>

              <div className="doctor-meta">
                <span>9+ Years Experience</span>
                <span>Orthodontics</span>
              </div>

              <Link to="/book-appointment">
                <CalendarDays size={16} />
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="doctor-profile">
            <div className="doctor-profile-image">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=85" />
            </div>

            <div className="doctor-profile-info">
              <span>General Dentist</span>
              <h3>Dr. Daniel Wilson</h3>
              <p>
                Provides preventive, restorative and general dental
                treatments for patients of all ages.
              </p>

              <div className="doctor-meta">
                <span>8+ Years Experience</span>
                <span>General Dentistry</span>
              </div>

              <Link to="/book-appointment">
                <CalendarDays size={16} />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="doctors-cta">
        <div>
          <span>NEED HELP CHOOSING?</span>
          <h2>Not sure which dentist is right for you?</h2>
          <p>
            Start with a consultation and our team will guide you
            toward the right care.
          </p>
        </div>

        <Link to="/book-appointment" className="white-btn">
          Book Consultation
          <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}

export default Doctors;