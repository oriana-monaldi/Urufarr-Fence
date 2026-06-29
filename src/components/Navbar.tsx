import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

type NavbarProps = {
  lang: "en" | "es";
  setLang: React.Dispatch<React.SetStateAction<"en" | "es">>;
  nav: string[];
};

function Navbar({ lang, setLang, nav }: NavbarProps) {
  const links = ["/", "/about", "/services", "/projects", "/contact"];

  return (
    <header className="topbar topbar-overlay">
      <div className="topbar-left">
        <img className="topbar-logo" src={logo} alt="Urufarr Fences" />
      </div>

      <nav className="top-nav">
        {nav.map((item, index) => (
          <Link
            key={index}
            to={links[index]}
            className={index === 0 ? "active" : ""}
          >
            {item}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className="language-button"
        onClick={() => setLang(lang === "en" ? "es" : "en")}
        style={{
          background: "linear-gradient(180deg, #5a3a21 0%, #3a2414 100%)",
          color: "#f6eddc",
          border: "none",
        }}
      >
        ES / EN
      </button>
    </header>
  );
}

export default Navbar;
