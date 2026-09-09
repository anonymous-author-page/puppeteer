const BASELINE_METHODS = [
  ["MotionControl", "motionctrl-animatediff"],
  ["Perception as Control", "perception-as-control"],
  ["SymphoMotion", "symphomotion"],
  ["VerseCrafter", "versecrafter"],
];

const NO_GROUND_TRUTH_CASES = [
  {
    slug: "case-bear",
    title: "Bear · Object Rotation",
    description: "Clockwise 180° object rotation · Static camera.",
    viewerNote: "Cyan = Moving Foreground",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-01",
    title: "Black Swan · Object Rotation",
    description: "Clockwise 180° object rotation · Static camera.",
    viewerNote: "Cyan = Moving Foreground",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-02",
    title: "Boat · Object Rotation",
    description: "Clockwise 180° object rotation · Static camera.",
    viewerNote: "Cyan = Moving Foreground",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-03",
    title: "Boat · Camera Yaw −180°",
    description: "Static object · Camera yaw −180°.",
    viewerNote: "Blue = Moving Camera",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-04",
    title: "Breakdance Flare · Camera Yaw −180°",
    description: "Static object · Camera yaw −180°.",
    viewerNote: "Blue = Moving Camera",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-05",
    title: "Camel · Camera Yaw +120°",
    description: "Static object · Camera yaw +120°.",
    viewerNote: "Blue = Moving Camera",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-06",
    title: "Camel · Object Translation + Camera Follow",
    description:
      "Object moves left by 3 body widths · Parallel camera follow.",
    viewerNote: "Cyan = Foreground · Blue = Camera",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-07",
    title: "Car Roundabout · Object Rotation",
    description: "Clockwise 180° object rotation · Static camera.",
    viewerNote: "Cyan = Moving Foreground",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-08",
    title: "Car Shadow · Object Rotation",
    description: "Clockwise 180° object rotation · Static camera.",
    viewerNote: "Cyan = Moving Foreground",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-09",
    title: "Car Shadow · Camera Yaw +180°",
    description: "Static object · Camera yaw +180°.",
    viewerNote: "Blue = Moving Camera",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-10",
    title: "Cows · Object Translation + Camera Follow",
    description:
      "Object moves right by 3 body widths · Parallel camera follow.",
    viewerNote: "Cyan = Foreground · Blue = Camera",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-12",
    title: "Dog · Object Translation + Camera Follow",
    description:
      "Object moves left by 3 body widths · Parallel camera follow.",
    viewerNote: "Cyan = Foreground · Blue = Camera",
    result: ["V7-Rank16-LoRA", "v7-rank16-lora"],
  },
  {
    slug: "qual-13",
    title: "Dog Agility · Camera Yaw +120°",
    description: "Static object · Camera yaw +120°.",
    viewerNote: "Blue = Moving Camera",
    result: ["V5 / Wave Rotation", "v5-wave-rotation"],
  },
  {
    slug: "qual-14",
    title: "Elephant · Object Translation + Camera Follow",
    description:
      "Object moves left by 3 body widths · Parallel camera follow.",
    viewerNote: "Cyan = Foreground · Blue = Camera",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-15",
    title: "Flamingo · Object Rotation",
    description: "Clockwise 180° object rotation · Static camera.",
    viewerNote: "Cyan = Moving Foreground",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-16",
    title: "Koala · Object Rotation",
    description: "Clockwise 180° object rotation · Static camera.",
    viewerNote: "Cyan = Moving Foreground",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-17",
    title: "Libby · Object Rotation",
    description: "Clockwise 180° object rotation · Static camera.",
    viewerNote: "Cyan = Moving Foreground",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-18",
    title: "Libby · Camera Yaw +120°",
    description: "Static object · Camera yaw +120°.",
    viewerNote: "Blue = Moving Camera",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-19",
    title: "Mallard Water · Object Rotation",
    description: "Clockwise 180° object rotation · Static camera.",
    viewerNote: "Cyan = Moving Foreground",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-20",
    title: "Varanus Cage · Object Rotation",
    description: "Clockwise 180° object rotation · Static camera.",
    viewerNote: "Cyan = Moving Foreground",
    result: ["V5 / Wave Rotation", "v5-wave-rotation"],
  },
];

const GROUND_TRUTH_CASES = [
  {
    slug: "qual-21",
    title: "Reef Fish · Natural Motion",
    description:
      "Estimated rigid object and camera trajectories · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-22",
    title: "Runner · Natural Motion",
    description:
      "Estimated rigid object and camera trajectories · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-23",
    title: "Push-Ups · Articulated Motion",
    description:
      "Estimated rigid object and camera trajectories · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-24",
    title: "Crawling Baby · Natural Motion",
    description:
      "Estimated rigid object and camera trajectories · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-25",
    title: "Two Runners · Multi-Object Motion",
    description:
      "Two rigid object trajectories and camera motion · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-26",
    title: "Motorcyclist · Natural Motion",
    description:
      "Estimated rigid object and camera trajectories · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-27",
    title: "Bearded Runner · Natural Motion",
    description:
      "Forward running motion through an outdoor training facility · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-28",
    title: "Forest Turnaround · Natural Motion",
    description:
      "A runner turns and moves away through an autumn forest · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-29",
    title: "Forest Jogger · Natural Motion",
    description:
      "Forward jogging motion along a forest path · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-30",
    title: "Shark · Natural Motion",
    description:
      "A shark swims and turns through an underwater scene · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-31",
    title: "Bridge Runner · Natural Motion",
    description:
      "A runner approaches the camera along a bridge · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-32",
    title: "Lakeside Runner · Natural Motion",
    description:
      "Forward running motion along a lakeside stone path · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-33",
    title: "Stadium Runner · Natural Motion",
    description:
      "Lateral running motion across an outdoor track · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-34",
    title: "Horse Rider · Natural Motion",
    description:
      "A mounted rider advances along a forest path · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-35",
    title: "Courtyard Runner · Natural Motion",
    description:
      "Forward running motion through a stone courtyard · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-36",
    title: "Twilight Forest Runner · Natural Motion",
    description:
      "Forward running motion across dim forest terrain · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-37",
    title: "Skier · Natural Motion",
    description:
      "A skier descends through an alpine landscape · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-38",
    title: "Crouching Character · Game Motion",
    description:
      "Cautious crouching motion along a village path · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-39",
    title: "Ancient Courtyard · Game Motion",
    description:
      "Forward character motion through a populated courtyard · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-40",
    title: "Cloaked Character · Game Motion",
    description:
      "A cloaked character advances through an ornate hall · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-41",
    title: "Sports Car · Natural Motion",
    description:
      "A sports car follows a winding mountain road · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-42",
    title: "Armored Character · Game Motion",
    description:
      "Forward character motion across an open field · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-43",
    title: "Shielded Warrior · Game Motion",
    description:
      "A shielded warrior advances along a rural path · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
  {
    slug: "qual-44",
    title: "Sword-Fighting Warrior · Game Motion",
    description:
      "Combat motion inside an ancient stone temple · Ground-truth reference.",
    groundTruth: "ground-truth",
    result: ["V7 for VACE", "v7-full-vace"],
  },
];

function baselineFigure(slug, label, methodSlug) {
  return `
    <figure class="media-card">
      <figcaption class="media-title">${label}</figcaption>
      <div class="media-frame">
        <video muted loop playsinline preload="none" data-lazy-video>
          <source
            data-src="./assets/${slug}-${methodSlug}.mp4"
            type="video/mp4"
          >
        </video>
      </div>
    </figure>
  `;
}

function qualitativeCase(caseData, index, carouselId, totalCases) {
  const methods = [
    ...(caseData.groundTruth
      ? [["Ground Truth", caseData.groundTruth]]
      : []),
    ...BASELINE_METHODS,
    ["Ours", caseData.result[1]],
  ];
  const outputHeading = caseData.groundTruth
    ? "Ground Truth and Method Outputs"
    : "Baseline Outputs";
  const outputRowClass = caseData.groundTruth
    ? "qualitative-baseline-row has-ground-truth"
    : "qualitative-baseline-row";
  return `
    <article
      id="${carouselId}-slide-${index}"
      class="qualitative-case"
      data-carousel-slide
      role="group"
      aria-roledescription="slide"
      aria-label="${index + 1} of ${totalCases}"
    >
      <header class="qualitative-case-heading">
        <h3>${caseData.title}</h3>
        <p>${caseData.description}</p>
      </header>

      <div class="qualitative-control-row">
        <figure class="media-card">
          <figcaption class="media-title">Input Image</figcaption>
          <div class="media-frame">
            <img
              src="./assets/${caseData.slug}-input.png"
              alt="Input image for ${caseData.title}"
              loading="lazy"
            >
          </div>
        </figure>

        <figure class="media-card">
          <figcaption class="media-title">Interactive 4D Control</figcaption>
          <div class="media-frame">
            <iframe
              data-lazy-iframe
              data-src="./viser-client/?playbackPath=../assets/${caseData.slug}-scene.viser"
              title="Interactive 4D control for ${caseData.title}"
              loading="lazy"
              allow="fullscreen"
            ></iframe>
          </div>
        </figure>
      </div>

      <h4 class="baseline-output-title">${outputHeading}</h4>
      <div class="${outputRowClass}">
        ${methods
          .map(([label, methodSlug]) =>
            baselineFigure(caseData.slug, label, methodSlug),
          )
          .join("")}
      </div>
    </article>
  `;
}

function progressItem(caseData, index, carouselId, totalCases) {
  const [subject, purpose] = caseData.title.split(" · ");
  const number = String(index + 1).padStart(2, "0");
  return `
    <button
      class="qualitative-progress-item"
      type="button"
      data-progress-index="${index}"
      aria-controls="${carouselId}-slide-${index}"
      aria-label="Show case ${index + 1} of ${totalCases}: ${caseData.title}"
    >
      <span class="qualitative-progress-number">${number}</span>
      <span class="qualitative-progress-copy">
        <strong>${subject}</strong>
        <small>${purpose}</small>
      </span>
    </button>
  `;
}

function createCarousel(root, cases, { id, label }) {
  const totalCases = cases.length;
  root.innerHTML = `
    <div
      class="qualitative-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="${label}"
      tabindex="0"
    >
      <div class="qualitative-progress">
        <div class="qualitative-progress-heading">
          <div>
            <span class="qualitative-progress-kicker">Case Navigator</span>
            <strong class="qualitative-progress-current-title"></strong>
          </div>
          <span class="qualitative-progress-count">
            <strong class="qualitative-progress-current">01</strong>
            <span>/</span>
            <span>${totalCases}</span>
          </span>
        </div>
        <div class="qualitative-progress-bar" aria-hidden="true">
          <span></span>
        </div>
        <nav
          class="qualitative-progress-list"
          aria-label="Choose a case from ${label}"
        >
          ${cases
            .map((caseData, index) =>
              progressItem(caseData, index, id, totalCases),
            )
            .join("")}
        </nav>
      </div>

      <div class="qualitative-carousel-stage">
        <div class="qualitative-carousel-viewport">
          <div class="qualitative-carousel-track">
            ${cases
              .map((caseData, index) =>
                qualitativeCase(caseData, index, id, totalCases),
              )
              .join("")}
          </div>
        </div>
        <button
          class="qualitative-carousel-button is-previous"
          type="button"
          aria-label="Previous case in ${label}"
        >&#8249;</button>
        <button
          class="qualitative-carousel-button is-next"
          type="button"
          aria-label="Next case in ${label}"
        >&#8250;</button>
      </div>
      <p class="qualitative-carousel-status" aria-live="polite"></p>
    </div>
  `;

  const carousel = root.querySelector(".qualitative-carousel");
  const carouselTrack = carousel.querySelector(
    ".qualitative-carousel-track",
  );
  const carouselSlides = Array.from(
    carousel.querySelectorAll("[data-carousel-slide]"),
  );
  const previousButton = carousel.querySelector(".is-previous");
  const nextButton = carousel.querySelector(".is-next");
  const carouselStatus = carousel.querySelector(
    ".qualitative-carousel-status",
  );
  const progressList = carousel.querySelector(
    ".qualitative-progress-list",
  );
  const progressButtons = Array.from(
    carousel.querySelectorAll("[data-progress-index]"),
  );
  const progressCurrent = carousel.querySelector(
    ".qualitative-progress-current",
  );
  const progressCurrentTitle = carousel.querySelector(
    ".qualitative-progress-current-title",
  );
  const progressFill = carousel.querySelector(
    ".qualitative-progress-bar > span",
  );
  let currentSlide = 0;

  function showSlide(index) {
    currentSlide = Math.max(
      0,
      Math.min(index, carouselSlides.length - 1),
    );
    carouselTrack.style.transform =
      `translateX(-${currentSlide * 100}%)`;
    carouselSlides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === currentSlide;
      slide.setAttribute("aria-hidden", String(!isActive));
      slide.inert = !isActive;
    });
    previousButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === carouselSlides.length - 1;
    progressButtons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === currentSlide;
      button.classList.toggle("is-active", isActive);
      button.classList.toggle("is-complete", buttonIndex < currentSlide);
      if (isActive) {
        button.setAttribute("aria-current", "step");
      } else {
        button.removeAttribute("aria-current");
      }
    });
    progressCurrent.textContent = String(currentSlide + 1).padStart(2, "0");
    progressCurrentTitle.textContent = cases[currentSlide].title;
    progressFill.style.width =
      `${((currentSlide + 1) / carouselSlides.length) * 100}%`;

    const activeProgressItem = progressButtons[currentSlide];
    const centeredLeft =
      activeProgressItem.offsetLeft -
      (progressList.clientWidth - activeProgressItem.offsetWidth) / 2;
    progressList.scrollTo({
      left: Math.max(
        0,
        Math.min(
          centeredLeft,
          progressList.scrollWidth - progressList.clientWidth,
        ),
      ),
      behavior: carousel.dataset.ready ? "smooth" : "auto",
    });
    carouselStatus.textContent =
      `${currentSlide + 1} / ${carouselSlides.length} · ` +
      cases[currentSlide].title;
    carousel.dataset.ready = "true";
  }

  previousButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  progressButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showSlide(Number(button.dataset.progressIndex));
    });
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showSlide(currentSlide - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showSlide(currentSlide + 1);
    }
  });

  let touchStartX = null;
  const carouselViewport = carousel.querySelector(
    ".qualitative-carousel-viewport",
  );
  carouselViewport.addEventListener(
    "touchstart",
    (event) => {
      if (event.target.closest(".qualitative-baseline-row")) {
        return;
      }
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true },
  );
  carouselViewport.addEventListener(
    "touchend",
    (event) => {
      if (touchStartX === null) {
        return;
      }
      const distance = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(distance) < 50) {
        return;
      }
      showSlide(currentSlide + (distance < 0 ? 1 : -1));
    },
    { passive: true },
  );

  showSlide(0);
}

createCarousel(
  document.querySelector("#qualitative-ground-truth-cases"),
  GROUND_TRUTH_CASES,
  {
    id: "ground-truth",
    label: "Qualitative results with ground truth",
  },
);

createCarousel(
  document.querySelector("#qualitative-no-ground-truth-cases"),
  NO_GROUND_TRUTH_CASES,
  {
    id: "no-ground-truth",
    label: "Qualitative results without ground truth",
  },
);

function loadVideo(video) {
  const source = video.querySelector("source[data-src]");
  if (source) {
    source.src = source.dataset.src;
    source.removeAttribute("data-src");
    video.load();
  }
  video.play().catch(() => {});
}

const videoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) {
        loadVideo(video);
      } else {
        video.pause();
      }
    });
  },
  { rootMargin: "400px 0px" },
);

document.querySelectorAll("[data-lazy-video]").forEach((video) => {
  videoObserver.observe(video);
});

const iframeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const iframe = entry.target;
      if (entry.isIntersecting) {
        if (!iframe.dataset.loaded) {
          iframe.src = iframe.dataset.src;
          iframe.dataset.loaded = "true";
        }
      } else if (iframe.dataset.loaded) {
        iframe.removeAttribute("src");
        delete iframe.dataset.loaded;
      }
    });
  },
  { rootMargin: "500px 0px" },
);

document.querySelectorAll("[data-lazy-iframe]").forEach((iframe) => {
  iframeObserver.observe(iframe);
});
