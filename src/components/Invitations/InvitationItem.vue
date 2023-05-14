<script setup>
import { ref } from "vue";
import { useUserStore } from "../../stores/user";
const props = defineProps({
  invitation: {
    type: Object,
    required: true,
    default: {},
  },
});
const admin = useUserStore();
const invitation = ref(props.invitation);
const cancelInvitation = async () => {
  await admin.cancelInvit(invitation.value.id);
  invitation.value = {};
};
</script>
<template>
  <div v-if="Object.keys(invitation).length > 0" class="col">
    <div class="row g-3 align-items-center">
      <span class="col-auto">
        <span class="avatar">E</span>
      </span>
      <div class="col text-truncate">
        <span class="text-reset d-block text-truncate">{{
          invitation.employee_name
        }}</span>
        <div class="text-muted text-truncate mt-n1">
          {{ invitation.employee_email }}
        </div>
      </div>
      <span class="col-auto">
        <span
          :class="
            'badge ' + (invitation.is_accepted ? 'bg-green-lt' : 'bg-orange-lt')
          "
          >{{ invitation.is_accepted ? "Accepted" : "Waiting" }}</span
        >
        <button
          @click="cancelInvitation"
          v-if="!invitation.is_accepted"
          class="btn btn-sm mx-1 mt-3 btn-ghost-danger"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-circle-x"
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
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M10 10l4 4m0 -4l-4 4"></path>
          </svg>
          Cancel
        </button>
      </span>
    </div>
  </div>
</template>
