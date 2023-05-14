<template>
  <div v-if="!loading && invitations.length > 0">
    <InvitationsList :invitations="invitations" />
  </div>
  <img
    v-else-if="loading && invitations.length === 0"
    style="margin-top: 15%; margin-left: 43%; height: 200px; width: 200px"
    src="../../assets/Loader.svg"
    alt="Loader"
  />
  <ItemsNotFound v-else items-name="Invitation" />
</template>
<script setup>
import { ref, computed, onMounted } from "vue";

import ItemsNotFound from "../../layouts/ItemsNotFound.vue";
import { useUserStore } from "../../stores/user";
import InvitationsList from "../Invitations/InvitationsList.vue";
const admin = useUserStore();
const loading = ref(false);
const invitations = computed(() => admin.allInvitations);
const getInvitations = async () => {
  if (invitations.value.length > 0) return;
  loading.value = true;
  await admin
    .getInvitations()
    .then(() => (loading.value = false))
    .catch(() => (loading.value = false));
};
onMounted(() => {
  getInvitations();
});
</script>
