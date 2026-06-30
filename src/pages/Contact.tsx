import { useState } from "react";
import "../index.css";

import PageHero from "../components/Hero";
import Footer from "../components/Footer";

import hero from "../assets/imagen5.jpeg";
import logoWsp from "../assets/logoWsp.png";
import logoFacebook from "../assets/logoFacebook.png";
import logoTelefono from "../assets/logoTelefono.png";
import logoEmail from "../assets/logoEmail.png";
import logoPersona from "../assets/logoPersona.png";
import logoMensaje from "../assets/logoMensaje.png";

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

function Contact() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const t = text[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "Contacto desde la web";
    const body = `
Nombre: ${name}
Teléfono: ${phone}
Email: ${email}

Mensaje:
${message}
`;

    window.location.href = `mailto:urufarrfences.adm@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

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
              <div className="contact-icon">
                <img src={logoTelefono} alt="Phone" />
              </div>
              <div>
                <h3>{t.call}</h3>
                <p>+1 (770) 470 469-7225</p>
                <p>+1 (770) 786 444-0027</p>
                <p>+1 (770) 678 334-9250</p>
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
              <a href="https://wa.link/b6tx71" target="_blank" rel="noreferrer">
                <img src={logoWsp} alt="WhatsApp" />
                <span>WHATSAPP</span>
              </a>

              <a
                href="https://www.facebook.com/people/Urufarr-Fences-LLC/61590426403039/?rdid=KJ5TC4GrgI2IIPsp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BQUuxg1PP%2F"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logoFacebook} alt="Facebook" />
                <span>FACEBOOK</span>
              </a>
            </div>
          </div>

          <div className="contact-form-card">
            <h2>{t.formTitle}</h2>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="input-box">
                  <img src={logoPersona} alt="" className="input-icon" />
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
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}

export default Contact;
