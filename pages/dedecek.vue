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
          Vladimír Dedeček
        </h1>

        <ArtistProfile
          v-bind:kiosk="kiosk"
          v-bind:profile="{ 
            ...profile, 
            title: '', 
            profileText: `Významný slovenský architekt, autor desiatok ikonických stavieb a výrazných autorských konceptov. V roku 1952 absolvoval štúdium na Fakulte architektúry SVŠT v Bratislave v ateliéri Emila Belluša. Začal pracovať v Krajskom projektovom ústave Bratislava a po roku 1968 pôsobil v bratislavskom Stavoprojekte. Od roku 1966 viedol vlastný ateliér.`
           }"
        />
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <h4 class="text-left">Diela a témy</h4>
          <p>
            Stavby navrhnuté Vladimírom Dedečkom sú dlhodobo predmetom diskusií. Odborná verejnosť vyzdvihuje ich kvality, laická verejnosť zase upozorňuje na <b>výrazné formy</b>, ktoré sú často spájané s prejavmi architektúry predchádzajúceho režimu. Dedečkovi učitelia boli totiž významnými predstaviteľmi modernej architektúry.
          </p>
        </div>
        
        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="https://www.webumenia.sk/dielo/nahlad/SVK:SNG.A_1631-79/800" />
        </div> 
        
        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            <b>Moderná architektúra</b> zjednodušuje formy a vynecháva ornamenty. Forma, ktorá sleduje funkciu, sa vyvinula s dostupnosťou materiálov ako oceľ, betón a sklo a tiež s vynálezom nových stavebných techník počas priemyselnej revolúcie. Nové konštrukcie boli pevnejšie, ľahšie a vyššie. Železobetón umožnil vytvoriť veľké priestory neprerušené stĺpmi a ďalšími podpornými prvkami a dovolil architektom umiestniť okná po dĺžke celej steny. 
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/dedecek/dedecek_moderna.jpg" />
        </div> 

        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            Vladimír Dedeček nadväzuje na tieto výdobytky a za pridanú hodnotu architektúry považuje jej výtvarné spracovanie. Preto kladie dôraz na <b>rytmus</b> a až <b>sochársku prácu s hmotou</b>.
          </p>
          <p>
            Ako architekt začína pracovať na projektovom ústave, kde sa špecializuje na školské budovy. Jeho generácia tvorí v Československu po dvoch svetových vojnách, a tak majú práce vyše hlavy. Preto sa na projektových ústavoch navrhujú typologické riešenia (typy stavieb), ktoré sa s malými obmenami môžu použiť na rôznych miestach. Dedeček napríklad vytvára netradičné usporiadanie pavilónových škôl prepojených so záhradami a zameral sa na lepšie osvetlenie tried. 
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/dedecek/dedecek_skola.jpg" />
        </div>

        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            Pri návrhu Poľnohospodárskej univerzity v Nitre využíva <b>hru kompozície</b>. Pracuje so svetlom, proporciou a rovnováhou, ale zohľadňuje aj funkciu, teda to, na čo majú jednotlivé časti architektúry slúžiť. V areáli univerzity majú všetky objekty <b>základné geometrické tvary</b> a v jej centre (na priesečníku osí kompozície) je umiestnená ústredná budova – aula šošovkovitého tvaru pre 600 ľudí. Na tak veľký priestor má vďaka tvaru a unikátnej rebrovej klenbe vhodnú akustiku.
          </p>
          <p>
            Viaceré diela sa už za života Vladimíra Dedečka stali ikonami neskorej moderny známymi aj v medzinárodnom kontexte.
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/dedecek/dedecek_nitra.jpg" />
        </div>

      </div>
    </section>

    <section class="container">
      <div class="row">

        <div class="col-sm-12 col-lg-6 order-2 order-lg-1">
          <img class="framed" src="/img/dedecek/dedecek_cement.jpg" />
        </div>

        <div class="col-sm-12 col-lg-6 text-left order-1 order-lg-2">
          <h4>Námety na diskusiu</h4>
          <p class="with-circle">Porozprávajte sa, ako <b>vyzerá vaša škola</b>. Poznáte ešte inú takú školu? Koľko má podlaží? Čo nájdete na každom z nich? Kde je schodisko a kde jedáleň? Opakujú sa nejaké vzorce usporiadania? Aká je vaša trieda? Je rovnako veľká ako ostatné triedy v škole? Aké veľké sú okná, ktoré presvetľujú miestnosť? Vysvetlite si, čo je pôdorys a mierka.
          </p>
        </div>
      </div>
      <div class="row">
				<div class="col-sm-12 col-lg-6 order-2 order-lg-1">
          <img class="framed" src="/img/dedecek/dedecek_archiv.jpg" />
        </div>

      	<div class="col-sm-12 col-lg-6 text-left order-1 order-lg-2">
					<p class="with-circle">
						Vladimír Dedeček tvoril architektúru v období totalitného a <b>autoritárskeho režimu</b>. Čo pre architektov znamenalo navrhovať počas obdobia socializmu? Mali možnosť navrhovať svoje diela tak, aby nespĺňali len požiadavky režimu, ale boli zároveň moderné a prínosné pre spoločnosť? Majú byť stavby z obdobia komunizmu zbúrané ako monumenty, ktoré reprezentujú režim, či naopak zachované a prípadne obnovené?
					</p>
				</div>

			</div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <h4>Aktivity</h4>	
					<p class="with-circle">
						Navrhnite <b>architektúru pre verejnosť!</b> Najprv si ujasnite jej účel. Vystrihnite z kartónu rôzne geometrické tvary a zlepením rovnakých tvarov ich spravte rôzne vysoké. Vyskúšajte rôzne varianty usporiadania jednotlivých geometrických prvkov, pracujte s rytmom, symetriou a asymetriou. Varianty porovnajte a porozprávajte sa o výsledku. 
					</p>
        </div>
        
        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/dedecek/dedecek_budova.jpg" />
				</div>
        
        <div class="col-sm-12 col-lg-6 text-left">
					<p class="with-circle">
						V zbierkach SNG sa okrem architektonických nárysov nachádzajú aj <a href="https://www.webumenia.sk/dielo/SVK:SNG.A_1618-37" target="_blank">skice Vladimíra Dedečka</a>. Skica zachytáva tie najdôležitejšie črty. Vyhľadajte v okolí školy významné architektonické stavby a pokúste sa ich <b>naskicovať</b>. Skúmajte, ktoré prvky sú dôležité pre funkciu stavby a ktoré tvoria výraz danej architektúry. Vysvetlite si princípy perspektívy. Zachovajte proporcie a pracujte s mierkou. 
          </p>
        </div>
        
        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/dedecek/dedecek_studia.jpg" />
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
              Profil architekta na slovenskom architektonickom portáli Archinfo: 
            </dt>
            <dd>
              <a href="https://www.archinfo.sk/ludia/architekt-alebo-student-architektury/autorizovany-architekt-ska/ing-arch-vladimir-dedecek.html" target="_blank">https://www.archinfo.sk/ludia/architekt-alebo-student-architektury/autorizovany-architekt-ska/ing-arch-vladimir-dedecek.html</a>
            </dd>
            <dt>
              Diela Vladimíra Dedečka na Webe umenia:
            </dt>
            <dd>
              <a href="https://www.webumenia.sk/autor/1052763" target="_blank"
                >https://www.webumenia.sk/autor/1052763
              </a>
            </dd>
            <dt>
              Dvojkanálová videoinštalácia v rámci projektu <i>Vladimír Dedeček: Práca</i>, ktorá sprostredkuje jeho myslenie a pohľad na minulosť aj súčasnosť:
            </dt>
            <dd>
              <a href="https://youtu.be/Z0V1VGv7thQ" target="_blank"
                >https://youtu.be/Z0V1VGv7thQ
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </section>

    <div class="text-center">
      <a href="'../pdfs/Vladimir_Dedecek.pdf'"  class="pdf-link mt-5">
        <img
          src="/img/news.png"
          class="d-inline-block"
        />
        <span>{{ downloadPdf }}</span>
      </a>
      <Button v-bind:text="backHome" v-bind:href="'/'"  class="mt-5" />

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
    profile() { return { ...this.profiles["Vladimír Dedeček"] };}
  },
};
</script>
