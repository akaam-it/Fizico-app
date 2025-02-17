<template>
  <div
    class="blog flex flex-col bg-white dark:bg-slate-800 overflow-hidden rounded-2xl"
  >
    <router-link :to="{ name: data.link }" class="block h-45">
      <img
        :src="data.image"
        class="block size-full hover:scale-105 transition-all rounded-t-2xl object-cover"
        :alt="data.title"
        :title="data.title"
        loading="lazy"
      />
    </router-link>
    <div class="flex-grow px-5 py-4">
      <h3
        class="font-DanaBlack dark:text-slate-100 text-zinc-800 line-clamp-1 mb-3"
      >
        <router-link :to="{ name: data.link } ">{{ data.title }}</router-link>
      </h3>
      <p
        class="text-sm line-clamp-3 dark:text-slate-300 text-zinc-700 opacity-80"
      >
        {{ data.summary }}
      </p>
    </div>
    <div class="px-5 pb-5">
      <div
        class="flex justify-between items-center dark:text-slate-100 text-zinc-800 text-sm pb-4 border-b dark:border-gray-500/10 border-gray-500/30"
      >
        <span>{{ data.author }}</span>
        <span>{{ data.date }}</span>
      </div>
      <div class="mt-4">
        <router-link
          :to="{ name: data.link }"
          class="flex justify-center gap-x-1 dark:text-slate-100 text-zinc-800 hover:text-Fizico-color1 font-DanaLight transition-colors"
        >
          مطالعه مقاله
          <svg class="w-5 h-5">
            <use href="#arrow-left-circle-mini"></use>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";
export default {
  components: { SectionTitle },
  props: {
    data: {
      type: Object,
            required: true,

    },
  },
};
</script>
