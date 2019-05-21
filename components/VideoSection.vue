<template>
  <section>
    <div class="youtube-wrapper mb-3">
      <iframe 
        :id="videoId"
        :src="'https://www.youtube.com/embed/'+videoId+'?modestbranding=1&rel=0&enablejsapi=1'" 
        :sandbox="kiosk ? 'allow-same-origin allow-scripts allow-presentation' : false"
        frameborder="0"
      ></iframe>
    </div>
    
    <p class="measure mx-auto mx-pingpong mb-4">{{descriptionText}}</p>

    <ArtistProfile 
      v-bind:kiosk="kiosk"
      v-bind:profile="profile"
    />

    <hr>
  </section>
</template>

<script>
import ArtistProfile from '~/components/ArtistProfile.vue'
export default {
  components: {
    ArtistProfile
  },
  data: () => ({
    player: undefined,
  }),
  props : ['videoId', 'descriptionText', 'profile', 'videosPlaying', 'kiosk'],
  methods: {
    onPlayerStateChange (event) {
      let playerStatus = event.data;
      if (playerStatus == 0) { // ended
        this.$emit('update:videosPlaying', false)
      } else if (playerStatus == 1) { // playing
        this.$emit('update:videosPlaying', true)
      } else if (playerStatus == 2) { // paused
        this.$emit('update:videosPlaying', false)
      } 
    },
  },
  mounted () {
    this.player = new YT.Player(this.videoId, {
        events: {
          'onStateChange': this.onPlayerStateChange
        }
    });
  },
}
</script>

<style scoped lang="scss">
  .youtube-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    margin: auto;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  hr {
    border-top: 3px dotted black;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
</style>
