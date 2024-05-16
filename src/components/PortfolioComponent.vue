<template>
  <div class="container col-7">
    <h1>Portfolio Page</h1>
    <p>Check out my projects.</p>

    <div v-if="loading" class="text-center my-5">
      <span class="spinner-border" role="status" aria-hidden="true"></span>
      <span>Loading...</span>
    </div>

    <div v-else class="row row-cols-1 row-cols-lg-3 g-4">
      <div class="col" v-for="(project, index) in projects" :key="index">
        <div class="card h-100">
          <img :src="project.imgUrl" class="card-img-top" alt="Project Image" @click="openModal(project.videoUrl)" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title text-dark" id="videoModalLabel">Project Video</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body bg-dark">
            <iframe class="video-frame" :src="currentVideoUrl" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';

const projects = ref([]);
const currentVideoUrl = ref('');
const loading = ref(true);

const fetchProjects = async () => {
  // Simulating an API call to fetch projects
  await new Promise(resolve => setTimeout(resolve, 1000));
  projects.value = [
    {
      title: 'Fitness Tracker App - Update Soon',
      description: 'Using .NET, Vue.js, Entity Framework I developed a Fitness tracker allowing users to login, create, track, and log their measurements.',
      imgUrl: '/port-img/',
      videoUrl: 'https://www.youtube.com/embed/video_id1',
    },
    {
      title: 'Expense Tracker App - Update Soon',
      description: 'Utilized Vue.js frontend, and Django for backend for seamless integration to create an expense tracker allowing users to calculate their expenses, login and view charts of their spending.',
      imgUrl: '/port-img/',
      videoUrl: 'https://www.youtube.com/embed/video_id2',
    },
    {
      title: 'Blog Web App - MERN Stack',
      description: 'Designed, and developed a dynamic blog application using a MERN stack (MongoDB, Express, React, and Node.js). I implemented performance enhancements through optimized storage and retrieval of content in a structured MongoDB database.',
      imgUrl: '/port-img/mern-pic.png',
      videoUrl: 'https://drive.google.com/file/d/1LsNKnJAHuTAdKkrmaoZPI653BKorbZ-B/preview',
    },
    {
      title: 'Django E-Commerce',
      description: 'Independently developed an e-commerce website using Python, Django, and SQLite showcasing knowledge in full-stack web development',
      imgUrl: '/port-img/django_bg.png',
      videoUrl: 'https://drive.google.com/file/d/11yp57MiE1KinBBrRrJhEnSWt-LuFaI1p/preview',
    },
    {
      title: 'School GUI App',
      description: 'Collaborated with a team of 3 to create a user interface that replicates the school website portal using Qt software and C++.',
      imgUrl: '/port-img/soft_bg.png',
      videoUrl: 'https://drive.google.com/file/d/1kZ9LjgTXJNVDEZGbtA-SnILy1bencoXO/preview',
    },
    {
      title: 'Task Management',
      description: 'Engineered a cutting-edge .NET web application, leveraging a tech stack including C#, Razor Pages, MSSQL, Entity Framework, MVC, JavaScript, CSS, and HTML.',
      imgUrl: '/port-img/todo_app.png',
      videoUrl: 'https://drive.google.com/file/d/1d9jXTWPt0fC9EqiXY56ds50OI8tXD5l_/preview',
    },
    {
      title: 'Game Development - Space Game',
      description: 'Designed and developed a 2D video game using Processing showcasing proficiency in object-oriented programming and game development principles.',
      imgUrl: '/port-img/space_proj_bg.png',
      videoUrl: 'https://drive.google.com/file/d/1MFABDMJKqNUMzHzYZQpOy-E64tCxsHmQ/preview',
    },
    {
      title: 'Restaurant RDBMS (mySql)',
      description: 'Collaborated with a team of three to develop a restaurant-based relational database management system (RDBMS). Implemented the database schema using MySQL and created queries to retrieve, insert, update, and delete data from the database.',
      imgUrl: '/port-img/sql_bg.png',
      videoUrl: 'https://drive.google.com/file/d/1qVbcGNRjohRxJgfvMRJ2klpn4p-FPQN6/preview',
    },
    {
      title: 'FastApi - CRUD',
      description: 'Designed and developed a REST API using Python FastAPI framework, demonstrating working knowledge in backend web development and RESTful API design principles.',
      imgUrl: '/port-img/fastapi.jpg',
      videoUrl: 'https://drive.google.com/file/d/1xNSSAOvkMcuEMLaGec5kZwEPPMR0jNGN/preview',
    },
    {
      title: 'NFT - Exploratory Data Analysis',
      description: 'NFT EDA (Exploratory Data Analysis) analysis project is a comprehensive study of the trends and characteristics of the emerging NFT (Non-Fungible Token) market.',
      imgUrl: '/port-img/nft_bg.png',
      videoUrl: 'https://github.com/ramirezj129/NFT_EDA.git',
    },
  ];
  loading.value = false;
};

const openModal = (videoUrl) => {
  currentVideoUrl.value = videoUrl;
  const modalElement = document.getElementById('videoModal');
  const modal = new Modal(modalElement);
  modal.show();
};

onMounted(fetchProjects);
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
}

.card {
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  width: 100%;
  height: 205px; /* Adjust the height as needed */
  object-fit: initial;
  cursor: pointer; /* Add cursor pointer to indicate the image is clickable */
}

.modal-dialog {
  max-width: 90%; /* Adjusts modal width on smaller screens */
  width: auto;
}

.modal-content {
  padding: 0;
}

.video-frame {
  width: 100%;
  height: 60vh; /* 60% of viewport height for responsiveness */
  border: 0;
}

/* Extra small screens (max-width: 575.98px) */
@media (max-width: 575.98px) {
  .modal-dialog {
    max-width: 100%; /* Full width for very small screens */
    margin: 10px; /* Add some margin */
  }

  .video-frame {
    height: 40vh; /* Smaller height for very small screens */
  }
}

/* Small to mid-sized screens (min-width: 576px and max-width: 991.98px) */
@media (min-width: 576px) and (max-width: 991.98px) {
  .modal-dialog {
    max-width: 70%;
  }

  .video-frame {
    height: 400px; /* Adjusted height for mid-sized screens */
  }
}

/* Large screens (min-width: 992px) */
@media (min-width: 992px) {
  .modal-dialog {
    max-width: 80%;
  }

  .video-frame {
    height: 600px; /* Fixed height for larger screens */
  }
}
</style>
