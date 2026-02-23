/* --- LUXEHOME INTERACTIVITY --- */

// Header background change on scroll
const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Mobile Menu Toggle
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

// Close menu on link click
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

// Scroll Reveal Initializer
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".box, .f-box, .Arrbox, .about-img, .about-text, .t-box, .heading",
  );

  // Add reveal class to elements
  revealElements.forEach((el) => el.classList.add("reveal"));

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => observer.observe(el));
});

// Navbar Active Link Script
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        ?.classList.add("active");
    } else {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        ?.classList.remove("active");
    }
  });
});
