<template>
  <div
    class="modal modal-blur fade"
    id="modal-invit"
    tabindex="-1"
    style="display: none"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Invite a new Employee</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row mb-3 align-items-end">
            <div class="col">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" v-model="name" />
            </div>
            <div class="col">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" v-model="email" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn me-auto" data-bs-dismiss="modal">
            Close
          </button>
          <button
            @click="sendInvitation"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Send Invit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useUserStore } from "../../stores/user";
const props = defineProps({
  companyId: {
    type: Number,
    required: true,
  },
});
const name = ref("");
const email = ref("");
const companyId = ref(props.companyId);
const admin = useUserStore();
const sendInvitation = async () => {
  const employee = {
    name: name.value,
    email: email.value,
    company_id: companyId.value,
  };
  await admin.sendInvit(employee);
  name.value = "";
  email.value = "";
};
</script>
