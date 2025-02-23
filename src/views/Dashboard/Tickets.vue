<template>
  <div>
    <div class="flex items-center justify-between flex-wrap gap-y-5 mt-5 mb-12">
      <div
        class="flex order-2 sm:order-1 items-center justify-between gap-x-10 gap-y-6 py-5 px-6 flex-wrap rounded-lg bg-white dark:bg-slate-800"
      >
        <DashboardBoxInfo
          title="تیکت پاسخ داده شده"
          text="0"
          icon="ticket-res"
        />
        <DashboardBoxInfo
          title="تیکت در حال بررسی"
          text="0"
          icon="ticket-ischecking"
        />
        <DashboardBoxInfo
          title="تیکت بسته شده"
          text="0 "
          icon="ticket-closed"
        />
      </div>
      <router-link to='/dashboard/add-ticket'
        class="flex order-1 sm:order-2 items-center justify-between gap-x-6 w-full sm:w-auto md:w-full lg:w-auto text-Fizico-color1 bg-Fizico-color1/5 border border-Fizico-color1  py-5 px-6 h-15 sm:h-20 font-DanaBold rounded-lg cursor-pointer"
      >
        ارسال تیکت جدید
        <svg class="size-7">
          <use href="#plus-circle"></use>
        </svg>
      </router-link>
    </div>

    <MainTitleDashboard title=" تیکت های من" />
    <div class="space-y-3 md:space-y-4 md:pr-5">
      <p class="text-zinc-900 dark:text-white font-DanaLight">
        تا به الان هیچ تیکتی ارسال نکرده‌اید.
      </p>
    </div>
  </div>
</template>
<script setup>
import MainTitleDashboard from "@/views/Dashboard/MainTitleDashboard.vue";
import DashboardBoxInfo from "@/views/Dashboard/DashboardBoxInfo.vue";
</script>
