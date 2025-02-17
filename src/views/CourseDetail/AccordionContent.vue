<template>
<div class='space-y-1'>
<div class="space-y-2" v-for="i in STitles" :key='i.id'>
    <div
      class="border border-gray-300/20 rounded-xl dark:text-white overflow-hidden"
    >
      <input type="checkbox" :id="`accordion-${i.id}`" class="peer hidden" />
      <label
        :for="`accordion-${i.id}`"
        class="flex justify-between items-center px-4 py-3 cursor-pointer transition-all dark:bg-slate-800 bg-gray-200 peer-checked:bg-blue-500 peer-checked:text-white"
      >
        <span class="font-DanaBold">{{ i.Stitle }}</span>
        <svg
          class="w-5 h-5 transform transition-transform rotate-180"
        >
          <use href="#chevron"></use>
        </svg>
      </label>
      <div
        v-for="item in episodeItems"
        :key="item.id"
        class="max-h-0 overflow-hidden border-b dark:border-gray-500/20 border-gray-500/30 last:border-none peer-checked:max-h-max transition-all duration-300"
      >
        <div
          class="px-4 pt-3 space-y-3 dark:bg-gray-700/10 bg-gray-200 dark:text-slate-100 text-zinc-800"
        >
          <div
            class="border-b dark:border-gray-500/20 border-gray-500/30 last:border-none pb-3 flex items-start justify-between gap-x-5 gap-y-3 flex-wrap lg:flex-nowrap px-4 group"
          >
            <div class="flex items-center flex-grow gap-x-2.5 md:gap-x-3.5">
              <div
                class="flex justify-center items-end w-7 h-7 text-sm/[25px] font-DanaBlack bg-white dark:bg-white/10 group-hover:bg-Fizico-color1 group-hover:text-white rounded-md"
              >
                {{ item.id }}
              </div>
              <a
                href="#"
                class="inline-block text-[12px] md:text-[15px] group-hover:text-Fizico-color1"
                >{{ item.title }}</a
              >
            </div>
            <div
              class="flex items-end gap-x-2 mr-auto group-hover:text-Fizico-color1"
            >
              <span class="text-sm md:text-base/5 font-light">{{
                item.time
              }}</span>
              <svg class="w-6 h-6">
                <use href="#play-circle"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
const episodeItems = [
  { id: 1, title: "بخش اول", time: "53:00" },
  { id: 2, title: "بخش دوم", time: "45:00" },
  { id: 3, title: "بخش سوم", time: "59:00" },
  { id: 4, title: "بخش چهارم", time: "33:00" },
  { id: 5, title: "بخش پنجم", time: "51:00" },
];
const STitles = [

  {id:1, Stitle:"فصل اول"},
  {id:2, Stitle:"فصل دوم"},
  {id:3, Stitle:"فصل سوم"},
  {id:4, Stitle:"فصل چهارم"},
  {id:5, Stitle:"فصل پنجم"},
  
 
  
 
];
</script>
