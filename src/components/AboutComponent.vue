<template>
  <div class="container about-container">
    <!-- Hero -->
    <header class="mb-3">
      <h1>About Me</h1>
      <p>Full-stack developer based in Houston, TX.</p>
    </header>

    <!-- Intro: photos + bio side by side -->
    <div class="about-grid">
      <div class="about-media">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="6000">
              <img src="/icons/about1.png" class="d-block w-100" alt="Javier" />
            </div>
            <div class="carousel-item" data-bs-interval="6000">
              <img src="/icons/uzi.png" class="d-block w-100" alt="Javier" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="about-bio">
        <div class="liquid-glass d-flex p-2 justify-content-center">
          <i class="fas fa-graduation-cap pr-2" style="padding-top: 1px"></i>
          <div class="edu-text">
            <span class="edu-title">B.S. in Computer Science</span>
          </div>
        </div>

        <p class="mt-3">
          Hi, my name is Javier and my passion lies in full-stack software
          development. I am actively learning new technologies and gaining
          valuable insights in the field of tech.
        </p>
        <p>
          I have gained knowledge in a range of programming languages, including
          C#, Python, and JavaScript.
        </p>

        <h6 class="">Hobbies &amp; Interests</h6>
        <div class="chips">
          <span class="chip"><i class="fas fa-running"></i> Running</span>
          <span class="chip"
            ><i class="fas fa-dumbbell"></i> Weight Training</span
          >
          <span class="chip"
            ><i class="fas fa-laptop-code"></i> Personal Projects</span
          >
          <span class="chip"><i class="fas fa-utensils"></i> Cooking</span>
          <span class="chip"><i class="fas fa-gamepad"></i> Video Games</span>
        </div>
      </div>
    </div>

    <!-- Interactive 3D tech cloud -->
    <div class="tech-cloud mx-auto my-4">
      <h5 class="text-center mb-3">Tech I Have Worked With</h5>
      <IconCloud :images="techIcons" :size="440" />
    </div>

    <!-- List Group -->
    <div class="list-group custom-list-group mx-auto my-1">
      <h5 class="text-center mb-4">Connect with Me:</h5>
      <a
        href="https://www.linkedin.com/in/ramirezj129/"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
        <span><i class="fab fa-linkedin"></i> LinkedIn</span>
        <i class="fas fa-arrow-right"></i>
      </a>
      <a
        href="https://github.com/ramirezj129"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
        <span><i class="fab fa-github"></i> GitHub</span>
        <i class="fas fa-arrow-right"></i>
      </a>
      <a
        href="/icons/Javier_Resume.pdf"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
        <span><i class="far fa-file"></i> Resume</span>
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { IconCloud } from "./ui/icon-cloud";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const techIcons = [
  // Languages
  "https://cdn.simpleicons.org/javascript", // JavaScript
  `${DEVICON}/microsoftsqlserver/microsoftsqlserver-plain.svg`, // SQL Server
  "https://cdn.simpleicons.org/dotnet", // VB.NET / .NET
  "https://cdn.simpleicons.org/python", // Python
  "https://cdn.simpleicons.org/cplusplus", // C++
  "https://cdn.simpleicons.org/dart", // Dart
  "https://cdn.simpleicons.org/html5", // HTML
  "https://cdn.simpleicons.org/css", // CSS

  // Frameworks & Libraries
  "https://cdn.simpleicons.org/vuedotjs", // Vue.js
  "https://cdn.simpleicons.org/django/white", // Django
  "https://cdn.simpleicons.org/flask/white", // Flask
  "https://cdn.simpleicons.org/pandas/white", // Pandas
  "https://cdn.simpleicons.org/dotnet", // ASP.NET / .NET Core
  "https://cdn.simpleicons.org/flutter", // Flutter
  "https://cdn.simpleicons.org/bootstrap", // Bootstrap
  "https://cdn.simpleicons.org/express/white", // Express.js
  "https://cdn.simpleicons.org/fastapi", // FastAPI
  "https://cdn.simpleicons.org/unity/white", // Unity
];
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
}

.about-container {
  max-width: 920px;
  margin: 0 auto;
}

/* ---------- Intro grid ---------- */
.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 26px;
  align-items: stretch;
  margin: 8px 0 44px;
}

@media (max-width: 767.98px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

.about-media {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
}

.about-media .carousel,
.about-media .carousel-inner,
.about-media .carousel-item {
  height: 100%;
}

.carousel-inner img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  min-height: 360px;
}

/* ---------- Bio card ---------- */
.about-bio {
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(
      120% 120% at 100% 0%,
      rgba(91, 108, 255, 0.12),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.03);
  padding: 26px 26px 22px;
  display: flex;
  flex-direction: column;
}

.about-bio p {
  color: #b7c1d4;
  line-height: 1.6;
  margin-bottom: 14px;
}

.edu-badge {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(91, 108, 255, 0.1);
  border: 1px solid rgba(91, 108, 255, 0.28);
  margin-bottom: 18px;
}

.edu-badge i {
  font-size: 1.5rem;
  color: #8ea0ff;
}

.edu-text {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}

.edu-title {
  font-weight: 700;
  color: #fff;
}

.section-label {
  margin: 8px 0 12px;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #8ea0ff;
  font-weight: 700;
}

/* ---------- Hobby chips ---------- */
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 9999px;
  font-size: 0.9rem;
  color: #dbe2f0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease;
}

.chip:hover {
  transform: translateY(-2px);
  border-color: white;
  background: rgba(255, 255, 255, 0.12);
}

.chip i {
  color: white;
  font-size: 0.9rem;
}

.carousel-indicators button {
  background-color: var(--indicator-bg-color);
  border: 1px solid var(--indicator-border-color);
}

.carousel-indicators .active {
  background-color: var(--active-indicator-bg-color);
  border: 1px solid var(--active-indicator-border-color);
}

.carousel-indicators {
  bottom: 10px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1);
}

.tech-cloud {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 850px;
}

.tech-cloud canvas {
  cursor: grab;
  max-width: 100%;
  height: auto;
}

.tech-cloud canvas:active {
  cursor: grabbing;
}

.custom-list-group {
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
}

.list-group-item {
  border-radius: 8px;
  margin-bottom: 13px;
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid #ccc;
}

.list-group-item:hover {
  background-color: var(--hover-bg-color);
  color: rgb(159, 159, 159);
}
@media (max-width: 575.98px) {
  .container {
    width: 90%; /* Adjust the width according to your preference */
  }
}

/* CSS - Web Liquid Glass Implementation */
.liquid-glass {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow:
    inset 0 0 1px rgba(255, 255, 255, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.25);
}

.liquid-glass:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive adaptation */
@media (prefers-reduced-transparency: reduce) {
  .liquid-glass {
    background: rgba(30, 41, 59, 0.8);
    backdrop-filter: none;
  }
}
</style>
