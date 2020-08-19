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

    <section class="container my-0 pt-5">
      <Button v-bind:text="backHome" v-bind:href="'/'"  class="mt-0 home-link mb-3" /><br/>
      <div class="mt-2">
        <h1
          class="my-5 bg-dark text-light tilted d-inline-block px-3 pt-2 pb-1"
        >
          Marcel Duchamp
        </h1>

        <ArtistProfile
          class="mt-5"
          v-bind:kiosk="kiosk"
          v-bind:profile="{ 
            ...profile, 
            title: '', 
            profileText: `Francúzsko-americký výtvarník a šachista, ktorý vniesol do umenia 20. storočia revolučné zmeny. Stal sa majstrom umenia provokácie! Narodil sa v rodine prosperujúceho notára a okrem neho sa umeniu venovali aj jeho ďalší traja súrodenci. Po skončení strednej školy odišiel za staršími bratmi do Paríža. Začal tu študovať na prestížnej súkromnej Julianovej akadémii, ktorú však nedokončil. V roku 1915 odišiel z vojnovej Európy do New Yorku, do Francúzska sa však pravidelne vracal. Celý život veľa cestoval a v istých obdobiach sa profesionálne venoval viac šachu ako umeniu.`
           }"
        />
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <h4 class="text-left">Diela a témy</h4>
          <p>
            Duchampove tvorivé začiatky spadajú do doby, ktorá bola pre európske umenie doslova <b>revolučná</b>. Začiatkom 20. storočia vznikajú avantgardné výtvarné smery ako kubizmus, futurizmus, dadaizmus, surrealizmus a pod. Rodí sa abstraktné, nezobrazujúce umenie, ktoré sa odkláňa od tradičného napodobovania a zobrazenia sveta. Aj pod vplyvom rozvoja fotografie či filmu, schopných zachytiť skutočnosť verne, sa výtvarné umenie mení, hľadá svoj vlastný autentický jazyk.
          </p>
          <p>
          Marcel Duchamp sa prestáva okolo roku 1913 zaujímať o klasickú maľbu, spochybňuje jej význam. Pri pohľade na umelecké dielo neočakáva estetický (zrakový) zážitok, ale oceňuje jeho ideu, nápad, vtip, prípadne prekvapenie. 
          </p>
          <p>
          Duchamp postupne mení stratégiu. Nevytvára umelecký objekt sám, ale vyberá si ho z už existujúcich priemyselne vyrobených predmetov. Akoby nebolo nikdy jednoduchšie vytvoriť umelecké dielo. Do prostredia múzea sa dostáva nezvyčajný predmet – <b>ready-made</b> (hotový, konfekčný, sériový predmet). Tvorbu ready-madov môžeme vnímať aj ako udalosť, manifest, ako revoltu či provokáciu voči akceptovaným štandardom vtedajšieho umenia.   
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/duchamp/duchamp_paleta.jpg" />
          <img class="framed" src="/img/duchamp/duchamp_newyork.jpg" />
        </div>        

        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            Duchamp do tvorby vnáša aj element humoru. V roku 1919 berie lacnú reprodukciu slávneho portrétu <i>Mona Lisa</i> od Leonarda da Vinciho a prikresľuje jej briadku a fúziky. Obraz dopĺňa textom: L.H.O.O.Q., čo môžeme voľne preložiť ako <i>„tá má ale sexi zadok“</i>. Sám Duchamp to označuje za svätokrádež! Takéto antiumelecké akcie ho spájajú s <b>hnutím Dada</b>, ktoré sa formuje počas a po 1. svetovej vojne. Dadaistické umenie je reakciou na všeobecný rozpad civilizovaného sveta spôsobený vojnou. Do popredia sa dostáva náhoda, absurdita a radikálne antiestetické a nehistorické umenie oslobodené od tradičných vzorov.    
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
            <img class="framed" src="/img/duchamp/duchamp_diela.jpg" />
        </div>
        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            Duchampova tvorba je stratégiou, ako spochybňovať absolútne pravdy a stereotypy v umení. Používa humor, slovné hračky, iróniu. V dielach neponúka konečné odpovede. V 60. rokoch 20. storočia inšpiruje celú generáciu mladých výtvarníkov a otvára cestu ku <b>konceptuálnemu umeniu</b>, ktoré povyšuje myšlienku (koncept, ideu) na najdôležitejší aspekt umeleckej práce. 
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/duchamp/duchamp_fontana1.jpg" />
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">

        <div class="col-sm-12 col-lg-6 order-2 order-lg-1">
          <img class="framed" src="/img/duchamp/duchamp_veci.jpg" />
        </div>

        <div class="col-sm-12 col-lg-6 text-left order-1 order-lg-2">
          <h4>Námety na diskusiu</h4>
          <p class="with-circle">Pred pozretím videa: Duchampove ready-mady sú priamo položenou otázkou <b>Čo je to umenie?</b> Akú hodnotu má originál? Aká je úloha umelca? A kto určuje, ktoré umenie je dobré? V oblasti umenia vyvolal diskusiu, ktorá trvá dodnes. Diskutujte so žiakmi, čo je umenie podľa nich? </p>
        </div>
      </div><div class="row">
        
        <div class="col-sm-12 col-lg-6 order-2 order-lg-1">
          <img class="framed" src="/img/duchamp/duchamp_fontana2.jpg" />
        </div>
        
        <div class="col-sm-12 col-lg-6 text-left order-1 order-lg-2">
          <p class="with-circle">Po pozretí videa: Dielom <i>Fontána</i> (1917) sa Duchamp pokúsil zúčastniť na výstave Nezávislých v New Yorku. Svoje dielo tu mohol vystaviť každý umelec, ktorý zaplatil poplatok 6 dolárov. Spoločnosť nezávislých umelcov nechcela pôvodne žiadne diela cenzurovať. Napriek tomu odmietla Duchampov pisoár vystaviť, čo rozdelilo jej členov na dva tábory. 
          <p>
          Rozdeľte triedu na skupiny po 4 žiakoch. V skupinách vždy dvaja <b>žiaci argumentujú</b> za vystavenie Fontány a dvaja proti (každá skupina si môže spísať všetky dôvody, prečo by dielo vystavila / nevystavila). Každá skupina predstaví svoje argumenty a výsledky debaty.</p>
        </div>

      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <h4>Aktivity</h4>
          <p class="with-circle">Marcel Duchamp v roku 1938 navrhol predmet Krabica v kufri, čo bola batožina vyplnená zmenšenými replikami niektorých jeho diel. Vytvorte si zmenšenú školskú galériu v krabici (buď trieda spolu vytvára jednu galériu alebo žiakov rozdeľte do menších skupín). Reprodukcie výtvarných diel slovenských či zahraničných autorov nájdite v knižnici alebo pracujte s online katalógom <a v-bind:href="kiosk?null:'https://www.webumenia.sk'" target="_blank">
          wwww.webumenia.sk</a></p>	
		      <p>
          Rozmýšľajte nad architektúrou výstavy, nad vnútorným riešením jej priestoru, inštalačnými prvkami (vytváranie priehradiek, zásuviek, stien a pod.). Pri koncipovaní výstavy si zvoľte metódu či uhol pohľadu. Môže to byť téma, obdobie alebo žáner. Na Webe umenia si potom podľa témy či pojmu (napríklad voda, SNP, atď.) môžete vytvoriť vlastnú kolekciu diel pre výstavu v krabici. 
          </p>
        </div>
        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/duchamp/duchamp_ram.jpg" />
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-10 offset-sm-1  col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h4>
            Externé odkazy
          </h4>
          <dl class="text-left">
						<dt>
              Škótska národná galéria (vo videu nájdete viac o Duchampových kufríkových galériách):
            </dt><dd>
                <a v-bind:href="kiosk?null:'https://www.youtube.com/watch?v=Dn18_XOzndg&feature=youtu.be'" target="_blank">
                https://www.youtube.com/watch?v=Dn18_XOzndg
              </a>
            </dd>
            <dt>
              Tate Gallery UK, viac o autorovi a jeho dielach:
            </dt><dd>
                <a v-bind:href="kiosk?null:'https://www.tate.org.uk/art/artists/marcel-duchamp-1036'" target="_blank">
                https://www.tate.org.uk/art/artists/marcel-duchamp-1036
              </a>
            </dd>
            <dt>
              Kolekcia diel ready-made od slovenských a českých autorov:
            </dt><dd>
                <a v-bind:href="kiosk?null:'https://www.webumenia.sk/kolekcia/112'" target="_blank">
              https://www.webumenia.sk/kolekcia/112
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </section>

    <div class="text-center">
      <a v-bind:href="kiosk?null:'../pdfs/Marcel_Duchamp.pdf'"  class="pdf-link mt-5 mb-3">
        <img
          src="/img/news.png"
          class="d-inline-block"
        />
        <span>{{ downloadPdf }}</span>
      </a>
      <Button v-bind:text="backHome" v-bind:href="'/'"  class="mt-5" />
    </div>

    <footer class="container space">&nbsp;</footer>
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
    profile() { return { ...this.profiles["Marcel Duchamp"] };}
  },
};
</script>
