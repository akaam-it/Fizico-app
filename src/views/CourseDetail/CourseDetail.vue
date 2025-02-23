<template>
<div>
<div v-if="course" class="font-DanaBlack container">
    <SvgIcons />
    <Nav />
    <!-- Breadcrumb -->
    <ol
      class="overflow-auto lg:overflow-hidden flex items-center mx-auto whitespace-nowrap dark:bg-slate-800 bg-white p-3 my-5 rounded-xl md:rounded-2xl"
    >
      <li class="inline-flex items-center">
        <router-link
          class="flex items-center text-sm gap-x-1 font-DanaBlack dark:text-slate-300 text-slate-900 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          :to="{ name: 'Home' }"
        >
          <svg class="shrink-0 me-1 mb-1 size-4">
            <use href="#home"></use>
          </svg>
          خانه
        </router-link>
        <svg class="shrink-0 mx-2 w-4 h-4 md:w-8 md:h-8 text-gray-500">
          <use href="#chevron-left"></use>
        </svg>
      </li>

      <li class="inline-flex items-center">
        <span
          class="cursor-pointer flex items-center sm:text-[10] lg:text-lg dark:text-slate-100 text-zinc-800 hover:text-blue-600 focus:outline-none focus:text-blue-600"
        >
          {{ course.title }}
        </span>
      </li>
    </ol>

    <!-- Course Links -->
    <section class="mt-8 md:mt-10">
      <!-- Course Head -->
      <div
        class="flex lg:flex-row flex-col-reverse lg:items-center gap-x-20 lg:justify-between"
      >
        <!-- Right Course Head -->
        <div class="basis-1/4 lg:basis-2/4 relative">
          <!-- Title -->
          <div class="mb-8 text-center lg:text-right relative">
            <h1
              class="text-3xl/[48px] font-Morabba font-semibold dark:text-slate-100 text-zinc-800 mt-3 lg:mt-0"
            >
              {{ course.title }}
            </h1>
          </div>
          <!-- Description -->
          <div>
            <h2
              class="dark:text-white font-DanaBlack text-center tracking-wide lg:text-start sm:text-sm lg:text-lg"
            >
              {{ course.desc }}
            </h2>
          </div>
          <!--  Buttons -->
          <div
            class="flex justify-center xl:items-center lg:justify-between flex-wrap-reverse gap-y-4 gap-x-6 mt-6"
          >
            <button
              @click="addToCart(course)"
              :disabled='isInCart'
              class="text-[16px] font-DanaBlack disabled:cursor-not-allowed  py-3 px-6 rounded-xl text-slate-100 bg-green-700 transition-all"
              type="button"
            >
              <span class="flex gap-x-1 items-start">
                <svg class="w-5 h-5">
                  <use href="#academic-cap2"></use>
                </svg>
             {{ !isInCart? "افزودن به سبد خرید":" در سبد خرید موجود است"}}
              </span>
            </button>

            <div class="flex items-end gap-x-2.5">
              <span
                class="block text-slate-500 dark:text-white/70 text-xl line-through"
              >
                {{ course.price }}
              </span>
              <span
                class="block font-DanaBlack font-bold text-2xl dark:text-white text-zinc-800"
                >{{ course.offerPrice }}
                <span class="font-Morabba font-normal text-lg">تومان </span>
              </span>
            </div>
          </div>
        </div>
        <!-- Left Course Head -->
        <div
          class="shrink sm:basis-full basis-1/5 lg:basis-3/5 rounded-2xl w-full"
        >
          <PlyrPlayer
            posterSrc="/images/course-poster.jpg"
            videoSrc="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
          />
        </div>
      </div>

      <!-- Course Data -->
      <section class="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-20">
        <div class="col-span-12 lg:col-span-8">
          <!-- Course Box Info -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <CourseBoxInfo
              title="وضعیت دوره"
              desc="درحال برگزاری..."
              icon="information-circle"
            />
            <CourseBoxInfo
              title="مدت زمان دوره "
              :desc="`${course.time} ساعت`"
              icon="clock"
            />
            <CourseBoxInfo
              title="آخرین بروزرسانی"
              :desc="`${course.update}`"
              icon="calendar-days"
            />
            <CourseBoxInfo
              title=" روش پشتیبانی"
              desc="تلفنی / آنلاین "
              icon="users"
            />
            <CourseBoxInfo
              title="نوع دوره"
              desc=" تستی و تشریحی"
              icon="briefcase"
            />
            <CourseBoxInfo
              title="نوع مشاهده"
              desc="دانلودی / آنلاین"
              icon="video-camera"
            />
          </div>
          <!-- Description -->
          <div class="dark:bg-slate-800 bg-white rounded-2xl p-4 sm:p-5 mt-8">
            <div class="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
              <span
                class="absolute -right-8 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-Fizico-color1 rounded-r-sm"
              ></span>
              <svg class="hidden md:inline-block w-8 h-8 text-Fizico-color4">
                <use href="#document-text-fill"></use>
              </svg>
              <div
                class="font-Morabba text-xl text-zinc-800 dark:text-slate-100 md:text-2xl"
              >
                توضیحات
              </div>
            </div>

            <div class="relative">
              <div
                :class="[
                  'text-zinc-800 dark:text-slate-100 transition-all',
                  !expanded ? 'max-h-[200px] overflow-hidden relative' : '',
                ]"
              >
                <p class="font-DanaLight text-[15px]/6">
                  {{ descText }}
                </p>
                <div
                  v-if="!expanded"
                  class="absolute -bottom-3 left-0 w-full z-40 h-[10rem] bg-gradient-to-t from-white dark:from-slate-800 from-[1%] to-transparent"
                ></div>
              </div>

              <button
                @click="toggleExpand"
                style="position: inherit"
                class="block bg-Fizico-color1/5 z-50 border border-Fizico-color1 text-Fizico-color1 mx-auto font-DanaLight px-2 rounded-lg"
                :class="expanded ? 'mt-3' : 'mt-1'"
              >
                <p
                  v-if="expanded"
                  class="flex items-end gap-x-1 py-3 text-[15px]/4"
                >
                  مشاهده کمتر مطلب
                  <svg class="rotate-90 w-[18px] h-[18px]">
                    <use href="#chevron-left"></use>
                  </svg>
                </p>
                <p v-else class="flex items-end gap-x-1 py-3 text-[15px]/4">
                  مشاهده بیشتر مطلب
                  <svg class="-rotate-90 w-[18px] h-[18px]">
                    <use href="#chevron-left"></use>
                  </svg>
                </p>
              </button>
            </div>
          </div>
          <!-- Links -->
          <div class="dark:bg-slate-800 bg-white rounded-2xl p-4 sm:p-5 mt-8">
            <div class="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
              <span
                class="absolute -right-8 sm:-right-[26px] block w-1.5 h-[34px] md:h-9.5 bg-Fizico-color1 rounded-r-sm"
              ></span>
              <svg class="hidden md:inline-block w-8 h-8 text-Fizico-color2">
                <use href="#academic-cap-fill"></use>
              </svg>
              <div
                class="font-Morabba text-xl text-zinc-800 dark:text-slate-100 md:text-2xl"
              >
                سرفصل ها
              </div>
            </div>
            <AccordionContent />
          </div>

          <!-- Comments -->
          <div class="dark:bg-slate-800 bg-white rounded-2xl p-4 sm:p-5 mt-8">
            <!-- Comment Head -->
            <div class="flex items-center justify-between mb-6 sm:mb-7">
              <div class="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
                <span
                  class="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-10 bg-Fizico-color3 rounded-r-sm"
                ></span>
                <svg class="hidden md:inline-block w-8 h-8 text-Fizico-color3">
                  <use href="#chat-bubble-left-right-fill"></use>
                </svg>
                <div
                  class="font-Morabba text-xl md:text-2xl text-zinc-800 dark:text-slate-100"
                >
                  نظرات
                </div>
              </div>
              <!-- New Comment Button -->
              <button
                @click="toggleCommentForm"
                class="flex items-center gap-x-1 text-sm font-DanaBlack hover:scale-105 p-3 rounded-2xl text-slate-100 bg-green-700 transition-all"
                type="button"
              >
                ایجاد نظر جدید
                <svg class="w-5 h-5">
                  <use href="#chat-bubble-bottom-center-text"></use>
                </svg>
              </button>
            </div>
            <CommentForm ref="commentForm" @addComment="addNewComment" />
            <CommentList :comments="commentsCourse" />
          </div>
        </div>
        <aside class="col-span-12 lg:col-span-4 space-y-8">
          <!-- Students & Rating & Progress -->
          <div class="dark:bg-slate-800 bg-white rounded-2xl p-4 sm:p-5">
            <div class="flex gap-x-4">
              <div
                class="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 dark:bg-slate-800 bg-white dark:dark rounded-xl"
              >
                <svg class="w-10 h-10 md:w-11 md:h-11 text-green-500">
                  <use href="#user-group-mini"></use>
                </svg>
                <div>
                  <span
                    class="block text-zinc-800 dark:text-slate-100 text-sm md:text-base"
                    >34996</span
                  >
                  <span
                    class="block text-sm text-zinc-800 dark:text-slate-300 opacity-70"
                    >دانشجو</span
                  >
                </div>
              </div>
              <div
                class="flex flex-col sm:flex-row items-center text-center md:text-right gap-y-1 gap-x-3 flex-grow pt-3.5 pb-3 sm:px-3.5 sm:py-2.5 dark:bg-slate-800 bg-white dark:dark rounded-xl"
              >
                <svg class="w-10 h-10 text-amber-500">
                  <use href="#star-mini"></use>
                </svg>
                <div>
                  <span
                    class="block text-sm text-zinc-800 dark:text-slate-100 md:text-base"
                    >5.0</span
                  >
                  <span
                    class="block text-sm text-zinc-800 dark:text-slate-300 opacity-70"
                    >رضایت</span
                  >
                </div>
              </div>
            </div>
            <div class="mt-3.5 sm:mt-5">
              <div class="relative p-1 max-w-sm mx-auto">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span
                      class="text-[14px] inline-block py-2 px-3 uppercase rounded-full dark:text-slate-100 text-zinc-800"
                    >
                      درصد تکمیل دوره
                    </span>
                  </div>
                  <div class="text-right">
                    <span
                      class="text-xs font-semibold inline-block dark:text-slate-100 text-zinc-800"
                    >
                      90%
                    </span>
                  </div>
                </div>
                <div class="flex rounded-full h-3 bg-gray-200">
                  <div
                    style="width: 90%"
                    class="rounded-full bg-Fizico-color1"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Course Teacher -->
          <div
            class="text-zinc-800 dark:text-slate-100 dark:bg-slate-800 bg-white rounded-2xl p-4 sm:p-5 mt-8 pt-6 px-5 pb-5 md:py-6 md:px-5 text-center"
          >
            <img
              class="block mb-2 mx-auto object-cover border border-Fizico-color1 rounded-full"
              width="90"
              height="90"
              src="/images/comment-user (3).jpg"
              :alt="course.teacher"
              :title="course.teacher"
            />
            <span class="font-DanaBold text-[18px]">
              استاد {{ course.teacher }}
            </span>
            <p class="my-4"></p>
            <a
              href="#"
              class="hover:text-slate-100 hover:bg-Fizico-color1 border border-Fizico-color1 px-4 py-2 rounded-3xl text-sm mx-auto transition-colors"
            >
              مشاهده رزومه استاد</a
            >
          </div>
          <!-- Course Short Link -->
          <ShowNotif :text="textNotif" :type="typeNotif" ref="notif" />
          <div
            class="hidden lg:block dark:bg-slate-800 bg-white rounded-2xl p-5 text-center"
          >
            <span
              class="font-Morabba font-light text-lg text-zinc-800 dark:text-slate-100 mb-3"
              >لینک کوتاه آموزش</span
            >
            <div
              class="flex items-end justify-between gap-x-3 p-4 mt-4 bg-Fizico-color1/5 border border-dashed border-Fizico-color1 rounded-lg"
            >
              <button @click="CopyCourseLinkHandler" class="text-Fizico-color1">
                <svg class="w-8 h-8">
                  <use href="#clipboard-document"></use>
                </svg>
              </button>
              <span
                ref="courseLink"
                class="text-lg w-64 text-left text-zinc-800 dark:text-slate-100 truncate"
                >fizico.ir/?p={{ course.id }}</span
              >
            </div>
          </div>
        </aside>
      </section>
    </section>
  </div>

  <Footer />
  </div>
</template>

<script setup>
import { onMounted, ref, computed,watch  } from "vue";
import { useRoute } from "vue-router";
import Nav from "@/components/Header/Nav.vue";
import Footer from "@/components/Footer.vue";
import SvgIcons from "@/components/SvgIcons.vue";
import CourseBoxInfo from "./CourseBoxInfo.vue";
import ShowNotif from "@/components/ShowNotif.vue";
import AccordionContent from "./AccordionContent.vue";
import PlyrPlayer from "@/components/PlyrPlayer.vue";
import CommentForm from "@/components/CommentForm.vue";
import CommentList from "@/components/CommentList.vue";
import CartBox from "@/components/Header/CartBox.vue";
import { useCartStore } from "@/stores/cart";

const route = useRoute();
const course = ref(null);
const courses = [
  {
    id: 1,
    title: "آموزش فیزیک دهم - رشته ریاضی و فیزیک - تستی + تشریحی",
    desc: "شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    teacher: "نگار فرهمند",
    update: "1403/04/12",
    time: 32,
    price: "3,730,000",
    offerPrice: "1,950,000",
    image: "/images/course-poster.jpg",
  },
  {
    id: 2,
    title: "آموزش فیزیک دهم - رشته علوم تجربی - تستی + تشریحی",
    desc: "شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    teacher: "نگار فرهمند",
    update: "1403/04/12",
    time: 32,
    price: "3,730,000",
    offerPrice: "1,950,000",
    image: "/images/course-poster.jpg",
  },
  {
    id: 3,
    title: "آموزش فیزیک یازدهم - رشته ریاضی و فیزیک - تستی + تشریحی",
    desc: "شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    teacher: "نگار فرهمند",
    update: "1403/04/12",
    time: 32,
    price: "3,730,000",
    offerPrice: "1,950,000",
    image: "/images/course-poster.jpg",
  },
  {
    id: 4,
    title: "آموزش فیزیک یازدهم - رشته علوم تجربی - تستی + تشریحی",
    desc: "شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    teacher: "نگار فرهمند",
    update: "1403/04/12",
    time: 32,
    price: "3,730,000",
    offerPrice: "1,950,000",
    image: "/images/course-poster.jpg",
  },
  {
    id: 5,
    title: "آموزش فیزیک دوازدهم - رشته ریاضی و فیزیک - تستی + تشریحی",
    desc: "شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    teacher: "نگار فرهمند",
    update: "1403/04/12",
    time: 32,
    price: "3,730,000",
    offerPrice: "1,950,000",
    image: "/images/course-poster.jpg",
  },
  {
    id: 6,
    title: "آموزش فیزیک دوازدهم - رشته علوم تجربی - تستی + تشریحی",
    desc: "شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    teacher: "نگار فرهمند",
    update: "1403/04/12",
    time: 32,
    price: "3,730,000",
    offerPrice: "1,950,000",
    image: "/images/course-poster.jpg",
  },
];

onMounted(() => {
  course.value = courses.find((c) => c.id == route.params.id);
  if (course.value) {
    document.title = course.value.title;
  }
});

const commentsCourse = ref([]);

const addNewComment = (newComment) => {
  const now = new Date().toLocaleDateString("fa-IR");
  commentsCourse.value.unshift({ text: newComment, date: now });
};
defineExpose({ addNewComment });

const cart = useCartStore();
const expanded = ref(false);
const textNotif = ref("");
const typeNotif = ref(false);
const courseLink = ref(null);
const notif = ref(null);
const commentForm = ref(null);
const descText = ref(
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد  وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد ا"
);


const isInCart = ref(false);

const addToCart = (course) => {
  const alreadyInCart = cart.items.some(item => item.id === course.id);
  
  if (!alreadyInCart) {
    cart.items.push(course);
    isInCart.value = true;
  } else {
    isInCart.value = false;
  }
};


const toggleExpand = () => {
  expanded.value = !expanded.value;
};

const CopyCourseLinkHandler = async () => {
  try {
    const link = courseLink.value.innerText;
    await navigator.clipboard.writeText(link);
    notif.value.showNotifHandler();
    textNotif.value = "لینک با موفقیت کپی شد!";
    typeNotif.value = true;
  } catch (err) {
    notif.value.showNotifHandler();
    textNotif.value = "خطا! لینک کپی نشد!!!";
    typeNotif.value = false;
  }
};

const toggleCommentForm = () => {
  commentForm.value.toggleCommentForm();
};
</script>
