<template>
  <div id="top" @mousemove="onActive" @mousedown="onActive" @scroll="onActive" @touchstart="onActive">
    <div class="bg-dots top-0"></div>
    <div class="bg-dots-fadedown top-1"></div>
    <img src="/img/skrecok-lamp.png" class="bg-image lamp">
    <PingPong v-bind:videosPlaying="videosPlaying" />

    <section class="container my-5 py-5">
      <div class="mt-2">
        <h1 class="my-5 bg-dark text-light tilted d-inline-block px-3 pt-2 pb-1">
          {{pageTitle}}
        </h1>
        <p class="mt-4 bg-light measure mx-auto">{{pageIntro}}</p>
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
        <img src="/img/skrecok-loop.gif">
      </div>
      <VideoSection
        v-for="(ytPlaylistItem, index) in ytPlaylistItems"
        v-bind:key="index"
        v-bind:index="index"
        v-bind:lastIndex="ytPlaylistItems.length - 1"
        v-bind:videoId="ytPlaylistItem.snippet.resourceId.videoId"
        v-bind:descriptionText="ytPlaylistItem.descriptionText"
        v-bind:profile="{
          profileText: ytPlaylistItem.profileText,
          avatarSrc: ytPlaylistItem.profileData.avatarSrc,
          title: ytPlaylistItem.profileData.title,
          subtitle: ytPlaylistItem.profileData.subtitle,
          linkSrc: ytPlaylistItem.profileData.linkSrc,
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
      <Button
        v-bind:text="backToTop"
        v-bind:href="'#top'"
        class="mt-4"
      />
    </div>

    <section v-if="!kiosk" class="container mt-7">
      <h2 class="mb-5 bg-dark text-light tilted d-inline-block px-3 pt-2 pb-1">{{installationTitle}}</h2>
      <img class="w-100 mb-3" src="/img/installation.jpg?v=2">
      <p class="mx-pingpong mx-auto measure bg-light p-2 mb-0">{{installationIntro}}</p>
      <div class="d-inline-block bg-light p-3">
        <a target="_blank" :href="installationURL" class="lead">Viac info</a>
      </div>
      <div>
        <Button
          v-bind:text="backToTop"
          v-bind:href="'#top'"
          class="mt-5"
        />
      </div>
    </section>

    <footer class="container h-footer mt-5">
      <p v-bind:class='{ disabled: kiosk }' class="text-center text-sm-left position-block position-sm-absolute bottom-0 mx-pingpong bg-light p-3 p-md-4" v-html="footerHTML"></p>
      <img src="/img/skrecok-carrots.png" class="bg-image carrots">
    </footer>
    <div class="bg-dots-fadedown flip-vertical bottom-1"></div>
    <div class="bg-dots bottom-0"></div>
  </div>
</template>

<script>
import Button from '~/components/Button.vue'
import PingPong from '~/components/PingPong.vue'
import VideoSection from '~/components/VideoSection.vue'
import SocialSharing from '~/components/SocialSharing.vue'

export default {
  head () {
    return {
      script: [
        { src: 'https://apis.google.com/js/api.js' }
      ]
    }
  },
  components: {
    PingPong, VideoSection, Button, SocialSharing
  },
  data () {
    return {
      pageTitle:         "Profesor Škrečok",
      pageIntro:         "Svet umenia je plný zvláštnych príbehov a pestrých charakterov. Objavuj ich spolu s profesorom Škrečkom, ktorý na staré kolená zistil, že výtvarná výchova predsa len nie je nuda. V sérii krátkych animovaných videí ťa Škrečok postupne zoznámi so slovenskými aj svetovými umeleckými osobnosťami a zašpekuluje si nad ich tvorbou a výtvarným myslením.",
      pageCTA:           "Poďme na to!",
      backToTop:         "naspäť na začiatok",
      installationTitle: "Navštív profesora Škrečka",
      installationIntro: "Profesora Škrečka môžeš v nadživotnej veľkosti stretnúť v Slovenskej národnej galérii. Na prvom poschodí Esterházyho paláca v Bratislave nájdeš interaktívnu inštaláciu, v ktorej ťa Škrečok prevedie podivuhodnými dejinami umenia od praveku až po súčasnosť. Animácia, mamuty, hlodavce a loptové hry v jednom. Áno, čítaš správne. Príď sa pozrieť!",
      installationURL: "https://www.sng.sk/sk/vystavy/2295_podivuhodne-dejiny-umenia-s-profesorom-skreckom",
      footerHTML:        "Videá: <a href='https://umeleckestrevo.cz/' target='_blank'>Autorská dvojica Fuczik-Kakalík</a><br>Web: <a href='http://lab.sng.sk/' target='_blank'>lab.SNG</a>",
      kiosk:             false,
      ytAPIKey:          "AIzaSyD18NomcL0M4uAZZiDxkUgwEHre9Lk-KU0",
      ytPlaylistID:      "PLdCkSFojiBUqLrSe_6yF7tJulN4X_Vm9I",
      ytPlaylistItemDescriptionSeparator: "---",
      ytPlaylistItemTitleSeparator: " – ",
      ytPlaylistItems:   [],
      videosPlaying:     false,
      videosLoaded:      false,
      idleTime:          300000, // time until Idle in ms
      idleTimeout:       null,
      socialSharing:     {
        paragraph: "Páčia sa ti Škrečkove príbehy umenia?<br>Podeľ sa o ne s priateľmi na sociálnych sieťach alebo cez e-mail:",
        paragraphSm: "Zdieľaj s priateľmi:",
        facebook: "http://skrecok.sng.sk/",
        twitter: "Profesor%20%C5%A0kre%C4%8Dok%20objavuje%20osobnosti%20modern%C3%A9ho%20a%20s%C3%BA%C4%8Dasn%C3%A9ho%20umenia.%20Koller%2C%20Ondak%2C%20Picasso%20a%20%C4%8Fal%C5%A1%C3%AD%20v%20animovan%C3%BDch%20vide%C3%A1ch%20od%20SNG.%20Pozeraj%20tu%3A%20https%3A%2F%2Fskrecok.sng.sk",
        email: {
          subject: 'Pozri%20si%20pr%C3%ADbehy%20umenia%20s%20Profesorom%20%C5%A0kre%C4%8Dkom',
          body: 'Kr%C3%A1tke%20animovan%C3%A9%20vide%C3%A1%20z%20dielne%20SNG%20o%20osobnostiach%20modern%C3%A9ho%20a%20s%C3%BA%C4%8Dasn%C3%A9ho%20umenia%3A%20%5Blink%5D'
        },
      },
      profiles: {
        'Intro': {
          title: 'Škrečok',
          subtitle: '✸ 2019, Bratislava',
          avatarSrc: '/img/avatar-skrecok.png',
          linkSrc: 'https://www.sng.sk/sk/vystavy/2295_podivuhodne-dejiny-umenia-s-profesorom-skreckom',
        },
        'Július Koller': {
          title: 'Július Koller',
          subtitle: '✸ 1939, Piešťany <br> ✝ 2007, Bratislava',
          avatarSrc: '/img/avatar-koller.png',
          linkSrc: 'https://www.webumenia.sk/autor/5089',
        },
        'Anna Daučíková': {
            title: 'Anna Daučíková',
            subtitle: '✸ 1950, Bratislava',
            avatarSrc: 'img/avatar-daucikova.png',
            linkSrc: 'http://artbase.kunsthallebratislava.sk/umelec/1918',
        },
        'Pablo Picasso': {
            title: 'Pablo Picasso',
            subtitle: '✸ 1881, Malaga, Španielsko <br> ✝ 1973, Mougins, Francúzsko',
            avatarSrc: 'img/avatar-picasso.png',
            linkSrc: 'https://www.webumenia.sk/autor/7821',
        },
        'Roman Ondak': {
            title: 'Roman Ondak',
            subtitle: '✸ 1966, Žilina',
            avatarSrc: 'img/avatar-ondak.png',
            linkSrc: 'http://artbase.kunsthallebratislava.sk/umelec/7446',
        },
        'Vladimír Dedeček': {
            title: 'Vladimír Dedeček',
            subtitle: '✸ 1929, Martin',
            avatarSrc: 'img/avatar-dedecek.png',
            linkSrc: 'https://www.webumenia.sk/en/autor/1052763',
        },
        'Marcel Duchamp': {
            title: 'Marcel Duchamp',
            subtitle: '✸ 1887, Blainville-Crevon, Francúzsko <br> ✝ 1968, Neuilly-sur-Seine, Francúzsko',
            avatarSrc: 'img/avatar-duchamp.png',
            linkSrc: 'https://sk.wikipedia.org/wiki/Marcel_Duchamp',
        },
        'Andy Warhol': {
            title: 'Andy Warhol',
            subtitle: '✸ 1928, Pittsburgh, USA <br> ✝ 1987, New York, USA',
            avatarSrc: 'img/avatar-warhol.png',
            linkSrc: 'https://www.webumenia.sk/autor/11636',
        },
        'Maria Bartuszová': {
            title: 'Maria Bartuszová',
            subtitle: '✸ 1936, Praha <br> ✝ 1996, Košice',
            avatarSrc: 'img/avatar-bartuszova.png',
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
        "playlistId": playlistId,
        "maxResults": 20
      })
      .then((response) => {
        console.log(response.result);
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
        let [_, profileKey] = item.snippet.title.split(this.ytPlaylistItemTitleSeparator);
        let profileData = this.profiles[profileKey] || this.profiles['default'];

        return {
          ...item,
          descriptionText: descriptionText,
          profileText: profileText,
          profileData: profileData,
        }
      })
    },
    loadYTIframeAPI() {
      var tag = document.createElement('script');
      tag.id = 'iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    },
    parseQuery(query) {
      this.kiosk = Boolean(query['kiosk']);
    },
    onActive() {
      this.resetIdleTimer();
    },
    onIdle() {
      window.scrollTo(0, 0);
      window.history.go();
    },
    resetIdleTimer() {
      if (this.kiosk) {
        clearTimeout(this.idleTimeout);
        this.idleTimeout = setTimeout(this.onIdle, this.idleTime);
      }
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
    // load YouTube iframe API
    this.loadYTIframeAPI();
    // parse URL query params
    this.parseQuery(this.$route.query);
    // start idleTimer countdown
    this.resetIdleTimer();
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
    bottom: 0;

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
  .mt-7 {
    margin-top: 6rem !important;
  }
  :root {
    --bg-unit-height: 180px;
  }
  .bg-dots {
    background-image: url('/img/bg-dots.png');
    width: 100%;
    height: var(--bg-unit-height);
    position: absolute;
    z-index: -2;
  }
  .bg-dots-fadedown {
    background-image: url('/img/bg-dots-fadedown.png');
    width: 100%;
    height: var(--bg-unit-height);
    position: absolute;
    z-index: -2;
  }
  .top-0 {
    top: 0;
  }
  .top-1 {
    top: var(--bg-unit-height);
  }
  .bottom-0 {
    bottom: 0;
  }
  .bottom-1 {
    bottom: var(--bg-unit-height);
  }
  .flip-vertical {
    -moz-transform: scaleY(-1);
    -o-transform: scaleY(-1);
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
    filter: FlipV;
    -ms-filter: "FlipV";
  }

  .anim-pulse {
    animation: pulse 0.8s ease-out alternate infinite;
  }
  @keyframes pulse {
    0% {
      transform: scale3d(1, 1, 1);
    }
    100% {
      transform: scale3d(1.2, 1.2, 1.2);
    }
  }
</style>
