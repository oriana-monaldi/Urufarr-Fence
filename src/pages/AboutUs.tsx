import { useState } from "react";
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
  },
};

function AboutUs() {
  const [lang, setLang] = useState<"en" | "es">("en");
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
            <img src={logoCheck} alt="Fully insured" />
            <h3>FULLY INSURED</h3>
            <p>Your property is in safe hands.</p>
          </div>

          <div className="about-value-card">
            <img src={logoPersonas} alt="Family owned" />
            <h3>FAMILY OWNED</h3>
            <p>We treat every project like our own.</p>
          </div>

          <div className="about-value-card">
            <img src={logoPresupuesto} alt="Free quotes" />
            <h3>FREE QUOTES</h3>
            <p>No obligation. Fast and easy.</p>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}

export default AboutUs;
