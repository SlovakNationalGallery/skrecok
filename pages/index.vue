<template>
  <div>
    <img src="/img/skrecok-lamp.png" class="bg-image lamp">
    <PingPong v-bind:videosPlaying="videosPlaying" />
    
    <section class="container my-5 py-5">
      <div>
        <h1 class="my-5 bg-dark text-light tilted d-inline-block px-3 pt-2 pb-1">
          {{pageTitle}}
        </h1>
        <p class="bg-light">{{pageIntro}}</p>
        <a href="#videos" class="button">{{pageCTA}}</a>
      </div>
    </section>
    
    <section class="container">
      <span class="d-inline-block vh-100" v-if="!videosLoaded">Loading...</span>
      <ul id="videos">
        <li v-for="ytPlaylistItem in ytPlaylistItems" class="mb-5">

            <youtube 
              class="youtube-video mb-3"
              :video-id="ytPlaylistItem.snippet.resourceId.videoId" 
              :player-vars="{ rel: 0 }"
              @playing="onPlaying" 
              @paused="onPaused" 
              @ended="onEnded" >
            </youtube>
            
            <p class="description measure mx-auto mb-4">{{ytPlaylistItem.descriptionText}}</p>

            <ArtistProfile v-bind:ytPlaylistItem="ytPlaylistItem"/>
            <hr>
        </li>
      </ul>
    </section>

    <section class="container mt-5">
      <h2 class="mb-4 bg-dark text-light tilted d-inline-block px-3 pt-2 pb-1">{{installationTitle}}</h2>
      <img class="w-100 mb-3" src="/img/installation.jpg">
      <p>{{installationIntro}}</p>
      <a target="_blank" :href="installationURL">Viac info</a>
    </section>

    <footer class="container h-footer mt-5">
      <p class="text-center text-sm-left small position-block position-sm-absolute bottom-0" v-html="footerHTML"></p>
      <img src="/img/skrecok-carrots.png" class="bg-image carrots">
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
      pageTitle:         "Profesor Škrečok",
      pageIntro:         "Svet umenia je plný zvláštnych príbehov a pestrých charakterov. Objavujte ich spolu s profesorom škrečkom, ktorý na staré kolená zistil, že výtvarná výchova predsa len nie je nuda. V sérii krátkych videí sa škrečok postupne zoznámi so slovenskými aj svetovými umeleckými osobnosťami, a zašpekuluje si nad ich tvorbou a výtvarným myslením.",
      pageCTA:           "Poďme na to!",
      installationTitle: "Navštívte Profesora Škrečka",
      installationIntro: "Profesora škrečka môžete stretnúť aj v interaktívnej inštalácii na prvom poschodí Esterházyho paláca v Bratislave. Prevedie vás podivuhodnými dejinami umenia s pomocou animácie a loptových hier. Áno, všetko je možné!",
      installationURL: "https://www.sng.sk/sk/vystavy/2158_krajina-za-mapou",
      footerHTML:        "Videá: <a href='https://umeleckestrevo.cz/'>Autorská dvojica Fuczik-Kakalík</a><br>Web: <a href='http://lab.sng.sk/'>lab.SNG</a>",
      ytAPIKey:          "AIzaSyD18NomcL0M4uAZZiDxkUgwEHre9Lk-KU0",
      ytPlaylistID:      "PLWlvb2JmqI-RA8NwmUZU9gSXabCaxL5Vb",
      ytPlaylistItemDescriptionSeparator: "---",
      ytPlaylistItemTitleSeparator: " – ",
      ytPlaylistItems:   [],
      videosPlaying:     false,
      videosLoaded:      false,
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
  .bg-image.carrots {
    width: 100%;
    max-width: 829px;
    right: 0;

    @media (min-width: 576px) {
      width: 50%;
    }
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

  a {
    color: #000;
    border-bottom: 1px solid #000;
    text-decoration: none;
  }
  a:hover {
    color: #000;
    border-bottom: none;
    text-decoration: none;
  }

  p.description {
    // add horizontal margin for ping pong hamsters
    @media (min-width: 768px) {
      margin-left: 3rem;
      margin-right: 3rem;
    }
    @media (min-width: 1300px) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .measure {
    max-width: 32em;
  }
  .bg-dark {
    background-color: #000 !important;
  }
  .bg-light {
    background-color: #F3E2BE !important;
  }
  .text-light {
    color: #F3E2BE !important;
  }
  .tilted {
    transform: rotate(-3deg);
  }
  .button {
    border: solid 2px #000;
    padding: 0.5rem;
    box-shadow: 4px 4px #000;
  }
  .button:hover {
    border: solid 2px #000;
    box-shadow: 2px 2px #000;
  }
  .button:active {
    box-shadow: 0px 0px #000;
  }

  .h-footer {
    height: calc(50vw * 0.59);
  }

  .position-sm-absolute {
    @media (min-width: 576px) {
      position: absolute;
    }
  }

  .bottom-0 {
    bottom: 0;
  }

  hr {
    border-top: 3px dotted black;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
