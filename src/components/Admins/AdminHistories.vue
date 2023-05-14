<template>
  <div v-if="!loading && histories.length > 0">
    <HistoriesList :histories="histories" />
  </div>
  <img
    v-else-if="loading && histories.length === 0"
    style="margin-top: 15%; margin-left: 43%; height: 200px; width: 200px"
    src="../../assets/Loader.svg"
    alt="Loader"
  />
  <ItemsNotFound v-else items-name="History" />
</template>
<script setup>
import { ref, computed, onMounted } from "vue";

import ItemsNotFound from "../../layouts/ItemsNotFound.vue";
import { useUserStore } from "../../stores/user";
import HistoriesList from "../Histories/HistoriesList.vue";
const admin = useUserStore();
const loading = ref(false);
const histories = computed(() => admin.allHistories);
const getHistories = async () => {
  if (histories.value.length > 0) return;
  loading.value = true;
  await admin
    .getHistories()
    .then(() => (loading.value = false))
    .catch(() => (loading.value = false));
};
onMounted(() => {
  getHistories();
});
</script>
