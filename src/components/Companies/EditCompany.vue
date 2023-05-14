<script setup>
import { useRoute } from "vue-router";
import { useUserStore } from "../../stores/user";
import { onMounted, ref } from "vue";

const route = useRoute();
const admin = useUserStore();
const company = ref({});
const loading = ref(false);
const getCampany = async () => {
  loading.value = true;
  company.value = await admin
    .getCompany(parseInt(route.params.company_id))
    .then(() => (loading.value = false))
    .catch(() => (loading.value = false));
};

const updateCompany = async () => {
  loading.value = true;
  await admin
    .updateCompany(company.value)
    .then(() => (loading.value = false))
    .catch(() => (loading.value = false));
};

onMounted(() => getCampany());
</script>
<template>
  <div class="col-12">
    <form class="card">
      <div class="card-body">
        <h3 class="card-title">Create Company</h3>
        <div class="row row-cards">
          <div class="col-md-4">
            <div class="mb-3">
              <label class="form-label required">Company Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Company Name"
                v-model="company.name"
              />
            </div>
          </div>
          <div class="col-sm-6 col-md-5">
            <div class="mb-3">
              <label class="form-label required">Company Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Company Email"
                v-model="company.company_email"
              />
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="mb-3">
              <label class="form-label">Phone Number</label>
              <input
                type="text"
                class="form-control"
                placeholder="Company Phone"
                v-model="company.phone"
              />
            </div>
          </div>
          <div class="col-md-12">
            <div class="mb-3 mb-0">
              <label class="form-label required">Company Address</label>
              <textarea
                rows="5"
                class="form-control"
                placeholder="Here can be your company address"
                v-model="company.address"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer text-end">
        <button
          @click="updateCompany"
          type="button"
          :class="loading ? 'btn btn-success btn-loading' : 'btn btn-success'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-device-floppy"
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
              d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2"
            ></path>
            <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M14 4l0 4l-6 0l0 -4"></path>
          </svg>
          Save
        </button>
      </div>
    </form>
  </div>
</template>
