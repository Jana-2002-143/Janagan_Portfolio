import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './Aboutme.css'

function Aboutme() {
  return (
    <div className="Aboutme">

      {/* Title */}
      <div className="section-title">
        <h1 className="main-title">Get In Touch</h1>
        <p className="main-subtitle">
          Ready to collaborate on exciting projects? Let's connect and discuss opportunities!
        </p>
      </div>

      <div className="info-wrapper">

        {/* Contact Info */}
        <div className="card info-card">
          <h2 className="card-title">Contact Information</h2>

          <div className="info-list">

            <div className="info-item">
              <MdEmail className="info-icon" />
              <div>
                <p className="info-label">Email</p>
                <a className="info-value" href="mailto:janaganjkl930@gmail.com">
                  janaganjkl930@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <div>
                <p className="info-label">Phone</p>
                <a className="info-value" href="tel:+919943653771">
                  +91 9943653771
                </a>
              </div>
            </div>

            <div className="info-item">
              <FaLocationDot className="info-icon" />
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">Pudukkottai, India</p>
              </div>
            </div>

          </div>
        </div>

        {/* Language Section */}
        <div className="card lang-card">
          <h3 className="card-title">Languages</h3>

          <div className="lang-item">
            <p className="lang-name">Tamil</p>
            <p className="lang-type">Native Speaker</p>
          </div>

          <div className="lang-item">
            <p className="lang-name">English</p>
            <p className="lang-type">Working Knowledge</p>
          </div>
        </div>
      </div>

      {/* Social & Final CTA */}
      <div className="info-wrapper">

        <div className="card info-card">
          <h2 className="card-title">Social & Professional Links</h2>

          <div className="social-list">
            <div className="social-item">
              <FaGithub className="info-icon" />
              <div className="social-text">
                <h3 className="social-title">GitHub</h3>
                <a className="social-link" href="https://github.com/Jana-2002-143">
                  Visit
                </a>
                <p className="social-desc">Check out my repositories and projects</p>
              </div>
            </div>

            <div className="social-item">
              <FaLinkedin className="info-icon" />
              <div className="social-text">
                <h3 className="social-title">LinkedIn</h3>
                <a className="social-link" href="https://www.linkedin.com/in/janagan-l-570322339">
                  Visit
                </a>
                <p className="social-desc">Connect with me professionally</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="card final-card">
          <h3 className="final-title">Ready to Work Together?</h3>
          <p className="final-desc">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <a className="final-button" href="mailto:janaganjkl930@gmail.com">
            <MdEmail className="info-icon" /> Send Message
          </a>
        </div>
      </div>

    </div>
  );
}

export default Aboutme;
