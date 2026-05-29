import { useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [username, setUsername] = useState("john_doe");
  const [email, setEmail] = useState("john@example.com");
  const [bio, setBio] = useState("Digital creator & link enthusiast");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile">
      {/* Header */}
      <header className="header">
        <div className="logo">Lynk</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
        </nav>
      </header>

      {/* Profile Section */}
      <section className="profile-content">
        <div className="profile-header">
          <div className="avatar">
            <img src="https://via.placeholder.com/120" alt="User avatar" />
          </div>
          <div className="profile-info">
            <h1>{username}</h1>
            <p className="email">{email}</p>
            <p className="bio">{bio}</p>
          </div>
        </div>

        {isEditing ? (
          <form className="edit-form">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows="4"
              />
            </div>
            <button type="button" className="save-button" onClick={handleSave}>
              Save Changes
            </button>
          </form>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        )}
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2>Your Stats</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">24</span>
            <span className="stat-label">Links Created</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">1.2K</span>
            <span className="stat-label">Clicks</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">89%</span>
            <span className="stat-label">CTR</span>
          </div>
        </div>
      </section>

      {/* Settings Section */}
      <section className="settings-section">
        <h2>Settings</h2>
        <div className="settings-list">
          <div className="setting-item">
            <span>Dark Mode</span>
            <input type="checkbox" />
          </div>
          <div className="setting-item">
            <span>Email Notifications</span>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="setting-item">
            <span>Public Profile</span>
            <input type="checkbox" defaultChecked />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Lynk. All rights reserved.</p>
      </footer>
    </div>
  );
}
