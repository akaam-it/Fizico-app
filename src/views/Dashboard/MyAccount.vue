<template>
  <div>
    
    <div
      class="container flex items-center justify-between gap-y-6 flex-wrap font-DanaBlack bg-white dark:bg-slate-800 py-5 mt-5 mb-12 px-6 sm:px-8 rounded-lg">
     <DashboardBoxInfo title="دوره های در حال یادگیری" text='3 دوره' icon='dashboard-mycourse'/>
     <DashboardBoxInfo title="مجموع تیکت های من" text='1 تیکت' icon='dashboard-ticket'/>
     <DashboardBoxInfo title="پرسش پاسخ های من" text='0 پرسش' icon='dashboard-req-res'/>
     <DashboardBoxInfo title="موجودی کیف پول" text='0 تومان' icon='dashboard-walet'/>

    </div>
   <MainTitleDashboard title='تحلیل فعالیت'/>
    <div
      class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-0"
    >
      <ChartBox
        title="میزان شرکت در کلاس"
        chart-id="salesChart"
        type="line"
        :chart-data="salesData"
      />
      <ChartBox
        title=" میزان فعالیت ماهانه"
        chart-id="usersChart"
        type="bar"
        :chart-data="usersData"
      />
      <ChartBox
        title="فعالیت‌های آموزشی"
        chart-id="activityChart"
        type="polarArea"
        :chart-data="activityData"
      />
      <ChartBox
        title="عملکرد "
        chart-id="performanceChart"
        type="radar"
        :chart-data="performanceData"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Chart, registerables } from "chart.js";
import ChartBox from "@/components/ChartBox.vue";
import MainTitleDashboard from "@/views/Dashboard/MainTitleDashboard.vue";
import DashboardBoxInfo from "@/views/Dashboard/DashboardBoxInfo.vue";


Chart.register(...registerables);

const salesData = ref({
  labels: [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان ",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ],
  datasets: [
    {
      label: " دقیقه در هر ماه",
      data: [200, 500, 800, 1200, 900, 450, 500, 930, 1200, 720, 940, 1100],
      borderColor: "#0ea5e9",
      backgroundColor: "rgba(14, 165, 233, 0.2)",
      fill: true,
    },
  ],
});

const usersData = ref({
  labels: [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان ",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ],
  datasets: [
    {
      label: "دقیقه در هر ماه",
      data: [200, 500, 800, 1200, 900, 450, 500, 930, 1200, 720, 940, 1100],
      backgroundColor: "rgba(14, 165, 233, 0.7)",
    },
  ],
});

const activityData = ref({
  labels: ["مشاهده دروس", "ارسال تمرین", "شرکت در آزمون"],
  datasets: [
    {
      data: [40, 30, 30],
      borderColor: ["#0ea5e9", "#f7c32e", "#03c98e"],
      backgroundColor: [
        "rgba(14, 165, 233, 0.3)",
        "rgba(247, 195, 46, 0.3)",
        "rgba(3, 201, 142, 0.3)",
      ],
    },
  ],
});

const performanceData = ref({
  labels: ["پایه دهم", "پایه یازدهم", "پایه دوازدهم"],
  datasets: [
    {
      label: "عملکرد",
      data: [90, 91, 92],
      borderColor: ["#0ea5e9", "#f7c32e", "#03c98e"],
      backgroundColor: [
        "rgba(14, 165, 233, 0.3)",
        "rgba(247, 195, 46, 0.3)",
        "rgba(3, 201, 142, 0.3)",
      ],
      fill: true,
    },
  ],
});
</script>
