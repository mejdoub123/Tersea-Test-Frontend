<template>
  <div class="list-group-item">
    <div class="row align-items-center">
      <div class="col-auto">
        <span class="avatar"></span>
      </div>
      <div class="col text-truncate">
        <span class="text-reset d-block">{{ item.name }}</span>
        <div class="d-block text-muted text-truncate mt-n1">
          {{ item.address }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const item = ref(props.item);
</script>
