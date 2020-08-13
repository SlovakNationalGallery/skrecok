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
      backHome:"Späť domov",
      installationTitle: "Navštív profesora Škrečka",
      worklist: "Metodický list",
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
      videosLoaded: false,
      ytPlaylistItems: [],
      videosPlaying: false,
      idleTime: 300000, // time until Idle in ms
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
    parseQuery(query) {
      this.kiosk = Boolean(query["kiosk"]);
    },
    onActive() {
      this.resetIdleTimer();
    },
    onIdle() {
      window.scrollTo(0, 0);
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
    }
  },
  mounted() {
    // start idleTimer countdown
    this.resetIdleTimer();
  }
};
</script>


<style lang="scss">
img.framed {
  max-width: 100%;
  margin-bottom: 10%;
  width: 90%;
  margin-left: 10%;
  border: 1px solid black;
}

img.no-margin{
  margin: auto;
}

@media all and (max-width:991.9px){
  img.framed{
  margin-left: auto;
  }
}
.order-2 {
  img.framed {
    margin-left: 0%;
    margin-right: 10%;
  }
}

section + section {
  padding-top: 3em;
}

li {
  list-style: none;
}

.with-circle::before {
  content: "○";
  display: block;
  position: absolute;
  left: -0.5em;
  list-style: circle;
}
dt, dl, dd{
  font-weight: normal;
}
</style>
