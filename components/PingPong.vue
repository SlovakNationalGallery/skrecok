<template>
  <div class="d-none d-sm-block">
    <img src="/img/skrecok-withbat-left.png" class="bg-image withbat" 
      v-bind:style="{
        left: this.batOffset + 'px',
        width: this.batWidth + 'px',
      }"
    >
    <img src="/img/skrecok-withbat-right.png" class="bg-image withbat" 
      v-bind:style="{
        right: this.batOffset + 'px',
        width: this.batWidth + 'px',
      }"
    >
    <img src="/img/skrecok-ball.png" class="bg-image ball"
      v-bind:style="{ 
        left: this.batMargin + 0.5 * this.batWidth + this.ballOffset + 'px',
        width: this.ballWidth + 'px',
        bottom: this.ballBottom + 'px',
      }"
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    ballOffset:    0,
    ballRange:     0,
    ballWidth:     30,
    ballMargin:    110,
    batWidth:      80,
    batMargin:     10,
  }),
  props : ['videosPlaying'],
  methods: {
    handleScroll () {
      let scrollPosNormalised = window.scrollY / window.innerHeight;
      this.ballOffset = this.zigzag(scrollPosNormalised) * this.ballRange;
    },
    zigzag (x) {
      return Math.acos(Math.cos(x * Math.PI)) / Math.PI;
    },
  },
  computed: {
    batOffset: function () {
      return this.videosPlaying ? this.batMargin - this.batWidth : this.batMargin;
    },
    ballBottom: function () {
      return this.videosPlaying ? 0 : this.ballMargin;
    },
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
    this.ballRange = window.innerWidth - 2 * (this.batMargin + 0.5 * this.batWidth) - this.ballWidth;
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
  .bg-image.withbat {
    z-index: 2;
    position: fixed;
    bottom: 20px;
    transition: 
      left 0.5s cubic-bezier(.68,-0.55,.27,1.55),
      right 0.5s cubic-bezier(.68,-0.55,.27,1.55);
  }
  .bg-image.ball {
    position: fixed;
    z-index: 1;
    transition: bottom 0.5s cubic-bezier(.68,-0.55,.27,1.55);
  }
</style>
