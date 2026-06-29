import { useState } from "react";
import "../index.css";

import PageHero from "../components/Hero";
import Footer from "../components/Footer";

import hero from "../assets/fondoService.png";

const text = {
  en: {
    nav: ["HOME", "ABOUT US", "SERVICES", "GALLERY", "CONTACT"],
    title: "SERVICES",
    subtitle: (
      <>
        Professional fencing solutions
        <br />
        for every property.
      </>
    ),
  },
  es: {
    nav: ["INICIO", "NOSOTROS", "SERVICIOS", "GALERÍA", "CONTACTO"],
    title: "SERVICIOS",
    subtitle: (
      <>
        Soluciones profesionales
        <br />
        para todo tipo de propiedades.
      </>
    ),
  },
};

function Services() {
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
        <section className="services-grid">
          <div className="service-card">
            <h3>Residential Fencing</h3>
            <p>High-quality fencing solutions for homes.</p>
          </div>

          <div className="service-card">
            <h3>Commercial Fencing</h3>
            <p>Reliable fencing for commercial properties.</p>
          </div>

          <div className="service-card">
            <h3>Wood & Wire Fences</h3>
            <p>Durable fences for farms, homes and businesses.</p>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}

export default Services;
