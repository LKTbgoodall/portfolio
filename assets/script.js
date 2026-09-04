let projectsData = {};

async function loadComponent(url, elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  try {
    const response = await fetch(url);
    if (response.ok) {
      element.innerHTML = await response.text();
      if (url.includes("nav")) handleActiveNav();
    }
  } catch (error) {
    console.error(`Error loading ${url}:`, error);
  }
}

function handleActiveNav() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === page) link.classList.add("active");
  });
}

function openModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").innerHTML = project.description;

  const img = document.getElementById("modalImage");
  if (project.image) {
    img.src = project.image;
    img.classList.remove("d-none");
  } else {
    img.classList.add("d-none");
  }

  const btnSite = document.getElementById("modalLink");

  let btnRepo = document.getElementById("modalRepoLink");
  if (!btnRepo) {
    btnRepo = document.createElement("a");
    btnRepo.id = "modalRepoLink";
    btnRepo.className = "btn btn-outline-light rounded-pill px-4 me-2";
    btnRepo.target = "_blank";
    btnRepo.innerHTML = '<i class="bi bi-github me-2"></i>Voir le Code';
    btnSite.parentNode.insertBefore(btnRepo, btnSite);
  }

  if (project.repo) {
    btnRepo.href = project.repo;
    btnRepo.classList.remove("d-none");
  } else {
    btnRepo.classList.add("d-none");
  }

  if (project.link) {
    btnSite.className = "btn rounded-pill px-4";
    btnSite.classList.remove("d-none", "disabled", "btn-secondary");
    btnSite.removeAttribute("aria-disabled");

    if (project.link === "#") {
      btnSite.classList.add("btn-secondary", "disabled");
      btnSite.setAttribute("aria-disabled", "true");
      btnSite.removeAttribute("href");
      btnSite.innerHTML = '<i class="bi bi-cone-striped me-2"></i>En cours';
    } else {
      btnSite.href = project.link;
      btnSite.classList.add("btn-primary");
      if (project.repo) {
        btnSite.innerHTML =
          '<i class="bi bi-box-arrow-up-right me-2"></i>Voir le Site';
      } else {
        btnSite.innerHTML = project.isCode
          ? '<i class="bi bi-github me-2"></i>Voir le Code'
          : '<i class="bi bi-box-arrow-up-right me-2"></i>Voir le Site';
      }
    }
  } else {
    btnSite.classList.add("d-none");
  }

  new bootstrap.Modal(document.getElementById("detailModal")).show();
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("assets/projects.json");
    if (res.ok) {
      projectsData = await res.json();
    }
  } catch (error) {
    console.error("Erreur lors du chargement de projects.json:", error);
  }

  await Promise.all([
    loadComponent("nav.html", "nav-placeholder"),
    loadComponent("footer.html", "footer-placeholder"),
  ]);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".fade-in-on-scroll")
    .forEach((el) => observer.observe(el));

  initFilters();
});

function initFilters() {
  const buttons = document.querySelectorAll("#project-filter-buttons button");
  const items = document.querySelectorAll(".project-item");

  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("active", "btn-light");
        b.classList.add("btn-outline-light");
      });
      btn.classList.add("active", "btn-light");
      btn.classList.remove("btn-outline-light");

      const filter = btn.dataset.filter;

      items.forEach((item) => {
        const tags = item.dataset.tags || "";
        const shouldShow = filter === "all" || tags.includes(filter);

        if (shouldShow) {
          item.classList.remove("d-none");
          item.classList.add("is-visible");
        } else {
          item.classList.add("d-none");
          item.classList.remove("is-visible");
        }
      });
    });
  });
}
