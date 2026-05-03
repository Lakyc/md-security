/* app.js — translations, language switch, navigation, form validation */

const translations = {
  en: {
    heroTitle: "Discreet protection. Absolute focus.",
    heroLead:
      "Close protection and risk management for principals who require trust, precision, and calm under pressure.",
    heroBtnPrimary: "Request consultation",
    heroBtnSecondary: "Our services",
  },
  de: {
    heroTitle: "Diskreter Schutz. Volle Konzentration.",
    heroLead:
      "Personenschutz und Risikomanagement für Auftraggeber, denen Vertrauen, Präzision und Ruhe unter Druck wichtig sind.",
    heroBtnPrimary: "Beratung anfragen",
    heroBtnSecondary: "Leistungen",
  },
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

  if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (contactStatus) {
        contactStatus.textContent = "Sending...";
      }

      try {
        const formData = new FormData(contactForm);

        const response = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          if (contactStatus) {
            contactStatus.textContent = "Message sent successfully.";
          }

          contactForm.reset();
        } else {
          if (contactStatus) {
            contactStatus.textContent = "Something went wrong. Please try again.";
          }
        }
      } catch (error) {
        if (contactStatus) {
          contactStatus.textContent = "Network error. Please try again.";
        }
      }
    });
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

