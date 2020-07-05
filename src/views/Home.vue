<template>
  <div>
    <Tinybox no-thumbs v-model="tinyBoxNewsIndex" :images="tinyBoxNews" />
    <section class="row slider-section">
      <HomeSlider />
      <div class="social-title">
        <div class="social">
          <a v-for="s in socialLinks" :key="s.link" :href="s.link" target="_blank">
            <i :class="s.icon"></i>
          </a>
        </div>
        <div class="title">
          <h1 class="noselect" style="margin-bottom: 0">all over the place</h1>
          <h5>The uncertainty that gives us something to look forward</h5>
          <fancy-btn style="margin-top: 2rem; pointer-events: all;" />
        </div>
      </div>
    </section>
    <section class="about-section">
      <div class="row" style="height:100%">
        <div class="col about-vid-bg">
          <video autoplay muted loop>
            <source src="../assets/videos/hands.mp4" type="video/mp4" />
          </video>
          <div class="vd-overlay noselect">
            <h1>OUR</h1>
            <h1>MU</h1>
            <h1>SIC</h1>
          </div>
        </div>
        <div class="col about-content">
          <div>
            <h3 class="about noselect">about</h3>
          </div>
          <div class="logo3">
            <img src="../assets/aotp-logo-3.png" alt="aotp" />
          </div>

          <div class="about-text">
            <p
              style="margin: 1rem 8rem;"
            >A modern contemporary band from Dumaguete city. The 6 piece band comprises Sam Akins(Vocals), Pablo Punzalan(Guitar), Paolo Victor Ramos(Bass), JC Macahig(Keyboard), Jed Aromin(Drums) and JJ Macahig(Guitar). The band was put together for a battle of the bands competition held in August 2018 at Silliman University. They gained recognition after winning the contest and then got to open up for Rock Band IV Of Spades on their visit to Dumaguete weeks after. They also got to play alongside Ben&Ben for the first ever Sillimusika event in 2019, Parokya Ni Edgar at the annual Buglasan festival in Dumaguete city and Silent Sanctuary during Dumaguete's leg of Coke Studio.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="news" style="height: 50vh">
      <div class="latest-news">
        <div
          v-bind:style="{ backgroundImage: latestNews.thumbnailCSS }"
          class="news-thumb"
          @click="tinyBoxNewsIndex = 0"
        ></div>
        <div class="news-content">
          <p class="sub-text">LATEST NEWS</p>
          <h4>{{ latestNews.title }}</h4>
          <p>{{ latestNews.body }}</p>
          <p>{{ latestNews.date }}</p>
        </div>
      </div>
      <parallax fixed>
        <img src="../assets/cover-photo.png" alt="very cool bg" />
      </parallax>
    </section>
    <section class="extra">
      <div class="row wyt">
        <div class="col-5 player-col">
          <neomorphic-player />
        </div>
        <div class="col">
          <mini-gallery></mini-gallery>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { LatestNews as latestNews, SocialLinks as socialLinks } from "@/data";
import HomeSlider from "@/components/HomeSlider.vue";
import FancyBtn from "@/components/FancyBtn.vue";
import NeomorphicPlayer from "@/components/NeomorphicPlayer.vue";
import MiniGallery from "@/components/MiniGallery.vue";
import Parallax from "vue-parallaxy";
import Tinybox from "vue-tinybox";

export default {
  name: "Home",
  components: {
    HomeSlider,
    FancyBtn,
    NeomorphicPlayer,
    Parallax,
    MiniGallery,
    Tinybox
  },
  data() {
    return {
      tinyBoxNews: [{ src: latestNews.thumbnail, caption: latestNews.title }],
      tinyBoxNewsIndex: null,
      socialLinks,
      latestNews
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
}
.slider-section {
  width: 100%;
  margin: 0;
}
.social-title {
  .social {
    position: absolute;
    z-index: 11;
    bottom: 0;
    left: 0;
    margin: 0 0 8rem 8rem;
    height: 300px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    i {
      font-size: 46px;
      color: white;
      transition: all 0.2s ease-in-out;
    }
    i:hover {
      transform: scale(1.2);
    }
  }
  .title {
    position: absolute;
    right: 0;
    z-index: 13;
    top: calc(80px + 25vh);
    margin-right: 8rem;
    pointer-events: none;
  }
}

.about-vid-bg {
  overflow: hidden;
  position: relative;

  video {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

.vd-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  h1 {
    letter-spacing: 2rem;
    font-family: "Kanit", sans-serif;
    font-size: 10rem;
    line-height: 9rem;
    margin-right: 5rem;
  }
}

h3.about {
  font-weight: bolder;
  font-family: "Questrial", sans-serif;
  font-style: normal;
  letter-spacing: 4px;
  color: #333;
}

.about-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #eef3f7;
}

.logo3 {
  transition: all 0.65s ease;
  width: 232px;
  img {
    width: 100%;
    margin-top: -0.75rem;
    margin-left: -6px;
  }
}

.player-col {
  min-width: 506.5px;
}

.latest-news {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.news-thumb {
  height: 250px;
  width: 250px;
  background-size: cover;
  background-position-x: -81px;
  cursor: pointer;
}

.news-content {
  height: 250px;
  text-align: left;
  width: 700px;
  padding-left: 2rem;
  p {
    color: white;
  }

  .sub-text {
    font-size: 12px;
    margin: 0;
  }

  h4 {
    font-family: "Questrial", sans-serif;
    font-style: normal;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
}

.swiper-container.swiper.swiper-container-initialized {
  background: black;
}

@media only screen and (max-width: 1200px) {
  .social-title {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    .title {
      position: unset;
      width: 100%;
      margin-right: 0 !important;
      top: unset;
      h1 {
        font-size: 12vh;
      }
    }
    .social {
      position: unset;
      z-index: 11;
      height: auto;
      display: flex;
      justify-content: center;
      flex-direction: row;
      top: unset;
      width: 100%;
      margin: 2em 0;
    }
  }
  .about-section {
    .about-vid-bg {
      display: none;
    }
    .about-content {
      .about-text {
        p {
          margin: 0 !important;
          text-align: justify;
        }
      }
    }
  }
  .news {
    height: auto !important;
    display: flex;
    align-items: center;

    .latest-news {
      flex-direction: column;
      padding: 5em 0;
      .news-content {
        height: auto;
        width: 100%;
        padding: 2rem;
      }
    }
  }
  .extra {
    height: auto;
    .row.wyt {
      display: flex;
      flex-direction: column;
      align-items: center;
      .player-col {
        width: 100%;
      }
      .col {
        width: 100%;
        padding-bottom: 5em;
      }
    }
  }
}

@media only screen and (max-width: 760px) {
  .extra {
    display: none;
  }
}
</style>
