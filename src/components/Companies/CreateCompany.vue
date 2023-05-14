<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";
import { useUserStore } from "../../stores/user";
const admin = useUserStore();
const auth = useAuthStore();
const companyName = ref("");
const companyEmail = ref("");
const companyPhone = ref("");
const companyAddress = ref("");
const loading = ref(false);
const createCompany = async () => {
  const company = {
    admin_id: auth.user.id,
    name: companyName.value,
    company_email: companyEmail.value,
    phone: companyPhone.value,
    address: companyAddress.value,
    token: auth.token,
  };
  loading.value = true;
  await admin
    .createCompany(company)
    .then(() => (loading.value = false))
    .catch(() => (loading.value = false));
};
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
                v-model="companyName"
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
                v-model="companyEmail"
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
                v-model="companyPhone"
              />
            </div>
          </div>
          <div class="col-sm-6 col-md-6">
            <div class="mb-3">
              <label class="form-label">Admin Name</label>
              <input
                type="text"
                class="form-control"
                disabled
                placeholder="Admin Name"
                :value="auth.user.name"
              />
            </div>
          </div>
          <div class="col-sm-6 col-md-6">
            <div class="mb-3">
              <label class="form-label">Admin Email</label>
              <input
                type="email"
                disabled
                class="form-control"
                placeholder="Admin Email"
                :value="auth.user.email"
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
                v-model="companyAddress"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer text-end">
        <button
          @click="createCompany"
          type="button"
          :class="loading ? 'btn btn-primary btn-loading' : 'btn btn-primary'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-plus"
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
          Create
        </button>
      </div>
    </form>
  </div>
</template>
