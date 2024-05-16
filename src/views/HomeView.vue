<template>
  <div class="home">
    <div class="container col-7">
      <img class="home-img" src="/icons/home_port.png" alt="CoverPhoto">
      <h2>Javier Ramirez Salazar</h2>
      <p>Hi there! I am an aspiring Software Developer who is passionate about Full-Stack Development. Through my studies, I've honed my abilities and I'm now eager to contribute to innovative software projects.</p>
    
      <div class="card-container">
        <!-- First card -->
        <div class="card" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-12 col-md-4">
              <img src="/icons/vue-logo.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Project Spotlight <i class="far fa-star"></i></h5>
                <h6><li><strong>Fitness Tracker</strong></li></h6>
                <p>Simple, Responsive Fitness Tracker Webapp allowing users to login, create, track and log their individual workouts.</p>
                <p>Technologies used:</p>
                <p>
                  <img src="/icons/C-Logo.png" alt="C#" width="34px" >
                  <img src="/icons/Net-Logo.png" alt="Net" width="50px" >
                  <img src="/icons/vue-logo.png" alt="Vue.js" width="34px" >
                  <img src="/icons/postman-logo.svg" alt="Postman" width="40px" >
                  <img src="/icons/mssql.svg" class="mx-1" alt="Mssql" width="34px" >
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-12">
              <div class="card-body">
                <h4>Linked-In <i class="fab fa-linkedin"></i></h4>
                <h6><strong>Connect with me </strong></h6>
                <p>If you have any opportunities or advice to share, please feel free to message me.</p>
                <a href="https://www.linkedin.com/in/ramirezj129/" class="btn btn-primary col-4 offset-4 mt-4">Connect</a>
              </div>
            </div>
          </div>
        </div>

        <div class="card" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-12">
              <div class="card-body">
                <h4>Github <i class="fab fa-github"></i></h4>
                <p>Check out my Github!</p>
                <p>My portfolio is hosted on GitHub Pages. You can find the source code and contribute to the project by visiting the repository:</p>

                <a href="https://github.com/ramirezj129" class="btn btn-secondary">Github</a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-12">
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
import { ref, onMounted, onBeforeUnmount } from 'vue';
import mapboxgl from 'mapbox-gl';

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

let map;
const mapInitialized = ref(false);

onMounted(() => {
  document.documentElement.style.setProperty('--transition-duration', '0s');

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
  width: 40%;
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 20px;
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
  padding: 20px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

@media (min-width: 768px) {
  .home-img {
    width: 20%;
  }

  .card {
    width: 100%;
  }

  .img-fluid {
    padding-top: 40%;
  }
}

@media (min-width: 1262px) {
  .home-img {
    width: 15%;
  }

  .card {
    width: 48%;
  }
}

.map-container {
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
}
</style>