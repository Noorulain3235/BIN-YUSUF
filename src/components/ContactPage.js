import { useState } from 'react';
import './ContactPage.css';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Contact Us</h1>
      </header>

      <main className="main-content">
        <div className="contact-layout">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-group">
              <InfoItem icon={<Phone />} label="Phone" value="+1 (555) 123-4567" />
              <InfoItem icon={<Mail />} label="Email" value="support@yourshopname.com" />
              <InfoItem icon={<MapPin />} label="Address" value="123 Shopping Street, Commerce City, ST 12345, USA" />
              <InfoItem icon={<MessageSquare />} label="Customer Service Hours" value="Mon-Fri: 9am–6pm\nSat: 10am–4pm\nSun: Closed" />
            </div>

            <div className="social-media">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <SocialLink type="Facebook" />
                <SocialLink type="Instagram" />
                <SocialLink type="Twitter" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            {!submitted ? (
              <>
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <InputField label="Your Name" name="name" value={formData.name} onChange={handleChange} />
                    <InputField label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                  </div>
                  <InputField label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                  <TextAreaField label="Message" name="message" value={formData.message} onChange={handleChange} />
                  <button type="submit" className="submit-button">
                    <Send className="icon" /> Send Message
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon">&#10003;</div>
                <h3>Message Sent!</h3>
                <p>Thank you for your message. We’ll get back to you shortly.</p>
                <button onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}>
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <FAQItem question="How long does shipping take?" answer="Standard shipping takes 3–5 business days within the continental US." />
          <FAQItem question="What is your return policy?" answer="We offer a 30-day return policy for most items. Items must be in original condition with tags attached." />
          <FAQItem question="Do you ship internationally?" answer="Yes, we ship to most countries. International shipping takes 7–21 business days." />
          <FAQItem question="How can I track my order?" answer="Once shipped, you'll receive a tracking number via email and in your account." />
        </div>
      </main>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="info-item">
      <div className="icon">{icon}</div>
      <div className="text">
        <p className="label">{label}</p>
        <p className="value">{value}</p>
      </div>
    </div>
  );
}

function InputField({ label, name, type = 'text', value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} value={value} onChange={onChange} required />
    </div>
  );
}

function TextAreaField({ label, name, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} rows="5" value={value} onChange={onChange} required />
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="faq-item">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}

function SocialLink({ type }) {
  return (
    <a href="#" className={`social-link ${type.toLowerCase()}`} aria-label={type}>
      {type}
    </a>
  );
}
