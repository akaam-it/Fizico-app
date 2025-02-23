<template>
     <div
                class="invisible shadow-gray-800 shadow-md z-50 top-7 group-hover:visible group-hover:top-9 transition-all delay-100 absolute -right-3 bg-white dark:bg-gray-900 dark:text-white py-3 px-2 w-[10rem] border-y-2 border-Fizico-color1 rounded-xl space-y-2"
                >

                <router-link
                     v-for='(item,index) in dataR' :key="index"

                  :to="item.link"
                  class="text-center block py-1.5 rounded-xl dark:bg-zinc-700/20 bg-Fizico-bg-button-white/20 border border-Fizico-color1/10   hover:bg-Fizico-color1 hover:text-slate-100  transition-colors"
                >
                  {{item.title}}
                </router-link>
                  <router-link
                     v-for='(item,index) in dataT' :key="index"

                  :to="item.link"
                  class="text-center block py-1.5 rounded-xl dark:bg-zinc-700/20 bg-Fizico-bg-button-white/20 border border-Fizico-color1/10   hover:bg-Fizico-color1 hover:text-slate-100  transition-colors"
                >
                  {{item.title}}
                </router-link>
               
              </div>
</template>


<script>
export default {
  props: {
    dataR:Array,
    dataT:Array,
  },

};
</script>
