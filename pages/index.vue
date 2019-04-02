<template>
  <div>
    <img src="/skrecok-lamp.png" class="bg-image lamp">
    <div class="d-none d-sm-block">
      <img src="/skrecok-withbat-left.png" class="bg-image withbat" 
        v-bind:style="{
          left: this.batOffset + 'px',
          width: this.batWidth + 'px',
        }"
      >
      <img src="/skrecok-withbat-right.png" class="bg-image withbat" 
        v-bind:style="{
          right: this.batOffset + 'px',
          width: this.batWidth + 'px',
        }"
      >
      <img src="/skrecok-ball.png" class="bg-image ball"
        v-bind:style="{ 
          left: this.batMargin + 0.5 * this.batWidth + this.ballOffset + 'px',
          width: this.ballWidth + 'px',
          bottom: this.ballBottom + 'px',
        }"
      >
    </div>
    
    <section class="container">
      <div>
        <h1 class="title">
          Skrecok
        </h1>
        <h3 class="subtitle">
          SNG video series
        </h3>
      </div>
    </section>
    
    <section class="container">
      <h2>Videos</h2>
      <ul>
        <li v-for="youtubeVideo in youtubeVideos" class="playlistItem">
          <h3>{{youtubeVideo.title}}</h3>
          <youtube 
            :video-id="youtubeVideo.id" 
            @playing="onPlaying" 
            @paused="onPaused" 
            @ended="onEnded" 
            class="youtube-video" >
          </youtube>
        </li>
      </ul>
    </section>

    <section class="container">
      <h2>About</h2>
    </section>

    <footer class="container">
      Footer Content
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  },
  data () {
    return { 
      youtubeVideos:  [
        {
          id: 'C6NquYD0bg8',
          title: 'Z akadémie do prírody'
        },
        {
          id: 'IdwC8Plxw1M',
          title: 'Detská noc literatúry v Schaubmarovom mlyne'
        },
        {
          id: 'E1lgwn5o2YY',
          title: 'Nové akvizície SNG: Leopold Horovitz'
        },
      ],
      ballOffset: 0,
      ballRange: 0,
      ballWidth: 30,
      ballMargin: 110,
      batWidth: 80,
      batMargin: 10,
      videoPlaying: false,
      videoPaused: false,
    }
  },
  methods: {
    handleScroll () {
      let scrollPosNormalised = window.scrollY / window.innerHeight;
      this.ballOffset = this.zigzag(scrollPosNormalised) * this.ballRange;
    },
    zigzag (x) {
      return Math.acos(Math.cos(x * Math.PI)) / Math.PI;
    },
    onPlaying (event) {
      this.videoPlaying = true;
    },
    onPaused (event) {
      this.videoPlaying = false;
    },
    onEnded (event) {
      this.videoPlaying = false;
    },
  },
  computed: {
    batOffset: function () {
      return this.videoPlaying ? this.batMargin - this.batWidth : this.batMargin;
    },
    ballBottom: function () {
      return this.videoPlaying ? 0 : this.ballMargin;
    },
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
    this.ballRange = window.innerWidth - 2 * (this.batMargin + 0.5 * this.batWidth) - this.ballWidth;
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">
  .container {
    // margin: 4rem auto; 
    text-align: center;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
  .playlistItem {
    margin-bottom: 2rem;
  }
  .bg-image {
    position: absolute;
    z-index: -1;
  }
  .bg-image.lamp {
    top: 0;
    left: 0;
  }
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

  @media (max-width: 991.98px) {
    .youtube-video {
      position: relative;
      padding-bottom: 56.25%;
      // padding-top: 30px;
      height: 0;
      overflow: hidden;
      max-width: 640px;
      margin: auto;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }


</style>
