<template>
  <div
    class="blog flex flex-col bg-white dark:bg-slate-800 overflow-hidden rounded-2xl"
  >
    <router-link :to="data.link" class="block h-45">
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
        class="font-DanaBlack hover:text-Fizico-color1 text-center dark:text-slate-100 text-zinc-800 line-clamp-2 mb-3 transition-all"
      >
        <router-link :to="data.link">{{ data.title }}</router-link>
      </h3>
    </div>
      <div class="mb-4">
        <router-link
          :to="data.link"
          class="flex justify-center gap-x-1 dark:text-slate-100 text-zinc-800 hover:text-Fizico-color1 font-DanaLight transition-colors"
        >
          مشاهده دوره
          <svg class="w-5 h-5">
            <use href="#arrow-left-circle-mini"></use>
          </svg>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
