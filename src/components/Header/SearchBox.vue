<template>
  <div
    class="container fixed left-0 right-0 z-[54] transition-all duration-0"
    :class="modelValue ? 'visible top-4' : 'invisible -top-full'"
  >
    <div
      class="group container relative flex flex-col bg-white px-3 py-1 dark:bg-gray-600 rounded-xl shadow-md shadow-zinc-950 transition-all">
      <div class="flex items-center justify-between">
        <input
          v-model="searchQuery"
          @input="search"
          @keyup.enter="search"
          type="search"
          placeholder="دنبال چی میگردی؟"
          class="block w-full outline-none py-2 lg:py-3 bg-white dark:bg-gray-600 dark:text-gray-300 transition-all"
        />
        <div class="flex items-center justify-end gap-x-2">
          <button @click="search" class="dark:text-white" title="جستجو">
            <svg class="w-7 h-7 text-Fizico-color1">
              <use href="#search"></use>
            </svg>
          </button>
          <button @click="close" title="بستن" class="group">
            <svg
              class="w-7 h-7 text-Fizico-color4 bg-Fizico-red-button rounded-full"
            >
              <use href="#x-mark"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="scroll-container max-h-[80vh] overflow-y-auto rounded-xl" ref="scrollContainer" @scroll="checkScroll">
        <transition name="fade">
          <div
            v-show="searchResults.courses.length"
            class="search-results p-2 mt-2 bg-gray-100 dark:bg-gray-700 shadow-md rounded-xl"
          >
            <h3 class="text-sm lg:text-lg font-DanaBlack mb-2 text-zinc-800 dark:text-white">
              نتایج دوره‌ها:
            </h3>
            <router-link
              v-for="result in searchResults.courses"
              :key="result.id"
              @click="close"
              :to="`/course/${result.id}`"
              class="search-item flex items-center gap-x-2 md:mb-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all rounded-xl"
            >
              <svg class=" w-6 h-6 text-zinc-800 dark:text-white mr-2">
                <use href="#academic-cap2"></use>
              </svg>
              <span class="font-DanaLight text-gray-800 dark:text-gray-300 line-clamp-1">{{
                result.title
              }}</span>
            </router-link>
          </div>
        </transition>

        <transition name="fade">
          <div
            v-show="searchResults.posts.length"
            class="search-results my-3 p-2 bg-gray-100 dark:bg-gray-700 shadow-md rounded-xl"
          >
            <h3 class="text-sm lg:text-lg font-DanaBlack mb-2 text-zinc-800 dark:text-white">
              نتایج مقالات:
            </h3>
            <router-link
              v-for="result in searchResults.posts"
              :key="result.id"
              @click="close"
              :to="`/blog/${result.id}`"
              class="search-item flex items-center gap-x-2 md:mb-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all rounded-xl"
            >
              <svg class="w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] text-zinc-800 dark:text-white mr-2">
                <use href="#blog-icon"></use>
              </svg>
              <span class="font-DanaLight text-gray-800 dark:text-gray-300 line-clamp-1">{{ result.title }}</span>
            </router-link>
          </div>
        </transition>

      </div>
      <div ref='searchResultShadow' class="visible absolute bottom-0 left-0 right-0 h-[30px] bg-gradient-to-t from-black/50 to-transparent transition-all rounded-xl w-full"
            :class="showShadow? '':'invisible'"></div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
  },
  data() {
    return {
      searchQuery: "",
      searchResults: {
        posts: [],
        courses: [],
      },
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
      courses: [
        {
          id: 1,
          title: "آموزش فیزیک دهم - رشته ریاضی و فیزیک - تستی + تشریحی",
          desc: "شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
          teacher: "نگار فرهمند",
          update: "1403/04/12",
          time: 32,
          price: "3,730,000",
          offerPrice: "1,950,000",
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
        },
      ],
      showShadow: false

    };
  },
  methods: {
    search() {
      if (this.searchQuery.trim() === "") {
        this.searchResults = { posts: [], courses: [] };
        return;
      }

      const query = this.searchQuery.toLowerCase();
      this.searchResults = {
        posts: this.posts.filter((item) =>
          item.title.toLowerCase().includes(query)
        ),
        courses: this.courses.filter((item) =>
          item.title.toLowerCase().includes(query)
        ),
      };
    },

    close() {
      this.$emit("update:modelValue", false);
      this.$emit("checkOverlay");
      this.searchQuery = "";
      this.searchResults = [];
    },
    checkScroll() {
      const container = this.$refs.scrollContainer;
      const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
      this.showShadow = !isAtBottom;
      if(this.showShadow){
        this.$refs.searchResultShadow.classList.remove('visible')
      }
    }
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>
