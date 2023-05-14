<script setup>
import { useAuthStore } from "../stores/auth";
const auth = useAuthStore();
</script>
<template>
  <div v-if="auth.logged">
    <ul class="nav nav-pills nav-vertical">
      <li class="nav-item mb-1">
        <RouterLink :to="{ name: 'admin-companies' }" class="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-building"
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
            <path d="M3 21l18 0"></path>
            <path d="M9 8l1 0"></path>
            <path d="M9 12l1 0"></path>
            <path d="M9 16l1 0"></path>
            <path d="M14 8l1 0"></path>
            <path d="M14 12l1 0"></path>
            <path d="M14 16l1 0"></path>
            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
          </svg>
          Companies
        </RouterLink>
      </li>
      <li class="nav-item mb-1">
        <RouterLink :to="{ name: 'admin-employees' }" class="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-users-group"
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
            <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"></path>
            <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M17 10h2a2 2 0 0 1 2 2v1"></path>
            <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M3 13v-1a2 2 0 0 1 2 -2h2"></path>
          </svg>
          Employees
        </RouterLink>
      </li>
      <li class="nav-item mb-1">
        <RouterLink :to="{ name: 'admin-invitations' }" class="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-mail-forward"
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
            <path
              d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"
            ></path>
            <path d="M3 6l9 6l9 -6"></path>
            <path d="M15 18h6"></path>
            <path d="M18 15l3 3l-3 3"></path>
          </svg>
          Invitations
        </RouterLink>
      </li>
      <li class="nav-item mb-1">
        <RouterLink :to="{ name: 'admin-histories' }" class="nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-history"
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
            <path d="M12 8l0 4l2 2"></path>
            <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path>
          </svg>
          Histories
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
