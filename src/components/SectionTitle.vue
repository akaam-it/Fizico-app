<template>
        <div :class="readMore?'justify-between':'justify-center'" class="flex items-center  sm:flex-row flex-col md-4 md:mb-8 font-Morabba">
            <div class="flex items-center self-start sm:mb-0 mb-3 gap-x-4">
                <svg class="block w-12 h-12">
                    <use href="#circle-3"></use>
                </svg>
                <h3 class=" dark:text-white text-zinc-800 font-extrabold sm:text-4xl/[3.5rem] text-2xl/8">{{title}}
                </h3>
            </div>
            <div :class="readMore?'':'hidden'" class="self-end">
                <router-link :to="{name: readMoreLink }" class="flex items-center transform group gap-x-1">
                    <span
                        class=" text-zinc-800 group-hover:text-Fizico-color1 dark:text-slate-100 font-DanaBlack font-normal text-sm/6 transition  ">
                        مشاهده همه </span>
                    <span class='text-zinc-800 dark:text-slate-100 group-hover:text-Fizico-color1 transition'>
                        <svg class='w-5 h-5'>
                           <use href='#arrow-up-left-mini'></use>
                        </svg>
                    </span>
                </router-link>
            </div>
        </div>

</template>

<script>
export default {
     props:{
          title: String,
          readMore:Boolean,
          readMoreLink:String
     }
}
</script>