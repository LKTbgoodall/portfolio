/* --- DONNÉES DES PROJETS (Centralisées) --- */
const projectsData = {
  gta: {
    title: "Automatisation Recrutement (GTA RP)",
    image: "img/site1.webp",
    /* LE SITE (Démonstration) */
    link: "https://lktbgoodall.github.io/projet_reponse_formulaire/",
    /* LE CODE (GitHub) - J'ai ajouté cette ligne */
    repo: "https://github.com/LKTbgoodall/projet_reponse_formulaire",
    isCode: false, // On met false car le lien principal est le site
    description: `
        <p class="lead text-white">Un outil web conçu pour faire gagner du temps aux recruteurs d'un serveur de jeu (+500 joueurs) en automatisant le tri des candidatures.</p>
        <hr class="border-secondary opacity-50">
        
        <div class="row g-4 mb-4">
            <div class="col-md-6">
                <div class="p-3 rounded bg-dark bg-opacity-50 border border-secondary border-opacity-25 h-100">
                    <h6 class="text-accent fw-bold"><i class="bi bi-gear-wide-connected me-2"></i>À quoi ça sert ?</h6>
                    <ul class="list-unstyled text-muted small mb-0 mt-2">
                        <li class="mb-2"><i class="bi bi-check2 text-primary me-2"></i><strong>Gain de temps :</strong> Génération automatique des réponses (accepté/refusé) prêtes à être envoyées.</li>
                        <li class="mb-2"><i class="bi bi-check2 text-primary me-2"></i><strong>Formatage :</strong> Mise en page automatique du texte pour Discord (Markdown).</li>
                        <li><i class="bi bi-check2 text-primary me-2"></i><strong>Mémoire :</strong> Le navigateur se souvient des infos du recruteur (LocalStorage).</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-3 rounded bg-dark bg-opacity-50 border border-secondary border-opacity-25 h-100">
                    <h6 class="text-accent fw-bold"><i class="bi bi-code-square me-2"></i>Challenge Technique</h6>
                    <p class="small text-muted mb-0 mt-2">
                        Le défi était de traiter du texte brut pour le nettoyer et le formater proprement. J'ai utilisé des <strong>Regex</strong> (expressions régulières) pour analyser le texte et manipulé le <strong>DOM</strong> pour l'interaction utilisateur.
                    </p>
                </div>
            </div>
        </div>

        <h6 class="fw-bold text-white mb-3">Stack Technique</h6>
        <div>
            <span class="badge text-bg-warning me-2">JavaScript</span>
            <span class="badge text-bg-primary me-2">HTML5 / CSS</span>
            <span class="badge text-bg-secondary me-2">Regex</span>
            <span class="badge text-bg-info">LocalStorage</span>
        </div>
    `,
  },

  tr: {
    title: "Recoder la commande 'tr' (Linux)",
    image: "img/tr_project.webp",
    link: "https://github.com/LKTbgoodall",
    isCode: true,
    description: `
        <p class="lead text-white">Projet scolaire consistant à recréer une commande système Linux (tr) en langage C. L'objectif : comprendre comment l'ordinateur gère la mémoire.</p>
        
        <div class="alert alert-warning border-0 bg-warning bg-opacity-10 text-warning d-flex align-items-center mb-4">
            <i class="bi bi-exclamation-triangle-fill me-3 fs-4"></i>
            <div>
                <strong>La contrainte :</strong> Interdiction d'utiliser les outils standards (LibC). <br>
                <span class="small">J'ai dû tout recoder moi-même (gestion des chaînes de caractères, affichage, mémoire) pour apprendre les bases.</span>
            </div>
        </div>

        <div class="row g-4 mb-4">
             <div class="col-12">
                <h6 class="text-white fw-bold"><i class="bi bi-cpu me-2 text-accent"></i>Compétences acquises</h6>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent text-muted border-secondary border-opacity-25 px-0">
                        <strong class="text-white">Rigueur du code :</strong> En C, la moindre erreur peut faire planter le programme.
                    </li>
                    <li class="list-group-item bg-transparent text-muted border-secondary border-opacity-25 px-0">
                        <strong class="text-white">Gestion Mémoire :</strong> Allocation manuelle de la mémoire (malloc/free) et vérification des fuites avec l'outil <strong>Valgrind</strong>.
                    </li>
                </ul>
             </div>
        </div>

        <h6 class="fw-bold text-white mb-3">Environnement</h6>
        <div>
             <span class="badge text-bg-primary me-2">Langage C</span>
             <span class="badge text-bg-danger me-2">Gestion Mémoire</span>
             <span class="badge text-bg-secondary me-2">Linux</span>
        </div>
    `,
  },

  maze: {
    title: "Résolution de Labyrinthe",
    image: "img/maze.webp",
    link: "https://github.com/LKTbgoodall",
    isCode: true,
    description: `
        <p class="lead text-white">Développement d'un algorithme capable de trouver tout seul la sortie d'un labyrinthe (fichier texte transformé en carte 2D).</p>
        <hr class="border-secondary opacity-50">

        <div class="row g-4 mb-4">
            <div class="col-md-6">
                 <h6 class="text-accent fw-bold mb-3"><i class="bi bi-bezier2 me-2"></i>Logique utilisée</h6>
                 <div class="d-flex flex-column gap-2">
                    <div class="p-2 border border-secondary border-opacity-25 rounded bg-dark bg-opacity-50">
                        <strong class="text-white d-block">Wall Follower</strong>
                        <span class="small text-muted">Longer le mur de gauche pour trouver la sortie.</span>
                    </div>
                    <div class="p-2 border border-secondary border-opacity-25 rounded bg-dark bg-opacity-50">
                        <strong class="text-white d-block">Algorithme de propagation</strong>
                        <span class="small text-muted">Calculer le chemin le plus court possible pour optimiser le trajet.</span>
                    </div>
                 </div>
            </div>
            <div class="col-md-6">
                 <h6 class="text-accent fw-bold mb-3"><i class="bi bi-bricks me-2"></i>Technique</h6>
                 <p class="small text-muted">
                    Le programme lit un fichier, le transforme en données utilisables (Parsing) et cherche la solution. Cela m'a permis de mieux comprendre les <strong>Pointeurs</strong> et la manipulation de tableaux.
                 </p>
            </div>
        </div>

        <h6 class="fw-bold text-white mb-3">Technologies</h6>
        <div>
             <span class="badge text-bg-primary me-2">Langage C</span>
             <span class="badge text-bg-info me-2">Algorithmique</span>
             <span class="badge text-bg-danger me-2">Valgrind</span>
        </div>
    `,
  },

  pokemon: {
    title: "Pokédex & Team Builder",
    image: "img/site2.webp",
    link: "#",
    isCode: true,
    description: `
        <p class="lead text-white">Un site web dynamique qui permet de consulter les stats des Pokémon et de créer son équipe, en utilisant des données en temps réel.</p>
        <hr class="border-secondary opacity-50">

        <div class="row g-4 mb-4">
             <div class="col-12">
                <ul class="list-unstyled text-muted">
                    <li class="mb-3">
                        <i class="bi bi-cloud-download-fill text-accent me-2"></i>
                        <strong class="text-white">Appel d'API (REST) :</strong> 
                        Utilisation de <code>fetch</code> et <code>async/await</code> pour récupérer les données depuis une base externe (Tyradex) sans recharger la page.
                    </li>
                    <li class="mb-3">
                        <i class="bi bi-hdd-network-fill text-accent me-2"></i>
                        <strong class="text-white">Sauvegarde locale :</strong> 
                        J'utilise le <strong>LocalStorage</strong> pour que l'utilisateur retrouve son équipe même s'il quitte le site.
                    </li>
                    <li class="mb-3">
                        <i class="bi bi-funnel-fill text-accent me-2"></i>
                        <strong class="text-white">Interactivité :</strong> 
                        Mise en place de filtres de recherche instantanés (par nom ou type).
                    </li>
                </ul>
             </div>
        </div>

        <h6 class="fw-bold text-white mb-3">Stack Technique</h6>
        <div>
             <span class="badge text-bg-warning me-2">JavaScript ES6</span>
             <span class="badge text-bg-info me-2">API REST</span>
             <span class="badge text-bg-primary me-2">Bootstrap 5</span>
             <span class="badge text-bg-secondary">JSON</span>
        </div>
      `,
  },

  sql: {
    title: "Base de Données École",
    image: "img/site3.webp",
    link: "#",
    isCode: true,
    description: `
        <p class="lead text-white">Conception et création d'une base de données pour gérer un établissement scolaire (ERP). De la réflexion théorique jusqu'au code.</p>
        
        <div class="row g-4 mb-4 mt-2">
            <div class="col-md-6">
                <h6 class="text-accent fw-bold">Modélisation (Merise)</h6>
                <p class="small text-muted">
                    Avant de coder, j'ai structuré les données (MCD/MLD) pour gérer des cas complexes (ex: Un prof enseigne plusieurs matières à différentes classes).
                </p>
            </div>
            <div class="col-md-6">
                <h6 class="text-accent fw-bold">Le code SQL</h6>
                <p class="small text-muted">
                    Écriture des scripts pour créer les tables et sécuriser les données (Clés étrangères, Contraintes). Optimisation des recherches via des <strong>Index</strong>.
                </p>
            </div>
        </div>

        <div class="p-3 rounded bg-dark bg-opacity-50 border border-secondary border-opacity-25">
            <h6 class="fw-bold text-white mb-2"><i class="bi bi-database-fill-gear me-2"></i>Outils</h6>
            <p class="small text-muted mb-0">Administration et tests des requêtes via le logiciel <strong>DBeaver</strong>.</p>
        </div>

        <div class="mt-3">
             <span class="badge text-bg-sql me-2">SQL / PostgreSQL</span>
             <span class="badge text-bg-light text-dark me-2">Merise</span>
             <span class="badge text-bg-secondary">Architecture</span>
        </div>
      `,
  },

  cafet: {
    title: "Cafet' Santé (Fullstack)",
    image: "img/cafet.webp",
    link: "#",
    isCode: true,
    description: `
        <p class="lead text-white">Application complète pour commander son repas à la cafétéria depuis son mobile. Projet "Fil rouge" alliant interface visuelle et gestion des données.</p>
        <hr class="border-secondary opacity-50">

        <div class="row g-4 mb-4">
             <div class="col-12">
                <h6 class="text-accent fw-bold mb-3"><i class="bi bi-layers-half me-2"></i>Comment ça marche ?</h6>
                
                <div class="d-flex flex-column gap-3">
                    <div class="d-flex align-items-start">
                        <span class="badge bg-primary me-3 mt-1">Front (Visuel)</span>
                        <div>
                            <strong class="text-white">React.js & Tailwind :</strong> Création d'une interface moderne et fluide type "App mobile", avec gestion dynamique du panier.
                        </div>
                    </div>
                    
                    <div class="d-flex align-items-start">
                        <span class="badge bg-success me-3 mt-1">Back (Données)</span>
                        <div>
                            <strong class="text-white">Supabase :</strong> Utilisation d'une base de données en ligne sécurisée pour stocker les commandes et les utilisateurs.
                        </div>
                    </div>

                    <div class="d-flex align-items-start">
                        <span class="badge bg-danger me-3 mt-1">Particularités</span>
                        <div>
                            <strong class="text-white">Gestion de permissions :</strong> Implémentation de rôles (utilisateur/cuisiniers/admin) pour sécuriser l'accès aux données sensibles.
                        </div>
                    </div>
                </div>
             </div>
        </div>

        <h6 class="fw-bold text-white mb-3">Stack Technique</h6>
        <div>
             <span class="badge text-bg-info me-2">React.js</span>
             <span class="badge text-bg-primary me-2">Tailwind CSS</span>
             <span class="badge text-bg-success me-2">Supabase</span>
             <span class="badge text-bg-warning">Base de donnée</span>
        </div>
      `,
  },
};

/* --- SYSTÈME DE CHARGEMENT --- */
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

/* --- MODAL LOGIC (MISE À JOUR POUR GÉRER 2 BOUTONS) --- */
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

  // --- GESTION DES BOUTONS DU BAS ---

  // 1. Bouton Principal (Lien Site ou Code unique)
  const btnSite = document.getElementById("modalLink");

  // 2. Bouton Secondaire (Code/Repo) - On essaie de le récupérer ou on le crée
  let btnRepo = document.getElementById("modalRepoLink");
  if (!btnRepo) {
    // Création dynamique si n'existe pas
    btnRepo = document.createElement("a");
    btnRepo.id = "modalRepoLink";
    btnRepo.className = "btn btn-outline-light rounded-pill px-4 me-2"; // Style 'Outline'
    btnRepo.target = "_blank";
    btnRepo.innerHTML = '<i class="bi bi-github me-2"></i>Voir le Code';
    // Insérer avant le bouton principal
    btnSite.parentNode.insertBefore(btnRepo, btnSite);
  }

  // --- LOGIQUE D'AFFICHAGE ---

  // CAS A : Afficher le bouton "Code" secondaire ? (Si propriété 'repo' existe)
  if (project.repo) {
    btnRepo.href = project.repo;
    btnRepo.classList.remove("d-none");
  } else {
    btnRepo.classList.add("d-none");
  }

  // CAS B : Configurer le bouton Principal
  if (project.link) {
    btnSite.href = project.link;

    // Si on a DEJA affiché le bouton Repo, le bouton principal devient forcément "Voir le Site"
    if (project.repo) {
      btnSite.innerHTML =
        '<i class="bi bi-box-arrow-up-right me-2"></i>Voir le Site';
      btnSite.className = "btn btn-primary rounded-pill px-4"; // Style plein
    } else {
      // Sinon, comportement classique (Code OU Site selon isCode)
      btnSite.innerHTML = project.isCode
        ? '<i class="bi bi-github me-2"></i>Voir le Code'
        : '<i class="bi bi-box-arrow-up-right me-2"></i>Voir le Site';
    }
    btnSite.classList.remove("d-none");
  } else {
    btnSite.classList.add("d-none");
  }

  new bootstrap.Modal(document.getElementById("detailModal")).show();
}

/* --- INIT --- */
document.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadComponent("nav.html", "nav-placeholder"),
    loadComponent("footer.html", "footer-placeholder"),
  ]);

  // Observer pour animations fluides
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

  // Init filtres si présents
  initFilters();
});

/* --- FILTRES PROJETS --- */
function initFilters() {
  const buttons = document.querySelectorAll("#project-filter-buttons button");
  const items = document.querySelectorAll(".project-item");

  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Gestion visuelle des boutons
      buttons.forEach((b) => {
        b.classList.remove("active", "btn-light");
        b.classList.add("btn-outline-light");
      });
      btn.classList.add("active", "btn-light");
      btn.classList.remove("btn-outline-light");

      const filter = btn.dataset.filter;

      // Gestion de l'affichage des projets
      items.forEach((item) => {
        const tags = item.dataset.tags || "";
        const shouldShow = filter === "all" || tags.includes(filter);

        if (shouldShow) {
          // AFFICHER (instantané)
          item.classList.remove("d-none");
          item.classList.add("is-visible");
        } else {
          // CACHER (instantané)
          item.classList.add("d-none");
          item.classList.remove("is-visible");
        }
      });
    });
  });
}
