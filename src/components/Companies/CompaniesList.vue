<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "../../stores/user";
import CompanyItem from "./CompanyItem.vue";
const admin = useUserStore();
const companies = ref([]);
const loading = ref(false);
const getCompanies = async () => {
  loading.value = true;
  if (admin.companies.length > 0) {
    companies.value = admin.allCompanies;
    loading.value = false;
    return;
  }

  await admin
    .getCompanies()
    .then(() => {
      companies.value = admin.allCompanies;
      loading.value = false;
    })
    .catch(() => (loading.value = false));

  return;
};

onMounted(() => getCompanies());
</script>
<template>
  <div v-if="!loading">
    <CompanyItem
      :key="company.company.id"
      v-for="company in companies"
      :item="company"
    />
  </div>
  <img
    v-else
    style="margin-top: 15%; margin-left: 35%"
    src="../../assets/Loader.svg"
    alt="Loader"
  />
</template>
