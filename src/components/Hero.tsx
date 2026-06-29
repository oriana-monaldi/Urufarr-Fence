import Navbar from "./Navbar";

type PageHeroProps = {
  hero: string;
  lang: "en" | "es";
  setLang: React.Dispatch<React.SetStateAction<"en" | "es">>;
  nav: string[];
  title: string;
  subtitle: React.ReactNode;
};

function PageHero({
  hero,
  lang,
  setLang,
  nav,
  title,
  subtitle,
}: PageHeroProps) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,.75), rgba(0,0,0,.2)), url(${hero})`,
      }}
    >
      <Navbar lang={lang} setLang={setLang} nav={nav} />

      <div className="page-hero-content">
        <h1>{title}</h1>
        <div className="page-line" />
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

export default PageHero;
