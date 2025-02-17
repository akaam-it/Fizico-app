<template>
  <div
    class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 dark:dark:bg-slate-800 bg-white pt-4 pb-3.5 sm:py-3 px-4 rounded-xl"
  >
    <svg class="w-10 sm:w-11 h-10 sm:h-11 text-Fizico-color1">
      <use :href="`#${icon}`"></use>
    </svg>
    <div class="space-y-0.5 sm:space-y-1">
      <span
        class="block dark:text-slate-100 text-zinc-800  font-DanaBold text-[1rem] sm:text-base"
        >{{title}}  </span
      >
      <span class="block dark:text-slate-300 text-zinc-700 text-sm opacity-70">
        {{ desc }}
      </span>
    </div>
  </div>
</template>

<script>
import SvgIcons from "../../components/SvgIcons.vue";

export default {
  components: { SvgIcons },
  props: {
    title:String,
    desc:String,
    icon:String

  },
};
</script>
