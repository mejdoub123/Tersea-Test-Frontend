<template>
  <div class="card mt-4">
    <div
      class="card-body card-body-scrollable card-body-scrollable-shadow"
      style="max-height: 26rem"
    >
      <div class="divide-y">
        <InvitationItem
          :key="invitation.id"
          v-for="invitation in invitations"
          :invitation="invitation"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import InvitationItem from "./InvitationItem.vue";
const props = defineProps({
  invitations: {
    type: Array,
    required: true,
    default: [],
  },
});
const invitations = ref(props.invitations);
</script>
