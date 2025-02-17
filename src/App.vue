<template>
  <div>
    <Loader ref="loader" />

      <router-view :key='$route.path'> </router-view>

  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import './index.css'

export default{
  components:{Loader},
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.$refs.loader.show();
      next();
    });

    this.$router.afterEach(() => {
      setTimeout(() => {
        this.$refs.loader.hide();
      }, 100);
    });
  },
}
</script>