<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";
const auth = useAuthStore();

const name = ref("");
const email = ref("");
const cin = ref("");
const phone = ref("");
const address = ref("");
const isAdmin = ref(true);
const dateOfBith = ref("");
const password = ref("");
const passwordConfirmation = ref("");
const showPassword = ref(false);
const loading = ref(false);
const registerUser = async () => {
  const user = {
    name: name.value,
    email: email.value,
    cin: cin.value,
    phone: phone.value,
    address: address.value,
    is_admin: isAdmin.value,
    date_of_birth: dateOfBith.value,
    company_id: null,
    password: password.value,
    password_confirmation: passwordConfirmation.value,
  };
  loading.value = true;
  await auth
    .register(user)
    .then(() => (loading.value = false))
    .catch(() => (loading.value = false));
};
</script>
<template>
  <div class="d-flex flex-column theme-light">
    <div class="page page-center">
      <div class="container-tight py-4">
        <div class="text-center mb-4">
          <a href="." class="navbar-brand navbar-brand-autodark"
            ><img src="../../assets/Logo.png" height="70" alt=""
          /></a>
        </div>
        <form class="card card-md" action="." method="get">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Create new account</h2>
            <div class="mb-3">
              <label class="form-label required">Name</label>
              <input
                type="text"
                v-model="name"
                class="form-control"
                placeholder="Enter name"
              />
            </div>
            <div class="mb-3">
              <label class="form-label required">Email</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="mb-3">
              <label class="form-label required">CIN</label>
              <input
                type="text"
                v-model="cin"
                class="form-control"
                placeholder="Enter CIN"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Date Of Birthday</label>
              <div class="input-icon">
                <span class="input-icon-addon"
                  ><!-- Download SVG icon from http://tabler-icons.io/i/calendar -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
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
                      d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                    ></path>
                    <path d="M16 3l0 4"></path>
                    <path d="M8 3l0 4"></path>
                    <path d="M4 11l16 0"></path>
                    <path d="M11 15l1 0"></path>
                    <path d="M12 15l0 3"></path>
                  </svg>
                </span>
                <input
                  type="date"
                  class="form-control"
                  placeholder="YYYY-MM-DD"
                  v-model="dateOfBith"
                />
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label required">Phone</label>
              <input
                type="text"
                v-model="phone"
                class="form-control"
                placeholder="Enter your phone"
              />
            </div>
            <div class="mb-3">
              <label class="form-label required">Address</label>
              <input
                type="text"
                v-model="address"
                class="form-control"
                placeholder="Enter address"
              />
            </div>
            <div class="mb-3">
              <label class="form-label required"> Password </label>
              <div class="input-group input-group-flat">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="password"
                  class="form-control"
                  placeholder="Password"
                  autocomplete="off"
                />
                <span class="input-group-text">
                  <span
                    @click="showPassword = !showPassword"
                    class="bg-cyan-lt p-1 rounded cursor-pointer"
                  >
                    <svg
                      v-if="!showPassword"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon"
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
                      <circle cx="12" cy="12" r="2"></circle>
                      <path
                        d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"
                      ></path>
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-eye-off"
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
                      <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path>
                      <path
                        d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"
                      ></path>
                      <path d="M3 3l18 18"></path>
                    </svg>
                  </span>
                </span>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label required">Confirm password</label>
              <div class="input-group input-group-flat">
                <input
                  type="password"
                  v-model="passwordConfirmation"
                  class="form-control"
                  placeholder="Confirm Passowrd"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="form-footer">
              <button
                type="button"
                @click="registerUser"
                :class="
                  loading
                    ? 'btn btn-primary w-100 btn-loading'
                    : 'btn btn-primary w-100'
                "
              >
                Create new account
              </button>
            </div>
          </div>
        </form>
        <div class="text-center text-muted mt-3">
          Already have account?
          <router-link to="/signin">Sign in</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
