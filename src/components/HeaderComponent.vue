<template>
    <nav>
      <ul class="navbar p-5">
        <li class="logo">
          <router-link to="/" class="logo-link">
            <img v-if="themeState.theme === 'dark-mode'" src="/icons/light-j.png" alt="Dark Emblem" class="theme-emblem">
            <img v-else src="/icons/letter-j.png" alt="Light Emblem" class="theme-emblem">
          </router-link>
        </li>
        <div class="nav-links">
          <li v-show="!isSmallScreen">
            <router-link to="/" exact-active-class="active">Home</router-link>
          </li>
          <li v-show="!isSmallScreen">
            <router-link to="/about" exact-active-class="active">About</router-link>
          </li>
          <li v-show="!isSmallScreen">
            <router-link to="/portfolio" exact-active-class="active">Portfolio</router-link>
          </li>
          <li v-show="!isSmallScreen">
            <router-link to="/blog" exact-active-class="active">Blog</router-link>
          </li>
        </div>
        <li @click="toggleTheme" class="theme-toggler">
          <img :src="themeState.theme === 'dark-mode' ? '/icons/night.png' : '/icons/brightness.png'" alt="Theme Toggle" class="theme-icon">
        </li>
        <!-- Dropdown icon for small screens -->
        <li class="nav-link text-secondary dropdown-toggle" @click="toggleDropdown" v-show="isSmallScreen">
          <img :src="themeState.theme === 'dark-mode' ? '/icons/menu-light.png' : '/icons/menu.png'" alt="Dropdown" class="dropdown-icon">
          <ul class="dropdown-menu" v-if="showDropdown">
            <li><router-link to="/" exact-active-class="active">Home</router-link></li>
            <li><router-link to="/about" exact-active-class="active">About</router-link></li>
            <li><router-link to="/portfolio" exact-active-class="active">Portfolio</router-link></li>
            <li><router-link to="/contact" exact-active-class="active">Contact</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { themeState, toggleTheme } from '../theme.js';
  
  const screenWidth = ref(window.innerWidth);
  const isSmallScreen = computed(() => screenWidth.value <= 768); // Adjust breakpoint as needed
  const showDropdown = ref(false);
  
  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
  };
  
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
  });
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: center;
  }
  
  .navbar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center; /* Align items vertically */
    width: 70%;
  }
  
  .logo {
    margin-right: auto; /* Pushes the logo to the far left */
  }
  
  .logo-link {
    text-decoration: none !important; /* Remove underline from logo link */
    color: inherit; /* Inherit the color to avoid the default link color */
  }
  
  .logo-link:hover::after,
  .logo-link::after {
    content: none !important; /* Ensure no underline effect */
  }
  
  .nav-links {
    display: flex;
    justify-content: center;
    flex: 1;
    gap: 20px; /* Adjust gap as needed */
    cursor: pointer;
  }
  
  .theme-toggler {
    margin-left: auto; /* Pushes the toggler to the far right */
  }
  
  .navbar a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: bold;
    padding: 5px 10px;
    transition: color 0.3s;
    position: relative;
  }
  
  .navbar a::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--text-color);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }
  
  .navbar a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  
  .active::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  
  /* Dark mode styles */
  .dark-mode .navbar a {
    color: #fff;
  }
  
  .dark-mode nav {
    background-color: black;
  }
  
  .dark-mode .dropdown-menu {
    background-color: black;
  }
  
  .dark-mode .dropdown-menu li {
    color: #fff;
  }
  
  /* Light mode styles */
  .light-mode .navbar a {
    color: #000;
  }
  
  .light-mode nav {
    background-color: white;
  }
  
  .theme-icon {
    width: 24px; /* Adjust width as needed */
    height: 24px; /* Adjust height as needed */
    cursor: pointer;
  }
  
  .theme-emblem {
    width: 24px; /* Adjust width as needed */
    height: 24px;
    cursor: pointer;
  }
  
  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: white;
    padding: 10px;
    z-index: 1;
    top: 100%;
    left: 0;
    width: 100%; /* Make dropdown full width */
  }
  
  .dropdown-menu li {
    padding: 5px 0;
    /* Display routes in vertical column */
    display: block;
  }
  
  .dropdown-toggle {
    position: relative;
    cursor: pointer;
  }
  
  .dropdown-toggle:hover .dropdown-menu {
    display: block;
  }
  
  .menu-icon {
    width: 24px;
    height: 24px;
  }
  
  .dropdown-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  
  @media (min-width: 768px) {
    /* Hide dropdown on larger screens */
    .dropdown-toggle {
      display: none;
    }
  }
  </style>
  