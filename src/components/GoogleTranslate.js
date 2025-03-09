import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "es", includedLanguages: "en,fr,de,es" },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
