import { reactive, watchEffect } from "vue";

// Load saved theme or default to light-mode
const savedTheme = localStorage.getItem("theme") || "light-mode";

export const themeState = reactive({
  theme: savedTheme,
});

// Function to toggle theme and save to localStorage
export const toggleTheme = () => {
  themeState.theme =
    themeState.theme === "dark-mode" ? "light-mode" : "dark-mode";
  localStorage.setItem("theme", themeState.theme);
};

// Watch for changes and update HTML attribute
watchEffect(() => {
  document.documentElement.setAttribute(
    "class",
    themeState.theme === "dark-mode" ? "dark_theme" : "light_theme"
  );
});
