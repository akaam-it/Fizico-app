<script>
export default {
  props: {
    svgID:String
  },
};
</script>

<template>
  <button class="block group text-Fizico-color1 cursor-pointer ">
    <svg
      class="w-10 h-10 dark:bg-zinc-700/20 bg-Fizico-bg-button-white/20 border border-Fizico-color1/10 rounded-full p-2 lg:group-hover:bg-Fizico-color1 lg:group-hover:text-slate-100  transition-all"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <use :href="`#${svgID}`"></use>
    </svg>
  </button>
</template>


