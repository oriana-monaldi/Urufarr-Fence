import { useEffect, useState } from "react";
import "../index.css";

import AOS from "aos";
import "aos/dist/aos.css";

import PageHero from "../components/Hero";
import Footer from "../components/Footer";

import hero from "../assets/fondoService.png";

import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

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
    servicesTitle: "OUR SERVICES",
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
    servicesTitle: "NUESTROS SERVICIOS",
  },
};

function Services() {
  const [lang, setLang] = useState<"en" | "es">("en");

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });
  }, []);

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

      <section className="quality-block">
        <div className="quality-line" />
        <h2>{t.servicesTitle}</h2>
        <div className="quality-line" />
      </section>

      <section className="services-grid">
        <div className="service-item" data-aos="fade-up">
          <img src={service1} alt="Installation" />
          <span className="service-title">
            {lang === "en" ? "INSTALLATION" : "INSTALACIÓN"}
          </span>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="200">
          <img src={service2} alt="Repair" />
          <span className="service-title">
            {lang === "en" ? "REPAIR" : "REPARACIÓN"}
          </span>
        </div>

        <div className="service-item" data-aos="fade-up" data-aos-delay="400">
          <img src={service3} alt="Cleaning" />
          <span className="service-title">
            {lang === "en" ? "CLEANING" : "LIMPIEZA"}
          </span>
        </div>
      </section>

      <Footer lang={lang} />
    </>
  );
}

export default Services;
