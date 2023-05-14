<template>
  <div
    class="modal modal-blur fade"
    id="modal-edit"
    tabindex="-1"
    style="display: none"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Profile</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row mb-2">
            <div class="col-6">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                name="example-text-input"
                placeholder="Your Name"
                v-model="employeeName"
              />
            </div>
            <div class="col-6">
              <label class="form-label">Email</label>
              <input
                type="text"
                class="form-control"
                name="example-text-input"
                placeholder="Your Email"
                v-model="employeeEmail"
              />
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-6">
              <label class="form-label">CIN</label>
              <input
                type="text"
                class="form-control"
                name="example-text-input"
                placeholder="Your CIN"
                v-model="employeeCin"
              />
            </div>
            <div class="col-6">
              <label class="form-label">Phone</label>
              <input
                type="text"
                class="form-control"
                name="example-text-input"
                placeholder="Your phone"
                v-model="employeePhone"
              />
            </div>
          </div>
          <div class="row mb-2">
            <div class="col">
              <label class="form-label">Address</label>
              <textarea
                rows="5"
                class="form-control"
                placeholder="Here can be your address"
                v-model="employeeAddress"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-link link-secondary" data-bs-dismiss="modal">
            Cancel
          </button>
          <button
            @click="updateProfile"
            class="btn bg-cyan-lt ms-auto"
            data-bs-dismiss="modal"
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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";
import { useUserStore } from "../../stores/user";
const auth = useAuthStore();
const user = useUserStore();
const employee = ref(auth.currentUser);

const employeeName = ref(employee.value.name);
const employeeEmail = ref(employee.value.email);
const employeePhone = ref(employee.value.phone);
const employeeCin = ref(employee.value.cin);
const employeeAddress = ref(employee.value.address);
const updateProfile = async () => {
  const profile = {
    id: employee.value.id,
    name: employeeName.value,
    email: employeeEmail.value,
    phone: employeePhone.value,
    cin: employeeCin.value,
    address: employeeAddress.value,
  };
  await user.updateProfile(profile);
};
</script>
