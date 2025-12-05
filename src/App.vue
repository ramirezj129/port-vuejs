<template>
  <div
    :class="[themeState.theme === 'dark-mode' ? 'dark_theme' : 'light_theme']"
    id="app"
  >
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import { themeState } from "./theme";
</script>

<style>
#app {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.dark_theme {
  background-color: hsl(210deg, 30%, 8%) !important;
  color: white;
}

/* Light theme */
.light_theme {
  background-color: white;
  color: black;
}
</style>
