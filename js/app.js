/* app.js — translations, language switch, navigation, form validation */

const translations = {
  en: {
    // MENU
    "menu.logo": "MD Security",
    "menu.home": "HOME",
    "menu.about_us": "ABOUT US",
    "menu.services": "SERVICES",
    "menu.why_choose_us": "WHY CHOOSE US",
    "menu.clients": "CLIENTS",
    "menu.contact_us": "CONTACT US",

    // HERO
    heroTitle: "Premium Protection. Absolute Discretion.",
    heroLead:
      "Elite close protection, secure mobility, and risk management for clients who demand precision, privacy, and reliability.",
    heroBtnPrimary: "REQUEST CONSULTATION",
    heroBtnSecondary: "EXPLORE SERVICES",

    // FEATURES
    "features.quality_title": "ELITE STANDARDS",
    "features.quality_text":
      "Every operation is executed with precision and attention to detail.",

    "features.experience_title": "PROFESSIONAL OPERATIVES",
    "features.experience_text":
      "Highly trained experts with military and law enforcement backgrounds.",

    "features.growth_title": "TAILORED SECURITY",
    "features.growth_text":
      "Custom-built protection strategies for every client and situation.",

    "features.support_title": "24/7 AVAILABILITY",
    "features.support_text":
      "Constant readiness and support wherever you are.",

    // ABOUT
    "about.title": "ABOUT MD SECURITY",
    "about.text":
      "MD Security is a premium security firm specializing in discreet protection services for high-profile clients across Europe. Our expertise includes close protection, luxury transport, and event security. We deliver tailored, confidential solutions designed to ensure safety, privacy, and peace of mind.",
    "about.button": "REQUEST CONSULTATION",

    // SERVICES
    "services.title": "PREMIUM SERVICES",

    "services.service_1_title": "CLOSE PROTECTION",
    "services.service_1_text":
      "Personal security for VIP clients, including discreet escort, threat assessment, and strategic route planning.",

    "services.service_2_title": "LUXURY TRANSPORT",
    "services.service_2_text":
      "Secure and comfortable mobility with professional chauffeurs and high-end vehicles.",

    "services.service_3_title": "EVENT SECURITY",
    "services.service_3_text":
      "Protection for private events, VIP gatherings, and high-profile occasions with full coordination.",

    "services.service_4_title": "INTEGRATED PROTECTION",
    "services.service_4_text":
      "Combined close protection and secure transport for complete, seamless security coverage.",

    // WHY
    "why.title": "WHY CHOOSE US",

    "why.item_1_title": "ELITE PROFESSIONALISM",
    "why.item_1_text":
      "Highly trained and licensed experts with elite operational backgrounds.",

    "why.item_2_title": "DISCREET & RELIABLE",
    "why.item_2_text":
      "Confidential operations ensuring maximum privacy and trust.",

    "why.item_3_title": "PROVEN EXPERIENCE",
    "why.item_3_text":
      "Trusted by high-profile clients for consistent and dependable service.",

    "why.item_4_title": "TAILORED APPROACH",
    "why.item_4_text":
      "Every solution is adapted to the client’s unique needs and environment.",

    // CLIENTS
    "clients.title": "OUR CLIENTS",

    // FOOTER
    "footer.quick_links": "QUICK LINKS",
    "footer.contact_title": "CONTACT",
    "footer.address": "Europe-wide operations",
    "footer.phone": "+49 1234 5678 90",
    "footer.email": "info@security-md.com",

    "footer.get_in_touch_title": "GET IN TOUCH",
    "footer.get_in_touch_text":
      "Contact us for confidential consultation and tailored security solutions.",
    "footer.contact_button": "CONTACT US",

    "footer.copyright": "© 2026 MD Security. All rights reserved.",

    // CONTACT
    "contact.title": "CONTACT US",
    "contact.name": "Your name",
    "contact.email": "Your email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.submit": "Send Request",

    "contact.phone": "+49 1234 5678 90",
    "contact.email_info": "info@security-md.com",
    "contact.location": "Europe"
  },

  de: {
    // MENU
    "menu.about_us": "ÜBER UNS",
    "menu.services": "LEISTUNGEN",
    "menu.why_choose_us": "WARUM WIR",
    "menu.clients": "KUNDEN",
    "menu.contact_us": "KONTAKT",

    // HERO
    heroTitle: "Premiumschutz. Absolute Diskretion.",
    heroLead:
      "Exklusiver Personenschutz, sichere Mobilität und Risikomanagement für Kunden, die Präzision, Privatsphäre und Zuverlässigkeit erwarten.",
    heroBtnPrimary: "BERATUNG ANFRAGEN",
    heroBtnSecondary: "LEISTUNGEN ANSEHEN",

    // FEATURES
    "features.quality_title": "HÖCHSTE STANDARDS",
    "features.quality_text":
      "Jeder Einsatz wird mit maximaler Präzision und Sorgfalt durchgeführt.",

    "features.experience_title": "PROFESSIONELLES TEAM",
    "features.experience_text":
      "Hochqualifizierte Experten mit militärischem und behördlichem Hintergrund.",

    "features.growth_title": "INDIVIDUELLE SICHERHEIT",
    "features.growth_text":
      "Maßgeschneiderte Sicherheitslösungen für jede Situation.",

    "features.support_title": "24/7 VERFÜGBARKEIT",
    "features.support_text":
      "Rund um die Uhr Einsatzbereitschaft und Unterstützung weltweit.",

    // ABOUT
    "about.title": "ÜBER MD SECURITY",
    "about.text":
      "MD Security ist ein Premium-Sicherheitsunternehmen, spezialisiert auf diskrete Schutzdienste für anspruchsvolle Kunden in ganz Europa. Unsere Leistungen umfassen Personenschutz, Luxus-Transport und Veranstaltungssicherheit. Wir bieten maßgeschneiderte, vertrauliche Lösungen für maximale Sicherheit und Privatsphäre.",
    "about.button": "BERATUNG ANFRAGEN",

    // SERVICES
    "services.title": "PREMIUM LEISTUNGEN",

    "services.service_1_title": "PERSONENSCHUTZ",
    "services.service_1_text":
      "Individueller Schutz für VIP-Kunden, inklusive diskreter Begleitung, Risikoanalyse und Routenplanung.",

    "services.service_2_title": "LUXUS TRANSPORT",
    "services.service_2_text":
      "Sichere und komfortable Mobilität mit professionellen Chauffeuren und hochwertigen Fahrzeugen.",

    "services.service_3_title": "EVENT SICHERHEIT",
    "services.service_3_text":
      "Schutz für exklusive Veranstaltungen und VIP-Events mit vollständiger Koordination.",

    "services.service_4_title": "INTEGRIERTER SCHUTZ",
    "services.service_4_text":
      "Kombination aus Personenschutz und sicherer Mobilität für umfassende Sicherheitslösungen.",

    // WHY
    "why.title": "WARUM WIR",

    "why.item_1_title": "HÖCHSTE PROFESSSIONALITÄT",
    "why.item_1_text":
      "Zertifizierte Experten mit umfangreicher operativer Erfahrung.",

    "why.item_2_title": "DISKRET & ZUVERLÄSSIG",
    "why.item_2_text":
      "Vertrauliche Abläufe mit maximaler Sicherheit und Vertrauen.",

    "why.item_3_title": "ERPROBTE ERFAHRUNG",
    "why.item_3_text":
      "Bewährt bei anspruchsvollen Kunden und sensiblen Einsätzen.",

    "why.item_4_title": "INDIVIDUELLE LÖSUNGEN",
    "why.item_4_text":
      "Jede Strategie wird exakt auf den Kunden abgestimmt.",

    // CLIENTS
    "clients.title": "UNSERE KUNDEN",

    // FOOTER
    "footer.quick_links": "SCHNELLZUGRIFF",
    "footer.contact_title": "KONTAKT",
    "footer.address": "Europaweit tätig",
    "footer.phone": "+49 1234 5678 90",
    "footer.email": "info@security-md.com",

    "footer.get_in_touch_title": "KONTAKT AUFNEHMEN",
    "footer.get_in_touch_text":
      "Kontaktieren Sie uns für eine diskrete Beratung und individuelle Sicherheitslösungen.",
    "footer.contact_button": "KONTAKT",

    "footer.copyright": "© 2026 MD Security. Alle Rechte vorbehalten.",

    // CONTACT
    "contact.title": "KONTAKT",
    "contact.name": "Ihr Name",
    "contact.email": "Ihre E-Mail",
    "contact.subject": "Betreff",
    "contact.message": "Nachricht",
    "contact.submit": "Anfrage senden",

    "contact.phone": "+49 1234 5678 90",
    "contact.email_info": "info@security-md.com",
    "contact.location": "Europa"
  }
};

function applyLanguage(lang) {
  const pack = translations[lang] || translations.en;
  document.documentElement.lang = lang === "de" ? "de" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && pack[key] != null) {
      el.textContent = pack[key];
    }
  });

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}
function getDefaultLanguage() {
  const browserLanguage = navigator.language || navigator.userLanguage;

  if (browserLanguage.toLowerCase().startsWith("de")) {
    return "de";
  }

  return "en";
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("siteLanguage");
  const defaultLanguage =
    savedLanguage === "en" || savedLanguage === "de"
      ? savedLanguage
      : getDefaultLanguage();

  applyLanguage(defaultLanguage);

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");

      if (lang === "en" || lang === "de") {
        localStorage.setItem("siteLanguage", lang);
        applyLanguage(lang);
      }
    });
  });
});

// contact form //
document.addEventListener("DOMContentLoaded", () => {
  const contactOverlay = document.querySelector("[data-contact-overlay]");
  const contactOpenButtons = document.querySelectorAll("[data-contact-open]");
  const contactCloseButton = document.querySelector("[data-contact-close]");
  const contactForm = document.querySelector("[data-contact-form]");
  const contactStatus = document.querySelector("[data-contact-status]");

  if (!contactOverlay) return;

  function openContactPopup() {
    contactOverlay.hidden = false;
    document.body.classList.add("contact-popup-open");
  }

  function closeContactPopup() {
    contactOverlay.hidden = true;
    document.body.classList.remove("contact-popup-open");

    if (contactStatus) {
      contactStatus.textContent = "";
    }
  }

  contactOpenButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openContactPopup();
    });
  });

  if (contactCloseButton) {
    contactCloseButton.addEventListener("click", closeContactPopup);
  }

  contactOverlay.addEventListener("click", (event) => {
    if (event.target === contactOverlay) {
      closeContactPopup();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !contactOverlay.hidden) {
      closeContactPopup();
    }
  });

  
});

const contactForm = document.querySelector("[data-contact-form]");
const contactStatus = document.querySelector("[data-contact-status]");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  contactStatus.textContent = "Sending...";

  const formData = new FormData(contactForm);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      contactStatus.textContent = "Message sent successfully.";
      contactForm.reset();
    } else {
      contactStatus.textContent = "Something went wrong. Please try again.";
    }
  } catch (error) {
    contactStatus.textContent = "Network error. Please try again.";
  }
});



//back to top
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.querySelector("[data-back-to-top]");

  if (!backToTopButton) return;

  function toggleBackToTopButton() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("is-visible");
    } else {
      backToTopButton.classList.remove("is-visible");
    }
  }

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", toggleBackToTopButton);
  toggleBackToTopButton();
});

