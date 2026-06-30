import { useState } from "react";
import "../index.css";

import PageHero from "../components/Hero";
import Footer from "../components/Footer";

import hero from "../assets/footer.png";
import gallery3 from "../assets/imagen1.jpeg";
import gallery2 from "../assets/imagen5.jpeg";
import gallery5 from "../assets/imagenJaula.png";
import gallery1 from "../assets/imagen2.jpeg";
import gallery4 from "../assets/imagen4.jpeg";
import gallery8 from "../assets/imagen8.jpeg";
import gallery7 from "../assets/imagen7.jpeg";
import gallery9 from "../assets/imagen9.png";
import gallery10 from "../assets/imagen10.jpeg";

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
          <div className="gallery-card">
            <img src={gallery7} alt="Gallery 1" />
          </div>

          <div className="gallery-card">
            <img src={gallery2} alt="Gallery 2" />
          </div>

          <div className="gallery-card">
            <img src={gallery1} alt="Gallery 3" />
          </div>

          <div className="gallery-card">
            <img src={gallery4} alt="Gallery 4" />
          </div>

          <div className="gallery-card">
            <img src={gallery3} alt="Gallery 3" />
          </div>

          <div className="gallery-card">
            <img src={gallery10} alt="Gallery 10" />
          </div>

          <div className="gallery-card">
            <img src={gallery9} alt="Gallery 8" />
          </div>

          <div className="gallery-card">
            <img src={gallery8} alt="Gallery 8" />
          </div>

          <div className="gallery-card">
            <img src={gallery5} alt="Gallery 8" />
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}

export default Gallery;
