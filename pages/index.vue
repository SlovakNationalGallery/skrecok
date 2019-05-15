<template>
  <div>
    <img src="/img/skrecok-lamp.png" class="bg-image lamp">
    <PingPong v-bind:videosPlaying="videosPlaying" />
    
    <section class="container my-5 py-5">
      <div class="mt-2">
        <h1 class="my-5 bg-dark text-light tilted d-inline-block px-3 pt-2 pb-1">
          {{pageTitle}}
        </h1>
        <p class="mt-4 bg-light measure mx-auto">{{pageIntro}}</p>
        <a href="#videos" class="button d-inline-block mt-3">{{pageCTA}}</a>
      </div>
    </section>
    
    <div id="videos" class="container">
      <span class="d-inline-block vh-100" v-if="!videosLoaded">Loading...</span>
      <VideoSection
        v-for="(ytPlaylistItem, index) in ytPlaylistItems"
        v-bind:videoId="ytPlaylistItem.snippet.resourceId.videoId"
        v-bind:descriptionText="ytPlaylistItem.descriptionText"
        v-bind:profile="{
          profileName: ytPlaylistItem.profileName,
          profileText: ytPlaylistItem.profileText,
          avatarSrc: ytPlaylistItem.profileData.avatarSrc,
          subtitle: ytPlaylistItem.profileData.subtitle,
          linkSrc: ytPlaylistItem.profileData.linkSrc,
        }"        
        v-bind:last="index == ytPlaylistItems.length - 1"
        v-bind:videosPlaying.sync="videosPlaying"
        v-bind:kiosk="kiosk"
        class="mb-5"
      />
    </div>

    <section v-if="!kiosk" class="container mt-5">
      <h2 class="mb-4 bg-dark text-light tilted d-inline-block px-3 pt-2 pb-1">{{installationTitle}}</h2>
      <img class="w-100 mb-3" src="/img/installation.jpg?v=2">
      <p class="mx-pingpong">{{installationIntro}}</p>
      <a target="_blank" :href="installationURL">Viac info</a>
    </section>

    <footer class="container h-footer mt-5">
      <p v-bind:class='{ disabled: kiosk }' class="text-center text-sm-left small position-block position-sm-absolute bottom-0 mx-pingpong" v-html="footerHTML"></p>
      <img src="/img/skrecok-carrots.png" class="bg-image carrots">
    </footer>
  </div>
</template>

<script>
import PingPong from '~/components/PingPong.vue'
import VideoSection from '~/components/VideoSection.vue'

export default {
  head () {
    return {
      script: [
        { src: 'https://apis.google.com/js/api.js' }
      ]
    }
  },
  components: {
    PingPong, VideoSection
  },
  data () {
    return { 
      pageTitle:         "Profesor Škrečok",
      pageIntro:         "Svet umenia je plný zvláštnych príbehov a pestrých charakterov. Objavuj ich spolu s profesorom Škrečkom, ktorý na staré kolená zistil, že výtvarná výchova predsa len nie je nuda. V sérii krátkych animovaných videí ťa Škrečok postupne zoznámi so slovenskými aj svetovými umeleckými osobnosťami a zašpekuluje si nad ich tvorbou a výtvarným myslením.",
      pageCTA:           "Poďme na to!",
      installationTitle: "Navštív profesora Škrečka",
      installationIntro: "Profesora Škrečka môžeš v nadživotnej veľkosti stretnúť v Slovenskej národnej galérii. Na prvom poschodí Esterházyho paláca v Bratislave nájdeš interaktívnu inštaláciu, v ktorej ťa Škrečok prevedie podivuhodnými dejinami umenia od praveku až po súčasnosť. Animácia, mamuty, hlodavce a loptové hry v jednom. Áno, čítaš správne. Príď sa pozrieť!",
      installationURL: "https://www.sng.sk/sk/vystavy/2295_podivuhodne-dejiny-umenia-s-profesorom-skreckom",
      footerHTML:        "Videá: <a href='https://umeleckestrevo.cz/' target='_blank'>Autorská dvojica Fuczik-Kakalík</a><br>Web: <a href='http://lab.sng.sk/' target='_blank'>lab.SNG</a>",
      kiosk:         false,
      ytAPIKey:          "AIzaSyD18NomcL0M4uAZZiDxkUgwEHre9Lk-KU0",
      ytPlaylistID:      "PLdCkSFojiBUqLrSe_6yF7tJulN4X_Vm9I",
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
    },
    parseQuery(query) {
      this.kiosk = Boolean(query['kiosk']);
    },
  },
  mounted () {
    // init YouTube API client
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
    // parse URL query params
    this.parseQuery(this.$route.query)
  },
}
</script>

<style lang="scss">
  .container {
    text-align: center;
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

  p.mx-pingpong {
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
  .disabled {
    cursor: not-allowed;
  }
  .disabled > a {
    color: currentColor;
    display: inline-block;  /* For IE11/ MS Edge bug */
    pointer-events: none;
    text-decoration: none;
    border-bottom: none;
  }
</style>
