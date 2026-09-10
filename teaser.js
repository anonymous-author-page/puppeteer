// Teaser rows for both editions of the page.
//
//   index.html  -> data-edition="release"   the published, trimmed page
//   full.html   -> data-edition="full"      every case we have
//
// A case appears in an edition when that edition is listed in `editions`.
// To drop a row from the published page but keep it in the full one, change
// its editions to ["full"]. Row numbers are assigned after filtering, so the
// remaining rows always read 01, 02, 03...
//
// Assets come from .local/export_case_assets.py (hiker) and
// .local/export_bear_teaser.py (bear).

const EDITIONS = ["release", "full"];

const HIKER_CASES = [
  {
    slug: "case-1",
    id: "feature-object-motion",
    title: "Hiker",
    subtitle: "Object Motion",
    modules: ["hiker"],
    inputs: [["Hiker Input", "case-1-input.png", "Input image of a hiker"]],
    editions: EDITIONS,
  },
  {
    slug: "case-2",
    id: "feature-object-insertion",
    title: "Hiker + Camel",
    subtitle: "Object Motion + Object Insertion",
    modules: ["hiker", "camel"],
    editions: EDITIONS,
  },
  {
    slug: "case-3",
    id: "feature-joint-control-a",
    title: "Hiker + Camel + Camera A",
    subtitle: "Joint Object and Camera Control",
    modules: ["hiker", "camel", "camera"],
    editions: EDITIONS,
  },
  {
    slug: "case-5",
    id: "feature-joint-control-b",
    title: "Hiker + Camel + Camera B",
    subtitle: "Joint Object and Camera Control",
    modules: ["hiker", "camel", "cameraB"],
    editions: EDITIONS,
  },
];

const BEAR_CASES = [
  {
    slug: "bear-obj",
    title: "Bear",
    subtitle: "Object Motion",
    modules: ["bear"],
    seeds: [123],
    seed: 123,
    source: "obj_composition_20260901_020824_328987_2_2_2",
    editions: EDITIONS,
  },
  {
    slug: "bear-newid",
    title: "Bear + T-Rex A",
    subtitle: "Object Motion + Object Insertion",
    modules: ["bear", "trex"],
    seeds: [123],
    seed: 123,
    source: "newid_composition_20260901_152824_513583",
    editions: EDITIONS,
  },
  {
    slug: "bear-newid3",
    title: "Bear + T-Rex B",
    subtitle: "Object Motion + Object Insertion",
    modules: ["bear", "trex"],
    seeds: [888],
    seed: 888,
    source: "newid3_composition_20260901_154139_331400_refined_prompt",
    editions: EDITIONS,
  },
  {
    slug: "bear-combo",
    title: "Bear + T-Rex + Camera",
    subtitle: "Joint Object and Camera Control",
    modules: ["bear", "trex", "camera"],
    seeds: [456],
    seed: 456,
    source: "combo_composition_20260901_154139_331400_2",
    editions: EDITIONS,
  },
];

// Default inputs for a block: used by any case that does not list its own.
const HIKER_INPUTS = [
  ["Hiker Input", "case-1-input.png", "Original input image of the hiker"],
  ["Camel Input", "new-object-camel.jpg", "Input image of a camel"],
];
const BEAR_INPUTS = [
  ["Bear Input", "bear-input.png", "Original input image of the bear"],
  ["T-Rex Input", "new-object-trex.png", "Input image of a T-Rex"],
];

// Showcase rows: on the published page these 20 cases stand on their own, in
// the same four-column form as the teaser, with no baseline or ground-truth
// comparison. The full edition keeps them in the qualitative carousels
// instead, where the comparisons live.
const SHOWCASE_CASES = [
  ["qual-21", "Reef Fish", "Natural Motion"],
  ["qual-22", "Runner", "Natural Motion"],
  ["qual-24", "Crawling Baby", "Natural Motion"],
  ["qual-25", "Two Runners", "Multi-Object Motion"],
  ["qual-28", "Forest Turnaround", "Natural Motion"],
  ["qual-29", "Forest Jogger", "Natural Motion"],
  ["qual-32", "Lakeside Runner", "Natural Motion"],
  ["qual-33", "Stadium Runner", "Natural Motion"],
  ["qual-34", "Horse Rider", "Natural Motion"],
  ["qual-35", "Courtyard Runner", "Natural Motion"],
  ["qual-37", "Skier", "Natural Motion"],
  ["qual-38", "Crouching Character", "Game Motion"],
  ["qual-39", "Ancient Courtyard", "Game Motion"],
  ["qual-40", "Cloaked Character", "Game Motion"],
  ["qual-41", "Sports Car", "Natural Motion"],
  ["qual-42", "Armored Character", "Game Motion"],
  ["qual-43", "Shielded Warrior", "Game Motion"],
  ["qual-44", "Sword-Fighting Warrior", "Game Motion"],
  ["qual-45", "Ornate Hall Character", "Game Motion"],
  ["qual-46", "Rooftop Jump", "Game Motion"],
].map(([slug, title, subtitle]) => ({
  slug,
  title,
  subtitle,
  modules: [],
  inputs: [["Input Image", `${slug}-input.png`, `Input image for ${title}`]],
  result: "v7-full-vace",
  editions: ["release"],
}));

const MODULE_ICONS = {
  hiker: ["is-hiker-module", "feature-hiker.png"],
  camel: ["is-camel-module", "feature-camel.png"],
  bear: ["is-bear-module", "feature-bear.png"],
  trex: ["is-trex-module", "feature-trex.png"],
  camera: ["is-camera-module", "feature-camera-triangle.png"],
  cameraB: ["is-camera-module", "feature-camera-path-b.png"],
};

function currentEdition() {
  return document.body.dataset.edition === "full" ? "full" : "release";
}

function seedName(seed) {
  return `seed${String(seed).padStart(4, "0")}`;
}

function generatedSource(caseData) {
  if (caseData.result) {
    return `./assets/${caseData.slug}-${caseData.result}.mp4`;
  }
  return caseData.seeds
    ? `./assets/${caseData.slug}-generated-${seedName(caseData.seed)}.mp4`
    : `./assets/${caseData.slug}-generated.mp4`;
}

function equation(modules) {
  return modules
    .map((module) => {
      const [className, file] = MODULE_ICONS[module];
      return `
        <span class="feature-module ${className}">
          <img src="./assets/${file}" alt="">
        </span>
      `;
    })
    .join('<span class="feature-plus">+</span>');
}

function inputStack(caseData, defaults) {
  // One input card per object in the scene; a camera module contributes none.
  const objects = caseData.modules.filter(
    (module) => !MODULE_ICONS[module][0].startsWith("is-camera"),
  ).length;
  const wanted = caseData.inputs || defaults.slice(0, objects);
  const cards = wanted
    .map(
      ([title, file, alt]) => `
      <figure class="media-card">
        <figcaption class="media-title">${title}</figcaption>
        <div class="media-frame">
          <img src="./assets/${file}" alt="${alt}" loading="lazy">
        </div>
      </figure>
    `,
    )
    .join("");
  const single = wanted.length === 1 ? " is-single-input" : "";
  return `<div class="teaser-input-stack${single}">${cards}</div>`;
}

function seedSwitcher(caseData) {
  if (!caseData.seeds || caseData.seeds.length < 2) {
    return "";
  }
  const buttons = caseData.seeds
    .map(
      (seed) => `
        <button
          type="button"
          class="bear-seed-button${seed === caseData.seed ? " is-active" : ""}"
          data-seed="${seed}"
          aria-pressed="${seed === caseData.seed}"
        >${seed}</button>
      `,
    )
    .join("");
  return `
    <div class="bear-seed-switcher" role="group" aria-label="Seed">
      <span class="bear-seed-label">Seed</span>
      ${buttons}
    </div>
  `;
}

function teaserRow(caseData, index, defaults) {
  const heading = caseData.id ? ` id="${caseData.id}"` : "";
  const labelled = caseData.id ? ` aria-labelledby="${caseData.id}"` : "";
  return `
    <article class="case feature-row" data-teaser-slug="${caseData.slug}"${labelled}>
      <aside class="feature-rail">
        <span class="feature-row-index">${String(index + 1).padStart(2, "0")}</span>
        ${caseData.modules.length
          ? `<div class="feature-row-visual feature-equation" aria-hidden="true">
               ${equation(caseData.modules)}
             </div>`
          : ""}
        <h2${heading}>${caseData.title}</h2>
        <p>${caseData.subtitle}</p>
      </aside>
      <div class="media-grid">
        ${inputStack(caseData, defaults)}

        <figure class="media-card">
          <figcaption class="media-title">Interactive Scene Puppet</figcaption>
          <div class="media-frame">
            <iframe
              data-lazy-iframe
              data-src="./viser-client/?playbackPath=../assets/${caseData.slug}-scene.viser"
              title="Interactive 4D scene for ${caseData.title}"
              loading="lazy"
              allow="fullscreen"
            ></iframe>
          </div>
        </figure>

        <figure class="media-card">
          <figcaption class="media-title">Depth Control</figcaption>
          <div class="media-frame">
            <video muted loop playsinline preload="none" data-lazy-video>
              <source data-src="./assets/${caseData.slug}-depth.mp4" type="video/mp4">
            </video>
          </div>
        </figure>

        <figure class="media-card">
          ${seedSwitcher(caseData)}
          <figcaption class="media-title">Generated Video</figcaption>
          <div class="media-frame">
            <video muted loop playsinline preload="none" data-lazy-video data-teaser-generated>
              <source data-src="${generatedSource(caseData)}" type="video/mp4">
            </video>
          </div>
        </figure>
      </div>
    </article>
  `;
}

function columnHeadings() {
  return `
    <div class="teaser-column-headings" aria-hidden="true">
      <span></span>
      <span class="teaser-heading-input">Input<br>Image</span>
      <span class="teaser-heading-puppet">Interactive Scene Puppet</span>
      <span class="teaser-heading-depth">Depth Control</span>
      <span class="teaser-heading-video">Generated Video</span>
    </div>
  `;
}

function mountTeaser(root, cases, defaults) {
  if (!root) {
    return;
  }
  const edition = currentEdition();
  const visible = cases.filter((item) => item.editions.includes(edition));
  if (visible.length === 0) {
    root.remove();
    return;
  }
  root.innerHTML = `
    <main class="teaser-container">
      ${columnHeadings()}
      ${visible.map((item, index) => teaserRow(item, index, defaults)).join("")}
    </main>
  `;

  root.querySelectorAll("[data-teaser-slug]").forEach((row) => {
    const slug = row.dataset.teaserSlug;
    const video = row.querySelector("[data-teaser-generated]");
    const source = video.querySelector("source");
    row.querySelectorAll(".bear-seed-button").forEach((button) => {
      button.addEventListener("click", () => {
        row.querySelectorAll(".bear-seed-button").forEach((other) => {
          const active = other === button;
          other.classList.toggle("is-active", active);
          other.setAttribute("aria-pressed", String(active));
        });
        const seed = Number(button.dataset.seed);
        const url = `./assets/${slug}-generated-${seedName(seed)}.mp4`;
        // Keep data-src in sync so the lazy observer restores the same seed.
        source.dataset.src = url;
        if (source.src) {
          source.src = url;
          video.load();
          video.play().catch(() => {});
        }
      });
    });
  });
}

mountTeaser(document.querySelector("#hiker-teaser"), HIKER_CASES, HIKER_INPUTS);
mountTeaser(document.querySelector("#bear-teaser"), BEAR_CASES, BEAR_INPUTS);
mountTeaser(document.querySelector("#showcase-teaser"), SHOWCASE_CASES, []);
