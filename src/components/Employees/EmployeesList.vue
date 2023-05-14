<script setup>
import { ref } from "vue";
import EmployeeItem from "./EmployeeItem.vue";
const props = defineProps({
  employees: {
    type: Array,
    required: true,
    default: [],
  },
});

const employees = ref(props.employees);
</script>
<template>
  <div class="card-body card-body-scrollable card-body-scrollable-shadow">
    <div class="divide-y">
      <EmployeeItem
        :key="employee.id"
        v-for="employee in employees"
        :employee="employee"
      />
    </div>
  </div>
</template>
