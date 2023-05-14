<script setup>
import { ref } from "vue";
const props = defineProps({
  employee: {
    type: Object,
    required: true,
    default: {},
  },
});
const employee = ref(props.employee);
</script>
<template>
  <div class="col">
    <div class="row g-3 align-items-center">
      <span class="col-auto">
        <span class="avatar">E</span>
      </span>
      <div class="col text-truncate">
        <span class="text-reset d-block text-truncate">{{
          employee.name
        }}</span>
        <div class="text-muted text-truncate mt-n1">{{ employee.email }}</div>
      </div>
    </div>
  </div>
</template>
