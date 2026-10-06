import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

function Services() {
  return (
    <main>
      <section className="page-hero services-hero">
        <div>
          <span>OUR SERVICES</span>
          <h1>Complete dental care, all in one place.</h1>
          <p>
            From regular checkups to advanced treatments, our team
            provides personalized care for every smile.
          </p>
        </div>
      </section>

      <section className="services-intro">
        <div className="section-heading">
          <span>WHAT WE OFFER</span>
          <h2>Care for every stage of your smile.</h2>
          <p>
            Our dental services are designed to keep your teeth healthy,
            improve your smile and give you confidence in your care.
          </p>
        </div>

        <div className="services-list">
          <div className="service-detail">
            <div className="service-detail-image">
              <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85" />
            </div>

            <div className="service-detail-content">
              <span>01</span>
              <h3>Dental Cleaning</h3>
              <p>
                Professional cleaning and preventive care to help
                maintain healthy teeth and gums.
              </p>

              <ul>
                <li><Check size={15} /> Professional cleaning</li>
                <li><Check size={15} /> Gum care</li>
                <li><Check size={15} /> Oral health checkup</li>
              </ul>

              <Link to="/book-appointment">
                Book Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="service-detail service-detail-reverse">
            <div className="service-detail-image">
              <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=85" />
            </div>

            <div className="service-detail-content">
              <span>02</span>
              <h3>Dental Implants</h3>
              <p>
                A long-term tooth replacement solution designed to
                restore both function and appearance.
              </p>

              <ul>
                <li><Check size={15} /> Implant consultation</li>
                <li><Check size={15} /> Tooth replacement</li>
                <li><Check size={15} /> Follow-up care</li>
              </ul>

              <Link to="/book-appointment">
                Book Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="service-detail">
            <div className="service-detail-image">
              <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=85" />
            </div>

            <div className="service-detail-content">
              <span>03</span>
              <h3>Teeth Whitening</h3>
              <p>
                Professional whitening treatments to help you achieve
                a brighter and more confident smile.
              </p>

              <ul>
                <li><Check size={15} /> Smile assessment</li>
                <li><Check size={15} /> Professional whitening</li>
                <li><Check size={15} /> After-care guidance</li>
              </ul>

              <Link to="/book-appointment">
                Book Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="service-detail service-detail-reverse">
            <div className="service-detail-image">
              <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa2e3?auto=format&fit=crop&w=900&q=85" />
            </div>

            <div className="service-detail-content">
              <span>04</span>
              <h3>Braces & Aligners</h3>
              <p>
                Modern orthodontic options to gradually create a
                straighter and healthier smile.
              </p>

              <ul>
                <li><Check size={15} /> Orthodontic consultation</li>
                <li><Check size={15} /> Braces</li>
                <li><Check size={15} /> Clear aligners</li>
              </ul>

              <Link to="/book-appointment">
                Book Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="service-detail">
            <div className="service-detail-image">
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=85" />
            </div>

            <div className="service-detail-content">
              <span>05</span>
              <h3>Restorative Dentistry</h3>
              <p>
                Restore damaged or weakened teeth while maintaining
                a natural-looking appearance.
              </p>

              <ul>
                <li><Check size={15} /> Dental fillings</li>
                <li><Check size={15} /> Crowns</li>
                <li><Check size={15} /> Tooth restoration</li>
              </ul>

              <Link to="/book-appointment">
                Book Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="service-detail service-detail-reverse">
            <div className="service-detail-image">
              <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=85" />
            </div>

            <div className="service-detail-content">
              <span>06</span>
              <h3>Emergency Dental Care</h3>
              <p>
                Prompt dental attention for unexpected pain,
                damage or urgent dental problems.
              </p>

              <ul>
                <li><Check size={15} /> Emergency consultation</li>
                <li><Check size={15} /> Pain management</li>
                <li><Check size={15} /> Immediate treatment</li>
              </ul>

              <Link to="/book-appointment">
                Contact Our Clinic <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div>
          <span>NOT SURE WHAT YOU NEED?</span>
          <h2>Start with a consultation.</h2>
          <p>
            Our dental team can help you understand your options
            and recommend the right treatment.
          </p>
        </div>

        <Link to="/book-appointment" className="white-btn">
          Book Appointment
          <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}

export default Services;