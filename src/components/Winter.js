import { useState } from 'react';
import { Calendar, Mail, Bell, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Winter.css';

export default function WinterCollectionPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const winterYear = currentDate.getMonth() >= 9 ? currentYear + 1 : currentYear;
  const collectionDate = new Date(winterYear, 9, 15); // Oct 15
  const daysRemaining = Math.ceil((collectionDate - currentDate) / (1000 * 60 * 60 * 24));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setIsSubscribed(true);
  };

  return (
    <div className="page-container">
      <main className="main-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-flex">
              <div className="hero-text">
                <div className="hero-badge">
                  <span className="badge">
                    <Snowflake className="icon" />
                    Coming Soon
                  </span>
                </div>
                <h2 className="hero-title">Our Winter Collection is on the Way!</h2>
                <p className="hero-description">
                  Stay cozy this winter with our upcoming collection of stylish and comfortable winter wear.
                </p>
                <div className="hero-date">
                  <div className="date-badge">
                    <Calendar className="icon1" />
                    Available in {daysRemaining} days
                  </div>
                </div>
              </div>
              <div className="hero-image-wrapper">
                <div className="image-box">
                  <img src={`${process.env.PUBLIC_URL}/images/luxecat.webp`} alt="Winter Collection Preview" className="preview-image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Cards */}
        <section className="cards-section">
          <h2 className="section-title">Preview Our Winter Collection</h2>
          <div className="cards-grid">
            {[
              {
                title: 'Premium Winter Coats',
                desc: 'Our new line of insulated winter coats combines fashion with function. Stay warm without compromising on style.',
                image: 'images/images (3).jpeg',
              },
              {
                title: 'Cozy Accessories',
                desc: 'Complete your winter look with our matching accessories. Scarves, gloves, and hats designed for maximum comfort.',
                image: 'images/WFM34629.webp',
              },
              {
                title: 'Winter Footwear',
                desc: 'Step confidently through snow and ice with our waterproof, insulated boots that provide both grip and style.',
                image: 'images/download (1).jpeg',
              },
            ].map((item, i) => (
              <div className="card" key={i}>
                <div className="card-content">
                  <div className="card-image-box">
                    <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt={item.title} className="card-image" />
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notification Signup */}
        <section className="notification-section">
          <div className="notification-content">
            <div className="notification-text">
              <h2 className="notification-title">Get notified when our Winter Collection launches</h2>
              <p className="notification-desc">
                Be the first to shop our new winter styles. Sign up for notifications and get early access to our winter collection.
              </p>
            </div>
            <div className="notification-form">
              {!isSubscribed ? (
                <div className="form-wrapper">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-email"
                  />
                  <Link to="/Winter" className="button-submit" onClick={handleSubmit}>
                    Winter
                  </Link>
                </div>
              ) : (
                <div className="subscribed-box">
                  <Bell className="icon-large" />
                  <p className="subscribed-text">
                    You're all set! We'll notify you when our winter collection is available.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="faq-box">
            <h3 className="faq-title">Frequently Asked Questions</h3>
            <dl className="faq-list">
              <div>
                <dt className="faq-q">When will the winter collection be available?</dt>
                <dd className="faq-a">
                  Our winter collection is scheduled to launch on October 15th, {winterYear}.
                </dd>
              </div>
              <div>
                <dt className="faq-q">What types of items will be included?</dt>
                <dd className="faq-a">
                  Our winter collection will include coats, jackets, sweaters, thermal wear, boots, and accessories.
                </dd>
              </div>
              <div>
                <dt className="faq-q">Will there be any pre-launch discounts?</dt>
                <dd className="faq-a">
                  Yes! Subscribers will receive an early-access discount code for the first week of the launch.
                </dd>
              </div>
              <div>
                <dt className="faq-q">Can I pre-order items?</dt>
                <dd className="faq-a">
                  Pre-orders will be available for select items two weeks before launch. Join the list to get notified.
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </div>
  );
}
