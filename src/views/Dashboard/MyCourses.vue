<template>
  <div>
    <MainTitleDashboard title="دوره‌های من" />
    <div
      v-if="cart.items.length > 0"
      class="container grid grid-rows-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8"
    >
      <MyCourseBox
        v-for="(item, index) in cart.items"
        :key="index"
        :data="item"
      />
    </div>
    <div v-if="cart.items.length === 0" class="space-y-3 md:space-y-4 md:pr-5">
      <p class="text-zinc-900 dark:text-white font-DanaLight">
        تا به الان در هیج دوره ای ثبت نام نکرده اید.
      </p>
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from "@/stores/cart";
import MainTitleDashboard from "@/views/Dashboard/MainTitleDashboard.vue";
import MyCourseBox from "@/views/Dashboard/MyCourseBox.vue";

const cart = useCartStore();
</script>
