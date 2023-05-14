<script setup>
import { useAuthStore } from "../stores/auth";
const auth = useAuthStore();
</script>
<template>
  <header
    v-if="auth.loginStatus"
    class="navbar navbar-expand-md navbar-light d-print-none"
  >
    <div class="container-xl">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
        aria-controls="navbar-menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1
        class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3"
      >
        <RouterLink to="">
          <img
            src="../assets/Logo.png"
            width="110"
            height="32"
            alt="TerseaTest"
            class="navbar-brand-image"
          />
        </RouterLink>
      </h1>
      <div class="navbar-nav flex-row order-md-last">
        <div class="nav-item dropdown">
          <span
            class="nav-link d-flex lh-1 text-reset p-0 cursor-pointer"
            data-bs-toggle="dropdown"
            aria-label="Open user menu"
          >
            <span class="avatar avatar-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-user"
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
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              </svg>
            </span>
            <div class="d-none d-xl-block ps-2">
              <div>{{ auth.user.name }}</div>
              <div class="mt-1 small text-muted">
                {{ auth.user.is_admin ? "Admin" : "Employee" }}
              </div>
            </div>
          </span>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <RouterLink
              v-if="auth.user.is_admin"
              :to="{
                name: 'admin-profile',
              }"
              class="dropdown-item"
              >Profile</RouterLink
            >
            <div v-if="auth.user.is_admin" class="dropdown-divider"></div>
            <span
              @click="auth.logout"
              class="dropdown-item text-danger cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-logout"
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
                  d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                ></path>
                <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
              </svg>
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
