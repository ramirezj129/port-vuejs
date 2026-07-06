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
        :enable-stars="true"
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
import { ref, onMounted, onBeforeUnmount } from "vue";
import mapboxgl from "mapbox-gl";
import MagicBento from "../components/MagicBento.vue";

const cardData = [
  {
    color: "#091118",
    label: "Insights",
    title: "Analytics",
    description: "Track user behavior",
    body: '<i class="fas fa-chart-line"></i>',
  },
  {
    color: "#091118",
    label: "Overview",
    title: "Dashboard",
    description: "Centralized data view",
    body: '<i class="fas fa-tachometer-alt"></i>',
  },
  {
    color: "#091118",
    label: "",
    title: "",
    description: "Houston, TX",
    body: '<a href="https://github.com/javier154" target="_blank" rel="noopener"><i class="fab fa-github"></i></a>',
  },
  {
    color: "#091118",
    label: "My Links",
    title: "Automation",
    description: "Streamline workflows",
    body: '<div><a href="https://www.linkedin.com/in/ramirezj129/" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i> <span class="text-sm mt-1">Linked-In</span></a> <div><a href="https://github.com/javier154" target="_blank" rel="noopener"><i class="fab fa-github"></i><span class="text-sm ml-1">GitHub</span></a></div></div>',
  },
  {
    color: "#091118",
    label: "Stack",
    title: "Tech I use",
    description: "Favorite tools",
    body: '<i class="fab fa-vuejs"></i> <i class="fab fa-js"></i> <i class="fab fa-node-js"></i> <i class="fab fa-git-alt"></i>',
  },
  {
    color: "#091118",
    label: "Protection",
    title: "Security",
    description: "Enterprise-grade protection",
    body: '<i class="fas fa-shield-alt"></i>',
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

onMounted(() => {
  document.documentElement.style.setProperty("--transition-duration", "0s");

  // Preload images
  preloadImages();

  // Guard the map init: a missing/invalid Mapbox token must not crash the
  // whole app (which would break routing and the nav).
  if (!MAPBOX_ACCESS_TOKEN) {
    console.warn(
      "VITE_MAPBOX_ACCESS_TOKEN is not set — skipping map. Add it to a .env file to enable the map.",
    );
    document.documentElement.style.removeProperty("--transition-duration");
    return;
  }

  try {
    map = new mapboxgl.Map({
      container: "map",
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
