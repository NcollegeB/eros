const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });
}

const currentPath = window.location.pathname === "/" ? "/" : window.location.pathname.replace(/\/$/, "");
document.querySelectorAll(".site-nav a").forEach((link) => {
  const linkPath = new URL(link.href).pathname.replace(/\/$/, "") || "/";
  if (linkPath === currentPath) {
    link.setAttribute("aria-current", "page");
  }
});

const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = contactForm.querySelector(".form-status");
    const formData = new FormData(contactForm);
    const name = formData.get("name") || "there";
    status.textContent = `Thanks, ${name}. Your message is ready for the Eros team.`;
    contactForm.reset();
  });
}
