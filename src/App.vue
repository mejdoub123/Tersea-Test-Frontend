<script setup>
import AppHeader from "./layouts/AppHeader.vue";
import AppFooter from "./layouts/AppFooter.vue";
</script>

<template>
  <div class="page">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>
