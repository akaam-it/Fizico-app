<template>
  <div class="font-DanaBlack p-6 rounded-lg bg-white dark:bg-slate-800">
    <h3 class="text-[20px] mb-4">{{ title }}</h3>
    <canvas :id="chartId"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { Chart } from "chart.js";

const props = defineProps({
  title: String,
  chartId: String,
  type: String,
  chartData: Object,
});

onMounted(() => {
  const ctx = document.getElementById(props.chartId).getContext("2d");
  new Chart(ctx, {
    type: props.type,
    data: props.chartData,
    options: { responsive: true }
  });
});
</script>
