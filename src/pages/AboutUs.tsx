import "../index.css";

import PageHero from "../components/Hero";
import Footer from "../components/Footer";

import fondo from "../assets/fondo.png";
import hero from "../assets/fondoCampo.png";
import story from "../assets/imagen2.jpeg";
import story2 from "../assets/imagen5.jpeg";

import logoCheck from "../assets/logoCheck.png";
import logoPersonas from "../assets/logoPersonas.png";
import logoPresupuesto from "../assets/logoPresupuesto.png";

type PageProps = {
  lang: "en" | "es";
  setLang: (lang: "en" | "es") => void;
};

const text = {
  en: {
    nav: ["HOME", "ABOUT US", "SERVICES", "GALLERY", "CONTACT"],
    title: "ABOUT US",
    subtitle: (
      <>
        A family business committed
        <br />
        to quality, honesty and hard work.
      </>
    ),

    storyTitle: "OUR STORY",
    story1:
      "Urufarr Fences is a family-owned business dedicated to providing high-quality fencing solutions for residential, commercial and rural properties.",
    story2:
      "With years of experience, we take pride in our detailed, reliable work and in building strong, long-lasting relationships with our customers.",

    value1Title: "FULLY INSURED",
    value1Text: "Your property is in safe hands.",

    value2Title: "FAMILY OWNED",
    value2Text: "We treat every project like our own.",

    value3Title: "FREE QUOTES",
    value3Text: "No obligation. Fast and easy.",
  },

  es: {
    nav: ["INICIO", "NOSOTROS", "SERVICIOS", "GALERÍA", "CONTACTO"],
    title: "NOSOTROS",
    subtitle: (
      <>
        Una empresa familiar comprometida
        <br />
        con la calidad, la honestidad y el trabajo duro.
      </>
    ),

    storyTitle: "NUESTRA HISTORIA",
    story1:
      "Urufarr Fences es una empresa familiar dedicada a brindar soluciones de cercado de alta calidad para propiedades residenciales, comerciales y rurales.",
    story2:
      "Con años de experiencia, nos enorgullece nuestro trabajo detallista y confiable, construyendo relaciones sólidas y duraderas con nuestros clientes.",

    value1Title: "TOTALMENTE ASEGURADOS",
    value1Text: "Tu propiedad está en buenas manos.",

    value2Title: "EMPRESA FAMILIAR",
    value2Text: "Tratamos cada proyecto como si fuera nuestro.",

    value3Title: "PRESUPUESTOS GRATIS",
    value3Text: "Sin compromiso. Rápido y sencillo.",
  },
};

function AboutUs({ lang, setLang }: PageProps) {
  const t = text[lang];

  return (
    <>
      <PageHero
        hero={hero}
        lang={lang}
        setLang={setLang}
        nav={t.nav}
        title={t.title}
        subtitle={t.subtitle}
      />

      <main className="page-content">
        <section className="about-story">
          <div className="about-story-text">
            <h2>{t.storyTitle}</h2>
            <div className="page-line" />

            <p>{t.story1}</p>
            <p>{t.story2}</p>
          </div>

          <div className="about-story-image">
            <img src={story} alt="Fence field" />
            <img src={story2} alt="Fence field 2" />
          </div>
        </section>

        <section
          className="about-values"
          style={{
            backgroundImage: `url(${fondo})`,
          }}
        >
          <div className="about-value-card">
            <img src={logoCheck} alt={t.value1Title} />
            <h3>{t.value1Title}</h3>
            <p>{t.value1Text}</p>
          </div>

          <div className="about-value-card">
            <img src={logoPersonas} alt={t.value2Title} />
            <h3>{t.value2Title}</h3>
            <p>{t.value2Text}</p>
          </div>

          <div className="about-value-card">
            <img src={logoPresupuesto} alt={t.value3Title} />
            <h3>{t.value3Title}</h3>
            <p>{t.value3Text}</p>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}

export default AboutUs;
