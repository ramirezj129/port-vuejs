import { reactive, watchEffect } from "vue";

// Dark mode only. Light mode and the theme toggle have been removed.
export const themeState = reactive({
  theme: "dark-mode",
});

// Always apply the dark theme class so the CSS variables resolve site-wide.
watchEffect(() => {
  document.documentElement.setAttribute("class", "dark_theme");
});
