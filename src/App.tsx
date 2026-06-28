import "./index.css";

import logo from "./assets/logo.png";
import imgNavbar from "./assets/imgNavbar.png";
import horses from "./assets/horses.png";
import logoCasa from "./assets/logoCasa.png";
import logoCerca from "./assets/logoCerca.png";
import logoCheck from "./assets/logoCheck.png";
import logoLupa from "./assets/logoLupa.png";
import logoPersonas from "./assets/logoPersonas.png";
import logoPresupuesto from "./assets/logoPresupuesto.png";
import experience from "./assets/experience.png";
import fondo from "./assets/fondo.png";

const navItems = ["HOME", "ABOUT US", "SERVICES", "PROJECTS", "CONTACT"];

const featureItems = [
  { icon: logoCasa, title: "RESIDENTIAL & COMMERCIAL FENCING" },
  { icon: logoLupa, title: "DETAIL-ORIENTED WORK" },
  { icon: logoCerca, title: "WOOD & WIRE FENCING" },
  { icon: logoCheck, title: "INSTALLATION" },
  { icon: logoPresupuesto, title: "REPAIR" },
  { icon: logoPersonas, title: "CLEANING" },
];

const whyChooseItems = [
  "Fully Insured",
  "Free Quotes",
  "Family Owned",
  "Detail-Oriented Work",
  "Quality Materials",
  "Reliable & Professional Service",
];

function App() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.72), rgba(0,0,0,0.16)), url(${imgNavbar})`,
        }}
      >
        <header className="topbar topbar-overlay">
          <div className="topbar-left">
            <img className="topbar-logo" src={logo} alt="Urufarr Fences" />
          </div>

          <nav className="top-nav">
            {navItems.map((item, index) => (
              <a key={index} className={item === "HOME" ? "active" : ""}>
                {item}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-inner">
          <div className="hero-copy">
            <h1>
              STRONG FENCES.
              <br />
              LASTING TRUST.
            </h1>

            <p className="hero-sub">
              Quality fencing solutions for homes, farms and businesses.
            </p>
          </div>
        </div>
      </section>

      <div className="app-shell">
        <section className="quality-block">
          <div className="quality-line" />
          <h2>BUILT WITH QUALITY. BUILT TO LAST.</h2>
          <div className="quality-line" />
        </section>

        <section className="feature-row">
          {featureItems.map((item, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">
                <img src={item.icon} alt={item.title} />
              </div>

              <p>{item.title}</p>
            </div>
          ))}
        </section>

        <section className="land-section">
          <div
            className="land-panel"
            style={{
              backgroundImage: `linear-gradient(rgba(45,28,12,.78), rgba(45,28,12,.78)), url(${fondo})`,
            }}
          >
            <div className="land-panel-header">
              <div>
                <h3>LAND & PROPERTY MAINTENANCE</h3>
              </div>
            </div>

            <ul>
              <li>Gardens</li>
              <li>Fields</li>
              <li>Land Clearing</li>
            </ul>
          </div>

          <div className="land-images">
            <div className="horse-card">
              <img src={horses} alt="Horse fencing" />

              <div className="horse-text">
                <h2>
                  SPECIALIZED
                  <br />
                  FENCING
                </h2>

                <p>
                  FOR HORSES, CATTLE,
                  <br />
                  CORRALS AND MORE
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section">
          <img src={experience} alt="Experience" />

          <div className="experience-content">
            <h2>EXPERIENCE. COMMITMENT. RESULTS.</h2>

            <p>We take pride in every project, big or small.</p>

            <p>Your satisfaction is our best reward.</p>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-column">
            <h4>CONTACT US</h4>
            <p>470 469-7225</p>
            <p>786 444-0027</p>
            <p>678 334-9250</p>
            <p>urufarrfences.adm@gmail.com</p>
          </div>

          <div className="contact-column">
            <h4>WE SPEAK</h4>

            <div className="language-item">
              <span>🇺🇸</span>
              <span>ENGLISH</span>
            </div>

            <div className="language-item">
              <span>🇪🇸</span>
              <span>ESPAÑOL</span>
            </div>
          </div>

          <div className="contact-column">
            <h4>WHY CHOOSE US?</h4>

            <ul>
              {whyChooseItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="page-footer">
          <span>URUFARR FENCES</span>
          <span>STRONG FENCES. LASTING TRUST.</span>
        </footer>
      </div>
    </>
  );
}

export default App;
