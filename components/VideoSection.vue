<template>
  <section>
    <youtube 
      class="youtube-video mb-3"
      :video-id="videoId" 
      :player-vars="{ rel: 0 }"
      @playing="onPlaying" 
      @paused="onPaused" 
      @ended="onEnded" >
    </youtube>
    
    <p class="measure mx-auto mx-pingpong mb-4">{{descriptionText}}</p>

    <ArtistProfile 
      v-bind:inGallery="inGallery"
      v-bind:profile="profile"
    />

    <hr v-if="!last">
  </section>
</template>

<script>
import ArtistProfile from '~/components/ArtistProfile.vue'
export default {
  components: {
    ArtistProfile
  },
  data: () => ({}),
  props : ['videoId', 'descriptionText', 'profile', 'last', 'videosPlaying', 'inGallery'],
  methods: {
    onPlaying (event) {
      this.$emit('update:videosPlaying', true)
    },
    onPaused (event) {
      this.$emit('update:videosPlaying', false)
    },
    onEnded (event) {
      this.$emit('update:videosPlaying', false)
    },
  }
}
</script>

<style scoped lang="scss">
  @media (max-width: 991.98px) {
    .youtube-video {
      position: relative;
      padding-bottom: 56.25%;
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
  hr {
    border-top: 3px dotted black;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
