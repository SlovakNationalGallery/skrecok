<template>
  <div>
    <img src="/img/skrecok-lamp.png" class="bg-image lamp">
    <PingPong v-bind:videosPlaying="videosPlaying" />
    
    <section class="container my-5 py-5">
      <div>
        <h1 class="title my-5">
          Profesor Škrečok
        </h1>
      </div>
    </section>
    
    <section class="container">
      <span v-if="!videosLoaded">Loading...</span>
      <ul>
        <li v-for="ytPlaylistItem in ytPlaylistItems" class="mb-4">

            <youtube 
              class="youtube-video mb-3"
              :video-id="ytPlaylistItem.snippet.resourceId.videoId" 
              :player-vars="{ rel: 0 }"
              @playing="onPlaying" 
              @paused="onPaused" 
              @ended="onEnded" >
            </youtube>
            
            <p class="measure mx-auto">{{ytPlaylistItem.descriptionText}}</p>

            <ArtistProfile v-bind:ytPlaylistItem="ytPlaylistItem"/>
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
import ArtistProfile from '~/components/ArtistProfile.vue'

export default {
  head () {
    return {
      script: [
        { src: 'https://apis.google.com/js/api.js' }
      ]
    }
  },
  components: {
    PingPong, ArtistProfile
  },
  data () {
    return { 
      ytAPIKey:        "AIzaSyD18NomcL0M4uAZZiDxkUgwEHre9Lk-KU0",
      ytPlaylistID:    "PLWlvb2JmqI-RA8NwmUZU9gSXabCaxL5Vb",
      ytPlaylistItemDescriptionSeparator: "---",
      ytPlaylistItemTitleSeparator: " – ",
      ytPlaylistItems: [],
      videosPlaying:   false,
      videosLoaded:    false,
      profiles: {
        'Intro': {
          subtitle: '✸ 2019, Bratislava',
          avatarSrc: '/img/avatar-skrecok.png',
          linkSrc: '',
        },
        'Július Koller': {
          subtitle: '✸ 1939, Piešťany <br> ✝ 2007, Bratislava',
          avatarSrc: '/img/avatar-koller.png',
          linkSrc: 'https://www.webumenia.sk/autor/5089',
        },
        'Anna Daučíková': {
            subtitle: '✸ 1950, Bratislava',
            avatarSrc: 'img/avatar-daucikova.png',
            linkSrc: 'http://artbase.kunsthallebratislava.sk/umelec/1918',
        },
        'Štefan Papčo': {
            subtitle: '✸ 1983, Ružomberok',
            avatarSrc: 'img/avatar-papco.png',
            linkSrc: 'http://artbase.kunsthallebratislava.sk/umelec/1004610',
        },
        'Roman Ondak': {
            subtitle: '✸ 1966, Žilina',
            avatarSrc: 'img/avatar-ondak.png',
            linkSrc: 'http://artbase.kunsthallebratislava.sk/umelec/7446',
        },
        'Vladimír Dedeček': {
            subtitle: '✸ 1929, Martin',
            avatarSrc: 'img/avatar-dedecek.png',
            linkSrc: 'https://www.webumenia.sk/en/autor/1052763',
        },
        'Peter Kalmus': {
            subtitle: '✸ 1953, Piešťany',
            avatarSrc: 'avatar-kalmus.png',
            linkSrc: 'https://www.webumenia.sk/autor/4684',
        },
        'Maria Bartuszová': {
            subtitle: '✸ 1936, Praha <br> ✝ 1996, Košice',
            avatarSrc: 'avatar-bartuszova.png',
            linkSrc: 'https://www.webumenia.sk/autor/513',
        },
        'default': {
          subtitle: '',
          avatarSrc: '',
          linkSrc: '',
        },
      },
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
        let [descriptionText, profileText] = item.snippet.description.split(this.ytPlaylistItemDescriptionSeparator);
        let [_, profileName] = item.snippet.title.split(this.ytPlaylistItemTitleSeparator);
        let profileData = this.profiles[profileName] || this.profiles['default'];
        
        return {
          ...item,
          descriptionText: descriptionText,
          profileText: profileText,
          profileName: profileName,
          profileData: profileData,
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

  .measure {
    max-width: 32em;
  }
</style>
