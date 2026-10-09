# Portfolio

Plain HTML/CSS/JS portfolio site. No build step: open `index.html` in a browser.

## Structure

```
index.html              Home: intro, project grid, about, contact
project.html            Project page (project.html?p=<slug>)
css/style.css           Styles (light/dark follow the system setting)
js/projects.js          The project list. Edit this to add or reorder projects
js/main.js              Renders the grid and project pages
assets/projects/<slug>/ One folder per project with its images
```

## Adding a project

1. Copy the project's folder into `assets/projects/` with a lowercase, hyphenated name (e.g. `brand-refresh`).
2. Add an entry to `js/projects.js` with that `slug`, a `cover` image, and the `images` in display order.
3. Delete the `sample-project` entry and folder once real projects are in.

## Hosting on GitHub Pages

In the repo, go to Settings → Pages, set Source to "Deploy from a branch", and pick `main` / `(root)`.
