<template>
  <div class=" px-5 font-DanaLight fixed  z-[60] top-[2rem] md:top-[3rem] transition-all -left-full ease duration-300 "
  :class="visible? 'left-[0.25rem]  md:left-[1rem]':''"
  >
  
    <div
      role="alert"
      class="  border-l-4 px-5 py-3 rounded-lg flex items-start gap-x-2 transition duration-300 ease-in-out transform "
      :class="type ? 'bg-green-100 dark:bg-green-900  border-green-500 dark:border-green-700 text-green-900 dark:text-green-100':'bg-red-100 dark:bg-red-900 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100'"
    >
      <svg
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        class="w-5 h-5 md:h-6  md:w-6 flex-shrink-0"
        :class="type?'text-green-600':'text-red-600'"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>


      <p class=" text-[12px]/6 lg:text-[18px] dark:text-white"
      :class="type ? 'text-green-700':'text-red-700'">{{text}}</p>
    </div>
  </div>
  
</template>

<script>
    export default {
      props:{
      text:String,
      type:Boolean,
      },
      data() {
        return {
          visible:false
        }
      },
      methods: {
        showNotifHandler(){
          this.visible=true
          setTimeout(() => {
            this.visible= false

          }, 4000);
        }
      },
      
    };
  </script>