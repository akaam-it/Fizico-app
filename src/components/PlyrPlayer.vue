<template>
  <div class="video-container rounded-2xl">
    <video  ref="videoPlayer" class="plyr rounded-2xl" :poster="posterSrc" controls>
      <source :src="videoSrc" type="video/mp4"  />
    </video>
  </div>
</template>

<script>
import Plyr from "plyr";
import "plyr/dist/plyr.css";

export default {
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
    posterSrc:{
       type: String,
      required: true,
    }
  },
  mounted() {
    this.player = new Plyr(this.$refs.videoPlayer, {
      settings: ["quality", "speed", "loop"],
    });
  },
  beforeUnmount() {
    if (this.player) {
      this.player.destroy();
    }
  },
};
</script>

<style>
:root {
  --plyr-color-main: #005ae9; 
}

.plyr__progress input[type="range"] {
  color: #005ae9 !important; 
}

.plyr__progress__buffer {
  background: #0059e939 !important; 
}

.plyr {
  border-radius: 1rem;
}
</style>
