import { useState } from "react";
import "./Homepage.css";

export default function Homepage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="logo">Lynk</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Connect Your Ideas</h1>
          <p>Share links instantly with beautiful customization</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why Lynk?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Customizable</h3>
            <p>Make your links truly yours with custom colors and designs</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Instantly share and track your links in real-time</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics</h3>
            <p>Get insights into how your audience engages with your content</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Your data is protected with enterprise-grade security</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>Built for Everyone</h2>
        <p>
          Whether you're a creator, marketer, or business owner, Lynk makes it
          easy to share your presence online with a single, beautiful link.
        </p>
        <div className="stats">
          <div className="stat">
            <span className="number">100K+</span>
            <span className="label">Users</span>
          </div>
          <div className="stat">
            <span className="number">10M+</span>
            <span className="label">Links Shared</span>
          </div>
          <div className="stat">
            <span className="number">50+</span>
            <span className="label">Countries</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Stay Updated</h2>
        <p>Get the latest news about new features and updates</p>
        <form onSubmit={handleSubmit} className="newsletter">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {submitted && <p className="success">Thanks for subscribing!</p>}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Lynk. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
