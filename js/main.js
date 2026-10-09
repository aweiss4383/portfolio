(function () {
  const assetPath = (p, file) => `assets/projects/${p.slug}/${file}`;

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Home page: project grid
  const grid = document.getElementById("project-grid");
  if (grid) {
    grid.innerHTML = PROJECTS.map(
      (p) => `
      <a class="card" href="project.html?p=${encodeURIComponent(p.slug)}">
        <div class="card-media"><img src="${assetPath(p, p.cover)}" alt="${p.title}" loading="lazy"></div>
        <div class="card-body">
          <h3>${p.title}</h3>
          <p>${p.summary || ""}</p>
        </div>
      </a>`
    ).join("");
  }

  // Project page
  const container = document.getElementById("project");
  if (container) {
    const slug = new URLSearchParams(location.search).get("p");
    const i = PROJECTS.findIndex((p) => p.slug === slug);
    const p = PROJECTS[i];

    if (!p) {
      container.innerHTML = `<section class="hero"><h1>Project not found.</h1><p><a href="./#work">Back to all work</a></p></section>`;
      return;
    }

    document.title = `${p.title} — Alex Weiss`;
    const next = PROJECTS[(i + 1) % PROJECTS.length];

    container.innerHTML = `
      <section class="project-head">
        <p class="meta">${[p.year, ...(p.tags || [])].filter(Boolean).join(" · ")}</p>
        <h1>${p.title}</h1>
        <p class="lede">${p.description || ""}</p>
      </section>
      <section class="gallery">
        ${(p.images || []).map((f) => `<img src="${assetPath(p, f)}" alt="${p.title}" loading="lazy">`).join("")}
      </section>
      <nav class="project-nav">
        <a href="./#work">&larr; All work</a>
        ${next !== p ? `<a href="project.html?p=${encodeURIComponent(next.slug)}">Next: ${next.title} &rarr;</a>` : ""}
      </nav>`;

    const lightbox = document.getElementById("lightbox");
    const lbImg = lightbox.querySelector("img");
    container.querySelectorAll(".gallery img").forEach((img) =>
      img.addEventListener("click", () => {
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lightbox.hidden = false;
      })
    );
    const close = () => (lightbox.hidden = true);
    lightbox.addEventListener("click", close);
    document.addEventListener("keydown", (e) => e.key === "Escape" && close());
  }
})();
