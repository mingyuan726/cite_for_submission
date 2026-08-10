document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const dots = Array.from(carousel.querySelectorAll(".carousel-dot"));
  const previous = carousel.querySelector("[data-previous]");
  const next = carousel.querySelector("[data-next]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = 0;
  let timer = null;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", active ? "true" : "false");
    });
  };

  const stopRotation = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
  };

  const startRotation = () => {
    stopRotation();
    if (!prefersReducedMotion) {
      timer = window.setInterval(() => show(current + 1), 6000);
    }
  };

  previous.addEventListener("click", () => {
    show(current - 1);
    startRotation();
  });

  next.addEventListener("click", () => {
    show(current + 1);
    startRotation();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      show(index);
      startRotation();
    });
  });

  carousel.addEventListener("mouseenter", stopRotation);
  carousel.addEventListener("mouseleave", startRotation);
  carousel.addEventListener("focusin", stopRotation);
  carousel.addEventListener("focusout", startRotation);

  show(0);
  startRotation();
});
