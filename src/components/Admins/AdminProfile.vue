<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";
import EditProfile from "../../layouts/Modals/EditProfile.vue";
const auth = useAuthStore();
</script>
<template>
  <div class="page-header">
    <div class="container">
      <div class="row align-items-center mt-3">
        <div class="col-auto">
          <span class="avatar avatar-lg rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-user-star"
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
              <path d="M6 21v-2a4 4 0 0 1 4 -4h.5"></path>
              <path
                d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"
              ></path>
            </svg>
          </span>
        </div>
        <div class="col">
          <h1 class="fw-bold">{{ auth.currentUser.name }}</h1>
          <div class="list-inline list-inline-dots text-muted">
            <div class="list-inline-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-inline"
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
                <path d="M3 7l6 -3l6 3l6 -3l0 13l-6 3l-6 -3l-6 3l0 -13"></path>
                <path d="M9 4l0 13"></path>
                <path d="M15 7l0 13"></path>
              </svg>
              {{ auth.currentUser.address }}
            </div>
            <div class="list-inline-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-inline"
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
                  d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
                ></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
              <span class="text-reset">{{ auth.currentUser.email }}</span>
            </div>
            <div class="list-inline-item">
              <!-- Download SVG icon from http://tabler-icons.io/i/cake -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-inline"
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
                  d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z"
                ></path>
                <path
                  d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197"
                ></path>
                <path
                  d="M12 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z"
                ></path>
              </svg>
              {{ auth.currentUser.date_of_birth }}
            </div>
          </div>
        </div>
        <div class="col-auto ms-auto">
          <div class="btn-list">
            <button
              data-bs-target="#modal-edit"
              data-bs-toggle="modal"
              class="btn bg-green-lt"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-user-edit"
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
                <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5"></path>
                <path
                  d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z"
                ></path>
              </svg>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
    <EditProfile />
  </div>
</template>
