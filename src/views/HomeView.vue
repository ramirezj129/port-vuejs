<template>
  <div class="home">
    <div class="container col-8">
      <img :src="currentImageSrc" alt="Profile Image" class="home-img" :class="{ loaded: imageLoaded }" @load="onImageLoad">
      <h2>Javier Ramirez Salazar</h2>
      <p>Hi there! I am an aspiring Software Developer who is passionate about Full-Stack Development. Through my studies, I've honed my abilities and I'm now eager to contribute to innovative software projects.</p>
    
      <div class="card-container">
        <!-- First card: Project Spotlight -->
        <div class="card spotlight-card" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-12 col-md-4 d-flex align-items-center">
              <img src="/icons/home-img.jpg" class="img-fluid rounded-start spotlight-img" alt="Vue.js Logo">
            </div>
            <div class="col-12 col-md-8">
              <div class="card-body">
                <h5 class="card-title">Project Spotlight <i class="far fa-star"></i></h5>
                <h6><li><strong>Fitness Tracker</strong></li></h6>
                <p>Simple, Responsive Fitness Tracker Webapp allowing users to login, create, track and log their individual workouts.</p>
                <p>Technologies used:</p>
                <div class="tech-icons">
                  <img src="/icons/C-Logo.png" alt="C#" width="34px">
                  <img src="/icons/Net-Logo.png" alt=".NET" width="50px">
                  <img src="/icons/vue-logo.png" alt="Vue.js" width="34px">
                  <img src="/icons/postman-logo.svg" alt="Postman" width="40px">
                  <img src="/icons/mssql.svg" alt="MSSQL" width="34px">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- LinkedIn card -->
        <div class="card" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-12">
              <div class="card-body">
                <h4>LinkedIn <i class="fab fa-linkedin"></i></h4>
                <h6><strong>Connect with me</strong></h6>
                <p>If you have any opportunities or advice to share, please feel free to message me.</p>
                <a href="https://www.linkedin.com/in/ramirezj129/" class="btn btn-primary mt-4">Connect</a>
              </div>
            </div>
          </div>
        </div>

        <!-- GitHub card -->
        <div class="card" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-12">
              <div class="card-body">
                <h4>GitHub <i class="fab fa-github"></i></h4>
                <p>Check out my GitHub!</p>
                <p>My portfolio is on GitHub. </p>
                <p>You can find the source code and contribute to my other projects by visiting my page:</p>
                <a href="https://github.com/ramirezj129" class="btn btn-secondary">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Map card -->
        <div class="card" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-12">
              <div class="card-body">
                <!-- Map container -->
                <div id="map" class="map-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { themeState } from '../theme.js';
import mapboxgl from 'mapbox-gl';

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

let map;
const mapInitialized = ref(false);

const darkImage = '/icons/home-port-dark.png';
const lightImage = '/icons/home-port-light.png';

const imageLoaded = ref(false);

// Function to preload images
const preloadImages = () => {
  [darkImage, lightImage].forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const currentImageSrc = computed(() => {
  imageLoaded.value = false; // Reset the loaded state when the image source changes
  return themeState.theme === 'dark-mode' ? darkImage : lightImage;
});

const onImageLoad = () => {
  imageLoaded.value = true;
};

onMounted(() => {
  document.documentElement.style.setProperty('--transition-duration', '0s');

  // Preload images
  preloadImages();

  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/javier154/clw875tcc007901p9bo4w5i63',
    center: [-95.366739, 29.754075], // Houston coordinates [longitude, latitude]
    zoom: 11,
    accessToken: MAPBOX_ACCESS_TOKEN
  });

  map.on('load', () => {
    document.documentElement.style.removeProperty('--transition-duration');
    mapInitialized.value = true;
  });
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
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out; /* Add transition for fade and transform effect */
  opacity: 0; /* Start with opacity 0 */
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
}

.spotlight-img {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Cover the area */
  margin: auto;
}

@media (max-width: 575.98px) {
  .home-img {
    width: 80%;
    margin: 0 auto 20px; /* Center the image on small screens */
  }

  .card {
    width: 100%;
    max-width: 100%; /* Ensure cards take full width on small screens */
    min-height: 100px; /* Adjust minimum height for smaller screens */
    padding: 3px; /* Adjust padding for smaller screens */
  }

  .card .card-body h4, .card .card-body h5, .card .card-body h6 {
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
    width: 80%;
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
