<template>
  <div class="home">
    <div class="container col-9">
      <img
        src="/icons/home-port-light.png"
        alt="Profile Image"
        class="home-img"
      />
      <h2>Javier Ramirez Salazar</h2>
      <p>
        Hi there! I'm a developer who likes building cool things, learning new
        technologies, and constantly improving my skills.
      </p>
    </div>
    <div class="container px-4">
      <MagicBento
        :card-data="cardData"
        :text-auto-hide="true"
        :enable-stars="false"
        :enable-spotlight="true"
        :enable-border-glow="true"
        :enable-tilt="true"
        :enable-magnetism="true"
        :click-effect="true"
        :spotlight-radius="300"
        :particle-count="12"
        glow-color="27, 39, 209"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import mapboxgl from "mapbox-gl";
import MagicBento from "../components/MagicBento.vue";

const cardData = [
  {
    color: "#091118",
    label: "Project Spotlight",
    title: "",
    description: "Working on a new project",
    body: '<a href="https://github.com/ramirezj129" target="_blank" rel="noopener"><i class="fab fa-github"></i><span class="ml-1">View Repo</span></a>',
  },
  {
    color: "#091118",
    label: "Currently Learning",
    title: "",
    description: "Leveraging AI and LLMs to build smarter applications",
    body: '<i class="fas fa-brain"></i><i class="fas fa-robot"></i>',
  },
  {
    color: "#091118",
    label: "Location",
    title: "",
    description: "Houston, TX",
    body: '<div id="map" class="home-map"></div>',
  },
  {
    color: "#091118",
    label: "My Links:",
    title: "Lets Connect",
    description:
      "If you have any opportunities or advice to share, please feel free to message me.",
    body: '<div class="link-grid"><a href="https://www.linkedin.com/in/ramirezj129/" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i><span>LinkedIn</span></a><a href="https://github.com/ramirezj129" target="_blank" rel="noopener"><i class="fab fa-github"></i><span>GitHub</span></a><a href="https://www.kaggle.com/javier154" target="_blank" rel="noopener"><i class="fab fa-kaggle"></i><span>Kaggle</span></a><a href="/icons/Javier_Resume.pdf" target="_blank" rel="noopener"><i class="fas fa-file-pdf"></i><span>Resume</span></a></div>',
  },
  {
    color: "#091118",
    label: "",
    title: "Tech I use",
    description: "Favorite tools",
    body: '<i class="fab fa-vuejs"></i> <i class="fab fa-js"></i> <i class="fab fa-node-js"></i> <i class="fa fa-database"></i>',
  },
  {
    color: "#091118",
    label: "Blog:",
    title: "",
    description: "Components and useful resources.",
    body: '<a style="font-size: 17px;" href="/blog"><i class="fas fa-pen-nib mr-1"></i><span>Read Posts</span></a>',
  },
];

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

let map;
const mapInitialized = ref(false);

const darkImage = "/icons/home-port-dark.png";
const lightImage = "/icons/home-port-light.png";

// Function to preload images
const preloadImages = () => {
  [darkImage, lightImage].forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

onMounted(async () => {
  document.documentElement.style.setProperty("--transition-duration", "0s");

  // Preload images
  preloadImages();

  // Guard the map init: a missing/invalid Mapbox token must not crash the
  // whole app (which would break routing and the nav).
  if (!MAPBOX_ACCESS_TOKEN) {
    console.warn(
      "VITE_MAPBOX_ACCESS_TOKEN is not set — skipping map. Set it in Netlify env (or a local .env) to enable the map.",
    );
    document.documentElement.style.removeProperty("--transition-duration");
    return;
  }

  // The #map container lives inside a MagicBento card body (rendered via
  // v-html). Wait for the DOM to settle so the element exists before mounting.
  await nextTick();
  const mapEl = document.getElementById("map");
  if (!mapEl) {
    console.warn("Map container #map not found — skipping map init.");
    document.documentElement.style.removeProperty("--transition-duration");
    return;
  }

  try {
    map = new mapboxgl.Map({
      container: mapEl,
      style: "mapbox://styles/javier154/clw875tcc007901p9bo4w5i63",
      center: [-95.366739, 29.754075], // Houston coordinates [longitude, latitude]
      zoom: 11,
      accessToken: MAPBOX_ACCESS_TOKEN,
    });

    map.on("load", () => {
      document.documentElement.style.removeProperty("--transition-duration");
      mapInitialized.value = true;
    });
  } catch (err) {
    console.error("Failed to initialize Mapbox map:", err);
    document.documentElement.style.removeProperty("--transition-duration");
  }
});

onBeforeUnmount(() => {
  if (map) {
    map.remove();
  }
});
</script>

<style scoped>
.home {
  padding: 20px;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
}

.home-img {
  border-radius: 100%;
  width: 80%;
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 20px;

  transform: scale(0.95); /* Start with a slight scale down */
}

.home-img.loaded {
  opacity: 1; /* Set opacity to 1 when image is loaded */
  transform: scale(1); /* Scale up to normal size */
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.card {
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  max-width: 540px; /* Consistent max-width */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.spotlight-card {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.spotlight-img {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Cover the area */
  margin: auto;
}
@media (max-width: 575.98px) {
  .container {
    width: 90%; /* Adjust the width according to your preference */
  }
}

@media (max-width: 575.98px) {
  .home-img {
    width: 50%;
    margin: 0 auto 20px; /* Center the image on small screens */
  }

  .card {
    width: 100%;
    max-width: 100%; /* Ensure cards take full width on small screens */
    min-height: 100px; /* Adjust minimum height for smaller screens */
    padding: 3px; /* Adjust padding for smaller screens */
  }

  .card .card-body h4,
  .card .card-body h5,
  .card .card-body h6 {
    font-size: 1.2rem; /* Adjust font size for headings */
  }

  .card .card-body p {
    font-size: 0.9rem; /* Adjust font size for paragraphs */
  }

  .btn {
    width: 100%; /* Buttons take full width on small screens */
    margin-top: 10px;
  }

  .spotlight-card .row {
    flex-direction: column; /* Stack image and text vertically */
    align-items: center; /* Center the items */
  }

  .spotlight-img {
    width: 100%;
    margin-bottom: 10px; /* Space between image and text */
  }
}

@media (min-width: 576px) and (max-width: 991.98px) {
  .home-img {
    width: 40%;
  }

  .card {
    width: 100%;
  }

  .spotlight-img {
    width: 100%;
    height: 100%; /* Ensure image covers the designated space */
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .spotlight-img {
    width: 100%;
    padding-left: 10px;
    height: 100%; /* Ensure image covers the designated space */
  }
}

@media (min-width: 992px) {
  .home-img {
    width: 20%;
  }

  .card {
    width: 48%;
  }

  .spotlight-img {
    width: 100%;
    padding-left: 10px;
    height: 100%; /* Ensure image covers the designated space */
  }
}

@media (min-width: 1262px) {
  .home-img {
    width: 15%;
  }
}

.map-container {
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
}
</style>

<!--
  Global (non-scoped) styles: the map lives inside a MagicBento card body
  rendered with v-html, which scoped CSS cannot reach.
-->
<style>
.home-map {
  width: 100%;
  height: 220px;
  min-height: 180px;
  border-radius: 8px;
  overflow: hidden;
}
</style>
