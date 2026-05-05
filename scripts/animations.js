// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// PAGE LOAD ANIMATIONS
window.addEventListener('load', () => {
  const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

  tl.from(".navbar", { y: -100, opacity: 10 })
    .from(".hero-left h1", { x: -100, opacity: 0 }, "-=0.8")
    .from(".hero-left p", { y: 50, opacity: 0 }, "-=1")
    .from(".hero-left .btn", { scale: 0.8, opacity: 0 }, "-=1")
    .from(".hero-right", { x: 100, opacity: 0 }, "-=1.2");
});

// SCROLL TRIGGER REVEALS
const sections = [
  { selector: ".about-text", trigger: ".about", x: -100 },
  { selector: ".about-image", trigger: ".about", x: 100 },
  { selector: ".section-title", trigger: null, y: 50 },
  { selector: ".card", trigger: ".services", stagger: 0.2, y: 50 },
  { selector: ".stat", trigger: ".stats", stagger: 0.2, y: 30 },
  { selector: ".team-card", trigger: ".team", stagger: 0.2, y: 50 },
  { selector: ".contact-card", trigger: ".contact-grid", stagger: 0.15, scale: 0.9, opacity: 0 }
];

sections.forEach(section => {
  gsap.from(section.selector, {
    scrollTrigger: {
      trigger: section.trigger || section.selector,
      start: "top 80%",
    },
    x: section.x || 0,
    y: section.y || 0,
    scale: section.scale || 1,
    opacity: 0,
    duration: 1,
    stagger: section.stagger || 0,
    ease: "power3.out"
  });
});

// Parallax Effect for Hero
gsap.to(".hero-right img", {
  y: -50,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1
  }
});

// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    // Optionally toggle hamburger icon/animation if you've added it to CSS
  });

  // Close menu on link click
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}
