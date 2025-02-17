
<script setup>
import SectionTitle from "../../components/SectionTitle.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const RiazibooksData = [
  {
    id:1,
    image: "/images/bg-f-r01.png",
    title: "دهم ",
  },
  {
    id:3,
    image: "/images/bg-f-r02.png",
    title: "یازدهم ",
  },
  {
    id:5,
    image: "/images/bg-f-r03.png",
    title: "دوازدهم ",
  },
];
const TajrobibooksData = [
  {
    id:2,
    image: "/images/bg-f-t01.png",
    title: " دهم",
  },
  {
    id:4,

    image: "/images/bg-f-t02.png",
    title: " یازدهم",
  },
  {
    id:6,
    
    image: "/images/bg-f-t03.png",
    title: "دوازدهم",
  },
];

const goToCourse = (id) => {
  router.push(`/course/${id}`);
};
</script>


<template>
  <section id="BooksPhysics" class="container my-10 lg:mb-20 lg:pt-14 font-DanaBlack">
    <SectionTitle title=" همین الان شروع کن!" :readMore="false" />
    <!-- Books Wrapper -->
    <div
      class="flex flex-col lg:flex-row gap-x-5 gap-y-16 justify-between items-stretch py-5 relative"
    >
      <!-- Books Riazi -->
      <div class="flex flex-col justify-between gap-y-5 text-center">
        <h3 class="text-zinc-950 dark:text-white font-bold text-xl">
          ریاضی فیزیک
        </h3>
        <div
          class="flex flex-row justify-between basis-1/3 items-center gap-x-4"
        >
          <div
            v-for="(rbook, index) in RiazibooksData"
            :key="index" 
            class="flex flex-col justify-center items-center gap-y-3 w-fit text-zinc-950 dark:text-white"
             
          >
            <a class="group cursor-pointer" @click="goToCourse(rbook.id)">
              <img
                :src="rbook.image"
                :alt="`${rbook.title}`"
                :title="`${rbook.title}ریاضی `"
                class="block w-[80%] mx-auto rounded-xl shadow-md shadow-zinc-950 hover:shadow-Fizico-color1 group-hover:scale-105 transition-all"
            /></a>
            <span class="block text-sm lg:text-lg"> {{ rbook.title }} </span>
          </div>
        </div>
      </div>
      <!-- Svgs -->
      <span class="text-Fizico-color1 hidden xl:block mx-auto animate-pulse">
        <svg class="w-16">
          <use href="#arrow-2"></use>
        </svg>
      </span>
      <span
        class="text-Fizico-color1 hidden xl:block mx-auto rotate-180 animate-pulse"
      >
        <svg class="w-16">
          <use href="#arrow-2"></use>
        </svg>
      </span>
      <!-- Books Tajrobi -->
      <div class="flex flex-col justify-between gap-y-5 text-center">
        <h3 class="text-zinc-950 dark:text-white font-bold text-xl">
          علوم تجربی
        </h3>
        <div class="flex flex-row justify-between items-center gap-x-4">
          <div
            v-for="(tbook, index) in TajrobibooksData"
            :key="index"
            class="flex flex-col justify-center items-center gap-y-3 w-fit text-zinc-950 dark:text-white"
          >
            <a class="group cursor-pointer" @click="goToCourse(tbook.id) ">
              <img
                :src="tbook.image"
                :alt="`${tbook.title} `"
                :title="`${tbook.title} تجربی`"
                class="block w-[80%] mx-auto rounded-xl shadow-md shadow-zinc-950 hover:shadow-Fizico-color1 group-hover:scale-105 transition-all"
            /></a>
            <span class="block text-sm lg:text-lg"> {{ tbook.title }} </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
