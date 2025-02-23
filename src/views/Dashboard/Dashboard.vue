<template>
  <SvgIcons />
  <div
    class="flex h-screen  font-DanaBlack overflow-hidden text-zinc-800 dark:text-slate-100"
  >
    <!-- Sidebar -->

    <aside class="w-64 p-4 bg-white dark:bg-slate-800 shadow-lg flex-shrink-0">
      <div
        class="flex flex-col items-center justify-center gap-y-1 mb-8 border-b dark:border-gray-500/20 border-gray-500/30 pb-8"
      >
        <img
          src="/images/comment-user (4).jpg"
          alt="User"
          class="w-16 h-16 rounded-full border-[3px] border-white outline outline-[3px] outline-Fizico-color1"
        />
        <span class="text-[18px] font-DanaBlack">مهدی مروتی</span>
        <span class="text-[12px] font-DanaBlack">دانشجو</span>
      </div>
      <div
        class="flex flex-col gap-y-2 mb-8 pb-8 border-b dark:border-gray-500/20 border-gray-500/30"
      >
        <SideBarItem
          title="صفحه‌اصلی "
          icon="squares-2x2"
          link="/dashboard/home"
        />
        <SideBarItem title="دوره‌های من" icon="academic-cap2" link='/dashboard/my-courses' />
        <SideBarItem title="کیف‌پول و تراکنش‌ها" icon="wallet" link='/dashboard/walet' />
        <SideBarItem title="تیکت ها" icon="chat-bubble-left-right" link='/dashboard/tickets' />
        <SideBarItem title="پرسش‌های من" icon="question-mark-circle" link='/dashboard/questions' />
        <SideBarItem title="ویرایش حساب" icon="pencil-square" link='/dashboard/edit-profile' />
      </div>
      <button
        class="flex items-center px-4 py-2 w-full gap-x-3 shrink-0 mt-5 font-DanaBlack justify-center rounded-lg text-zinc-800 dark:text-white bg-gray-200 dark:bg-gray-700"
      >
        خروج از حساب کاربری
        <svg class="size-6">
          <use href="#arrow-left-on-rectangle-mini"></use>
        </svg>
      </button>
    </aside>

    <!-- Main Content -->

    <main class=" container flex-1 pt-1 pb-5 px-5 font-DanaLight overflow-auto">
      <div
      class="flex w-full items-end justify-between -mt-2 mb-2 border-b dark:border-gray-500/20 border-gray-500/30"
    >
      <p class="animate-pulse font-DanaLight basis-full text-[16px]/[3.5rem]">
        <span class="font-DanaBlack">مهدی</span> عزیز، به پنل کاربری فیزیکو خوش
        اومدی.
      </p>
      <Nav :dashboard="true" />
    </div>
     <router-view> </router-view>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Nav from "@/components/Header/Nav.vue";
import SvgIcons from "@/components/SvgIcons.vue";
import SideBarItem from "./SideBarItem.vue";

</script>
