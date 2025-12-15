async function loadComponent(url, elementId) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID '${elementId}' not found for ${url}.`);
    return;
  }

  try {
    const response = await fetch(url, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(
        `Erreur réseau: ${response.status} ${response.statusText}`
      );
    }
    const html = await response.text();
    element.innerHTML = html;
  } catch (error) {
    console.error(`Erreur lors du chargement de ${url}:`, error);
  }
}

function handleActiveNav() {
  const navPlaceholder = document.getElementById("nav-placeholder");
  if (!navPlaceholder) return;

  const navLinks = navPlaceholder.querySelectorAll(".nav-link");
  const pathParts = window.location.pathname.split("/");
  const currentPage = pathParts.pop() || pathParts.pop() || "index.html";

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop() || "index.html";

    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

function initIntersectionObserver() {
  const elementsToAnimate = document.querySelectorAll(".fade-in-on-scroll");

  if (!("IntersectionObserver" in window)) {
    elementsToAnimate.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.requestAnimationFrame(() => {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          });
        }
      });
    },
    {
      rootMargin: "0px 0px -100px 0px",
      threshold: 0.01,
    }
  );

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
}

function initProjectFilter() {
  const filterContainer = document.getElementById("project-filter-buttons");
  const projectList = document.getElementById("project-list");

  if (!filterContainer || !projectList) return;

  const projectItems = projectList.querySelectorAll(".project-item");

  const updateButtonsState = (selectedButton) => {
    filterContainer.querySelectorAll("button").forEach((btn) => {
      const isActive = btn === selectedButton;
      btn.classList.toggle("active", isActive);
      btn.classList.toggle("btn-primary", isActive);
      btn.classList.toggle("btn-outline-primary", !isActive);
      btn.setAttribute("aria-pressed", isActive.toString());
    });
  };

  const applyFilter = (filter) => {
    projectItems.forEach((item) => {
      const itemTags = item.dataset.tags ? item.dataset.tags.split(" ") : [];
      const shouldShow = filter === "all" || itemTags.includes(filter);

      if (shouldShow) {
        item.classList.remove("is-hidden");
        item.classList.add("fade-in-on-scroll");
      } else {
        item.classList.add("is-hidden");
        item.classList.remove("fade-in-on-scroll");
      }
    });
  };

  filterContainer.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;

    const filter = event.target.dataset.filter;

    if (event.target.classList.contains("active")) return;

    projectItems.forEach((item) => item.classList.add("is-hidden"));

    updateButtonsState(event.target);

    setTimeout(() => {
      applyFilter(filter);
    }, 200);
  });

  const allButton = filterContainer.querySelector('[data-filter="all"]');
  if (allButton) {
    allButton.click();
  }
}

function initSystemThemePreference() {
  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  };

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      applyTheme(event.matches ? "dark" : "light");
    });
}

document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadComponent("nav.html", "nav-placeholder"),
    loadComponent("footer.html", "footer-placeholder"),
  ]);

  handleActiveNav();
  initIntersectionObserver();
  initProjectFilter();

  initSystemThemePreference();
});
