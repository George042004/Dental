import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

function Contact() {
  return (
    <main>
      <section className="page-hero contact-hero">
        <div>
          <span>CONTACT US</span>
          <h1>We're here when you need us.</h1>
          <p>
            Have a question or need to schedule a visit? Get in touch
            with our clinic team.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <span className="section-label">GET IN TOUCH</span>
          <h2>Let's talk about your dental care.</h2>
          <p>
            Reach out to us for appointments, treatment information or
            any questions about our services.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-icon">
                <Phone size={19} />
              </div>
              <div>
                <span>Phone</span>
                <strong>+91 98765 43210</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Mail size={19} />
              </div>
              <div>
                <span>Email</span>
                <strong>hello@smilecare.com</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin size={19} />
              </div>
              <div>
                <span>Clinic</span>
                <strong>MG Road, Vijayawada, Andhra Pradesh</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Clock size={19} />
              </div>
              <div>
                <span>Clinic Hours</span>
                <strong>Mon - Sat: 9:00 AM - 7:00 PM</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-box">
          <h3>Send us a message</h3>
          <p>We'll get back to you as soon as possible.</p>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Your phone number" />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your email address" />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="How can we help?" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="button" className="contact-submit">
              Send Message
              <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </section>

      <section className="contact-location">
        <div>
          <span className="section-label">FIND US</span>
          <h2>Visit our clinic.</h2>
          <p>
            Conveniently located in the heart of the city, our clinic
            is designed to make your visit comfortable from the moment
            you arrive.
          </p>
        </div>

        <div className="map-placeholder">
          <MapPin size={30} />
          <span>SmileCare Dental Clinic</span>
          <small>MG Road, Vijayawada</small>
        </div>
      </section>
    </main>
  );
}

export default Contact;