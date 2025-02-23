<template>
  <div v-if="posts && posts.length > 0">
    <SvgIcons />
    <div class='container'>
      <Nav />
      <SectionTitle
        title="مقالات"
        :readMore="false"
        class="justify-start mt-10 lg:mt-20"
      />

      <div
        class="container grid grid-rows-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8"
      >
        <BlogBox
          v-for="post in visiblePosts"
          :key="post.id"
          :data="post"
          @click="goToPost(post.id)"
        />
      </div>

      <div
        class="flex justify-center mt-6"
        v-if="visiblePosts.length < posts.length"
      >
        <button
          @click="loadMore"
          class="block bg-Fizico-color1/5 z-50 border mb-6 border-Fizico-color1 text-Fizico-color1 mx-auto font-DanaLight px-2 rounded-lg"
        >
          <p class="flex items-end gap-x-1 py-3 text-[15px]/4">
            مشاهده بیشتر
            <svg class="-rotate-90 w-[18px] h-[18px]">
              <use href="#chevron-left"></use>
            </svg>
          </p>
        </button>
      </div>

    </div>
      <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Header/Nav.vue";
import Footer from "@/components/Footer.vue";
import BlogBox from "@/views/Blog/BlogBox.vue";
import SvgIcons from "@/components/SvgIcons.vue";
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: { Nav, Footer, BlogBox, SvgIcons, SectionTitle },
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
      visibleCount: 8,
    };
  },
  computed: {
    visiblePosts() {
      return this.posts.slice(0, this.visibleCount);
    },
  },
  methods: {
    loadMore() {
      this.visibleCount += 8; 
    },
    goToPost(id) {
      this.$router.push(`/blog/${id}`);
    },
  },
};
</script>
