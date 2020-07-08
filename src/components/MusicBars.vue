<template>
  <div class="now playing d-flex align-items-end" :class="{paused}">
    <div class="bar n1 float-left"></div>
    <div class="bar n2 float-left"></div>
    <div class="bar n3 float-left"></div>
    <div class="bar n4 float-left"></div>
  </div>
</template>

<script>
export default {
  name: 'music-bars',
  props: {
    paused: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
// Note: change $music-bar-height for resizing

// demo styles
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
}

// bootstrap classes
.d-flex {
  display: flex;
}
.align-items-end {
  align-items: flex-end;
}

// music bars
// -------------------------
$music-bar-height: 30px;
.playing {
  height: $music-bar-height;
  overflow: hidden;
}
.now.playing .bar {
  bottom: 0;
  margin-right:$music-bar-height / 6.25;
  width: $music-bar-height / 4.5;
  height: $music-bar-height;
  background: white;
  animation-name: pulse;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  will-change: transform;
}
.paused.playing .bar {
  animation-iteration-count: 1;
  transform: translateY(#{$music-bar-height - 1px});
}
.n1 {
  animation-delay: 500ms;
}
.n2 {
  animation-delay: 200ms;
}
.n3 {
  animation-delay: 1200ms;
}
.n4 {
  animation-delay: 900ms;
}
@keyframes pulse {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY($music-bar-height * 0.8);
  }
  50% {
    transform: translateY($music-bar-height * 0.4);
  }
  60% {
    transform: translateY($music-bar-height * 0.55);
  }
  80% {
    transform: translateY($music-bar-height * 1.2);
  }
  100% {
    transform: translateY(0);
  }
}
</style>