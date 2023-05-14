<script setup>
import { ref } from "vue";
const props = defineProps({
  history: {
    type: Object,
    required: true,
    default: {},
  },
});
const history = ref(props.history);
const convertTime = (string) => {
  const date = new Date(string);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}-${hour}:${minute}`;
};
</script>
<template>
  <div class="col">
    <div class="row g-3 align-items-center">
      <div class="col text-truncate">
        <span class="text-reset d-block text-truncate">{{ history.name }}</span>
        <div class="text-muted text-truncate mt-n1">
          {{ history.content }}
        </div>
      </div>
      <span class="col-auto">
        <span class="badge bg-green-lt">{{
          convertTime(history.created_at)
        }}</span>
      </span>
    </div>
  </div>
</template>
