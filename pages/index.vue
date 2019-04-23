<template>
  <div>
    <img src="/skrecok-lamp.png" class="bg-image lamp">
    <PingPong v-bind:videosPlaying="videosPlaying" />
    
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
      <span v-if="!videosLoaded">Loading...</span>
      <ul>
        <li v-for="ytPlaylistItem in ytPlaylistItems" class="mb-4">
          <div>
            <h3>{{ytPlaylistItem.snippet.title}}</h3>
            <p>{{ytPlaylistItem.descriptionText}}</p>
          </div>
          <div class="row">
            <youtube 
              class="youtube-video col-lg mb-3"
              :video-id="ytPlaylistItem.snippet.resourceId.videoId" 
              :player-vars="{ rel: 0 }"
              @playing="onPlaying" 
              @paused="onPaused" 
              @ended="onEnded" >
            </youtube>
            <div class="col-lg">
              <p>{{ytPlaylistItem.descriptionProfile}}</p>
            </div>
          </div>
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
import PingPong from '~/components/PingPong.vue'

export default {
  head () {
    return {
      script: [
        { src: 'https://apis.google.com/js/api.js' }
      ]
    }
  },
  components: {
    PingPong
  },
  data () {
    return { 
      ytAPIKey:        "AIzaSyD18NomcL0M4uAZZiDxkUgwEHre9Lk-KU0",
      ytPlaylistID:    "PLWlvb2JmqI-RA8NwmUZU9gSXabCaxL5Vb",
      ytPlaylistItemDescriptionSeparator: "---",
      ytPlaylistItems: [],
      videosPlaying:   false,
      videosLoaded:    false,
    }
  },
  methods: {
    onPlaying (event) {
      this.videosPlaying = true;
    },
    onPaused (event) {
      this.videosPlaying = false;
    },
    onEnded (event) {
      this.videosPlaying = false;
    },
    loadYTClient (gapi, ytAPIKey, ytPlaylistID) {
      gapi.client.setApiKey(ytAPIKey);
      return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(
          () => { this.requestYTPlaylistItems(gapi, ytPlaylistID) },
          function(err) { console.error("Error loading GAPI client for API", err); }
        );
    },
    requestYTPlaylistItems (gapi, playlistId) {
      return gapi.client.youtube.playlistItems.list({
        "part": "snippet",
        "playlistId": playlistId
      })
      .then((response) => {
        this.handleYTPlaylistItems(response.result)
      },
      function(err) { console.error("Execute error", err); });
    },
    handleYTPlaylistItems (result) {
      this.ytPlaylistItems = this.parseResult(result);
      this.videosLoaded = true;
    },
    parseResult(result) {
      return result.items.map((item) => {
        return {
          ...item,
          descriptionText:    item.snippet.description.split(this.ytPlaylistItemDescriptionSeparator)[0],
          descriptionProfile: item.snippet.description.split(this.ytPlaylistItemDescriptionSeparator)[1],
        }
      })
    }
  },
  mounted () {
    gapi.load('client', {
      callback: () => {
        this.loadYTClient(gapi, this.ytAPIKey, this.ytPlaylistID);
      },
      onerror: function() {
        console.error('gapi.client failed to load!');
      },
      timeout: 5000, // 5 seconds.
      ontimeout: function() {
        console.error('gapi.client could not load in a timely manner!');
      }
    });
  },
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
  .bg-image {
    position: absolute;
    z-index: -1;
  }
  .bg-image.lamp {
    top: 0;
    left: 0;
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
