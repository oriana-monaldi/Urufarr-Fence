import { useEffect } from "react";
import "../index.css";

import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../components/SEO";

import PageHero from "../components/Hero";
import Footer from "../components/Footer";

import hero from "../assets/fondoService.png";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

type PageProps = {
  lang: "en" | "es";
  setLang: (lang: "en" | "es") => void;
};

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
    intro:
      "We provide high-quality fencing services with durable materials, detailed work and reliable results.",
    benefits: [
      "Fully insured",
      "Family owned",
      "Quality materials",
      "Free quotes",
    ],
    whyTitle: "WHY CHOOSE US?",
    whyText:
      "Every project is completed with care, precision and a commitment to long-lasting results.",
    whyItems: [
      "Experienced and skilled team",
      "Clean and detailed work",
      "Residential, commercial and rural fencing",
      "Reliable service from start to finish",
    ],
    processTitle: "OUR PROCESS",
    process: ["Contact us", "Free quote", "We get to work", "Project complete"],
    ctaTitle: "READY TO UPGRADE YOUR PROPERTY?",
    ctaButton: "GET A FREE QUOTE",
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
    intro:
      "Brindamos servicios de cercado de alta calidad con materiales duraderos, trabajo detallado y resultados confiables.",
    benefits: [
      "Totalmente asegurados",
      "Empresa familiar",
      "Materiales de calidad",
      "Presupuestos gratis",
    ],
    whyTitle: "¿POR QUÉ ELEGIRNOS?",
    whyText:
      "Cada proyecto se realiza con cuidado, precisión y compromiso para lograr resultados duraderos.",
    whyItems: [
      "Equipo con experiencia",
      "Trabajo limpio y detallado",
      "Cercas residenciales, comerciales y rurales",
      "Servicio confiable de principio a fin",
    ],
    processTitle: "NUESTRO PROCESO",
    process: [
      "Contactanos",
      "Presupuesto gratis",
      "Empezamos el trabajo",
      "Proyecto terminado",
    ],
    ctaTitle: "¿LISTO PARA MEJORAR TU PROPIEDAD?",
    ctaButton: "PEDIR PRESUPUESTO",
  },
};

function Services({ lang, setLang }: PageProps) {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out" });
  }, []);

  const t = text[lang];

  return (
    <>
      <SEO
        title={
          lang === "en"
            ? "About Us | Urufarr Fences"
            : "Nosotros | Urufarr Fences"
        }
        description={
          lang === "en"
            ? "Learn more about Urufarr Fences, a family-owned fencing company proudly serving Evansville, Indiana. We specialize in residential, commercial, and agricultural fencing with quality craftsmanship and reliable service."
            : "Conocé más sobre Urufarr Fences, una empresa familiar que brinda servicios de cercado en Evansville, Indiana, especializada en cercas residenciales, comerciales y rurales con calidad y compromiso."
        }
        canonical="/about"
        keywords={
          lang === "en"
            ? "About Urufarr Fences, Family Owned Fence Company, Evansville, Indiana, Fence Contractor Evansville, Residential Fencing, Commercial Fencing, Agricultural Fencing"
            : "Empresa de cercas, Empresa familiar, Evansville, Indiana, Cercas residenciales, Cercas comerciales, Cercas rurales"
        }
      />
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

      <p className="services-intro">{t.intro}</p>

      <section className="services-grid">
        {[service1, service2, service3].map((img, index) => (
          <div
            className="service-item"
            data-aos="fade-up"
            data-aos-delay={index * 200}
            key={index}
          >
            <img src={img} alt="" />
            <span className="service-title">
              {index === 0
                ? lang === "en"
                  ? "INSTALLATION"
                  : "INSTALACIÓN"
                : index === 1
                  ? lang === "en"
                    ? "REPAIR"
                    : "REPARACIÓN"
                  : lang === "en"
                    ? "CLEANING"
                    : "LIMPIEZA"}
            </span>
          </div>
        ))}
      </section>

      <section className="services-benefits">
        {t.benefits.map((item, index) => (
          <div className="services-benefit" key={index}>
            <span>✓</span>
            <p>{item}</p>
          </div>
        ))}
      </section>

      <section className="services-why">
        <div>
          <h2>{t.whyTitle}</h2>
          <p>{t.whyText}</p>
          <ul>
            {t.whyItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <img src={service1} alt="Fence service" />
      </section>

      <section className="services-process">
        <h2>{t.processTitle}</h2>
        <div className="services-process-grid">
          {t.process.map((item, index) => (
            <div className="services-process-card" key={index}>
              <span>{index + 1}</span>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <h2>{t.ctaTitle}</h2>
        <a href="/contact">{t.ctaButton}</a>
      </section>

      <Footer lang={lang} />
    </>
  );
}

export default Services;
