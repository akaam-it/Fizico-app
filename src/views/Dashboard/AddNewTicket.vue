<template>
  <section class="mt-6 md:mt-10">
    <div
      class="flex items-center justify-between "
    >
     <MainTitleDashboard title='ارسال تیکت جدید' />
      <router-link
        to="/dashboard/tickets"
        class="flex items-center gap-x-1 md:gap-x-2 text-Fizico-color1 text-xs md:text-base font-danaMedium"
      >
        بازگشت به تیکت ها
        <svg class="size-5">
          <use href="#chevron-left-mini"></use>
        </svg>
      </router-link>
    </div>

    <form
      id="add-ticket"
      method="post"
      class="block md:space-y-5 md:pr-5"
    >
      <div class="flex flex-wrap sm:flex-nowrap gap-4 md:gap-5">
        <input
          type="text"
          class="w-full sm:w-1/2 lg:w-2/3 focus:border-none focus:outline-none placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-slate-800 text-sm p-3.5 rounded-lg"
          placeholder="موضوع تیکت:"
          id="title"
          name="title"
          required=""
        />
        <select
          name="department"
          id="department"
          required=""
          class="w-full sm:w-1/2 lg:w-1/3 h-13 text-slate-500 dark:text-gray-400 bg-white dark:bg-slate-800 text-sm  focus:border-none focus:outline-none  p-3.5 border-l-[14px] border-l-transparent rounded-lg"
        >
          <option value="finance">مالی</option>
          <option value="support">پشتیبانی</option>
          <option value="counseling">مشاوره</option>
        </select>
      </div>

      <textarea
        class="w-full min-h-72 mt-4 lg:mt-0  focus:border-none focus:outline-none  placeholder:text-slate-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-white dark:bg-slate-800 text-sm p-3.5 rounded-lg"
        placeholder="متن تیکت:"
        id="text"
        name="text"
        required=""
      ></textarea>

      <div
        class="flex flex-wrap gap-5 items-center justify-between mt-8 md:pr-5"
      >


        <button class=" block bg-green-700 text-white py-3 px-10 rounded-lg  mx-auto">
          ارسال تیکت
        </button>
      </div>

      <input type="hidden" name="nonce" value="1b51e844fa" />
    </form>

    
  </section>
</template>

<script setup>
import MainTitleDashboard from "@/views/Dashboard/MainTitleDashboard.vue";
</script>
