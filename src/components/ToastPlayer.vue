<template>
  <div class="toasted-bread" v-bind:class="{ 'minimized-toast' : isMinimized }">
    <a
      href="#"
      v-if="isMinimized"
      id="equalizer"
      @click="($event) => { $event.preventDefault(); isMinimized = false; }"
    >
      <i class="muted las la-volume-mute" v-bind:class="{ transparent: isTimerPlaying }"></i>
      <music-bars id="bars" v-bind:class="{ transparent: !isTimerPlaying }"></music-bars>
    </a>
    <div v-if="!isMinimized" class="full-toast-player">
      <table>
        <tr style="height: 4.3rem;">
          <td style="vertical-align: bottom">
            <a
              href="#"
              @click="($event) => $event.preventDefault() || play()"
              class="vertical-center"
              style="display: inline-block;"
            >
              <i v-if="!isTimerPlaying" class="las la-play"></i>
              <i v-if="isTimerPlaying" class="las la-pause"></i>
            </a>
          </td>
          <td>
            <div class="toast-content" style="display: inline-block;">
              <span>Now Playing</span>
              <br />
              <span class="current-track">{{ currentTrack ? currentTrack.name : 'Default' }}</span>
            </div>
          </td>
          <td style="vertical-align: bottom">
            <a
              class="vertical-center"
              href="#"
              @click="($event) => { $event.preventDefault(); isMinimized = true; }"
              style="display: inline-block;"
            >
              <i @click="isMinimized = true" class="las la-compress-arrows-alt"></i>
            </a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MusicBars from '@/components/MusicBars.vue';

export default {
  name: 'toast-player',
  components: {
    MusicBars
  },
  data() {
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
      'initiate'
    ])
  }
};
</script>

<style lang="scss" scoped>
.current-track {
  position: relative;
  top: -2px;
}

#bars {
  opacity: 1;
  transition: all 0.5s ease-in;
}

.transparent {
  opacity: 0 !important;
}

.toasted-bread {
  border-radius: 0;
  background-color: transparent;
  color: #666666;
  width: 270px;
  z-index: 2000;
  bottom: 1rem;
  position: fixed;
  left: 1rem;
  text-align: center;
  justify-content: center;
  transition: all 0.12s ease-in;
  a {
    color: #666666;
  }
  .full-toast-player {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    overflow: hidden;
    padding-left: 8px;
    width: 100%;
    background-color: black;
    color: white;
    a {
      font-size: 2rem;

      color: white;
    }
  }

  .muted {
    color: white;
    font-size: 2rem;
  }
}

.minimized-toast {
  width: 64.4px;
  border-radius: 50%;
  transition: all 0.3s ease-in;
  background-color: transparent;
}

.minimized-toast:hover {
  background-color: black;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.now.playing {
  position: relative;
  bottom: 36px;
  left: 10px;
}

a#equalizer {
  top: 16px;
  position: relative;
  right: -2px;
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