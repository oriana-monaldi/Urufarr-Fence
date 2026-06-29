import fondoCampo from "../assets/fondoCampo.png";

type FooterProps = {
  lang: "en" | "es";
};

const footerText = {
  en: {
    contactUs: "CONTACT US",
    speak: "WE SPEAK",
    why: "WHY CHOOSE US?",
    items: [
      "Fully Insured",
      "Free Quotes",
      "Family Owned",
      "Detail-Oriented Work",
      "Quality Materials",
      "Reliable & Professional Service",
    ],
  },
  es: {
    contactUs: "CONTACTANOS",
    speak: "HABLAMOS",
    why: "¿POR QUÉ ELEGIRNOS?",
    items: [
      "Totalmente asegurados",
      "Presupuestos gratis",
      "Empresa familiar",
      "Trabajo cuidado al detalle",
      "Materiales de calidad",
      "Servicio confiable y profesional",
    ],
  },
};

function Footer({ lang }: FooterProps) {
  const t = footerText[lang];

  return (
    <section
      className="contact-section"
      style={{
        backgroundImage: `linear-gradient(rgba(20,20,20,.65), rgba(20,20,20,.65)), url(${fondoCampo})`,
      }}
    >
      <div className="contact-column">
        <h4>{t.contactUs}</h4>
        <p>470 469-7225</p>
        <p>786 444-0027</p>
        <p>678 334-9250</p>
        <p>urufarrfences.adm@gmail.com</p>
      </div>

      <div className="contact-column">
        <h4>{t.speak}</h4>

        <div className="language-item">
          <span>🇺🇸</span>
          <span>ENGLISH</span>
        </div>

        <div className="language-item">
          <span>🇪🇸</span>
          <span>ESPAÑOL</span>
        </div>
      </div>

      <div className="contact-column">
        <h4>{t.why}</h4>

        <ul>
          {t.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Footer;
