<template>
    <div class="flex items-center gap-x-4 w-64 col-span-3 ">
            <svg class="size-10 sm:size-12">
            <use :href='`#${icon}`'></use>
               </svg>
            <div class="flex flex-col gap-y-2">
                <span class="text-xs sm:text-sm text-gray-700 dark:text-gray-400">{{title}}</span>
                <span class="text-sm sm:text-base">{{text}} </span>
            </div>
        </div>
</template>

<script>
import SvgIcons from '@/components/SvgIcons.vue'
export default {
     components:{SvgIcons},
     props:{
          title:String,
          text:String,
          icon:String
     }
}
</script>