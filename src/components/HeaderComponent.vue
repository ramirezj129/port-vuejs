<template>
  <nav>
    <div class="navbar p-4 mt-1">
      <router-link to="/" class="logo-link">
        <img src="/icons/light-j.png" alt="Emblem" class="theme-emblem" />
      </router-link>

      <div class="nav-wrap" style="font-size: 13px">
        <GooeyNav
          :items="items"
          :initial-active-index="currentIndex"
          :particle-count="15"
          :particle-distances="[60, 10]"
          :particle-r="100"
          :animation-time="600"
          :time-variance="305"
          :colors="[3, 3, 3, 3, 3, 3, 3, 3]"
          @item-click="onItemClick"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import GooeyNav from "./GooeyNav.vue";

const route = useRoute();
const router = useRouter();

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

// Highlight the tab matching the current route on initial load / deep link.
const currentIndex = computed(() => {
  const i = items.findIndex((item) => item.href === route.path);
  return i === -1 ? 0 : i;
});

const onItemClick = (index) => {
  router.push(items[index].href);
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  background-color: var(--bg-color);
}

.navbar {
  list-style-type: none;
  margin: 0;
  display: flex;
  align-items: center;
  width: 70%;
}

.logo-link {
  margin-right: auto; /* Pushes the logo to the far left */
  text-decoration: none !important;
  color: inherit;
  display: inline-flex;
  align-items: center;
}

.logo-link:hover::after,
.logo-link::after {
  content: none !important;
}

.theme-emblem {
  width: 24px;
  height: 24px;
}

/* Keep the gooey nav on the right side of the bar */
.nav-wrap {
  margin-left: auto;
}
</style>
