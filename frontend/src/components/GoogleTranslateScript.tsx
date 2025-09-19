"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function GoogleTranslateScript() {
  useEffect(() => {
    (window as any).initGoogleTranslate = () => {
      console.log("⚡ initGoogleTranslate called!");
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ar",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=initGoogleTranslate"
        strategy="afterInteractive"
      />
      <div id="google_translate_element" style={{ display: "none" }} />
    </>
  );
}
