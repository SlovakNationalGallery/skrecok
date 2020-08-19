<template>
  <section :id="'video-' + index" class="mb-5 pt-4">
    <div class="youtube-wrapper">
      <iframe
        :id="videoId"
        :src="
          'https://www.youtube.com/embed/' +
            videoId +
            '?modestbranding=1&rel=0&enablejsapi=1&origin=https://skrecok.sng.sk'
        "
        :sandbox="
          kiosk ? 'allow-same-origin allow-scripts allow-presentation' : false
        "
        frameborder="0"
      ></iframe>
    </div>

    <div class="my-4 my-md-5">
      <Button
        v-if="prevIndex !== undefined"
        v-bind:text="'predošlé video'"
        v-bind:href="'#video-' + prevIndex"
        class="m-2"
      />
      <Button
        v-if="nextIndex !== undefined"
        v-bind:text="'ďalšie video'"
        v-bind:href="'#video-' + nextIndex"
        class="m-2"
      />
    </div>

    <p class="measure mx-auto mx-pingpong mb-4">{{ descriptionText }}</p>

    <ArtistProfile v-bind:kiosk="kiosk" v-bind:profile="profile" />

    <nuxt-link
      v-if="profile.workList"
      :to="profile.workList + (kiosk? '?kiosk=1':'')"
      class="worklist button d-inline-block"
    >
      <img
        src="/img/skrecok_skrabkajuci.gif"
        class="worklist-img d-inline-block"
      />
      <span>{{ worklist }}</span>
    </nuxt-link>

    <hr />
  </section>
</template>

<script>
import Button from "~/components/Button.vue";
import ArtistProfile from "~/components/ArtistProfile.vue";
export default {
  components: {
    ArtistProfile,
    Button
  },
  data: () => ({
    player: undefined
  }),
  props: [
    "index",
    "lastIndex",
    "videoId",
    "descriptionText",
    "profile",
    "videosPlaying",
    "kiosk",
    "worklist"
  ],
  computed: {
    nextIndex: function() {
      return this.index !== this.lastIndex ? this.index + 1 : undefined;
    },
    prevIndex: function() {
      return this.index !== 0 ? this.index - 1 : undefined;
    }
  },
  methods: {
    onPlayerStateChange(event) {
      let playerStatus = event.data;
      if (playerStatus == 0) {
        // ended
        this.$emit("update:videosPlaying", false);
      } else if (playerStatus == 1) {
        // playing
        this.$emit("update:videosPlaying", true);
      } else if (playerStatus == 2) {
        // paused
        this.$emit("update:videosPlaying", false);
      }
    }
  },
  mounted() {
    this.player = new YT.Player(this.videoId, {
      events: {
        onStateChange: this.onPlayerStateChange
      }
    });
  }
};
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

.worklist-img {
  align-items: center;
  margin: 0 -0.5em -0.5em 0;
  display: block;
  width: 50px;
  @media (min-width: 768px) {
    width: 75px;
  }
}

.worklist.button {
  margin-top: 1em;
  border: none;

  span {
    vertical-align: bottom;
  }

  &:hover span {
    border-bottom: 1px solid #000;
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
