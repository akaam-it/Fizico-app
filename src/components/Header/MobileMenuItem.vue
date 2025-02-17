<script>
export default {
  props: {
    svgID: String,
    itemName: String,
    subMenu: Boolean,
    subItems :Array,
    WidthHeight :String
  },
  data() {
    return {
      openSubMenu: false,
    };
  },
  methods: {
    openSubMenuHandler() {
      this.openSubMenu = !this.openSubMenu;
    },
  },
};
</script>

<template>
  <div
    @click="openSubMenuHandler"
    class="text-zinc-800 dark:text-white font-DanaBlack font-light rounded-l"
    :class="{ 'flex items-center justify-between': subMenu }"
  >
    <div>
      <a href="#" class="flex items-start justify-start gap-x-2 font-normal">
        <svg
        :class='`${WidthHeight}`'>
          <use :href="`#${svgID}`"></use>
        </svg>
        {{ itemName }}
      </a>
    </div>
    <div :class="subMenu ? 'block' : 'hidden'">
      <svg class="w-4 h-4 -rotate-90">
        <use href="#chevron"></use>
      </svg>
    </div>
  </div>
  <div
    :class="openSubMenu & subMenu ? 'flex' : 'hidden'"
    class="flex-col items-center justify-center gap-2 font-DanaBlack dark:bg-slate-800 bg-Fizico-bg-button-white p-2 mt-3 rounded-lg flex">
    <a v-for="(item , index) in subItems" :key=index href="#" class="w-full py-1.5 rounded-lg text-center"> {{item}} </a>
    
  </div>
</template>
