import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Homes from "./pages/Homes";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  const [lang, setLang] = useState<"en" | "es">(() => {
    return (localStorage.getItem("lang") as "en" | "es") || "en";
  });

  const changeLang = (newLang: "en" | "es") => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <Routes>
      <Route path="/" element={<Homes lang={lang} setLang={changeLang} />} />

      <Route
        path="/about"
        element={<AboutUs lang={lang} setLang={changeLang} />}
      />

      <Route
        path="/services"
        element={<Services lang={lang} setLang={changeLang} />}
      />

      <Route
        path="/gallery"
        element={<Gallery lang={lang} setLang={changeLang} />}
      />

      <Route
        path="/contact"
        element={<Contact lang={lang} setLang={changeLang} />}
      />
    </Routes>
  );
}

export default App;
