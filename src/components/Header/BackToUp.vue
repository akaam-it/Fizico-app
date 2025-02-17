<template>
  <div v-show="showButton" class="lg:block hidden fixed bottom-5 right-5 z-30 opacity-60 hover:opacity-100">
    <button
      @click="scrollToTop"
      class="btn-back-to-top bg-Fizico-color1 text-white rounded-full p-2 transition-all shadow-md opacity-80 hover:opacity-100">
      <svg class="w-6 h-6 font-bold">
        <use href="#arrow-up"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 200;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>