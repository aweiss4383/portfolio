// Project list. Each project lives in assets/projects/<slug>/.
// To add one: copy its folder in, then add an entry below.
//   slug:   folder name under assets/projects/
//   cover:  thumbnail file for the home grid (inside the project folder)
//   images: files shown on the project page, in order (inside the project folder)
const PROJECTS = [
  {
    slug: "sample-project",
    title: "Sample Project",
    year: "2026",
    tags: ["Branding", "Print"],
    summary: "One-line description shown on the home page.",
    description:
      "A longer write-up shown on the project page: the brief, your role, the process, and the outcome.",
    cover: "cover.svg",
    images: ["cover.svg"],
  },
];
