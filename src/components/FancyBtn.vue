<template>
  <a href="https://open.spotify.com/artist/7buRLbM7otQjCWKwt7eDNZ" target="_blank">
    <div class="btn" style="position: relative">
      <svg style="position:absolute">
        <rect x="0" y="0" fill="none" width="164" height="43" />
      </svg>
      <span class="fancy-btn-label">{{ label || 'Discover' }}</span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'fancy-btn',
  props: ['label']
}
</script>

<style lang="css">
.btn {
  position: relative;
  display: inline-block;
  width: 166px;
  height: 45px;
  font-size: 14px;
  line-height: 45px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
}

.btn svg {
  position: absolute;
  top: 0;
  left: 0;
}

.btn svg rect {
  stroke: #ffffff;
  stroke-width: 6;
  stroke-dasharray: 422, 0;
  stroke-dashoffset: 0;
  -webkit-transition: all 900ms cubic-bezier(0.19, 1, 0.22, 1);
  -moz-transition: all 900ms cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 900ms cubic-bezier(0.19, 1, 0.22, 1);
}

.btn:hover svg rect {
  stroke-dasharray: 110, 312;
  stroke-dashoffset: 183;
}

.fancy-btn-label {
  color: white;
  display: inline-block;
  padding-top: 3px;
  font-family: 'Questrial', sans-serif;
  font-style: normal;
  font-size: 18px;
}
</style>