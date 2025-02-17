<script>
export default {
  props: {
    targetNumber: Number,
    duration: Number,
    icon:String,
    desc:String,
    color:String,
    speed:Number
  },
  data() {
    return {
      counter: 0,
     
    };
  },
  mounted() {
    this.startCounting();
  },
  methods: {
    startCounting() {
      let current = 1;
      let stepTime = Math.max(this.duration / this.targetNumber, 10);

      let interval = setInterval(() => {
        current = current + this.speed;
        this.counter = current;

        if (current >= this.targetNumber) {
          clearInterval(interval);
        }
      }, stepTime);
    },
  },
};
</script>

<template>
  <div   class="flex flex-col items-center justify-between gap-y-1 text-sm lg:text-md">
    <div>
      <svg class="w-16 h-16" :class='`text-${color}`'>
        <use :href="`#${icon}`"></use>
      </svg>
    </div>
    <div>
      <h3 class="font-semibold flex mt-1 text-xl">
      {{ counter }}
      </h3>
    </div>
    <div class="text-center">{{desc}} </div>
  </div>
</template>
