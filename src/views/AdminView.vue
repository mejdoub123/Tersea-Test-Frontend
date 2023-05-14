<script setup>
import SideBarAdmin from "../layouts/SideBarAdmin.vue";
</script>
<template>
  <div class="row gx-lg-5">
    <SideBarAdmin class="col-lg-2" />
    <div class="card mt-2 col-lg-10" style="min-height: 500px">
      <RouterView />
    </div>
  </div>
</template>
