<template>
  <div
    id="top"
    @mousemove="onActive"
    @mousedown="onActive"
    @scroll="onActive"
    @touchstart="onActive"
  >
    <div class="bg-dots top-0"></div>
    <div class="bg-dots-fadedown top-1"></div>
    <img src="/img/skrecok-lamp.png" class="bg-image lamp" />
    <PingPong v-bind:videosPlaying="videosPlaying" />

    <section class="container my-5 py-5">
      <div class="mt-2">
        <h1
          class="my-5 bg-dark text-light tilted d-inline-block px-3 pt-2 pb-1"
        >
          {{ pageTitle }}
        </h1>
        <p class="mt-4 bg-light measure mx-auto">{{ pageIntro }}</p>
        <Button
          v-bind:text="pageCTA"
          v-bind:href="'#videos'"
          class="mt-3 lead anim-pulse"
        />
        <SocialSharing
          v-if="!kiosk"
          v-bind:paragraph-sm="socialSharing.paragraphSm"
          v-bind:facebook="socialSharing.facebook"
          v-bind:twitter="socialSharing.twitter"
          v-bind:email="socialSharing.email"
        />
      </div>
    </section>

    <div id="videos" class="container">
      <div class="d-inline-block vh-100" v-if="!videosLoaded">
        <div>videá sú na ceste...</div>
        <img src="/img/skrecok-loop.gif" />
      </div>
      <VideoSection
        v-for="(ytPlaylistItem, index) in ytPlaylistItems"
        v-bind:key="index"
        v-bind:index="index"
        v-bind:lastIndex="ytPlaylistItems.length - 1"
        v-bind:videoId="ytPlaylistItem.snippet.resourceId.videoId"
        v-bind:descriptionText="ytPlaylistItem.descriptionText"
        v-bind:worklist="worklist"
        v-bind:profile="{
          profileText: ytPlaylistItem.profileText,
          avatarSrc: ytPlaylistItem.profileData.avatarSrc,
          title: ytPlaylistItem.profileData.title,
          subtitle: ytPlaylistItem.profileData.subtitle,
          linkSrc: ytPlaylistItem.profileData.linkSrc,
          workListImg: ytPlaylistItem.profileData.workListImg,
          workList: ytPlaylistItem.profileData.workList
        }"
        v-bind:videosPlaying.sync="videosPlaying"
        v-bind:kiosk="kiosk"
      />
      <p class="measure mx-auto mx-pingpong lead">Ďalší diel čoskoro...</p>
    </div>

    <SocialSharing
      v-if="!kiosk"
      v-bind:paragraph="socialSharing.paragraph"
      v-bind:paragraph-sm="socialSharing.paragraphSm"
      v-bind:facebook="socialSharing.facebook"
      v-bind:twitter="socialSharing.twitter"
      v-bind:email="socialSharing.email"
    />

    <div class="text-center">
      <Button v-bind:text="backToTop" v-bind:href="'#top'" class="mt-4" />
    </div>

    <section v-if="!kiosk" class="container mt-7">
      <h2 class="mb-5 bg-dark text-light tilted d-inline-block px-3 pt-2 pb-1">
        {{ installationTitle }}
      </h2>
      <img class="w-100 mb-3" src="/img/installation.jpg?v=2" />
      <p class="mx-pingpong mx-auto measure bg-light p-2 mb-0">
        {{ installationIntro }}
      </p>
      <div class="d-inline-block bg-light p-3">
        <a target="_blank" :href="installationURL" class="lead">Viac info</a>
      </div>
      <div>
        <Button v-bind:text="backToTop" v-bind:href="'#top'" class="mt-5" />
      </div>
    </section>

    <footer class="container h-footer mt-5">
      <p
        v-bind:class="{ disabled: kiosk }"
        class="text-center text-sm-left position-block position-sm-absolute bottom-0 mx-pingpong bg-light p-3 p-md-4"
        v-html="footerHTML"
      ></p>
      <img src="/img/skrecok-carrots.png" class="bg-image carrots" />
    </footer>
    <div class="bg-dots-fadedown flip-vertical bottom-1"></div>
    <div class="bg-dots bottom-0"></div>
  </div>
</template>

<script>
import { state } from "vuex";
import BasicPage from "../components/BasicPage.vue";

export default {
  head() {
    return {
      script: [{ src: "https://apis.google.com/js/api.js" }]
    };
  },
  mixins: [BasicPage],
  computed: {
    profiles() {
      return this.$store.state.profiles;
    }
  },

  methods: {
    loadYTClient(gapi, ytAPIKey, ytPlaylistID) {
      gapi.client.setApiKey(ytAPIKey);
      return gapi.client
        .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(
          () => {
            this.requestYTPlaylistItems(gapi, ytPlaylistID);
          },
          function(err) {
            console.error("Error loading GAPI client for API", err);
          }
        );
    },
    requestYTPlaylistItems(gapi, playlistId) {
      return gapi.client.youtube.playlistItems
        .list({
          part: "snippet",
          playlistId: playlistId,
          maxResults: 20
        })
        .then(
          response => {
            this.handleYTPlaylistItems(response.result);
          },
          function(err) {
            console.error("Execute error", err);
          }
        );
    },
    handleYTPlaylistItems(result) {
      this.ytPlaylistItems = this.parseResult(result);
      this.videosLoaded = true;
    },
    parseResult(result) {
      return result.items.map(item => {
        let [descriptionText, profileText] = item.snippet.description.split(
          this.ytPlaylistItemDescriptionSeparator
        );
        let [_, profileKey] = item.snippet.title.split(
          this.ytPlaylistItemTitleSeparator
        );
        let profileData = this.profiles[profileKey] || this.profiles["default"];

        return {
          ...item,
          descriptionText: descriptionText,
          profileText: profileText,
          profileData: profileData
        };
      });
    },
    loadYTIframeAPI() {
      var tag = document.createElement("script");
      tag.id = "iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    },

    initGapi() {
      // init YouTube API client
      if (!this.videosLoaded)
        gapi.load("client", {
          callback: () => {
            this.loadYTClient(gapi, this.ytAPIKey, this.ytPlaylistID);
          },
          onerror: function() {
            console.error("gapi.client failed to load!");
          },
          timeout: 5000, // 5 seconds.
          ontimeout: function() {
            console.error("gapi.client could not load in a timely manner!");
          }
        });
    },
    loadYTIframeAPI() {
      var tag = document.createElement("script");
      tag.id = "iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  },
  mounted() {
    this.initGapi();
    // load YouTube iframe API
    this.loadYTIframeAPI();
    // parse URL query params
    this.parseQuery(this.$route.query);
    // start idleTimer countdown
    this.resetIdleTimer();
  }
};
</script>
