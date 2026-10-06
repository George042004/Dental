import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ShieldCheck, Sparkles } from "lucide-react";

function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <motion.span
            className="hero-tag"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Modern Dental Care
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your smile,
            <br />
            <span>our care.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Comfortable, modern and personalized dental care for
            every stage of your smile journey.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/book-appointment" className="primary-btn">
              Book Appointment
              <ArrowRight size={18} />
            </Link>

            <Link to="/services" className="secondary-btn">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="home-services">
        <div className="section-heading">
          <span>OUR SERVICES</span>
          <h2>Complete care for your smile</h2>
          <p>
            From preventive care to advanced treatments, we provide
            comfortable dental solutions under one roof.
          </p>
        </div>

        <div className="service-grid">
          <div className="simple-service-card">
            <div className="service-number">01</div>
            <h3>Dental Cleaning</h3>
            <p>
              Professional cleaning to keep your teeth healthy,
              fresh and protected.
            </p>
            <Link to="/services">
              Learn more <ArrowRight size={16} />
            </Link>
          </div>

          <div className="simple-service-card featured-service">
            <div className="service-number">02</div>
            <h3>Dental Implants</h3>
            <p>
              Natural-looking tooth replacement designed for
              long-lasting comfort.
            </p>
            <Link to="/services">
              Learn more <ArrowRight size={16} />
            </Link>
          </div>

          <div className="simple-service-card">
            <div className="service-number">03</div>
            <h3>Teeth Whitening</h3>
            <p>
              Brighten your smile with professional and safe
              whitening treatments.
            </p>
            <Link to="/services">
              Learn more <ArrowRight size={16} />
            </Link>
          </div>

          <div className="simple-service-card">
            <div className="service-number">04</div>
            <h3>Braces & Aligners</h3>
            <p>
              Modern orthodontic solutions for a healthier,
              straighter smile.
            </p>
            <Link to="/services">
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-image">
          <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85" />
        </div>

        <div className="why-content">
          <span className="section-label">WHY CHOOSE US</span>
          <h2>Dental care designed around you.</h2>

          <p>
            We combine experienced dental professionals, modern
            technology and a comfortable environment to make every
            visit easier.
          </p>

          <div className="why-list">
            <div className="why-item">
              <div className="why-icon">
                <ShieldCheck size={21} />
              </div>
              <div>
                <h3>Experienced Dentists</h3>
                <p>Trusted professionals focused on quality care.</p>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon">
                <Sparkles size={21} />
              </div>
              <div>
                <h3>Modern Equipment</h3>
                <p>Advanced technology for accurate treatment.</p>
              </div>
            </div>

            <div className="why-item">
              <div className="why-icon">
                <CalendarDays size={21} />
              </div>
              <div>
                <h3>Easy Appointments</h3>
                <p>Choose your dentist and preferred appointment time.</p>
              </div>
            </div>
          </div>

          <Link to="/about" className="text-btn">
            More about our clinic <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="doctors-section">
        <div className="section-heading">
          <span>OUR DENTISTS</span>
          <h2>Meet our dental specialists</h2>
          <p>
            Experienced professionals committed to helping you
            maintain a healthy and confident smile.
          </p>
        </div>

        <div className="doctor-grid">
          <div className="doctor-card">
            <div className="doctor-image">
              <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=700&q=85" />
            </div>
            <div className="doctor-info">
              <span>Cosmetic Dentist</span>
              <h3>Dr. Sarah Williams</h3>
              <p>12+ years experience</p>
            </div>
          </div>

          <div className="doctor-card">
            <div className="doctor-image">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=85" />
            </div>
            <div className="doctor-info">
              <span>Implant Specialist</span>
              <h3>Dr. Michael Carter</h3>
              <p>10+ years experience</p>
            </div>
          </div>

          <div className="doctor-card">
            <div className="doctor-image">
              <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=85" />
            </div>
            <div className="doctor-info">
              <span>Orthodontist</span>
              <h3>Dr. Emily Johnson</h3>
              <p>9+ years experience</p>
            </div>
          </div>
        </div>

        <div className="center-button">
          <Link to="/doctors" className="outline-btn">
            View All Doctors <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="appointment-banner">
        <div>
          <span>YOUR SMILE DESERVES THE BEST</span>
          <h2>Ready to take care of your smile?</h2>
          <p>
            Schedule a consultation with one of our experienced dentists.
          </p>
        </div>

        <Link to="/book-appointment" className="white-btn">
          Book an Appointment
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

export default Home;