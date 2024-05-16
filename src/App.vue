<template>
  <div :class="themeState.theme" id="app">
    <HeaderComponent />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import { themeState } from './theme';
</script>

<style>
/* General styles for html and body */
html, body {
  height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
  transition: background-color 0.5s, color 0.5s;
}

/* Dark mode styles */
.dark-mode {
  --bg-color: black;
  --text-color: #fff;
}

/* Light mode styles */
.light-mode {
  --bg-color: #fff;
  --text-color: #000;
}

/* Background color for html and body elements */
html, body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

/* Container styles */
#app {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Transition styles */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity .9s ease-in-out, transform 1.2s ease-in-out; /* Adjusted duration and easing */
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
