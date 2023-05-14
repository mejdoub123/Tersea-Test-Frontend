<script setup>
import { onMounted, computed, ref } from "vue";
import { useUserStore } from "../../stores/user";
import CompanyItem from "./CompanyItem.vue";
import ItemsNotFound from "../../layouts/ItemsNotFound.vue";
const admin = useUserStore();
const companies = computed(() => admin.allCompanies);
const loading = ref(false);
const getCompanies = async () => {
  if (companies.value.length > 0) return;
  loading.value = true;
  await admin
    .getCompanies()
    .then(() => {
      loading.value = false;
    })
    .catch(() => (loading.value = false));
};

onMounted(async () => {
  await getCompanies();
});
</script>
<template>
  <div v-if="!loading && companies.length > 0">
    <CompanyItem
      :key="company.company.id"
      v-for="company in companies"
      :item="company"
    />
  </div>
  <img
    v-else-if="loading && companies.length === 0"
    style="margin-top: 15%; margin-left: 43%; height: 200px; width: 200px"
    src="../../assets/Loader.svg"
    alt="Loader"
  />
  <ItemsNotFound v-else items-name="Company" />
</template>
