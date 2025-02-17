<template>
  <div class="z-[999999999] fixed -bottom-1 right-0 left-0">
    <SearchBox
      v-model="isSearchOpen"
      @checkOverlay="checkOverlay"
      class="font-DanaBlack text-[12px] lg:text-[1rem]"
    />
    <OverLay
      v-model="overlayActive"
      @closeAll="closeAllItems"
      class="font-DanaBlack text-[12px] lg:text-[1rem]"
    />

    <CartBox
      v-model="isCartBoxOpen"
      @checkOverlay="checkOverlay"
      class="z-[999999]"
    />
    <div
      class="lg:hidden font-DanaBlack border-t border-zinx-800/50 dark:border-gray-200/30 pt-1 pb-2 flex items-center justify-between gap-2 rounded-t-md bg-slate-100 dark:bg-gray-800 z-[53] shadow-md dark:shadow-slate-100 shadow-zinc-950 transition-all duration-300"
      data-v-inspector="src/components/MenuBottomMobile.vue:10:3"
    >
      <div
        class="group relative px-3 cursor-pointer"
        data-v-inspector="src/components/MenuBottomMobile.vue:13:5"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-blue-50 dark:text-slate-100 text-zinc-800 hover:text-Fizico-color1 transition-colors duration-300"
          data-v-inspector="src/components/MenuBottomMobile.vue:14:7"
        >
          <svg
            class="group-hover:scale-110 transition-transform duration-300"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-inspector="src/components/MenuBottomMobile.vue:17:9"
          >
            <use
              stroke="currentColor"
              data-v-inspector="src/components/MenuBottomMobile.vue:25:11"
              href="#home"
            ></use>
          </svg>
        </router-link>
        <span
          class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white"
          data-v-inspector="src/components/MenuBottomMobile.vue:32:7"
        >
          خانه
        </span>
      </div>
      <div
        class="group relative px-3 cursor-pointer"
        data-v-inspector="src/components/MenuBottomMobile.vue:39:5"
        @click="toggleSearch"
      >
        <div
          class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-blue-50 dark:text-slate-100 text-zinc-800 hover:text-Fizico-color1 transition-colors duration-300"
          data-v-inspector="src/components/MenuBottomMobile.vue:40:7"
        >
          <svg
            class="group-hover:scale-110 transition-transform duration-300"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-inspector="src/components/MenuBottomMobile.vue:43:9"
          >
            <use
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="currentColor"
              data-v-inspector="src/components/MenuBottomMobile.vue:51:11"
              href="#search"
            ></use>
          </svg>
        </div>
        <span
          class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white"
          data-v-inspector="src/components/MenuBottomMobile.vue:60:7"
        >
          جستجو
        </span>
      </div>
      <div
        class="group relative px-3 cursor-pointer"
        data-v-inspector="src/components/MenuBottomMobile.vue:67:5"
        @click="toggleTheme"
      >
        <div
          class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-blue-50 dark:text-slate-100 text-zinc-800 hover:text-Fizico-color1 transition-colors duration-300"
          data-v-inspector="src/components/MenuBottomMobile.vue:68:7"
        >
          <svg
            class="group-hover:scale-110 transition-transform duration-300"
            width="27"
            height="27"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-inspector="src/components/MenuBottomMobile.vue:71:9"
          >
            <use
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              stroke="currentColor"
              data-v-inspector="src/components/MenuBottomMobile.vue:79:11"
              :href="`#${isDarkMode ? 'sun' : 'moon'}`"
            ></use>
          </svg>
        </div>
        <span
          class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white"
          data-v-inspector="src/components/MenuBottomMobile.vue:88:7"
        >
          تم
        </span>
      </div>
      <router-link
        :to="{ name: 'Login' }"
        class="group relative px-3 cursor-pointer"
        data-v-inspector="src/components/MenuBottomMobile.vue:95:5"
      >
        <div
          class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-blue-50 dark:text-slate-100 text-zinc-800 hover:text-Fizico-color1 transition-colors duration-300"
          data-v-inspector="src/components/MenuBottomMobile.vue:96:7"
        >
          <svg
            class="group-hover:scale-110 transition-transform duration-300"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-inspector="src/components/MenuBottomMobile.vue:99:9"
          >
            <use
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              stroke="currentColor"
              data-v-inspector="src/components/MenuBottomMobile.vue:114:11"
              href="#user"
            ></use>
          </svg>
        </div>
        <span
          class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white"
          data-v-inspector="src/components/MenuBottomMobile.vue:123:7"
        >
          حساب
        </span>
      </router-link>
      <div
        @click="toggleCartBox"
        class="group relative px-3 cursor-pointer"
        data-v-inspector="src/components/MenuBottomMobile.vue:95:5"
      >
        <div
          v-show="cartStore.items.length > 0"
          class="absolute flex items-center justify-center top-0 left-3 bg-red-500 text-white font-DanaLight rounded-full pt-2 pb-1 pl-[6px] pr-[7px] text-[14px]/[0.3rem]"
        >
          {{ cartStore.items.length }}
        </div>

        <div
          class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-blue-50 dark:text-slate-100 text-zinc-800 hover:text-Fizico-color1 transition-colors duration-300"
          data-v-inspector="src/components/MenuBottomMobile.vue:96:7"
        >
          <svg
            class="group-hover:scale-110 transition-transform duration-300"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-inspector="src/components/MenuBottomMobile.vue:99:9"
          >
            <use
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              stroke="currentColor"
              data-v-inspector="src/components/MenuBottomMobile.vue:114:11"
              href="#shopping-cart"
            ></use>
          </svg>
        </div>
        <span
          class="absolute -top-12 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:scale-100 before:absolute before:bottom-[-5px] before:left-[50%] before:-translate-x-[50%] before:border-[6px] before:border-transparent before:border-t-white"
          data-v-inspector="src/components/MenuBottomMobile.vue:123:7"
        >
          سبدخرید
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
</script>

<script>
import SearchBox from "@/components/Header/SearchBox.vue";
import OverLay from "@/components/Header/OverLay.vue";
import CartBox from "@/components/Header/CartBox.vue";

export default {
  components: { SearchBox, OverLay, CartBox },
  data() {
    return {
      isDarkMode: false,
      isSearchOpen: false,
      overlayActive: false,
      isCartBoxOpen: false,
    };
  },
  mounted() {
    const savedTheme = localStorage.getItem("FizicoTheme");
    if (savedTheme === "dark") {
      this.isDarkMode = true;
      document.documentElement.classList.add("dark");
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("FizicoTheme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("FizicoTheme", "light");
      }
    },
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
      this.checkOverlay();
    },

    closeAllItems() {
      this.isSearchOpen = false;
      this.overlayActive = false;
      this.isCartBoxOpen = false;
    },
    checkOverlay() {
      this.overlayActive = this.isSearchOpen || this.isCartBoxOpen;
    },
    updateOverlay() {
      this.overlayActive = this.isSearchOpen || this.isCartBoxOpen;
    },
    toggleCartBox() {
      this.isCartBoxOpen = !this.isCartBoxOpen;
      this.checkOverlay();
    },
  },
};
</script>
