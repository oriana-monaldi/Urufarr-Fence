import "../index.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import imgNavbar from "../assets/imgNavbar.png";
import logoCasa from "../assets/logoCasa.png";
import logoCerca from "../assets/logoCerca.png";
import logoCheck from "../assets/logoCheck.png";
import logoLupa from "../assets/logoLupa.png";
import logoPersonas from "../assets/logoPersonas.png";
import logoPresupuesto from "../assets/logoPresupuesto.png";
import horses from "../assets/horses.png";
import experience from "../assets/experience.png";
import fondo from "../assets/fondo.png";

type PageProps = {
  lang: "en" | "es";
  setLang: (lang: "en" | "es") => void;
};

const featureItems = {
  en: [
    { icon: logoCasa, title: "RESIDENTIAL & COMMERCIAL FENCING" },
    { icon: logoLupa, title: "DETAILED WORK" },
    { icon: logoCerca, title: "WOOD & WIRE FENCING" },
    { icon: logoCheck, title: "INSTALLATION" },
    { icon: logoPresupuesto, title: "REPAIR" },
    { icon: logoPersonas, title: "CLEANING" },
  ],
  es: [
    { icon: logoCasa, title: "CERCAS RESIDENCIALES Y COMERCIALES" },
    { icon: logoLupa, title: "TRABAJO CUIDADO AL DETALLE" },
    { icon: logoCerca, title: "CERCAS DE MADERA Y ALAMBRE" },
    { icon: logoCheck, title: "INSTALACIÓN" },
    { icon: logoPresupuesto, title: "REPARACIÓN" },
    { icon: logoPersonas, title: "LIMPIEZA" },
  ],
};

const text = {
  en: {
    nav: ["HOME", "ABOUT US", "SERVICES", "GALLERY", "CONTACT"],
    heroTitle: (
      <>
        STRONG FENCES.
        <br />
        LASTING TRUST.
      </>
    ),
    heroSub: "Quality fencing solutions for homes, farms and businesses.",
    quality: "BUILT WITH QUALITY. BUILT TO LAST.",
    landTitle: (
      <>
        LAND & PROPERTY
        <br />
        MAINTENANCE
      </>
    ),
    gardens: "Gardens",
    fields: "Fields",
    clearing: "Land Clearing",
    horseTitle: (
      <>
        SPECIALIZED
        <br />
        FENCING
      </>
    ),
    horseSub: (
      <>
        FOR HORSES, CATTLE,
        <br />
        CORRALS AND MORE
      </>
    ),
    expTitle: "EXPERIENCE. COMMITMENT. RESULTS.",
    exp1: "We take pride in every project, big or small.",
    exp2: "Your satisfaction is our best reward.",
  },
  es: {
    nav: ["INICIO", "NOSOTROS", "SERVICIOS", "GALERÍA", "CONTACTO"],
    heroTitle: (
      <>
        CERCAS FUERTES.
        <br />
        CONFIANZA DURADERA.
      </>
    ),
    heroSub:
      "Soluciones de cercado de calidad para hogares, campos y negocios.",
    quality: "CONSTRUIDO CON CALIDAD. HECHO PARA DURAR.",
    landTitle: (
      <>
        MANTENIMIENTO DE
        <br />
        TERRENOS Y PROPIEDADES
      </>
    ),
    gardens: "Jardines",
    fields: "Campos",
    clearing: "Limpieza de terrenos",
    horseTitle: (
      <>
        CERCADO
        <br />
        ESPECIALIZADO
      </>
    ),
    horseSub: (
      <>
        PARA CABALLOS, GANADO,
        <br />
        CORRALES Y MÁS
      </>
    ),
    expTitle: "EXPERIENCIA. COMPROMISO. RESULTADOS.",
    exp1: "Nos enorgullecemos de cada proyecto, grande o pequeño.",
    exp2: "Tu satisfacción es nuestra mejor recompensa.",
  },
};

function Homes({ lang, setLang }: PageProps) {
  const t = text[lang];

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.72), rgba(0,0,0,0.16)), url(${imgNavbar})`,
        }}
      >
        <Navbar lang={lang} setLang={setLang} nav={t.nav} />

        <div className="page-hero-content">
          <h1>{t.heroTitle}</h1>
          <div className="page-line" />
          <p>{t.heroSub}</p>
        </div>
      </section>

      <div className="app-shell">
        <section className="quality-block">
          <div className="quality-line" />
          <h2>{t.quality}</h2>
          <div className="quality-line" />
        </section>

        <section className="feature-row">
          {featureItems[lang].map((item, index) => (
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
            <h3>{t.landTitle}</h3>

            <ul>
              <li>{t.gardens}</li>
              <li>{t.fields}</li>
              <li>{t.clearing}</li>
            </ul>
          </div>

          <div className="land-images">
            <div className="horse-card">
              <img src={horses} alt="Horse fencing" />

              <div className="horse-text">
                <h2>{t.horseTitle}</h2>
                <p>{t.horseSub}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section">
          <img src={experience} alt="Experience" />

          <div className="experience-content">
            <h2>{t.expTitle}</h2>
            <p>{t.exp1}</p>
            <p>{t.exp2}</p>
          </div>
        </section>
      </div>

      <Footer lang={lang} />
    </>
  );
}

export default Homes;
