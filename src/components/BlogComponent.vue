<template>
  <div class="container col-8">
    <h1>Blog Page</h1>
    <p>Coming Soon</p>


    <!-- List Group
    <div class="list-group">
      <a href="https://link1.com" class="list-group-item list-group-item-action">
        Link 1
      </a>
      <a href="https://link2.com" class="list-group-item list-group-item-action">
        Link 2
      </a>
      <a href="https://link3.com" class="list-group-item list-group-item-action">
        Link 3
      </a>
    </div>

     -->
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

/* Additional styles for list group */
.list-group-item {
  border-radius: 8px; /* Make the items rectangular with rounded corners */
  margin-bottom: 10px; /* Space between items */
  background-color: var(--bg-color); /* Use your background color */
  color: var(--text-color); /* Use your text color */
  border: 1px solid #ccc; /* Border color */
}

.list-group-item:hover {
  background-color: var(--hover-bg-color); /* Background color on hover */
  color: var(--hover-text-color); /* Text color on hover */
}
@media (max-width: 575.98px) {
  .container {
    width: 90%; /* Adjust the width according to your preference */
  }
}
</style>
