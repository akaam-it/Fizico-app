<template>
  <div
    class=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:absolute lg:left-0 lg:top-full pt-4 "
    :class="modelValue ? 'visible' : 'invisible'"
  >
    <div class=" w-80 dark:bg-slate-800 bg-white rounded-lg">
      <div
        class="flex items-center justify-between px-5 py-4 bg-Fizico-color1/10 text-Fizico-color1 mb-2 rounded-t-lg"
      >
        <span class="font-DanaBold">سبد خرید من</span>
        <span class="font-DanaLight text-gray-500 dark:text-slate-300"
          >{{ cart.items.length }} دوره</span
        >
      </div>
      <div
        class="pl-5 pr-2.5 mr-2.5 divide-y-2 dark:divide-gray-500/20 divide-gray-500/30 max-h-[70vh] overflow-y-auto text-zinc-800 dark:text-slate-100"
      >
        <div
          v-for="(item, index) in cart.items"
          :key="index"
          class="flex justify-between items-center py-2 gap-x-3"
        >
          <div class="flex flex-col gap-y-1 justify-between">
            <router-link
              :to="`/course/${item.id}`"
              class="line-clamp-1 font-DanaBlack text-sm"
            >
              {{ item.title }}
            </router-link>
            <div
              class="flex items-center gap-x-2 text-slate-500 dark:text-gray-400"
            >
              <span class="font-DanaBlack text-sm line-through">
                {{ item.price }}
              </span>
              <div
                class="flex items-center gap-x-1 dark:text-slate-100 text-zinc-800"
              >
                <span class="font-DanaBlack text-[18px]">
                  {{ formatPrice(item.offerPrice) }}
                  <span class="font-Morabba text-[12px]">تـومـان</span>
                </span>
              </div>
            </div>
          </div>
          <button   @click="removeFromCart(item.id)"
 class="text-gray-400 hover:text-red-500 mr-auto">
            <svg class="size-4 transition-colors">
              <use href="#trash"></use>
            </svg>
          </button>
        </div>
        <div
          v-if="cart.items.length > 0"
          class="flex items-center justify-between py-3"
        >
          <span class="font-DanaBlack text-[18px]">
            <span class="mx-1">مجموع: {{ totalPrice }} </span>
            <span class="font-Morabba text-[12px]">تـومـان</span>
          </span>
          <button
            class="text-[15px] font-DanaBlack py-2 px-3 rounded-xl text-slate-100 bg-green-700 "
          >
            پرداخت
          </button>
        </div>
        <div v-else>
          <span
            class="font-DanaBlack text-slate-500 dark:text-gray-400 block pt-2 pb-3 text-center"
            >سبد خرید شما خالی است!</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";

export default {
  name: "CartBox",
  props: {
    modelValue: Boolean,
  },
  data() {
    return {
       textNotif: "",
      typeNotif: false,
    }
  },
  setup() {
    const cart = useCartStore();

    const totalPrice = computed(() => {
      return cart.items.reduce(
        (total, item) =>
          total + Number(item.offerPrice.toString().replace(/,/g, "")),
        0
      );
    });

    const formatPrice = (price) => {
      return parseFloat(price.replace(/,/g, "")).toLocaleString();
    };
    const removeFromCart = (courseId) => {
    cart.items = cart.items.filter(item => item.id !== courseId);
 
};

    return { cart, totalPrice, formatPrice,removeFromCart };
  },
  methods: {
    close() {
      this.$emit("update:modelValue", false);
      this.$emit("checkOverlay");
    },
  },
};
</script>