<template>
  <div class="container col-8">
    <h1>About Page</h1>
    <p>A little more about me.</p>

    <div id="carouselExampleDark" class="carousel carousel-dark slide custom-carousel mx-auto my-5" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="6000">
          <img src="/icons/about1.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="6000">
          <img src="/icons/vue-logo.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="6000">
          <img src="/icons/vue-logo.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="list-group custom-list-group mx-auto">
      <li><strong>B.S. In Computer Science</strong></li>
      <p>Hi, my name is Javier I was born in Mexico and raised in Houston, TX. As a software developer I am excited in the ever-evolving world of technology. </p>
      <p>I have gained extensive knowledge in a range of programming languages, including C#, Python, and Javascript </p>
    </div>

    <!-- List Group -->
    <div class="list-group custom-list-group mx-auto my-1">
      <a href="https://www.linkedin.com/in/ramirezj129/" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        <span><i class="fab fa-linkedin"></i> LinkedIn</span>
        <i class="fas fa-arrow-right"></i>
      </a>
      <a href="https://github.com/ramirezj129" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        <span><i class="fab fa-github"></i> GitHub</span>
        <i class="fas fa-arrow-right"></i>
      </a>
      <a href="/icons/Javier_Resume.pdf" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        <span><i class="far fa-file"></i> Resume</span>
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
}

.custom-carousel {
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
}

.carousel-inner img {
  object-fit: contain;
  height: 300px;
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

/* Additional styles for list group */
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
</style>
