import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

type NavbarProps = {
  lang: "en" | "es";
  setLang: React.Dispatch<React.SetStateAction<"en" | "es">>;
  nav: string[];
};

function Navbar({ lang, setLang, nav }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = ["/", "/about", "/services", "/gallery", "/contact"];

  return (
    <header className="topbar topbar-overlay">
      <div className="topbar-logo-wrapper">
        <img className="topbar-logo" src={logo} alt="Urufarr Fences" />
      </div>

      <nav className={`top-nav ${open ? "open" : ""}`}>
        {nav.map((item, index) => (
          <Link
            key={index}
            to={links[index]}
            className={location.pathname === links[index] ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="navbar-actions">
        <button
          type="button"
          className="language-button desktop-language"
          onClick={() => setLang(lang === "en" ? "es" : "en")}
        >
          ES / EN
        </button>

        <button
          type="button"
          className="hamburger-button"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Navbar;
