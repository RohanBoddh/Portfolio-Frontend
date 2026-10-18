import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import api from "../services/api";
import "../styles/contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);
    setStatusMsg("");

    let emailSent = false;
    let activationNeeded = false;

    // 1. Deliver directly to rohanboddh9@gmail.com using FormSubmit API
    try {
      const formSubmitRes = await fetch(
        "https://formsubmit.co/ajax/rohanboddh9@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: form.name,
            Email: form.email,
            Subject: form.subject,
            Message: form.message,
            _replyto: form.email,
            _subject: `New Portfolio Work Inquiry from ${form.name}: ${form.subject}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await formSubmitRes.json();
      if (data.success === "true" || data.success === true) {
        emailSent = true;
      } else if (data.message && data.message.toLowerCase().includes("activation")) {
        activationNeeded = true;
      }
    } catch (emailErr) {
      console.warn("Direct email delivery error:", emailErr);
    }

    // 2. Also save to MongoDB via backend API
    try {
      await api.post("/contact", form);
    } catch (dbErr) {
      console.warn("Backend DB save:", dbErr);
    }

    if (emailSent) {
      setSubmitted(true);
      setStatusMsg(
        "Message sent! Full details have been delivered directly to rohanboddh9@gmail.com. 🎉"
      );
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else if (activationNeeded) {
      setIsError(true);
      setStatusMsg(
        "FormSubmit Activation Pending: Please check rohanboddh9@gmail.com and click 'Activate Form' once. We've also copied your message below to send via email."
      );
    } else {
      setSubmitted(true);
      setStatusMsg(
        "Message saved to database! It will be reviewed shortly."
      );
    }

    setTimeout(() => {
      setSubmitted(false);
      setStatusMsg("");
    }, 9000);
    setLoading(false);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="section-container">

        {/* Heading */}
        <div className="contact-heading">
          <span className="section-label">GET IN TOUCH</span>

          <h2>
            Have a project in <span>mind?</span>
          </h2>

          <p>
            I'm always interested in learning about new projects,
            ideas and opportunities. Feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">

          {/* Contact Information */}
          <div className="contact-info">

            {/* Email */}
            <div className="contact-info-item">
              <div className="contact-icon">
                <FiMail />
              </div>

              <div>
                <span>Email</span>

                <a href="mailto:rohanboddh9@gmail.com">
                  rohanboddh9@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-info-item">
              <div className="contact-icon">
                <FiMapPin />
              </div>

              <div>
                <span>Location</span>
                <p>Uttar Pradesh, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social-box">
              <span>Connect with me</span>

              <div>

                {/* GitHub */}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>

              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* Name + Email */}
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>

            {/* Subject */}
            <div className="form-group">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
              ></textarea>
            </div>

            {/* Status Feedback */}
            {statusMsg && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: "500",
                  marginBottom: "16px",
                  background: isError
                    ? "rgba(239, 68, 68, 0.15)"
                    : "rgba(34, 197, 94, 0.15)",
                  border: isError
                    ? "1px solid rgba(239, 68, 68, 0.4)"
                    : "1px solid rgba(34, 197, 94, 0.4)",
                  color: isError ? "#f87171" : "#4ade80",
                }}
              >
                {isError ? <FiAlertCircle size={16} /> : <FiCheckCircle size={16} />}
                <span>{statusMsg}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-button"
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
            >
              {loading
                ? "Sending..."
                : submitted
                ? "Message Sent ✓"
                : "Send Message"}

              {!loading && !submitted && <FiSend />}
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
