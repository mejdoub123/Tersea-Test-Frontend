<script setup>
import { ref } from "vue";
import EmployeesList from "../Employees/EmployeesList.vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const item = ref(props.item);
</script>
<template>
  <div class="col-12 mb-2">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-building-community"
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
              d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"
            ></path>
            <path d="M13 7l0 .01"></path>
            <path d="M17 7l0 .01"></path>
            <path d="M17 11l0 .01"></path>
            <path d="M17 15l0 .01"></path>
          </svg>
          {{ item.company.name }}
        </h3>
        <div class="card-actions">
          <RouterLink
            :to="'/admin/companies/' + item.company.id"
            class="btn bg-green-lt"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-edit"
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
                d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"
              ></path>
              <path
                d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
              ></path>
              <path d="M16 5l3 3"></path>
            </svg>
            Edit
          </RouterLink>
          <button type="button" class="btn bg-danger-lt btn-icon mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-trash"
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
              <path d="M4 7l16 0"></path>
              <path d="M10 11l0 6"></path>
              <path d="M14 11l0 6"></path>
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="row row-cards">
          <div class="col-md">
            <div class="card">
              <div class="card-status-top bg-red"></div>
              <div class="card-header">
                <h3 class="card-title">Company Info</h3>
              </div>
              <div class="card-body text-center py-3">
                <div class="datagrid">
                  <div class="datagrid-item">
                    <div class="datagrid-title">Company Email</div>
                    <div class="datagrid-content">
                      {{ item.company.company_email }}
                    </div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Phone</div>
                    <div class="datagrid-content">{{ item.company.phone }}</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title text-truncate">Address</div>
                    <div class="datagrid-content">
                      {{ item.company.address }}
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
              <div class="card-body text-center p-0">
                <EmployeesList
                  v-if="item.employees.length > 0"
                  :employees="item.employees"
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
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
          </div>
          <div class="col-md">
            <div class="card">
              <div class="card-status-top bg-blue"></div>
              <div class="card-header">
                <h3 class="card-title">Admin Info</h3>
              </div>
              <div class="card-body text-center px-2">
                <span class="avatar avatar-xl mb-3 rounded">{{
                  item.admin.name.charAt(0).toUpperCase()
                }}</span>
                <h3 class="m-0 mb-1">
                  <RouterLink to="">{{ item.admin.name }}</RouterLink>
                </h3>
                <div class="text-muted">{{ item.admin.email }}</div>
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
</template>
