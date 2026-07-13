import { useState } from "react";
import "../index.css";

import PageHero from "../components/Hero";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

import hero from "../assets/imagen5.jpeg";
import logoWsp from "../assets/logoWsp.png";
import logoFacebook from "../assets/logoFacebook.png";
import logoTelefono from "../assets/logoTelefono.png";
import logoEmail from "../assets/logoEmail.png";
import logoPersona from "../assets/logoPersona.png";
import logoMensaje from "../assets/logoMensaje.png";

type PageProps = {
  lang: "en" | "es";
  setLang: (lang: "en" | "es") => void;
};

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
    formTitle: "GET IN TOUCH",
    name: "Your name",
    phone: "Your phone (optional)",
    emailPlaceholder: "Your email",
    message: "Your message",
    button: "SEND MESSAGE",
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
    name: "Tu nombre",
    phone: "Tu teléfono opcional",
    emailPlaceholder: "Tu email",
    message: "Tu mensaje",
    button: "ENVIAR MENSAJE",
  },
};

function Contact({ lang, setLang }: PageProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const t = text[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "Contacto desde la web";
    const body = `Nombre: ${name}
Teléfono: ${phone}
Email: ${email}

Mensaje:
${message}`;

    window.location.href = `mailto:urufarrfences.adm@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <SEO
        title={
          lang === "en"
            ? "Contact Us | Urufarr Fences"
            : "Contacto | Urufarr Fences"
        }
        description={
          lang === "en"
            ? "Contact Urufarr Fences in Evansville, Indiana for a free fencing quote."
            : "Contactá a Urufarr Fences en Evansville, Indiana para solicitar un presupuesto gratuito."
        }
        canonical="/contact"
        keywords={
          lang === "en"
            ? "Contact Urufarr Fences, Fence Contractor Evansville Indiana, Free Fence Quote"
            : "Contacto Urufarr Fences, Presupuesto de cercas, Cercas Evansville Indiana"
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

      <main className="page-content">
        <section className="contact-page">
          <div className="contact-info">
            <div className="contact-info-block">
              <div className="contact-icon">
                <img src={logoTelefono} alt="Phone" />
              </div>
              <div>
                <h3>{t.call}</h3>
                <p>+1 (812) 480-8561</p>{" "}
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-icon">
                <img src={logoEmail} alt="Languages" />
              </div>
              <div>
                <h3>{t.languages}</h3>
                <p>🇺🇸 English</p>
                <p>🇪🇸 Español</p>
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-icon">
                <img src={logoEmail} alt="Email" />
              </div>
              <div>
                <h3>{t.email}</h3>
                <p>urufarrfences.adm@gmail.com</p>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://wa.link/0t6mqr" target="_blank" rel="noreferrer">
                <img src={logoWsp} alt="WhatsApp" />
                <span>WHATSAPP</span>
              </a>

              <a
                href="https://www.facebook.com/people/Urufarr-Fences-LLC/61590426403039/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logoFacebook} alt="Facebook" />
                <span>FACEBOOK</span>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <h2>{t.formTitle}</h2>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="input-box">
                    <img
                      src={logoPersona}
                      alt=""
                      className="input-icon person-icon"
                    />
                    <input
                      type="text"
                      placeholder={t.name}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="input-box">
                    <img src={logoEmail} alt="" className="input-icon" />
                    <input
                      type="email"
                      placeholder={t.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="input-box">
                  <img src={logoTelefono} alt="" className="input-icon" />
                  <input
                    type="tel"
                    placeholder={t.phone}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="input-box textarea-box">
                  <img
                    src={logoMensaje}
                    alt=""
                    className="input-icon textarea-icon"
                  />
                  <textarea
                    placeholder={t.message}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button type="submit">{t.button}</button>
              </form>
            </div>
            <div className="contact-map">
              <iframe
                title="Urufarr Fences Location"
                src="https://www.google.com/maps?q=Evansville,+Indiana,+USA&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}

export default Contact;
