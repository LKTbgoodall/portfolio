document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".fade-in-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
});
