<script>
import Nav from "./Nav.vue";
import CircleButton from "../CircleButton.vue";
import InformationCounter from "./InformationCounter.vue";
import BlurGradient from "../BlurGradient.vue";
export default {
  components: {
    Nav,
    CircleButton,
    InformationCounter,
    BlurGradient,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <header class=" z-[56] relative container font-DanaBlack mb-3">
    <Nav />
    <BlurGradient />
    <section class="relative mt-0 lg:mt-10">
      <svg
        class="hidden lg:inline text-Fizico-color3 absolute left-0 bottom-0 -z-20"
      >
        <use href="#svg1"></use>
      </svg>
      <svg
        class="text-Fizico-color4 absolute top-0 left-0 -rotate-45 -z-20 opacity-10"
      >
        <use href="#Circles"></use>
      </svg>
      <svg class="text-Fizico-color3 absolute top-0 right-0">
        <use href="#starsvg"></use>
      </svg>
      <div
        class="flex lg:flex-row flex-col-reverse lg:items-center lg:justify-between"
      >
        <!-- Right Header Bottom -->
        <div class="basis-1/4 lg:basis-3/4 relative">
          <svg
            class="text-Fizico-color2 absolute bottom-0 left-0 hidden md:inline-block"
          >
            <use href="#starsvg2"></use>
          </svg>
          <!-- Title -->
          <div class="my-8 text-center lg:text-right relative">
            <h1
              class="text-5xl lg:text-6xl font-Morabba font-bold text-Fizico-color1 "
            >
              <span class="relative"> فیزیکو </span> قورت بده!

              <svg
                class="text-Fizico-color2 absolute right-[3px] top-[-80px] w-20 h-20"
              >
                <use href="#academic-cap"></use>
              </svg>
            </h1>
          </div>
          <!-- Description -->
          <div>
            <h2
              class="dark:text-white tet-zinc-800 text-center font-DanaBlack font-light tracking-wide  lg:text-start sm:text-sm lg:text-xl"
            >
              آموزش خط به خط فیزیک متوسطه دوم کنکوری با برترین اساتید ایران با
              بیش از بیست سال سابقه تدریس
            </h2>
          </div>
          <!-- Starter Buttons -->
          <div
            class="my-8 flex items-center justify-center lg:justify-start gap-x-3 relative"
          >
            <a
              href="#BooksPhysics"
              class="bg-Fizico-red-button p-3 rounded-xl text-Fizico-color4 hover:text-white hover:bg-Fizico-color4 transition-colors"
              >همین الان شروع کن
            </a>
            <a
              href="#"
              class="flex items-center p-3 rounded-xl text-Fizico-color2 hover:text-zinc-800 hover:bg-Fizico-color2 transition-colors"
            >
             ویدیو معرفی
              <svg class="w-6 h-6 animate-pulse">
                <use href="#play"></use>
              </svg>
            </a>
          </div>
          <!-- Counter Informations -->
          <div class="flex items-center justify-center gap-x-7 mt-5 dark:text-white">
              <InformationCounter color='Fizico-color1' desc="دقیقه آموزش" icon='played-vid' :targetNumber="16457" :speed='585' :duration="800" />
              <InformationCounter color='Fizico-color2' desc="دقیقه وبینار رایگان" icon='teacher' :targetNumber="8726" :speed='263' :duration="500"  />
              <InformationCounter color='Fizico-color3' desc="دانشجوی علاقه‌مند" icon='student' :targetNumber="175867" :speed='1234' :duration="14500"  />
          </div>
        </div>
        <!-- Left Header Bottom -->
        <div class="shrink lg:basis-3/5 animate-pulse">
          <img
            src="/images/header-bottom-img.svg"
            alt="تصویر فیزیکو"
            class="block w-2/3 md:w-1/3 lg:w-full mx-auto lg:mx-0"
          />
        </div>
      </div>
      <a class="animate-pulse scroll-mt-24" href='#aboutUs'>
        <svg
          class="w-8 h-8 lg:w-12  lg:h-12 block mx-auto text-gray-800 dark:text-white mt- mt-7 lg:mt-0 -rotate-90"
        >
          <use href="#chevron-dbl"></use>
        </svg>
      </a>
    </section>
  </header>
</template>
