<template>
  <div class="container lg:my-24 my-12 lg:mt-[8rem] flex flex-col items lg:flex-row lg:justify-between lg:items-center">
    <div class="basis-1/3 block text-start">
      <SectionTitle title="درباره ی فیزیکو چی میگن؟" class='mb-3' />
    </div>

    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      :autoplay='{delay:3000, disableOnInteraction:true}'

      class="mySwiper w-[80%] px-0 xl:w-[60%] text-slate-100 lg:basis-2/3 font-DanaBlack overflow-x-hidden"
    >
      <swiper-slide v-for="(item, index) in slidesData" :key="index">
        <div
          class="flex flex-col gap-x-0 items-stretch justify-center px-5 pt-3  bg-Fizico-color1 dark:bg-slate-800 rounded-3xl "
        >
         <div class=" relative flex justify-between ">
            <span class="block text-slate-900/60">
              <svg class=" rotate-180 w-[2rem] h-[2rem] lg:w-[4rem] lg:h-[4rem]">
                <use href="#quote"></use>
              </svg>
            </span>
            <span class="block text-slate-900/60">
              <svg
                class="rotate-0 w-[2rem] h-[2rem] lg:w-[4rem] lg:h-[4rem]"
              >
                <use href="#quote"></use></svg></span>
          </div>
          <img
            class="block rounded-2xl w-12 lg:w-20 mb-2 -mt-10 lg:-mt-14 mx-auto"
            :src="item.image"
            :alt="item.name"
            style="box-shadow: 0 0 5px #0EA5E9"
          />
          <h2 class="text-[0.8rem] lg:text-[1.2rem] font-semibold font-DanaBold mx-auto">
            {{ item.name }}
          </h2>
          <p class=" font-DanaBlack text-[0.7rem] lg:text-[0.8rem] mx-auto">{{ item.class }}</p>
         
          <p
            class="flex lg:gap-x-5 gap-x-1 justify-between items-baseline text-center text-slate-100 text-[14px] md:text-[1rem] font-DanaLight mt-3  pb-3"
          >
            {{ item.comment }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards,Autoplay } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle.vue";
import "swiper/css";
import "swiper/css/effect-cards";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SectionTitle,
  },
  setup() {
    return {
      modules: [EffectCards,Autoplay],
    };
  },
  data() {
    return {
      slidesData: [
        {
          image: "/images/comment-user (3).jpg",
          name: "ندا امینی",
          class: "پایه هفتم",
          comment:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
        },
        {
          image: "/images/comment-user (4).jpg",
          name: "علی صدیقی",
          class: "دبیر فیزیک",
          comment:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
        },
        {
          image: "/images/comment-user (2).jpg",
          name: "میثم محمدی",
          class: "پایه دوازدهم",
          comment:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
        },
      ],
      Autoplay,
    };
  },
};
</script>
