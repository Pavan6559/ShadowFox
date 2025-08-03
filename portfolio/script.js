document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));



  // Typewriter Effect
  const words = ["a web dev enthusiast.", "a Problem Solver.", "a video editor"];
  let i = 0, j = 0;
  let isDeleting = false;
  const typewriterElement = document.getElementById("typewriter");

  function type() {
    if (!typewriterElement) return;
    const currentWord = words[i];

    if (isDeleting) {
      typewriterElement.textContent = currentWord.substring(0, j--);
      if (j < 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, 50);
      }
    } else {
      typewriterElement.textContent = currentWord.substring(0, j++);
      if (j > currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000);
      } else {
        setTimeout(type, 120);
      }
    }
  }
  type();



  // Hamburger menu toggle
  const bars = document.getElementById("bars");
const mobileLinks = document.getElementById("mobile-links");

bars.addEventListener("click", () => {
  mobileLinks.classList.toggle("show");
});

});
