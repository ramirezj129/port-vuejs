import { reactive, watchEffect } from 'vue';

const savedTheme = localStorage.getItem('theme') || 'light-mode';

export const themeState = reactive({
  theme: savedTheme
});

export const toggleTheme = () => {
  themeState.theme = themeState.theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
  localStorage.setItem('theme', themeState.theme);
};

// Apply the theme class to the html element when themeState changes
watchEffect(() => {
  document.documentElement.className = themeState.theme;
});
