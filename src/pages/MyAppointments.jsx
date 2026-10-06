import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  MapPin,
  UserRound,
  ArrowRight,
  Plus
} from "lucide-react";

function MyAppointments() {
  return (
    <main>
      <section className="dashboard-header">
        <div>
          <span>PATIENT PORTAL</span>
          <h1>My Appointments</h1>
          <p>View your upcoming and previous dental visits.</p>
        </div>

        <Link to="/book-appointment" className="dashboard-book-btn">
          <Plus size={17} />
          Book Appointment
        </Link>
      </section>

      <section className="appointments-page">
        <div className="patient-welcome">
          <div className="patient-avatar">JD</div>

          <div>
            <span>Welcome back</span>
            <h2>John Doe</h2>
            <p>john.doe@example.com</p>
          </div>
        </div>

        <div className="appointment-section-heading">
          <div>
            <span>UPCOMING</span>
            <h2>Your next visit</h2>
          </div>
        </div>

        <div className="upcoming-appointment">
          <div className="appointment-doctor">
            <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=500&q=85" />
          </div>

          <div className="appointment-main">
            <span className="appointment-status">CONFIRMED</span>
            <h3>Dr. Sarah Williams</h3>
            <p>Cosmetic Dentist</p>

            <div className="appointment-details">
              <div>
                <CalendarDays size={17} />
                <span>October 12, 2026</span>
              </div>

              <div>
                <Clock size={17} />
                <span>10:30 AM</span>
              </div>

              <div>
                <MapPin size={17} />
                <span>SmileCare Dental Clinic</span>
              </div>
            </div>
          </div>

          <div className="appointment-actions">
            <button type="button">Reschedule</button>
            <button type="button">Cancel</button>
          </div>
        </div>

        <div className="appointment-section-heading previous-heading">
          <div>
            <span>HISTORY</span>
            <h2>Previous appointments</h2>
          </div>
        </div>

        <div className="appointment-history">
          <div className="history-item">
            <div className="history-date">
              <strong>18</strong>
              <span>SEP</span>
            </div>

            <div className="history-info">
              <h3>Dental Cleaning</h3>
              <p>
                Dr. Michael Carter · General Dentistry
              </p>
            </div>

            <span className="completed-status">Completed</span>

            <button type="button" className="history-arrow">
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="history-item">
            <div className="history-date">
              <strong>24</strong>
              <span>AUG</span>
            </div>

            <div className="history-info">
              <h3>Dental Checkup</h3>
              <p>
                Dr. Emily Johnson · General Dentistry
              </p>
            </div>

            <span className="completed-status">Completed</span>

            <button type="button" className="history-arrow">
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="history-item">
            <div className="history-date">
              <strong>09</strong>
              <span>JUL</span>
            </div>

            <div className="history-info">
              <h3>Teeth Whitening</h3>
              <p>
                Dr. Sarah Williams · Cosmetic Dentistry
              </p>
            </div>

            <span className="completed-status">Completed</span>

            <button type="button" className="history-arrow">
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MyAppointments;