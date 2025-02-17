<template>
  <!-- About Us  -->
  <section id='aboutUs' class="text-sm mb-14  pt-14 font-DanaBlack">
    <div class="container mx-auto sm:px-4 text-zinc-800 dark:text-white">
      <!-- Title -->
      <div class="font-Morabba basis-1/2">
          <SectionTitle title="فیزیکو چی هست حالا؟" />
      </div>
      <div
        class="flex flex-row-reverse flex-wrap items-center "
      >
        <div class="lg:w-1/2 px-4 relative order-2">
          <!-- Image -->
          <img src="/images/06.svg" class="relative" alt="" />
        </div>
        <div class="lg:w-1/2 px-4 relative order-1 lg:order-2">
          <p class="mb-2 text-center lg:text-start  font-DanaBlack text-[16px]/6">
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد.
          </p>
          <!-- Info list -->
          <ul class="flex flex-col pl-0 mb-2">
            <AboutUsSectionItem item="بهترین و مجرب ترین اساتید ایران " />
            <AboutUsSectionItem item="کلاس های باکیفیت و جذاب" />
            <AboutUsSectionItem
              item="استفاده از جدیدترین و بروزترین متد تدریس "
            />
            <AboutUsSectionItem item=" دارای اپلیکیشن اختصاصی " />
            <AboutUsSectionItem
              item=" پنل کاربری جذاب و منظم با تمام امکانات"
            />
          </ul>
          <!-- Button -->
          <a
            href="#"
            class="inline-block text-center select-none border border-gray-400 font-normal hover:text-white hover:bg-Fizico-color1 rounded py-1 px-3 leading-normal no-underline transition-all mb-0"
            >مطالعه بیشتر ...
            </a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AboutUsSectionItem from "./AboutUsSectionItem.vue";
import SectionTitle from "../../components/SectionTitle.vue";
export default {
  components: { AboutUsSectionItem, SectionTitle },
};
</script>
