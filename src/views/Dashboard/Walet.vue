<template>
  <div>
    <div class="flex items-center justify-between flex-wrap gap-y-5 mt-5 mb-12">
      <div
        class="flex order-2 sm:order-1 items-center justify-between gap-x-10 gap-y-6 py-5 px-6 flex-wrap rounded-lg bg-white dark:bg-slate-800"
      >
        <DashboardBoxInfo
          title="موجودی کیف پول"
          text="0 تومان"
          icon="dashboard-walet"
        />
        <DashboardBoxInfo
          title="تراکنش های موفق"
          text="1 تراکنش"
          icon="dashboard-walet-action"
        />
        <DashboardBoxInfo
          title="مجموع تراکنش ها"
          text="0 تومان"
          icon="dashboard-walet"
        />
      </div>
      <button
        class="flex order-1 sm:order-2 items-center justify-between gap-x-6 py-5 px-6 w-full sm:w-auto md:w-full lg:w-auto text-Fizico-color1 bg-Fizico-color1/5 border border-Fizico-color1 px-4 h-15 sm:h-20 font-DanaBold rounded-lg cursor-pointer"
      >
        افزایش موجودی
        <svg class="size-7">
          <use href="#plus-circle"></use>
        </svg>
      </button>
    </div>

    <MainTitleDashboard title="سفارشات من" />
    <div class="pb-2 md:pb-4 md:pr-5 overflow-x-auto">
      <div
        class="min-w-[840px] md:min-w-[900px] grid grid-cols-12 text-sm md:text-base font-DanaBlack items-center text-center h-12 bg-white dark:bg-slate-800 px-3 mb-4 rounded-lg"
      >
        <div class="col-span-1 text-nowrap">شماره پیگیری</div>
        <div class="col-span-5">شرح سفارش</div>
        <div class="col-span-2">تاریخ سفارش</div>
        <div class="col-span-2">مبلغ سفارش</div>
        <div class="col-span-2">وضعیت سفارش</div>
      </div>
      <div
        class="min-w-[840px] md:min-w-[900px] space-y-4"
        
      >
        <div
          class="grid grid-cols-12 items-center text-sm md:text-base text-center h-16 bg-white dark:bg-slate-800 rounded-lg divide-x divide-x-reverse divide-gray-500/30 dark:divide-gray-500/20 "
        >
          <div class="col-span-1">64065</div>

          <div class="col-span-5">آموزش فیزیک دوازدهم - تستی و تشریحی</div>

          <div class="col-span-2">1403/03/22</div>

          <div class="col-span-2">
            1,970,000<span >تومان</span>
          </div>

          <div class="col-span-2">
            <div
              class="inline-flex items-center justify-center bg-green-50 dark:bg-green-500/10 text-green-500 font-DanaBlack text-xs md:text-sm py-1 px-2.5 md:px-5 rounded-lg select-none"
            >
              پرداخت شده
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script setup>
import MainTitleDashboard from "@/views/Dashboard/MainTitleDashboard.vue";
import DashboardBoxInfo from "@/views/Dashboard/DashboardBoxInfo.vue";
</script>
