// Select all elements with animation classes
const animateElements = document.querySelectorAll(
  '.animate-text, .animate-up, .animate-left, .animate-right, .animate-image'
);

// Helper function to check if element is in viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100
  );
}

// Trigger animations on scroll
function handleScrollAnimations() {
  animateElements.forEach(el => {
    if (isInViewport(el)) {
      el.style.animationPlayState = 'running';
      el.classList.add('animated'); // optional for extra styling
    }
  });
}

// Initial check in case some elements are in viewport on load
window.addEventListener('load', handleScrollAnimations);

// Listen to scroll events
window.addEventListener('scroll', handleScrollAnimations);