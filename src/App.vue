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

/* Dark theme */
.dark_theme {
  --bg-color: hsl(210deg, 30%, 8%);
  --text-color: #ffffff;
  --hover-bg-color: hsl(210deg, 30%, 16%);
  --hover-text-color: #ffffff;
  --indicator-bg-color: rgba(255, 255, 255, 0.2);
  --indicator-border-color: rgba(255, 255, 255, 0.35);
  --active-indicator-bg-color: #ffffff;
  --active-indicator-border-color: #ffffff;

  background-color: var(--bg-color) !important;
  color: var(--text-color);
}

/* Light theme */
.light_theme {
  --bg-color: #ffffff;
  --text-color: #000000;
  --hover-bg-color: #f0f0f0;
  --hover-text-color: #000000;
  --indicator-bg-color: rgba(0, 0, 0, 0.2);
  --indicator-border-color: rgba(0, 0, 0, 0.35);
  --active-indicator-bg-color: #000000;
  --active-indicator-border-color: #000000;

  background-color: var(--bg-color);
  color: var(--text-color);
}
</style>
