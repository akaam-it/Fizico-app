<template>
  <div
    v-if="modelValue"
    class="transition-[125ms] w-screen h-screen bg-Fizico-cover backdrop-blur-[5px] fixed top-0 right-0 z-[53]"
    @click="closeOverlay"
  ></div>
</template>

<script>
export default {
  props: {
    modelValue: Boolean, 
  },
  methods: {
    closeOverlay() {
      this.$emit("update:modelValue", false); 
      this.$emit("closeAll");
    },
  },
};
</script>


