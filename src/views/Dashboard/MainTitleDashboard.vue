<template>
     <div>
     <h2
      class="relative flex items-end gap-x-3 text-xl lg:text-3xl my-8 font-DanaBlack ps-4">
      <span
        class="absolute right-0 block w-1.5 h-[34px] md:h-10 bg-Fizico-color1 rounded-l-sm"
      ></span>
      {{title}}
    </h2>
     </div>
</template>
<script>
export default {
     props:{
          title:String,

     }
}
</script>