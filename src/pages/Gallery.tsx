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

type PageProps = {
  lang: "en" | "es";
  setLang: (lang: "en" | "es") => void;
};

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

function Gallery({ lang, setLang }: PageProps) {
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
          {[
            gallery7,
            gallery2,
            gallery1,
            gallery4,
            gallery3,
            gallery10,
            gallery9,
            gallery8,
            gallery5,
          ].map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}

export default Gallery;
