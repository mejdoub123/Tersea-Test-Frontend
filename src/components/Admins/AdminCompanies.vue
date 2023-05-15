<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import { useUserStore } from "../../stores/user";
import ResultItem from "../Search/ResultItem.vue";
const route = useRoute();
const admin = useUserStore();
const searchedValue = ref("");
const loading = ref(false);
const results = computed(() => admin.allResults);
let searchTimer;
const onSearch = async () => {
  await admin.search(searchedValue.value);
};
const debounceSearch = () => {
  loading.value = true;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(onSearch, 300);
  loading.value = false;
};
const clearSearch = () => {
  searchedValue.value = "";
  admin.searchResults = {};
};
</script>
<template>
  <div class="my-3">
    <div class="row g-2">
      <div class="col">
        <input
          v-model="searchedValue"
          type="text"
          class="form-control"
          placeholder="Search for…"
        />
      </div>
      <div class="col-auto">
        <button @click="debounceSearch" class="btn btn-icon" type="button">
          <!-- Download SVG icon from http://tabler-icons.io/i/search -->
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
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </button>
      </div>
      <div class="col-auto">
        <button
          @click="clearSearch"
          class="btn btn-icon btn-ghost-danger"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
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
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div v-if="Object.keys(results).length > 0" class="col-12">
    <div class="card">
      <div class="list-group list-group-flush list-group-hoverable">
        <div class="list-group-header sticky-top">Employees</div>
        <ResultItem
          :key="result.id"
          v-for="result in results.employees"
          :item="result"
        />
        <div class="list-group-header sticky-top">Companies</div>
        <ResultItem
          :key="result.id"
          v-for="result in results.companies"
          :item="result"
        />
      </div>
    </div>
  </div>
  <div
    v-if="route.name != 'edit-company' && Object.keys(results).length === 0"
    class="card-header"
  >
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
    v-if="Object.keys(results).length === 0"
    class="card-body list-group list-group-flush overflow-auto"
    style="max-height: 35rem"
  >
    <RouterView />
  </div>
</template>
