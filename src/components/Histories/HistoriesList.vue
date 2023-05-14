<template>
  <div class="card mt-4">
    <div
      class="card-body card-body-scrollable card-body-scrollable-shadow"
      style="max-height: 26rem"
    >
      <div class="divide-y">
        <HistoryItem
          :key="history.id"
          v-for="history in histories"
          :history="history"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import HistoryItem from "./HistoryItem.vue";
const props = defineProps({
  histories: {
    type: Array,
    required: true,
    default: [],
  },
});
const histories = ref(props.histories);
</script>
