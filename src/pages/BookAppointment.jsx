import { CalendarDays, Clock, UserRound, ArrowRight } from "lucide-react";

function BookAppointment() {
  return (
    <main>
      <section className="page-hero appointment-hero">
        <div>
          <span>BOOK AN APPOINTMENT</span>
          <h1>Let's schedule your visit.</h1>
          <p>
            Choose your preferred dentist, service and appointment
            time. We'll take care of the rest.
          </p>
        </div>
      </section>

      <section className="appointment-section">
        <div className="appointment-intro">
          <span className="section-label">YOUR VISIT</span>
          <h2>Make your dental appointment simple.</h2>
          <p>
            Fill in the details below to request an appointment with
            our dental team.
          </p>

          <div className="appointment-points">
            <div>
              <div className="appointment-point-icon">
                <UserRound size={19} />
              </div>
              <div>
                <strong>Choose your dentist</strong>
                <span>Select a specialist based on your needs.</span>
              </div>
            </div>

            <div>
              <div className="appointment-point-icon">
                <CalendarDays size={19} />
              </div>
              <div>
                <strong>Select a date</strong>
                <span>Choose a convenient day for your visit.</span>
              </div>
            </div>

            <div>
              <div className="appointment-point-icon">
                <Clock size={19} />
              </div>
              <div>
                <strong>Pick a time</strong>
                <span>Choose from the available appointment times.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="appointment-form-box">
          <div className="appointment-form-header">
            <h3>Appointment Details</h3>
            <span>Demo form</span>
          </div>

          <form className="appointment-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" />
              </div>

              <div className="form-group">
                <label>Service</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Dental Cleaning</option>
                  <option>Dental Implants</option>
                  <option>Teeth Whitening</option>
                  <option>Braces & Aligners</option>
                  <option>Restorative Dentistry</option>
                  <option>Emergency Dental Care</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Preferred Dentist</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select a dentist
                  </option>
                  <option>Dr. Sarah Williams</option>
                  <option>Dr. Michael Carter</option>
                  <option>Dr. Emily Johnson</option>
                  <option>Dr. Daniel Wilson</option>
                </select>
              </div>

              <div className="form-group">
                <label>Appointment Date</label>
                <input type="date" />
              </div>
            </div>

            <div className="form-group">
              <label>Preferred Time</label>

              <div className="time-options">
                <button type="button">09:00 AM</button>
                <button type="button">10:30 AM</button>
                <button type="button">12:00 PM</button>
                <button type="button">03:00 PM</button>
                <button type="button">04:30 PM</button>
                <button type="button">06:00 PM</button>
              </div>
            </div>

            <div className="form-group">
              <label>Additional Message</label>
              <textarea
                rows="4"
                placeholder="Tell us anything we should know..."
              ></textarea>
            </div>

            <button type="button" className="appointment-submit">
              Request Appointment
              <ArrowRight size={17} />
            </button>


          </form>
        </div>
      </section>
    </main>
  );
}

export default BookAppointment;