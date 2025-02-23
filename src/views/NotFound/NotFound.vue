<template>
<SvgIcons/>
<Nav class="hidden"/>

<div class="relative h-screen flex  items-center justify-center">
<BlurGradient />
  <section class="container">
    <div class="py-8 px-4 mx-auto lg:py-16 lg:px-6">
      <div class="flex shrink-0 flex-col items-center justify-center  mx-auto text-center ">
      <img src="/images/404.svg" class="block w-full md:w-2/3">
        <h1
          class="font-DanaBold text-zinc-800 dark:text-gray-300 my-4 text-[18px] lg:text-2xl tracking-tight font-extrabold mt-8 lg:mt-16 "
        >
      متاسفانه صفحه مورد نظر شما پیدا نشد.

        </h1>
        
        <router-link
          to="/"
          class="inline-flex hover:bg-Fizico-color1 hover:brightness-90 transition-all text-white bg-Fizico-color1 focus:outline-none font-medium rounded-lg text-[14px] lg:text-sm px-5 py-2.5 text-center"
          >بازگشت به صفحه اصلی</router-link
        >
      </div>
    </div>
  </section>

</div>
</template>

<script setup>
import BlurGradient from "@/components/BlurGradient.vue";
import Nav from "@/components/Header/Nav.vue";
import SvgIcons from "@/components/SvgIcons.vue";
</script>
