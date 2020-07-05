<template>
  <div class="toasted-bread" v-bind:class="{ 'minimized-toast' : isMinimized }">
    <a
      style="top: 25%; position: relative;"
      href="#"
      v-if="isMinimized"
      id="equalizer"
      @click="isMinimized = false"
    >
      <i class="las la-volume-up"></i>
    </a>
    <div v-if="!isMinimized" class="full-toast-player">
      <a href="#" @click="play()" class="vertical-center" style="display: inline-block;">
        <!-- <i v-if="!this.audio.paused" class="las la-play"></i> -->
        <!-- <i v-if="this.audio.paused" class="las la-pause"></i> -->
        <i class="las la-pause"></i>
      </a>
      <div class="toast-content" style="display: inline-block;">
        <span style="font-size: 11px;">Now Playing</span>
        <br />
        <span>{{ currentTrack ? currentTrack.name : 'Default' }}</span>
      </div>
      <a
        class="vertical-center"
        href="#"
        @click="isMinimized = true"
        style="display: inline-block;"
      >
        <i @click="isMinimized = true" class="las la-compress-arrows-alt"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'toast-player',
  data () {
    return {
      audio: null,
      isMinimized: true
    };
  },
  computed: {
    ...mapGetters({
      playerInfo: 'getPlayerInfo',
      isTimerPlaying: 'getIsTimerPlaying',
      tracks: 'getTracks',
      currentTrack: 'getCurrentTrack',
      currentTrackIndex: 'getCurrentTrackIndex'
    })
  },
  methods: {
    ...mapActions([
      'play',
      'updateBar',
      'pTrack',
      'nTrack',
      'resetPlayer',
      'favorite',
      'initiate',
    ]),
  }
}
</script>

<style lang="scss" scoped>
.toasted-bread {
  border-radius: 0;
  background-color: black;
  color: white;
  width: 240px;
  height: 50px;
  z-index: 180;
  bottom: 1rem;
  position: fixed;
  left: 1rem;
  text-align: center;
  justify-content: center;
  transition: all 0.5 ease-in;
  a {
    color: white;
    i {
      color: white;
    }
  }
  .full-toast-player {
    width: 100%;
  }
}

.minimized-toast {
  width: 50px;

  border-radius: 50%;
}

.equalizer {
  font-size: 0;
  text-align: center;
  padding: 24px;
}
.equalizer-bar {
  transition: transform 150ms linear;
  display: inline-block;
  background: rgba(255, 255, 255, 0.7);
  width: 3px;
  height: 20px;
  border-radius: 1px;
  margin: 0 1px;
  transform: scaleY(0.1);
  transform-origin: center center;
}

.vertical-center {
  position: relative;
  top: -10px;
}

.toast-content {
  width: 182px;
  text-align: left;
  padding-left: 15px;
}
</style>