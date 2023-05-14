<script setup>
import { useAuthStore } from "../stores/auth";
import { RouterLink } from "vue-router";
const auth = useAuthStore();
</script>
<template>
  <footer v-if="auth.logged" class="footer footer-transparent d-print-none">
    <div class="container-xl">
      <div class="row text-center align-items-center flex-row-reverse">
        <div class="col-12 col-lg-auto mt-3 mt-lg-0">
          <ul class="list-inline list-inline-dots mb-0">
            <li class="list-inline-item">
              Copyright © 2023
              <RouterLink to="" class="link-secondary"
                >MEJDOUB Abdelkader</RouterLink
              >. All rights reserved.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
