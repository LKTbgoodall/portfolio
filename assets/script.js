/**
 * Logique principale du Portfolio de GOODALL Bastien
 * Rôle : Étudiant en Programmation (Axé sur la Performance et l'UX)
 * Style : JavaScript ES6+ Modulaire, Async/Await, Web API modernes.
 */

// --- 1. Gestion des Composants Asynchrones ---

/**
 * Charge un composant HTML (nav, footer) dans un élément cible de manière sécurisée.
 * @param {string} url - Le chemin vers le fichier HTML partiel (ex: 'nav.html')
 * @param {string} elementId - L'ID de l'élément où injecter le HTML
 * @returns {Promise<void>}
 */
async function loadComponent(url, elementId) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID '${elementId}' not found for ${url}.`);
    return;
  }

  try {
    // Utilisation du cache pour éviter des re-téléchargements inutiles si nécessaire
    const response = await fetch(url, { cache: 'no-cache' }); 
    if (!response.ok) {
      throw new Error(`Erreur réseau: ${response.status} ${response.statusText}`);
    }
    const html = await response.text();
    element.innerHTML = html;
  } catch (error) {
    console.error(`Erreur lors du chargement de ${url}:`, error);
    // Afficher un message d'erreur dans l'élément pourrait être une bonne pratique
    // element.innerHTML = `<p class="text-danger">Erreur de chargement de la section.</p>`;
  }
}

// --- 2. Mise à Jour de la Navigation (Amélioration UX) ---

/**
 * Met à jour la navigation pour marquer le lien actif et gère l'accessibilité.
 */
function handleActiveNav() {
  const navPlaceholder = document.getElementById("nav-placeholder");
  if (!navPlaceholder) return;

  const navLinks = navPlaceholder.querySelectorAll(".nav-link");
  // Utilisation de location.pathname pour une meilleure compatibilité
  const pathParts = window.location.pathname.split("/");
  const currentPage = pathParts.pop() || pathParts.pop() || "index.html"; 

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop() || "index.html";

    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page"); // Bonne pratique d'accessibilité (A11Y)
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

// --- 3. Animation d'Apparition (Optimisation Intersection Observer) ---

/**
 * Initialise l'IntersectionObserver pour les animations "fade-in".
 * Utilisation du Root Margin pour charger l'élément juste avant qu'il n'apparaisse.
 */
function initIntersectionObserver() {
  const elementsToAnimate = document.querySelectorAll(".fade-in-on-scroll");

  // Vérification de support plus simple
  if (!('IntersectionObserver' in window)) {
    elementsToAnimate.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Utilisation de requestAnimationFrame pour la fluidité (Micro-optimisation)
          window.requestAnimationFrame(() => { 
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
          });
        }
      });
    },
    {
      rootMargin: "0px 0px -100px 0px", // Charge 100px AVANT d'arriver au bas de l'écran
      threshold: 0.01, // Déclenche dès qu'un petit pourcentage est visible
    }
  );

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
}

// --- 4. Filtre de Projets (Refonte plus efficace) ---

/**
 * Initialise le filtre de la page Projets.
 * Utilise la transition de classes pour une animation fluide.
 */
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
      // Ajout A11Y : Indiquer l'état actuel
      btn.setAttribute('aria-pressed', isActive.toString()); 
    });
  };

  const applyFilter = (filter) => {
    projectItems.forEach((item) => {
      const itemTags = item.dataset.tags ? item.dataset.tags.split(" ") : [];
      const shouldShow = filter === "all" || itemTags.includes(filter);

      // Le délai permet à l'animation de masquage de s'exécuter
      if (shouldShow) {
        item.classList.remove("is-hidden");
        // On remet la classe d'animation pour les nouveaux éléments affichés
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

    // S'assurer que le bouton cliqué n'est pas déjà actif pour éviter de relancer le filtre
    if (event.target.classList.contains("active")) return; 

    // 1. Désactiver tous les projets immédiatement pour l'effet de fondu
    projectItems.forEach(item => item.classList.add('is-hidden'));

    // 2. Mettre à jour les boutons
    updateButtonsState(event.target);

    // 3. Appliquer le nouveau filtre après une courte pause pour l'animation
    setTimeout(() => {
        applyFilter(filter);
    }, 200); 
  });

  // Initialisation : simuler un clic sur le bouton "Tous" au chargement
  const allButton = filterContainer.querySelector('[data-filter="all"]');
  if (allButton) {
      allButton.click();
  }
}

// --- 5. Détection de Schéma de Couleurs (Thème) ---
/**
 * Synchronise le thème Bootstrap (data-bs-theme) avec la préférence système (light/dark).
 * Le HTML a déjà 'data-bs-theme="dark"', cette fonction permet l'override automatique.
 */
function initSystemThemePreference() {
    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        // Vous pouvez aussi sauvegarder la préférence utilisateur avec localStorage ici
    };

    // Vérifie la préférence système actuelle
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');

    // Écoute les changements futurs de préférence système
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
        applyTheme(event.matches ? 'dark' : 'light');
    });

    // AMÉLIORATION : Si vous voulez laisser l'utilisateur choisir son thème (bouton toggle)
    // Vous pouvez charger la préférence du localStorage ici et override la préférence système.
}


// --- POINT D'ENTRÉE PRINCIPAL (Orchestration) ---

document.addEventListener("DOMContentLoaded", async () => {
  // 1. Charger les composants essentiels (nav/footer)
  await Promise.all([
    loadComponent("nav.html", "nav-placeholder"),
    loadComponent("footer.html", "footer-placeholder"),
  ]);

  // 2. Gestion du DOM post-chargement
  handleActiveNav(); // Gère la classe 'active' après le chargement de nav.html
  initIntersectionObserver();
  initProjectFilter(); // Fonctionne seulement sur 'projets.html'

  // 3. Nouvelle fonctionnalité UX
  initSystemThemePreference();
});