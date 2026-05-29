import logo from "../assets/Frame 125.svg";
import soccerIcon from "../assets/soccer.svg";
import runIcon from "../assets/tabler_run.svg";
import padelIcon from "../assets/Vector.svg";
import basketballIcon from "../assets/carbon_basketball.svg";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <header className="topbar">
        <div className="brand">
          <img className="brand-logo" src={logo} alt="Lynk logo" />
          <span className="brand-name">Lynk</span>
        </div>
        <div className="top-actions">
          <button className="icon-button" aria-label="Notifikationer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 3c-2.8 0-5 2.2-5 5v2.6c0 .7-.3 1.3-.8 1.8l-1.2 1.2h14l-1.2-1.2c-.5-.5-.8-1.1-.8-1.8V8c0-2.8-2.2-5-5-5z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M9.5 19a2.5 2.5 0 0 0 5 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="avatar">B</div>
        </div>
      </header>

      <div className="search-row">
        <label className="search" aria-label="Søg efter events">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M11 4a7 7 0 1 0 4.3 12.6l3.6 3.6 1.4-1.4-3.6-3.6A7 7 0 0 0 11 4z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
          <input type="text" placeholder="Søg efter events..." />
        </label>
      </div>

      <section className="hero reveal">
        <div className="hero-media">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-eyebrow">Velkommen tilbage</p>
            <h1>Benjamin</h1>
            <p className="hero-sub">Se populære aktiviteter og events nær dig</p>
            <button className="hero-cta">Udforsk events</button>
          </div>
        </div>
      </section>

      <section className="section reveal delay-1">
        <div className="section-head">
          <h2>Kategorier</h2>
          <button className="ghost-link">Se alle</button>
        </div>
        <div className="category-row">
          <button className="category-card">
            <span className="category-icon">
              <img src={soccerIcon} alt="Fodbold" />
            </span>
            Fodbold
          </button>
          <button className="category-card">
            <span className="category-icon">
              <img src={runIcon} alt="Løb" />
            </span>
            Løb
          </button>
          <button className="category-card">
            <span className="category-icon">
              <img src={padelIcon} alt="Padel" />
            </span>
            Padel
          </button>
          <button className="category-card">
            <span className="category-icon">
              <img src={basketballIcon} alt="Basketball" />
            </span>
            Basket
          </button>
        </div>
      </section>

      <section className="section reveal delay-2">
        <div className="section-head">
          <h2>Nærliggende events</h2>
          <button className="ghost-link">Se alle</button>
        </div>
        <div className="event-row">
          <article className="event-card">
            <div className="event-media media-lake">
              <span className="media-chip">4 / 10</span>
            </div>
            <div className="event-body">
              <h3>Løbetur - 10 km</h3>
              <p>Aarhus</p>
              <p className="muted">Man 26. maj • 18:30</p>
              <span className="tag">Løb</span>
            </div>
          </article>
          <article className="event-card">
            <div className="event-media media-court">
              <span className="media-chip">5 / 22</span>
            </div>
            <div className="event-body">
              <h3>Fodboldhygge</h3>
              <p>Aarhus</p>
              <p className="muted">Lør 24. maj • 13:00</p>
              <span className="tag">Fodbold</span>
            </div>
          </article>
          <article className="event-card">
            <div className="event-media media-padel">
              <span className="media-chip">3 / 14</span>
            </div>
            <div className="event-body">
              <h3>Padel for alle</h3>
              <p>Aarhus</p>
              <p className="muted">Ons 28. maj • 17:45</p>
              <span className="tag">Padel</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section reveal delay-3">
        <div className="section-head">
          <h2>Sådan virker det</h2>
        </div>
        <div className="steps">
          <article className="step">
            <span className="step-index">1</span>
            <h3>Find</h3>
            <p>Udforsk aktiviteter der passer til dig</p>
          </article>
          <article className="step">
            <span className="step-index">2</span>
            <h3>Join</h3>
            <p>Tilmeld dig og mød nye mennesker</p>
          </article>
          <article className="step">
            <span className="step-index">3</span>
            <h3>Vær med</h3>
            <p>Deltag og bliv en del af fællesskabet</p>
          </article>
        </div>
      </section>

      <section className="section reveal delay-4">
        <div className="section-head">
          <h2>Vores community</h2>
        </div>
        <div className="community-grid">
          <article className="stat-card">
            <p className="stat-value">3.287</p>
            <p className="stat-label">Aktive brugere i denne uge</p>
          </article>
          <article className="stat-card">
            <p className="stat-value">82</p>
            <p className="stat-label">Aktiviteter oprettet i dag</p>
          </article>
          <article className="stat-card">
            <p className="stat-value">4.9 / 5</p>
            <p className="stat-label">Gennemsnitlige bedømmelse</p>
          </article>
        </div>
        <div className="quote-card">
          <div className="quote-user">
            <div className="quote-avatar">JT</div>
            <div>
              <p className="quote-name">Jeanette</p>
              <p className="quote-role">Sofie, Aarhus</p>
            </div>
          </div>
          <p className="quote-text">
            "Jeg fandt hurtigt nogle at spille padel med, og er nu 2 venner
            rigere."
          </p>
        </div>
      </section>

      <section className="section reveal delay-5">
        <div className="section-head">
          <h2>Populært lige nu</h2>
          <button className="ghost-link">Se alle</button>
        </div>
        <div className="event-row">
          <article className="event-card">
            <div className="event-media media-city">
              <span className="media-chip">10k • 05:00</span>
            </div>
            <div className="event-body">
              <h3>Morning Run</h3>
              <p>Aarhus</p>
              <p className="muted">Løb</p>
            </div>
          </article>
          <article className="event-card">
            <div className="event-media media-field">
              <span className="media-chip">11v11</span>
            </div>
            <div className="event-body">
              <h3>Fodbold på kunst</h3>
              <p>Aarhus</p>
              <p className="muted">Fodbold</p>
            </div>
          </article>
          <article className="event-card">
            <div className="event-media media-court-bright">
              <span className="media-chip">Mangler 1 spiller</span>
            </div>
            <div className="event-body">
              <h3>Padel match</h3>
              <p>Aarhus</p>
              <p className="muted">Padel</p>
            </div>
          </article>
        </div>
      </section>

      <nav className="bottom-nav" aria-label="Bundmenu">
        <button className="nav-item active">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle
              cx="12"
              cy="12"
              r="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.64"
            />
            <path
              d="M12 7v5l3 3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.64"
              strokeLinecap="round"
            />
          </svg>
          <span className="nav-label">Udforsk</span>
        </button>
        <button className="nav-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect
              x="4"
              y="6"
              width="16"
              height="12"
              rx="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.64"
            />
            <path
              d="M8 4v4M16 4v4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.64"
              strokeLinecap="round"
            />
          </svg>
          <span className="nav-label">Mine events</span>
        </button>
        <button className="nav-item fab" aria-label="Opret event">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 6v12M6 12h12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.64"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button className="nav-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 6h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H10l-5 4v-4H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.64"
              strokeLinejoin="round"
            />
          </svg>
          <span className="nav-label">Beskeder</span>
        </button>
        <button className="nav-item">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle
              cx="12"
              cy="9"
              r="3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.64"
            />
            <path
              d="M5 19c1.8-3 11.2-3 14 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.64"
              strokeLinecap="round"
            />
          </svg>
          <span className="nav-label">Profil</span>
        </button>
      </nav>
    </div>
  );
}
