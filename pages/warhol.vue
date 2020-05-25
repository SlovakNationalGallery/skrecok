<template>
  <div
    @mousemove="onActive"
    @mousedown="onActive"
    @scroll="onActive"
    @mousewheel="onActive"
    @touchstart="onActive"
  >
    <div id="top" class="bg-dots top-0"></div>
    <div class="bg-dots-fadedown top-1"></div>
    <img src="/img/skrecok-lamp.png" class="bg-image lamp" />

    <section class="container my-5 py-5">
      <div class="mt-2">
        <h1
          class="my-5 bg-dark text-light tilted d-inline-block px-3 pt-2 pb-1"
        >
          Andy Warhol
        </h1>

        <ArtistProfile
          v-bind:kiosk="kiosk"
          v-bind:profile="{ ...profile, title: '' }"
        />
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 text-left">
          <h4 class="text-left">Diela a témy</h4>
          <p>
            Warhol bol od útleho veku posadnutý slávou, módou, celebritami a
            Hollywoodom. Útek z každodennej reality hľadal v populárnych
            časopisoch a zbieraním autogramov filmových hviezd. Dobre rozumel
            tomu, ako v prospech predaja, marketingové firmy vytvárajú žiarivý
            (ale klamlivý) imidž osobností americkej spoločnosti.
          </p>
          <p>
            Okolo roku 1960 začal tvoriť diela, ktoré kombinujú reklamu a
            expresívne maliarstvo. Skúmal vzťah medzi umením, masmédiami,
            reklamou a populárnou kultúrou. Zámerne kopíroval ich prvky,
            umocňoval ich a zároveň poukazoval na ich manipulatívnu moc. Warhol
            radikálne mení predstavu o tom, čo môže byť umením. Vnímal ho ako
            PRODUKT, rovnaký ako oblečenie, ktoré nosíme alebo jedlo, ktoré
            konzumujeme. Ako námet diel sa snaží nájsť niečo, čo pozná takmer
            každý. Napríklad plechovku Campbellovej polievky, symbol obyčajného
            amerického života. V tomto období začal robiť aj série portrétov
            hviezd ako boli Elizabeth Taylor, Elvis Presley, Jackie Kennedy či
            Marilyn Monroe. Využíva pri tom fotografiu, ktorú ľudia už poznajú z
            (bulvárnej) tlače alebo iných médií a ďalej ju mení, množí a variuje
            a pomocou sieťotlače prenáša priamo na plátno. SIEŤOTLAČ
            (serigrafia) je tradičná tlačiarenská technika, jej princíp spočíva
            v pretláčaní hmoty farby cez očká textilnej sieťoviny priamo na
            potláčaný povrch (všimnite si vo videu autentický záber, na ktorom
            AW prechádza cez sieťku stierkou).
          </p>
          <p>
            Warhol sa stáva kľúčovým predstaviteľom umeleckej tendencie s názvom
            POP-ART (skratka slova popular art, populárne, masové umenie), ktorá
            vznikla okolo roku 1955 nezávisle od seba v Anglicku a v USA.
            Východiskom tvorivých postupov pop-artu je predovšetkým životný štýl
            konzumnej spoločnosti, expanzia nových masmédií a reklamy v 60.
            rokoch v USA a západnej Európe. Pop-art odmietal pompéznosť, obracal
            sa k umeniu populárnemu, ktoré reflektovalo bežný život. Prikláňa sa
            k trivialite konzumnej spoločnosti a prejavom jej vizuálneho klišé
            (fast food, reklama, billboardy, komiksy, a pod.). Obraz sa stal
            vecou a vec obrazom.
          </p>
        </div>

        <div class="col-sm-12 col-md-6">
          <img class="framed" src="/img/warhol/warhol_studio.jpg" />
          <img class="framed" src="/img/warhol/warhol_banana.jpg" />
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 text-left">
          <h4>Námety na diskusiu</h4>
          <p>
            Populárna kultúra je súbor fenoménov, ktoré sú považované za
            najvýraznejšie časti hlavného prúdu určitej kultúry (do polovice 20.
            Storočia západnej kultúry, v súčasnosti kultúry globálnej). Jej
            vznik úzko súvisí z rozvojom médií, sú vzájomne priam prepojené a na
            sebe závislé. Prediskutujte so žiakmi, čo si predstavujú pod
            populárnou kultúrou? Aké sú jej prejavy? Čo by mohlo byť jej opakom?
          </p>
          <p>
            Andy Warhol miloval krásu, umelú hmotu, veci ktoré sa rýchlo menili
            a boli moderné. Ak by žil dnes, čo by ho zaujímalo a inšpirovalo?
            Vysvetlite prečo?
          </p>
        </div>
        <div class="col-sm-12 col-md-6">
          <img class="framed" src="/img/warhol/warhol_cans_idea.jpg" />
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 text-left">
          <h4>Návrh aktivít</h4>
          <p>
            Warhol vytváral často portréty celebrít či obrazy všedných vecí v
            sériách. Rad opakujúcich sa hláv či objektov nám môže pripomínať
            poštové známky, reklamné plagáty, filmové pásy alebo niečo ďalšie?
            Vytvor si sériu vlastných autoportrétov. Odfoť sa mobilom a vytvor z
            jednej (selfie) fotografie sériu 4 alebo 6 vlastných portrétov
            využitím rôznych farebných filtrov a rastrov (pracuj s mobilom alebo
            PC). Skús na každej z fotografii vizuálne zvýrazniť tvoje
            charakteristické črty tváre (alebo tvoj osobný štýlový účes,
            okuliare, úsmev a pod.).
          </p>
        </div>
        <div class="col-sm-12 col-md-6">
          <img class="framed" src="/img/warhol/warhol_studio.jpg" />
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12">
          <h4>
            Externé odkazy
          </h4>
          <ul>
            <li>
              Múzeum Andyho Warhola v Pittsburghu:
              <a href="https://www.warhol.org" target="_blank"
                >https://www.warhol.org
              </a>
            </li>
            <li>
              Múzeum moderného umenia Andyho Warhola v Medzilaborciach:
              <a href="https://www.muzeumaw.sk" target="_blank"
                >https://www.muzeumaw.sk
              </a>
            </li>
            <li>
              Wikipedia
              <a
                href="https://en.wikipedia.org/wiki/Andy_Warhol"
                target="_blank"
                >https://en.wikipedia.org/wiki/Andy_Warhol
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div class="text-center">
      <Button v-bind:text="downloadPdf" v-bind:href="'../pdfs/Andy_Warhol.pdf'" :newTab="true" class="mt-4" />
      <br/>
      <Button v-bind:text="backToTop" v-bind:href="'#top'" class="mt-4" />
    </div>

    <footer class="container h-footer mt-5">
      <div class="col-sm-6 offset-sm-3">
        <img
          v-if="profile.workListImg"
          :src="profile.workListImg"
        />
      </div>
    </footer>
    <div class="bg-dots-fadedown flip-vertical bottom-0"></div>
    
  </div>
</template> 

<script>
import index from "./index";
import ArtistProfile from "../components/ArtistProfile";
import BasicPage from "../components/BasicPage.vue";

export default {
  mixins: [BasicPage],
  components: {
    ArtistProfile
  },
  computed: {
    profile() {
      let profile = { ...this.profiles["Andy Warhol"] };
      if (this.ytPlaylistItems.length > 0) {
        const ytPlaylistItem = (this.ytPlaylistItems || []).find(function(i) {
          return i.profileData.title === "Andy Warhol";
        });
        if (!!ytPlaylistItem) {
          profile = {
            ...profile,
            profileText: ytPlaylistItem.profileText
          };
        }
      }
      return profile;
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

<style scoped lang="scss">
img.framed {
  max-width: 100%;
  margin-bottom: 10%;
  border: 1px solid black;
}

section + section {
  padding-top: 3em;
}

li {
  list-style: none;
}
</style>