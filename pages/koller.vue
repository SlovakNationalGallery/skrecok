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
          Július Koller
        </h1>

        <ArtistProfile
          v-bind:kiosk="kiosk"
          v-bind:profile="{ 
            ...profile, 
            title: '', 
            profileText: `Od detstva ho zaujímalo kreslenie a maľovanie. Študoval na grafickom oddelení Školy umeleckého priemyslu v Bratislave a na oddelení figurálneho maliarstva na VŠVU v Bratislave. Ako študent hral hokej, futbal, volejbal, tenis a stolný tenis. Spolu s Milanom Adamčiakom, Igorom Gazdíkom, Pavlom Breierom a Petrom Meluzinom založili začiatkom 80. rokov UFOgalériu, prvú fiktívnu galériu pre tzv. kozmohumanistickú kultúru. S Adamčiakom a Petrom Rónaiom na začiatku 90. rokov tvorili zoskupenie Nová vážnosť. Po roku 1968 sa otáznik stáva jeho znakom spochybňujúcim skutočnosť a odkazujúcim na veci neznáme a nezodpovedané. V tvorbe Júliusa Kollera je veľmi pálčivou najmä otázka budúcnosti ľudstva.`
           }"
        />
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <h4 class="text-left">Diela a témy</h4>
          <p>
            Július Koller doštudoval v polovici 60. rokov a ako umelec na voľnej nohe začína pôsobiť v období, keď sa na chvíľu uvoľňuje politická situácia v Československu a aj umelecká scéna sa otvára novým myšlienkam. Viacerí umelci, často Kollerovi rovesníci a spolužiaci, prekračujú tradičné rámce umenia, ktoré má byť vystavované v galériách a snažia sa ho preniesť <b>bližšie k divákovi</b>. Umenie sa chce viac prepojiť so životom, stať sa jeho oslavou.  
          </p>
          <p>
            Intervencia vojsk Varšavskej zmluvy v auguste 1968 a predovšetkým II. novembrový zjazd ZSVU v roku 1972, na ktorom bolo odsúdené umenie rozchádzajúce sa so zásadami <b>socialistického realizmu</b>, komplikujú mnohým umelcom možnosti slobodnej tvorby a jej prezentácie. Svoje diela často predstavujú iba úzkemu okruhu kolegov pri osobných stretnutiach alebo dokonca poštou. Veľmi dobrými príležitosťami na stretnutia sú tiež turistika a šport.   
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/koller/koller_ufonaut.jpeg" />
        </div>
      </div>        

      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            To všetko sa odráža aj v tvorbe Júliusa Kollera. Hoci vyštudoval maliarstvo, nezaujíma ho vytváranie ilúzie – napodobovanie skutočnosti. Oveľa podstatnejší je preňho zmysel zobrazovania, čo ho čoskoro privádza k práci s textom. Textom zaznamenáva, maľuje, komunikuje. Zapisuje dobové udalosti, prepisuje správy z tlače, maľuje typografické a „kaligramové obrazy“, rozposiela karty či telegramy potlačené slovami zostavenými z písmen z domácej detskej tlačiarničky. Koller tak vytvára tzv. <b>mailart</b>. Mailartoví umelci posielajú svoju tvorbu na „pohľadniciach“, aby podporili osobnejší vzťah medzi divákom a dielom.    
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
            <img class="framed" src="/img/koller/koller_umeNie.jpeg" />
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            Pre Kollera je umenie, predovšetkým to v galériách, čímsi odtrhnutým od človeka a života. On sám usilovným zaznamenávaním a interpretovaním života, zbieraním a vyhodnocovaním toho, čo život so sebou prináša, vnáša život do svojej tvorby a naopak. Podľa Kollera by malo <b>živé umenie človeka pretvárať</b> – jeho osobne napr. na tzv. UFOnauta. 
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/koller/koller_futbal.jpeg" />
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">

        <div class="col-sm-12 col-lg-6 order-2 order-lg-1">
          <img class="framed" src="/img/koller/koller_halda.jpg" />
          <img class="framed" src="/img/koller/koller_dom.jpg" />
        </div>

        <div class="col-sm-12 col-lg-5 text-left order-1 order-lg-2">
          <h4>Námety na diskusiu</h4>
          <p class="with-circle">Pred pozretím videa: Stretli ste sa už s <b>umením mimo galérie?</b> Ako ste zistili, že je to umenie? Skúste sa zamyslieť nad tým, čo pre vás robí umenie umením. </p> 
          <p class="with-circle">Po pozretí videa: Július Koller ešte ako študent zbieral napríklad nálepky zo zápalkových škatuliek, komiksy, knihy, noviny a časopisy. Určite aj vy niečo zbierate. Ale je to naozaj zbieranie alebo iba hromadenie? Porozprávajte sa o tom, <b>čo, ako a prečo zbierate</b>. Máte kritériá, podľa ktorých viete, čo do vašej zbierky patrí a čo nie? Zháňate to, čo v zbierke ešte chýba? Má vaša zbierka aj nejaké kategórie? Ako a kde ju uchovávate? Môže ju niekto vidieť? Podobné otázky „trápia“ aj múzeá a galérie.</p>
          <p class="with-circle">Porozprávajte sa o možnostiach a <b>význame komunikácie</b> v extrémnych podmienkach akými sú napríklad cenzúra alebo karanténa. Ako sa v takých situáciách dostať k správam, ako sa spojiť s kamarátmi, či dať o sebe vedieť? </p>
        </div>

      </div>
      
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <h4>Aktivity</h4>
          <p class="with-circle">
            Vytvorte dvojice, trojice alebo štvorice a zahrajte si <b>kresliarsky pingpong</b>. Striedajte sa pri jednotlivých ťahoch kresby. Reagujte na kresbu „hráča“ na ťahu pred vami. Určite si aj rytmus hry – striedania. Ten sa môže postupne zrýchľovať. Každý nový ťah je komentárom, interpretáciou a dopovedaním  predchádzajúceho ťahu.</p>	
		      </p>
        </div>
        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/koller/koller_pong.jpg" />
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <p class="with-circle">
            Vyberte z ľubovoľného textu vetu alebo jej časť – <b>odkaz pre ostatných</b>. Nemusí to byť iba odkaz vo forme textu. Tým, že vetu vyjmete z pôvodného kontextu, dostane nový význam. S vetou budete ďalej pracovať a sledovať, ako sa mení jej forma a význam. Napíšte ju 30-krát. Je rozdiel medzi prvou a poslednou? Pozmenil sa význam znásobením? Meňte veľkosť písma, tvar „riadku“, písací nástroj, umiestnenie na papieri... 
          </p>
        </div>
        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/koller/koller_nazivot.jpeg" />
        </div>
      </div>

    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12">
          <h4>
            Externé odkazy
          </h4>
          <ul class="text-left">
						<li>
              Zberateľskú vášeň Júliusa Kollera približuje v článku kurátorka SNG Petra Hanáková:
              <a href="https://www.webumenia.sk/clanok/julius-koller-zberatel" target="_blank">
                https://www.webumenia.sk/clanok/julius-koller-zberatel
              </a>
            </li>
            <li>
              Denník Júliusa Kollera z roku 1989, ktorý odkrýva udalosti Nežnej revolúcie, spracovala SNG aj s metodickými materiálmi pre pedagógov:
              <a href="https://1989.sng.sk/" target="_blank">
                https://1989.sng.sk/
              </a>
            </li>
            <li>
              Kategorizovaný výber tvorby Júliusa Kollera spracovaný Spoločnosťou Júliusa Kollera:
              <a href="https://juliuskollersociety.org/sk/archiv/" target="_blank">
                https://juliuskollersociety.org/sk/archiv/
              </a>
            </li>
            <li>
              Krátko pred smrťou Július Koller predstavuje UFO galériu:
              <a href="https://www.youtube.com/watch?v=0T6MNydabn0&feature=related" target="_blank">
                https://www.youtube.com/watch?v=0T6MNydabn0&feature=related
              </a>
            </li>
            <li>
              Antimúzeum Júliusa Kollera:
              <a href="https://antimuzeum.sk/" target="_blank">
                https://antimuzeum.sk/
              </a>
            </li>
            <li>
              Július Koller na Webe umenia:
              <a href="https://www.webumenia.sk/autor/5089" target="_blank">
                https://www.webumenia.sk/autor/5089
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div class="text-center">
      <Button v-bind:text="downloadPdf" v-bind:href="'../pdfs/Julius_Koller.pdf'" :newTab="true" class="mt-4" />
      <!-- <br/>
      <Button v-bind:text="backToTop" v-bind:href="'#top'" class="mt-4" /> -->
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
    profile() { return { ...this.profiles["Július Koller"] };}
  },
  mounted() {
    // start idleTimer countdown
    this.resetIdleTimer();
  }
};
</script>

<style scoped lang="scss">
img.framed {
  max-width: 100%;
  margin-bottom: 10%;
  width: 90%;
  margin-left:10%;
  border: 1px solid black;
}

section + section {
  padding-top: 3em;
}

li {
  list-style: none;
}

.with-circle::before{
    content: "○";
    display: block;
    position: absolute;
    left: -.5em;
    list-style: circle;
    }

</style>
