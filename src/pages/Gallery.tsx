import { useState } from "react";
import "../index.css";

import PageHero from "../components/Hero";
import Footer from "../components/Footer";

import hero from "../assets/imagen5.jpeg";

const text = {
  en: {
    nav: ["HOME", "ABOUT US", "SERVICES", "GALLERY", "CONTACT"],
    title: "GALLERY",
    subtitle: (
      <>
        Explore some of our recent
        <br />
        fencing and maintenance projects.
      </>
    ),
  },
  es: {
    nav: ["INICIO", "NOSOTROS", "SERVICIOS", "GALERÍA", "CONTACTO"],
    title: "GALERÍA",
    subtitle: (
      <>
        Conocé algunos de nuestros
        <br />
        trabajos más recientes.
      </>
    ),
  },
};

function Gallery() {
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
        <section className="gallery-grid">
          <div className="gallery-card">Gallery Image</div>
          <div className="gallery-card">Gallery Image</div>
          <div className="gallery-card">Gallery Image</div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}

export default Gallery;
