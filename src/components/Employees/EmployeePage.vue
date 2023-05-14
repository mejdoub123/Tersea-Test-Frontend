<template>
  <div class="container-xl mt-3">
    <div class="card">
      <div class="row g-0">
        <div class="col d-flex flex-column">
          <div class="page-header">
            <div class="container">
              <div class="row align-items-center mt-3">
                <div class="col-auto">
                  <span class="avatar avatar-lg rounded">
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
                      <path
                        d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
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
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M3 7l6 -3l6 3l6 -3l0 13l-6 3l-6 -3l-6 3l0 -13"
                        ></path>
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
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
                        ></path>
                        <path d="M3 7l9 6l9 -6"></path>
                      </svg>
                      <span class="text-reset">{{
                        auth.currentUser.email
                      }}</span>
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
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
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
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
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
          </div>
        </div>
      </div>
      <div class="row g-0">
        <div class="col m-2">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">
                {{ company.name }}
              </h3>
            </div>
            <div class="card-body">
              <div class="row row-cards">
                <div class="col-md">
                  <div class="card">
                    <div class="card-status-top bg-red"></div>
                    <div class="card-header">
                      <h3 class="card-title">Company Infos</h3>
                    </div>
                    <div class="card-body text-center py-3">
                      <div class="datagrid">
                        <div class="datagrid-item">
                          <div class="datagrid-title">Company Email</div>
                          <div class="datagrid-content">
                            {{ company.company_email }}
                          </div>
                        </div>
                        <div class="datagrid-item">
                          <div class="datagrid-title">Phone</div>
                          <div class="datagrid-content">
                            {{ company.phone }}
                          </div>
                        </div>
                        <div class="datagrid-item">
                          <div class="datagrid-title text-truncate">
                            Address
                          </div>
                          <div class="datagrid-content">
                            {{ company.address }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md">
                  <div class="card">
                    <div class="card-status-top bg-green"></div>
                    <div class="card-header">
                      <h3 class="card-title">Employees List</h3>
                    </div>

                    <EmployeesList
                      v-if="employees.length > 0"
                      :employees="employees"
                    />
                    <div v-else>
                      <span
                        class="badge bg-warning-lt p-2 m-2 text-center"
                        style="word-break: break-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-alert-triangle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path
                            d="M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z"
                          ></path>
                          <path d="M12 9v4"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        No employees added yet !
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-md">
                  <div class="card">
                    <div class="card-status-top bg-blue"></div>
                    <div class="card-header">
                      <h3 class="card-title">Admin Infos</h3>
                    </div>
                    <div class="card-body text-center px-2">
                      <span class="avatar avatar-xl mb-3 rounded">{{
                        admin.name.charAt(0).toUpperCase()
                      }}</span>
                      <h3 class="m-0 mb-1">
                        <RouterLink to="">{{ admin.name }}</RouterLink>
                      </h3>
                      <div class="text-muted">{{ admin.email }}</div>
                      <div class="mt-3">
                        <span class="badge bg-green-lt">Admin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EditProfile />
  </div>
</template>
<script setup>
import { useAuthStore } from "../../stores/auth";
import { ref } from "vue";
import EmployeesList from "./EmployeesList.vue";
import EditProfile from "../../layouts/Modals/EditProfile.vue";
const auth = useAuthStore();
const userInfo = ref(auth.currentUser);
const company = ref(userInfo.value.company.company_infos);
const admin = ref(userInfo.value.company.company_admin);
const employees = ref(userInfo.value.company.company_employees);
</script>
