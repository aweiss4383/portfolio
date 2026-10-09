// Project list. Each project lives in assets/projects/<slug>/.
// To add one: copy its folder in, then add an entry below.
//   slug:   folder name under assets/projects/
//   cover:  thumbnail file for the home grid (inside the project folder)
//   images: files shown on the project page, in order (inside the project folder)
const PROJECTS = [
  {
    slug: "era-pro",
    title: "ERA Pro",
    year: "2017–2024",
    tags: ["Pax Labs", "Consumer hardware"],
    summary: "Premium vaporizer and pods, concept through mass production.",
    description:
      "Led mechanical design across multiple generations of the Era platform at Pax, including the first Smart Pod and a pod assembly redesign that cut landed cost by ~25%.",
    cover: "01.jpeg",
    images: [
      "01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg", "06.jpeg",
      "07.jpeg", "08.webp", "09.webp", "10.webp", "11.jpeg", "12.jpeg",
    ],
  },
  {
    slug: "form-energy",
    title: "Form Energy",
    year: "2024–2025",
    tags: ["Form Energy", "Energy storage"],
    summary: "Second-generation iron-air battery cell.",
    description:
      "First mechanical engineer on Form's second-generation iron-air cell. Owned the hardware from architecture studies through manufacturing and built the cell ME team.",
    cover: "01.webp",
    images: ["01.webp"],
  },
  {
    slug: "vortex-engine",
    title: "Vortex Engine",
    year: "2011–2015",
    tags: ["San Diego Composites", "Aerospace"],
    summary: "Composite housings for a vortex rocket engine.",
    description:
      "Designed lightweight carbon fiber housings for a vortex rocket engine, packaging the nozzle inside the fuel tank. Built with filament winding and hand lay-up.",
    cover: "01.jpeg",
    images: ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg", "06.jpeg"],
  },
  {
    slug: "sdsu-rocket-project",
    title: "SDSU Rocket Project",
    year: "",
    tags: ["San Diego State", "Aerospace"],
    summary: "Student rocketry at San Diego State.",
    description: "",
    cover: "01.jpeg",
    images: ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg"],
  },
  {
    slug: "backspin",
    title: "Backspin",
    year: "2015–2017",
    tags: ["Nod Labs", "VR"],
    summary: "Compact VR game controller.",
    description:
      "Grip and trigger mechanisms for a VR game controller at Nod Labs.",
    cover: "01.png",
    images: ["01.png", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg"],
  },
  {
    slug: "nod-ring",
    title: "Nod Ring",
    year: "2015–2017",
    tags: ["Nod Labs", "Wearables"],
    summary: "Wearable gesture-control ring.",
    description:
      "Drove manufacturing cost reductions that lowered the Nod Ring's BOM cost by ~30% without compromising performance.",
    cover: "01.jpeg",
    images: ["01.jpeg", "02.jpeg", "03.png"],
  },
  {
    slug: "goa",
    title: "GOA",
    year: "2015–2017",
    tags: ["Nod Labs", "VR"],
    summary: "Tracked VR controller.",
    description:
      "VR controller with 360-degree tracking, developed through iterative electromechanical design at Nod Labs.",
    cover: "01.jpeg",
    images: [
      "01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg",
      "05.jpeg", "06.jpeg", "07.jpeg", "08.jpeg",
    ],
  },
  {
    slug: "other-stuff",
    title: "Other Stuff",
    year: "",
    tags: [],
    summary: "Prototypes and side projects.",
    description: "",
    cover: "01.jpeg",
    images: ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg"],
  },
];
