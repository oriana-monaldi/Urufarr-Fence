import { useState } from "react";
import "../index.css";

import PageHero from "../components/Hero";
import Footer from "../components/Footer";

import hero from "../assets/imagen1.jpeg";
import contactImage from "../assets/imagen2.jpeg";

const text = {
  en: {
    nav: ["HOME", "ABOUT US", "SERVICES", "GALLERY", "CONTACT"],
    title: "CONTACT US",
    subtitle: (
      <>
        We're here to help.
        <br />
        Get in touch today for a free quote.
      </>
    ),
    call: "CALL US",
    languages: "LANGUAGES",
    email: "EMAIL",
    formTitle: "SEND US A MESSAGE",
    name: "Name",
    phone: "Phone",
    emailPlaceholder: "Email",
    message: "Message",
    button: "SEND MESSAGE",
    freeQuotes: "FREE QUOTES",
    freeText: "No obligation. We'll be happy to answer your questions.",
  },

  es: {
    nav: ["INICIO", "NOSOTROS", "SERVICIOS", "GALERÍA", "CONTACTO"],
    title: "CONTACTO",
    subtitle: (
      <>
        Estamos para ayudarte.
        <br />
        Contactanos para un presupuesto gratuito.
      </>
    ),
    call: "LLAMANOS",
    languages: "IDIOMAS",
    email: "EMAIL",
    formTitle: "ENVIANOS UN MENSAJE",
    name: "Nombre",
    phone: "Teléfono",
    emailPlaceholder: "Correo electrónico",
    message: "Mensaje",
    button: "ENVIAR MENSAJE",
    freeQuotes: "PRESUPUESTOS GRATIS",
    freeText: "Sin compromiso. Estamos para ayudarte.",
  },
};

function Contact() {
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
        <section className="contact-page">
          <div className="contact-info">
            <div className="contact-info-block">
              <h3>{t.call}</h3>

              <p>+1 (770) 470 469-7225</p>
              <p>+1 (770) 786 444-0027</p>
              <p>+1 (770) 678 334-9250</p>
            </div>

            <div className="contact-info-block">
              <h3>{t.languages}</h3>

              <p>🇺🇸 English</p>
              <p>🇪🇸 Español</p>
            </div>

            <div className="contact-info-block">
              <h3>{t.email}</h3>

              <p>urufarrfences.adm@gmail.com</p>
            </div>
          </div>

          <div className="contact-form-card">
            <h2>{t.formTitle}</h2>

            <form>
              <input type="text" placeholder={t.name} />

              <input type="text" placeholder={t.phone} />

              <input type="email" placeholder={t.emailPlaceholder} />

              <textarea placeholder={t.message}></textarea>

              <button>{t.button}</button>
            </form>
          </div>
        </section>

        <section className="contact-bottom-card">
          <div className="quote-box">
            <div>
              <h2>{t.freeQuotes}</h2>
              <p>{t.freeText}</p>
            </div>
          </div>

          <img src={contactImage} alt="Fence" />
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}

export default Contact;
