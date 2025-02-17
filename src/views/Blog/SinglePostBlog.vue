<template>
  <div
    v-if="post"
    class="single-post-blog container dark:text-slate-100 text-zinc-800"
  >
    <SvgIcons />
    <Nav />
    <!-- Breadcrumb -->
    <ol
      class="overflow-auto lg:overflow-hidden flex items-center mx-auto whitespace-nowrap dark:bg-slate-800 bg-white  p-3 my-5 rounded-xl md:rounded-2xl"
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
        <router-link
          class="flex items-center text-sm gap-x-1 font-DanaBlack dark:text-slate-300 text-slate-900 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          :to="{ name: 'Blog' }"
        >
          مقالات
        </router-link>
        <svg class="shrink-0 mx-2 w-4 h-4 md:w-8 md:h-8 text-gray-500">
          <use href="#chevron-left"></use>
        </svg>
      </li>

      <li class="inline-flex items-center">
        <span
          class="cursor-pointer flex items-center sm:text-[10] lg:text-lg dark:text-slate-100 text-zinc-800 hover:text-blue-600 focus:outline-none focus:text-blue-600"
        >
          {{ post.title }}
        </span>
      </li>
    </ol>

    <section
      class="grid grid-cols-1 lg:grid-cols-12 gap-x-7 gap-y-8 mt-8 md:mt-10"
    >
      <!-- Content -->
      <div class="col-span-full lg:col-span-8 xl:col-span-9">
        <div class="p-4 sm:p-5 dark:bg-slate-800 bg-white rounded-2xl">
          <!-- head -->
          <div
            class="flex items-center gap-x-2 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-b-neutral-200/60 dark:border-b-white/10 relative"
          >
            <span
              class="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-10 bg-Fizico-color1 rounded-r-sm"
            ></span>
            <h1
              class="font-Morabba text-xl md:text-2xl text-zinc-800 dark:text-slate-100"
            >
              {{ post.title }}
            </h1>
          </div>
          <!-- info -->
          <div
            class="grid sm:flex grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 mb-6 text-slate-500 font-danaMedium text-sm sm:text-base"
          >
            <!-- author -->
            <div class="flex items-end gap-x-1.5">
              <svg class="size-6 sm:size-7">
                <use href="#user"></use>
              </svg>
              <span>{{ post.author }}</span>
            </div>
            <!-- date -->
            <div class="flex items-end gap-x-1.5">
              <svg class="size-6 sm:size-7">
                <use href="#calendar"></use>
              </svg>
              <span>{{ post.date }}</span>
            </div>
          </div>
          <!-- Full Description -->
          <div class="p-4 sm:p-5">
            {{ post.content }}
          </div>
        </div>
        <!-- Related Blogs -->
        <div class="dark:bg-slate-800 bg-white rounded-2xl p-4 sm:p-5 mt-8">
          <div class="flex items-center gap-x-2 mb-6 sm:mb-7 relative">
            <span
              class="absolute -right-6 sm:-right-[26px] block w-1.5 h-[34px] md:h-10 bg-Fizico-color2 rounded-r-sm"
            ></span>
            <svg class="hidden md:inline-block text-Fizico-color2 w-8 h-8">
              <use href="#book-open-fill"></use>
            </svg>
            <h3
              class="font-Morabba text-xl md:text-2xl text-zinc-800 dark:text-slate-100"
            >
              پیشنهاد مطالعه
            </h3>
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <RelatedPostsBox :posts="posts" :currentId="id" />
          </div>
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
          <CommentList :comments="comments" />
        </div>
      </div>

      <!-- Sidebar -->
      <aside class="col-span-full lg:col-span-4 xl:col-span-3">
        <!-- Post Short Link -->
        <ShowNotif :text="textNotif" :type="typeNotif" ref="notif" />
        <div
          class="hidden lg:block bg-white dark:bg-slate-800 rounded-2xl p-5 text-center"
        >
          <span
            class="font-Morabba font-light text-lg text-zinc-800 dark:text-slate-100 mb-3"
            >لینک کوتاه مطلب</span
          >
          <div
            class="flex items-end justify-between gap-x-3 p-4 mt-4 bg-Fizico-color1/5 text-Fizico-color1 border border-dashed border-Fizico-color1 rounded-lg"
          >
            <button @click="CopyPostLinkHandler">
              <svg class="w-8 h-8">
                <use href="#clipboard-document"></use>
              </svg>
            </button>
            <span
              ref="postLink"
              class="text-lg w-64 text-left text-zinc-800 dark:text-slate-100 truncate"
              >fizico.ir/?post={{ post.id }}</span
            >
          </div>
        </div>
      </aside>
    </section>
  </div>
  <Footer />
</template>

<script>
import { ref } from "vue";

import { useRoute } from "vue-router";
import Nav from "@/components/Header/Nav.vue";
import Footer from "@/components/Footer.vue";
import SvgIcons from "@/components/SvgIcons.vue";
import ShowNotif from "@/components/ShowNotif.vue";
import RelatedPostsBox from "./RelatedPostBox.vue";
import CommentForm from "@/components/CommentForm.vue";
import CommentList from "@/components/CommentList.vue";

export default {
  components: {
    Nav,
    Footer,
    SvgIcons,
    ShowNotif,
    RelatedPostsBox,
    CommentForm,
    CommentList,
  },
  props: ["id"],
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "راهنمای مطالعه فیزیک برای دانش‌آموزان مبتدی",
          author: "محمد امینی",
          date: "1403/02/01",
          summary:
            "در این مقاله به روش‌های موثر برای شروع مطالعه فیزیک می‌پردازیم.",
          image: "/images/BlogImg.jpg",
          content: "اگر می‌خواهید مطالعه فیزیک را به طور اصولی شروع کنید...",
        },
        {
          id: 2,
          title: "چطور در فیزیک تست‌های سخت را پاسخ دهیم؟",
          author: "سارا رضایی",
          date: "1403/02/05",
          summary:
            "در این مقاله تکنیک‌های مختلفی برای پاسخ به تست‌های فیزیک سخت معرفی می‌شود.",
          image: "/images/BlogImg.jpg",
          content:
            "یکی از مهم‌ترین بخش‌های آمادگی برای امتحانات، تمرین تست‌های مختلف است...",
        },
        {
          id: 3,
          title: "برترین منابع برای مطالعه فیزیک در کنکور",
          author: "نادر معینی",
          date: "1403/02/10",
          summary:
            "اگر به دنبال بهترین منابع برای آمادگی فیزیک کنکور هستید، این مقاله را از دست ندهید.",
          image: "/images/BlogImg.jpg",
          content:
            "برای آمادگی در کنکور، انتخاب منابع مناسب بسیار مهم است. در این مقاله بهترین منابع...",
        },
        {
          id: 4,
          title: "روش‌های ساده برای حل مسائل فیزیک",
          author: "سید علی محمدی",
          date: "1403/02/12",
          summary:
            "حل مسائل فیزیک می‌تواند چالش‌برانگیز باشد. در این مقاله تکنیک‌های ساده‌ای معرفی می‌کنیم.",
          image: "/images/BlogImg.jpg",
          content:
            "در این مقاله با استفاده از برخی تکنیک‌های خاص، شما می‌توانید مسائل فیزیک را...",
        },
        {
          id: 5,
          title: "چطور معادلات فیزیک را حفظ کنیم؟",
          author: "زهرا نوروزی",
          date: "1403/02/15",
          summary:
            "حفظ معادلات فیزیک یکی از چالش‌های بزرگ است. در این مقاله نکات کاربردی برای آن آورده‌ایم.",
          image: "/images/BlogImg.jpg",
          content:
            "برای حفظ معادلات فیزیک، یکی از بهترین روش‌ها استفاده از تکنیک‌های...",
        },
        {
          id: 6,
          title: "آشنایی با مفاهیم پایه‌ای فیزیک",
          author: "محسن معززی",
          date: "1403/02/18",
          summary:
            "در این مقاله مفاهیم پایه‌ای فیزیک و کاربردهای آن‌ها در زندگی روزمره توضیح داده شده است.",
          image: "/images/BlogImg.jpg",
          content:
            "مفاهیم پایه‌ای فیزیک شامل نیرو، حرکت، انرژی و دیگر مفاهیم هستند که...",
        },
        {
          id: 7,
          title: "اهمیت حل تمرین در یادگیری فیزیک",
          author: "فرهاد اسکندری",
          date: "1403/02/20",
          summary:
            "حل تمرین‌های مختلف در فیزیک به شما کمک می‌کند تا مفاهیم را بهتر درک کنید.",
          image: "/images/BlogImg.jpg",
          content:
            "تمرینات یکی از ارکان اصلی یادگیری در فیزیک هستند. در این مقاله به اهمیت...",
        },
        {
          id: 8,
          title: "چگونه فیزیک را برای کنکور آماده کنیم؟",
          author: "علی حسن‌زاده",
          date: "1403/02/23",
          summary:
            "اگر قصد دارید فیزیک را برای کنکور مطالعه کنید، این مقاله به شما کمک خواهد کرد.",
          image: "/images/BlogImg.jpg",
          content:
            "در این مقاله به استراتژی‌های مفید برای مطالعه فیزیک برای کنکور پرداخته‌ایم...",
        },
        {
          id: 9,
          title: "تأثیر تمرینات بدنی در یادگیری فیزیک",
          author: "مریم فرهادی",
          date: "1403/02/25",
          summary:
            "آیا تمرینات بدنی می‌توانند در یادگیری فیزیک موثر باشند؟ این مقاله به این سوال پاسخ می‌دهد.",
          image: "/images/BlogImg.jpg",
          content:
            "مطالعات اخیر نشان می‌دهد که تمرینات بدنی می‌تواند حافظه و تمرکز را بهبود بخشد...",
        },
        {
          id: 10,
          title: "یادگیری فیزیک با استفاده از تکنولوژی",
          author: "مجید قادری",
          date: "1403/02/28",
          summary:
            "استفاده از ابزارهای دیجیتال در یادگیری فیزیک می‌تواند تجربه شما را بهبود بخشد.",
          image: "/images/BlogImg.jpg",
          content:
            "در این مقاله، بهترین اپلیکیشن‌ها و نرم‌افزارهای آموزشی فیزیک را معرفی می‌کنیم...",
        },
        {
          id: 11,
          title: "نکات مهم برای مطالعه فیزیک در مدارس",
          author: "فرزاد نظری",
          date: "1403/03/02",
          summary:
            "این مقاله نکات کاربردی برای مطالعه فیزیک در مدارس و دانشگاه‌ها ارائه می‌دهد.",
          image: "/images/BlogImg.jpg",
          content:
            "برای موفقیت در فیزیک، باید رویکرد صحیحی را برای مطالعه انتخاب کنید...",
        },
        {
          id: 12,
          title: "چطور مسائل فیزیک را سریع‌تر حل کنیم؟",
          author: "شهرزاد مهرابی",
          date: "1403/03/05",
          summary:
            "اگر به دنبال روش‌هایی برای حل مسائل فیزیک سریع‌تر هستید، این مقاله را مطالعه کنید.",
          image: "/images/BlogImg.jpg",
          content:
            "در این مقاله تکنیک‌هایی برای حل مسائل فیزیک در زمان کوتاه‌تر معرفی می‌کنیم...",
        },
        {
          id: 13,
          title: "چرا فیزیک جزء دشوارترین دروس است؟",
          author: "یاسر غلامی",
          date: "1403/03/07",
          summary:
            "در این مقاله به چالش‌های فراوان در یادگیری فیزیک و راه‌حل‌های آن پرداخته شده است.",
          image: "/images/BlogImg.jpg",
          content:
            "فیزیک یکی از سخت‌ترین دروس است زیرا به دانش و مهارت‌های تحلیلی بالایی نیاز دارد...",
        },
        {
          id: 14,
          title: "مطالعه فیزیک به زبان ساده",
          author: "رضا داودی",
          date: "1403/03/10",
          summary:
            "این مقاله به شما کمک می‌کند که فیزیک را به ساده‌ترین شکل ممکن مطالعه کنید.",
          image: "/images/BlogImg.jpg",
          content:
            "مطالعه فیزیک به زبان ساده می‌تواند به شما در فهم بهتر این درس کمک کند...",
        },
        {
          id: 15,
          title: "راه‌حل‌های مؤثر برای یادگیری فیزیک در مدت زمان کوتاه",
          author: "سهیلا سلطانی",
          date: "1403/03/12",
          summary:
            "اگر زمان کمی دارید و نیاز به یادگیری سریع فیزیک دارید، این مقاله به شما کمک خواهد کرد.",
          image: "/images/BlogImg.jpg",
          content:
            "برای یادگیری سریع فیزیک، باید از روش‌های هوشمندانه و مؤثر استفاده کنید...",
        },
        {
          id: 16,
          title: "چگونه در فیزیک موفق شویم؟",
          author: "مهدی سلیمانی",
          date: "1403/03/15",
          summary:
            "در این مقاله راهکارهایی برای موفقیت در فیزیک و رسیدن به نمرات عالی ارائه می‌شود.",
          image: "/images/BlogImg.jpg",
          content: "برای موفقیت در فیزیک باید به چند نکته اساسی توجه کنید...",
        },
      ],
      post: null,
      textNotif: "",
      typeNotif: false,
    };
  },
  mounted() {
    const route = useRoute();
    const postId = Number(route.params.id);

    if (!isNaN(postId)) {
      this.post = this.posts.find((p) => p.id === postId);
      if(this.post){
        document.title =  this.post.title 
      }
    }
  },
  methods: {
    toggleCommentForm() {
      this.$refs.commentForm.toggleCommentForm();
    },
    async CopyPostLinkHandler() {
      try {
        const postLink = this.$refs.postLink.innerText;
        await navigator.clipboard.writeText(postLink);
        this.$refs.notif.showNotifHandler();
        this.textNotif = "لینک با موفقیت کپی شد!";
        this.typeNotif = true;
      } catch (err) {
        this.$refs.notif.showNotifHandler();
        this.textNotif = "خطا! لینک کپی نشد!!!";
        this.typeNotif = false;
      }
    },
  },
  setup() {
    const comments = ref([]);
    const addNewComment = (newComment) => {
      const now = new Date().toLocaleDateString("fa-IR");
      comments.value.unshift({ text: newComment, date: now });
    };
    return { comments, addNewComment };
  },
};
</script>
