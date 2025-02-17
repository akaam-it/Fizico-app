<template>
  <div class="comments_wrap space-y-4 sm:space-y-5 mt-10">
    <template v-if="comments.length">
      <div
        v-for="(comment, index) in comments"
        :key="index"
        class="p-5 md:p-5 bg-gray-100 dark:bg-Fizico-bg text-zinc-800 dark:text-slate-100 rounded-xl">
        
        <div class="flex items-center justify-between pb-4 mb-4 border-b border-b-neutral-200/60 dark:border-white/10">
          <div class="flex items-center gap-x-3.5">
            <div class="border-Fizico-color2  w-15 h-15 border rounded-full relative">
              <div class="flex items-center justify-center ml-[1px] w-11 sm:w-12 h-11 sm:h-12 bg-gray-100 dark:bg-Fizico-bg/40 rounded-full">
                <svg class="w-12 h-12 text-slate-400">
                  <use href="#user-mini"></use>
                </svg>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <span class="inline-block max-w-40 truncate">{{ username }}</span>
              <span class="font-DanaBlack text-sm opacity-70">{{ comment.date }}</span>
            </div>
          </div>
        </div>
        
        <p class="font-DanaBlack font-normal text-sm sm:text-base break-words">
          {{ comment.text }}
        </p>
      </div>
    </template>
    
    <p v-else class="text-gray-500 text-center Font-DanaLight">هنوز نظری ثبت نشده!  تو اولین نفر باش </p>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      username: 'مهدی مروتی',
    };
  },
};
</script>
