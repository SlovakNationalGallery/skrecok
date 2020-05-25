<script>
import Button from "~/components/Button.vue";
import PingPong from "~/components/PingPong.vue";
import VideoSection from "~/components/VideoSection.vue";
import SocialSharing from "~/components/SocialSharing.vue";
import { state } from "vuex";

export default {
  head() {
    return {
      script: [{ src: "https://apis.google.com/js/api.js" }]
    };
  },
  components: {
    PingPong,
    VideoSection,
    Button,
    SocialSharing
  },
  computed: {
    profiles() {
      return this.$store.state.profiles;
    },
    ytPlaylistItems() {
      return this.$store.state.ytPlaylistItems;
    },
    videosLoaded() {
      return this.$store.state.videosLoaded;
    }
  },
  data() {
    return {
      pageTitle: "Profesor Škrečok",
      pageIntro:
        "Svet umenia je plný zvláštnych príbehov a pestrých charakterov. Objavuj ich spolu s profesorom Škrečkom, ktorý na staré kolená zistil, že výtvarná výchova predsa len nie je nuda. V sérii krátkych animovaných videí ťa Škrečok postupne zoznámi so slovenskými aj svetovými umeleckými osobnosťami a zašpekuluje si nad ich tvorbou a výtvarným myslením.",
      pageCTA: "Poďme na to!",
      backToTop: "naspäť na začiatok",
      downloadPdf: "Stiahni ako PDF",
      installationTitle: "Navštív profesora Škrečka",
      worklist: "Pracovný list",
      installationIntro:
        "Profesora Škrečka môžeš v nadživotnej veľkosti stretnúť v Slovenskej národnej galérii. Na prvom poschodí Esterházyho paláca v Bratislave nájdeš interaktívnu inštaláciu, v ktorej ťa Škrečok prevedie podivuhodnými dejinami umenia od praveku až po súčasnosť. Animácia, mamuty, hlodavce a loptové hry v jednom. Áno, čítaš správne. Príď sa pozrieť!",
      installationURL:
        "https://www.sng.sk/sk/vystavy/2295_podivuhodne-dejiny-umenia-s-profesorom-skreckom",
      footerHTML:
        "Videá: <a href='https://umeleckestrevo.cz/' target='_blank'>Autorská dvojica Fuczik-Kakalík</a><br>Web: <a href='http://lab.sng.sk/' target='_blank'>lab.SNG</a>",
      kiosk: false,
      ytAPIKey: "AIzaSyD18NomcL0M4uAZZiDxkUgwEHre9Lk-KU0",
      ytPlaylistID: "PLdCkSFojiBUqLrSe_6yF7tJulN4X_Vm9I",
      ytPlaylistItemDescriptionSeparator: "---",
      ytPlaylistItemTitleSeparator: " – ",
      videosPlaying: false,
      idleTime: 3000, // time until Idle in ms
      idleTimeout: null,
      socialSharing: {
        paragraph:
          "Páčia sa ti Škrečkove príbehy umenia?<br>Podeľ sa o ne s priateľmi na sociálnych sieťach alebo cez e-mail:",
        paragraphSm: "Zdieľaj s priateľmi:",
        facebook: "http://skrecok.sng.sk/",
        twitter:
          "Profesor%20%C5%A0kre%C4%8Dok%20objavuje%20osobnosti%20modern%C3%A9ho%20a%20s%C3%BA%C4%8Dasn%C3%A9ho%20umenia.%20Koller%2C%20Ondak%2C%20Picasso%20a%20%C4%8Fal%C5%A1%C3%AD%20v%20animovan%C3%BDch%20vide%C3%A1ch%20od%20SNG.%20Pozeraj%20tu%3A%20https%3A%2F%2Fskrecok.sng.sk",
        email: {
          subject:
            "Pozri%20si%20pr%C3%ADbehy%20umenia%20s%20Profesorom%20%C5%A0kre%C4%8Dkom",
          body:
            "Kr%C3%A1tke%20animovan%C3%A9%20vide%C3%A1%20z%20dielne%20SNG%20o%20osobnostiach%20modern%C3%A9ho%20a%20s%C3%BA%C4%8Dasn%C3%A9ho%20umenia%3A%20%5Blink%5D"
        }
      }
    };
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
      this.$store.commit("setYtPlaylistItems", this.parseResult(result));
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
    parseQuery(query) {
      this.kiosk = Boolean(query["kiosk"]);
    },
    onActive() {
      this.resetIdleTimer();
    },
    onIdle() {
      window.scrollTo(0, 0);
      console.log(this.kiosk);
      this.$router.push({
        path: "/",
        query: this.kiosk ? { kiosk: this.kiosk } : {}
      });
    },
    resetIdleTimer() {
      if (this.kiosk) {
        clearTimeout(this.idleTimeout);
        this.idleTimeout = setTimeout(this.onIdle, this.idleTime);
      }
    },

    initGapi() {
      // init YouTube API client
      if (!this.$store.state.videosLoaded)
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
    }
  }
};
</script>
