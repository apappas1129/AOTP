<template>
  <div class="bgrid-container">
    <div class="at-grid" data-column="3">
      <div
        @mouseenter="hovered = i"
        @mouseleave="hovered = -1"
        v-for="(b, i) in band"
        v-bind:key="i"
        class="at-column"
      >
        <div class="at-user">
          <div class="at-user__avatar">
            <img :src="i == hovered ? b.photo2 : b.photo" />
          </div>
          <div class="at-user__name">{{ b.name }}</div>
          <div class="at-user__title">{{ b.description }}</div>
          <ul class="at-social">
            <li v-if="b.fb" class="at-social__item">
              <a :href="b.fb" target="_blank">
                <i class="lab la-facebook"></i>
              </a>
            </li>
            <li v-if="b.twt" class="at-social__item">
              <a :href="b.twt" target="_blank">
                <i class="lab la-twitter"></i>
              </a>
            </li>
            <li v-if="b.ig" class="at-social__item">
              <a :href="b.ig" target="_blank">
                <i class="lab la-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Band as band } from '@/data';

export default {
  name: 'band-grid',
  data() {
    return {
      band,
      hovered: -1
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
$prefix: at;
$totalColumns: 6;

// Custom Prefix
.#{$prefix} {
  // Section
  &-section {
    &__title {
      margin: 0 0 70px;
      color: #000;
      font-family: 'Roboto', sans-serif;
      font-size: 3.5rem;
      font-weight: 300;
      line-height: 2.625rem;
      text-align: center;
    }
  }

  &-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #fff;
    border: 1px solid #e2e9ed;

    @for $i from 1 through $totalColumns {
      &[data-column='#{$i}'] {
        .#{$prefix}-column {
          width: percentage(1 / $i);
          max-width: percentage(1 / $i);
          // min-width: percentage(1 / $i);
          min-width: 300px;
          flex-basis: percentage(1 / $i);
        }
      }
    }
  }

  &-column {
    z-index: 0;
    position: relative;
    background: #fff;
    box-shadow: 0 0 0 1px #e2e9ed;
    padding: 10px;
    box-sizing: border-box;
    transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0.2s ease;

    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }

    &:hover {
      z-index: 1;
      box-shadow: 0 8px 50px rgba(#000, 0.2);
      transform: scale(1.05);
      transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0s ease;

      .#{$prefix}-social {
        margin: 16px 0 0;
        opacity: 1;
      }
    }

    @media (max-width: 800px) {
      width: 50% !important;
      max-width: 50% !important;
      min-width: 50% !important;
      flex-basis: 50% !important;
    }

    @media (max-width: 600px) {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 100% !important;
      flex-basis: 100% !important;
    }
  }

  &-user {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translate(0, -50%);
    text-align: center;

    &__avatar {
      width: 128px;
      height: 128px;
      border-radius: 100%;
      margin: 0 auto 20px;
      overflow: hidden;

      img {
        display: block;
        width: 100%;
        max-width: 100%;
      }
    }

    &__name {
      color: #313435;
      font-family: 'Roboto', sans-serif;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 2.625rem;
    }

    &__title {
      color: #6f808a;
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 2.375rem;
    }
  }

  &-social {
    margin: 0 0 -18px;
    opacity: 0;
    transition: margin 0.2s ease, opacity 0.2s ease;

    &__item {
      display: inline-block;
      margin: 0 10px;

      a {
        display: block;
      }

      svg {
        fill: #515f65;
        display: block;
        height: 18px;
        transition: fill 0.2s ease;

        &:hover {
          fill: #788d96;
        }
      }
    }
  }
}
.bgrid-container {
  max-width: 1170px;
  margin-top: 1rem;
  padding: 0 20px;
  box-sizing: border-box;
  transform-origin: top center;
  transform: scale(0.8);
}

ul.at-social {
  padding-left: 0;
  i {
    color: #515f65;
    font-size: 2.5rem;
    transition: all 0.2s;
  }
  i.la-facebook:hover {
    transform: scale(1.5);
    color: #3b5998;
  }
  i.la-instagram:hover {
    transform: scale(1.5);
    color: #f77737;
  }
  i.la-twitter:hover {
    transform: scale(1.5);
    color: #00acee;
  }
}
</style>