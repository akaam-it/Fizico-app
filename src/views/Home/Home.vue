

<script setup>
import Header from "../../components/Header/Header.vue";
import SvgIcons from "../../components/SvgIcons.vue";
import AboutUsSection from "./AboutUsSection.vue";
import BlogSlider from "./BlogSlider.vue";
import BookSection from "./BooksSection.vue";
import JoinUsSection from "./JoinUsSection.vue";
import SubscriptionSection from "./SubscriptionSection.vue";
import InstagramSection from "./InstagramSection.vue";
import Footer from "@/components/Footer.vue";
import CommentsSlider from "./CommentsSlider.vue";
import "../../index.css";
import 'plyr/dist/plyr.css';

import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const courses = ref([
  {
    id: 1,
    title: "فیزیک دهم ریاضی",
    desc: "شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  },
  {
    id: 2,
    title: "فیزیک دهم تجربی",
    desc: "شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  },
  {
    id: 3,
    title: "فیزیک یازدهم ریاضی",
    desc: "شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  },
  {
    id: 4,
    title: "فیزیک یازدهم تجربی",
    desc: "شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  },
  {
    id: 5,
    title: "فیزیک دوازدهم ریاضی",
    desc: "شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  },
  {
    id: 6,
    title: "فیزیک دوازدهم تجربی",
    desc: "شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  },
]);
const goToCourse = (id) => {
  router.push(`/course/${id}`);
};
</script>


<template>
  <SvgIcons />
  <Header class="z-[50]" />
  <AboutUsSection data-aos='fade-up' />
  <BlogSlider data-aos='fade-up' />
  <BookSection data-aos='fade-up' />
  <JoinUsSection data-aos='fade-up' />
  <CommentsSlider data-aos='fade-up' />
  <SubscriptionSection data-aos='fade-up' />
  <InstagramSection data-aos='fade-up' />
  <Footer />
</template>