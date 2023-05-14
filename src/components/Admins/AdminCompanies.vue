<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<template>
  <div v-if="route.name != 'edit-company'" class="card-header">
    <h3 class="card-title">Companies</h3>

    <div v-if="route.name != 'create-company'" class="card-actions">
      <RouterLink :to="{ name: 'create-company' }" class="btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 5l0 14"></path>
          <path d="M5 12l14 0"></path>
        </svg>
        Add new company
      </RouterLink>
    </div>
  </div>
  <div
    class="card-body list-group list-group-flush overflow-auto"
    style="max-height: 35rem"
  >
    <RouterView />
  </div>
</template>
