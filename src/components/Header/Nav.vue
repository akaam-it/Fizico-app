<script setup>
import { useCartStore } from "@/stores/cart";
import {authState} from '@/composables/login.js'

const cartStore = useCartStore();   


</script>

<script>
import { ref } from "vue";
import CircleButton from "../CircleButton.vue";
import SearchBox from "./SearchBox.vue";
import OverLay from "./OverLay.vue";
import MenuBottomMobile from "@/components/MenuBottomMobile.vue";
import CartBox from "@/components/Header/CartBox.vue";
import DropDownClass from "@/components/Header/DropDownClass.vue";
import BackToUp from '@/components/Header/BackToUp.vue'


export default {
  components: {
    CircleButton,
    SearchBox,
    OverLay,
    MenuBottomMobile,
    CartBox,
    DropDownClass,
    BackToUp,
    
  },
  props: { hidden: Boolean, dashboard:Boolean },

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
    }else{
      this.isDarkMode = false
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
      this.overlayActive =
        this.isSearchOpen || this.isCartBoxOpen;
    },
    updateOverlay() {
      this.overlayActive =
        this.isSearchOpen || this.isCartBoxOpen;
    },
    toggleCartBox() {
      this.isCartBoxOpen = !this.isCartBoxOpen;
      this.checkOverlay();
    },
  },
};
</script>
<template>
  
   <MenuBottomMobile  class='lg:hidden' />
 <div
    :class='dashboard ?"hidden lg:block":"" '
 >
  <OverLay v-model="overlayActive" @closeAll="closeAllItems" />
  <nav
    class=" w-full tracking-tighter mt-2  md:py-2 transition-all"
   > 
  <SearchBox v-model="isSearchOpen" @checkOverlay="checkOverlay" />
  <BackToUp v-if='!dashboard'/>
    <div
      id="Nav"
      class="flex items-center container"
      :class='dashboard?"justify-end":"justify-center lg:justify-between"'
    >
      <!-- Right Nav -->
      <div v-if='!dashboard' class="flex items-center justify-center lg:gap-x-3">
        <!-- Logo Img -->
        <div class="lg:ml-6 hover:scale-110 transition-all">
          <router-link to="/" class="flex items-center font-Morabba">
            <img
              class="LogoSrc h-11 w-11 inline-block"
              :src="`/images/logo-${isDarkMode ? 'dark' : 'light'}.svg`"
              alt="فیزیکو"
              title="فیزیکو"
            />
          </router-link>
        </div>
        <!-- Nav Items -->
        <div>
          <ul class="hidden lg:flex justify-center gap-x-5">
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="text-gray-800 dark:text-white hover:text-Fizico-color1 transition-all"
                >صفحه اصلی</router-link
              >
            </li>
            <li class="group relative">
              <a
                class="flex items-center gap-x-0.5 f cursor-pointer group-hover:text-Fizico-color1 w-full text-gray-800 dark:text-white hover:text-Fizico-color1 transition-all"
              >
                رشته ریاضی
                <svg class="w-4 h-4 rotate-180">
                  <use href="#chevron"></use>
                </svg>
              </a>
              <DropDownClass 
              
                :dataR="[
                { title: 'پایه دهم', link: '/course/1' },
                { title: 'پایه یازدهم', link: '/course/3' },
                { title: 'پایه دوازدهم', link: '/course/5' },
                ]"
              />
            </li>
            <li class="group relative">
              <a
                class="flex items-center gap-x-0.5 cursor-pointer group-hover:text-Fizico-color1 w-full text-gray-800 dark:text-white hover:text-Fizico-color1 transition-all"
              >
                رشته تجربی
                <svg class="w-4 h-4 rotate-180">
                  <use href="#chevron"></use>
                </svg>
              </a>
               <DropDownClass
                :dataT="[
                { title: 'پایه دهم', link: '/course/2' },
                { title: 'پایه یازدهم', link: '/course/4' },
                { title: 'پایه دوازدهم', link: '/course/6' },
                ]"
              />
            </li>
           
            <li>
              <router-link
                :to="{ name: 'Blog' }"
                class="text-gray-800 dark:text-white hover:text-Fizico-color1 transition-all"
              >
                مقالات</router-link
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-800 dark:text-white hover:text-Fizico-color1 transition-all"
              >
                تماس باما</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- Left Nav -->
      <div class="flex  items-center justify-center gap-x-3">
        <!-- Nav Buttons -->
        <div class="hidden lg:flex items-center justify-end gap-x-2">
          <!-- Search Button -->
          <CircleButton  v-if='!dashboard'  svgID="search" @click="toggleSearch"/>
          <!-- Change Theme Button -->
          <CircleButton
            :svgID="`${isDarkMode ? 'sun' : 'moon'}`"
            @click="toggleTheme"
          />
          <!-- Cart Button  -->
          <div class="relative"
           :class="(isCartBoxOpen ? 'z-[55]' : 'z-[53]')">
            <CircleButton
              @click="toggleCartBox"
              svgID="shopping-cart"
              class=""
            />
            <div v-show='cartStore.items.length > 0  ' class='absolute flex items-center justify-center -top-1 left-0 bg-red-500 text-white font-DanaLight rounded-full pt-2 pb-1 pl-[6px] pr-[7px] text-[14px]/[0.3rem]'>{{ cartStore.items.length }}</div>
            <CartBox v-model="isCartBoxOpen" @checkOverlay="checkOverlay" />
          </div>
        </div>

        <!-- Login Button -->
       
       <div v-if='!dashboard'>
        <router-link 
         v-show='!authState.isAuthenticated'
         
          :to="{ name: 'Login' }"
          class="hidden cursor-pointer lg:flex items-center justify-center gap-x-1 sm:bg-Fizico-color1 text-white py-2 md:px-3 rounded-3xl lg:hover:-mb-1 transition-all"
        >
          <svg class="inline w-5 h-5 rotate-180">
            <use href="#login"></use>
          </svg>

          <span class="inline"> ورود | ثبت نام </span>
        </router-link>
        <router-link 
         v-show='authState.isAuthenticated'
          :to="{ name: 'Dashboard' }"
          class="hidden cursor-pointer lg:flex items-center justify-center gap-x-1 sm:bg-Fizico-color1 text-white py-2 md:px-3 rounded-3xl lg:hover:-mb-1 transition-all"
        >
          <svg class="inline w-5 h-5 ">
            <use href="#user"></use>
          </svg>

          <span  class="inline"> حساب کاربری   </span>
        </router-link>
       </div>
      </div>
    </div>
  </nav>
 </div>
</template>
