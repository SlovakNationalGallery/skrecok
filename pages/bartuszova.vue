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
          Maria Bartuszová
        </h1>

        <ArtistProfile
          class="mt-5"
          v-bind:kiosk="kiosk"
          v-bind:profile="{ 
            ...profile, 
            title: '', 
            profileText: `Slovenská sochárka českého pôvodu. Študovala na Vysokej škole umeleckopriemyselnej v Prahe (1956 – 1961) v ateliéri keramiky a porcelánu. Od roku 1963 žila v Košiciach. Počas života boli jej diela prezentované len málo, pretože nezapadali do oficiálnej predstavy umenia socialistického realizmu, ktoré malo byť programovo optimistické, ľahko čitateľné a oslavujúce komunistickú ideológiu. Jej štúdium ju navyše vtedy automaticky radilo nie medzi umelkyne, ale remeselníčky. Aj z týchto dôvodov prežila väčšinu života v ústraní ateliéru a so svojou rodinou.`
           }"
        />
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <h4 class="text-left">Diela a témy</h4>
          <p>
            V tvorbe sa zaoberala predovšetkým prírodou a <b>prírodnými javmi a procesmi</b> – najčastejšie rastom, klíčením, kvapkaním, rozpínaním, letom, vlnením či prúdením vzduchu. Nezobrazovala ich však priamo, ale prostredníctvom abstraktných tvarov, ktoré nám ich nemajú popísať, ale evokovať a môžu tak mať pre nás viacero omnoho širších významov. Jej tvorbu môžeme vnímať aj ako zviditeľňovanie základných princípov života a pohybu v prírode.  
          </p>
          <p>
            Bola presvedčená, že už tvary samotné môžu na diváka silne zapôsobiť, napríklad že oblé <b>organické tvary</b> vzbudzujú pocit tepla, nežného dotyku a objatia a ostré <b>anorganické tvary</b> naopak chlad. Takéto vyjadrovanie hlbších obsahov prostredníctvom abstraktných tvarov je typické pre viaceré umelkyne a umelcov 20. storočia.  
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/bartuszova/bartuszova_orechy.jpg" />
        </div>

      </div>        

      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            V experimentovaní s tvarovaním sadry často využívala jej fyzické vlastnosti pri odlievaní tenkých vrstiev na povrchu foriem naplnených vzduchom, alebo naopak odlievaním z ich vnútra. Vytvárala tak <b>krehké dutiny</b>, ktoré sú súčasťou viacerých jej diel, napr. <i>Škrupina II.</i> (1980 – 1989).      
          </p>
          <p>
            Využívala aj <b>gravitačnú silu</b> – gumené formy naplnené sadrou nechala počas jej tuhnutia voľne visieť a dosiahla tak rôzne pretiahnuté tvary, ako napr. v diele <i>Krajina II.</i> (1983). Obe diela môžete vidieť aj vo videu.      
          </p>
          <p>
            Okrem sadry a nájdených prírodnín pracovala aj s kameňom a kovmi ako bronz a hliník.
          </p>  
        </div>

        <div class="col-sm-12 col-lg-6">
            <img class="framed" src="/img/bartuszova/bartuszova_P_2659.jpeg" />
        </div>

      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-10 ">
          <img class="framed" src="/img/bartuszova/bartuszova_P_2674.jpeg" />
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-5 text-left ">
          <h4>Námety na diskusiu</h4>
          <p class="with-circle">Pred pozretím videa prineste so sebou do triedy predmet, ktorý je podľa vás vyrobený zo <b>zaujímavého materiálu</b>. Zhromaždite ich všetky do jednej krabice, po jednom ich vyťahujte a nechajte kolovať. Úlohou ostatných žiakov je hádať, z čoho je predmet vyrobený a čím mohol toho, kto ho priniesol, osloviť. Rozdeľte potom predmety do skupín podľa toho, či zaujali viac pohľadom, dotykom, čuchom, sluchom (alebo vytvorte vlastné kategórie). 
          </p>
          <p>
          Zaujali triedu viac predmety vytvorené z prírodných alebo umelých materiálov? Pokúste sa predstaviť si a pomenovať rôzne spôsoby, akými sa tieto materiály dajú tvarovať a opracovávať. Práca s ktorým materiálom by vás lákala najviac a prečo? Téma na diskusiu je vhodná aj ako súčasť rannej komunity.</p>
        </div>

        <div class="col-sm-12 col-lg-6">
            <img class="framed" src="/img/bartuszova/bartuszova_kvadre.jpg" />
        </div>
        
      </div>

      <div class="row">
        <div class="col-sm-12 col-lg-5 text-left">
          <p class="with-circle">Pozrite sa bližšie na diela Marie Bartuszovej vo videu alebo na Webe umenia a hovorte o tom, čo všetko <b>vám pripomínajú</b> a prečo. Spomeňte si na situáciu alebo miesto, kde ste niečo podobné videli. Hoci sú diela statické, je možné si pri niektorých z nich predstaviť pohyb? Ak áno, pokúste sa ho opísať.</p>
        </div>

        <div class="col-sm-12 col-lg-6">
            <img class="framed" src="/img/bartuszova/bartuszova_diela.jpg" />
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-lg-5 text-left">
          <p class="with-circle">S metaforickým chápaním prírodných predmetov a javov, ktoré sa vyskytuje aj v autorkiných dielach, sa stretávame v každodennom živote často. Popremýšľajte, v akých prenesených významoch používame slová ako <b>kvet, vajce, zrno, plod, vietor, vlna, kvapka</b> a pod. Spomeňte si na príklady z bežného jazyka, literatúry, prísloví, porekadiel alebo piesní. V čom sa vlastnosť predmetu spája s preneseným významom?</p>
        </div>

        <div class="col-sm-12 col-lg-6">
            <img class="framed" src="/img/bartuszova/bartuszova_vajce.jpg" />
        </div>
      </div>

    </section>

    <section class="container">
      
      <div class="row">

        <div class="col-sm-12 col-lg-6 order-2 order-lg-1">
            <img class="framed" src="/img/bartuszova/bartuszova_P_150.jpeg" />
        </div>

        <div class="col-sm-12 col-lg-6 text-left order-1 order-lg-2">
          
          <h4>Aktivity</h4>
          
          <p class="with-circle">
            Vymenujte <b>prírodné procesy</b>, ktoré poznáte. Vyberte si jeden z nich, zatvorte na chvíľu oči, predstavte si ho čo najpresnejšie a staňte sa na chvíľu v mysli jeho súčasťou. Pokúste sa ho stvárniť <b>pohybom vlastného tela</b>, buď samostatne alebo v skupinách po spoločnej dohode. Pri väčšom počte vystupujte ako celok a reagujte pohybom jeden na druhého. Ostatní spolužiaci môžu hádať, o aký proces ide. Aktivitu môžete vyskúšať aj vonku a reagovať tak napr. na pohyb vetra, listov alebo trávy.
          </p>

		      <p class="with-circle">
            Predstavte si zloženie sadry. Sadra sa získava zahrievaním kryštálov <b>minerálu sadrovca</b>, čím sa z neho odstraňuje voda a mení sa na prášok. Po pridaní vody sadrovec znova <i>kryštalizuje</i>, čím tuhne.
          </p>

        </div>

      </div> 

      <div class="row">
        
        <div class="col-sm-12 col-lg-6 order-2 order-lg-1">
          <img class="framed" src="/img/bartuszova/bartuszova_P_342.jpeg" />
        </div>

        <div class="col-sm-12 col-lg-6 text-left order-1 order-lg-2">
          <p class="with-circle">
            Namiešajte si hustejšiu sadru, jej menšie množstvo vlejte do väčšieho priesvitného <b>igelitového vrecka</b> a dobre zaviažte. Priložte ho bočnou stranou bez záhybov na niektorú časť tela, napr. na ruku, do dlane alebo na tvár. Počas tuhnutia s ňou nehýbte a vnímajte, ako sa sadra stáva teplejšou. Keď sadra stuhne, obal opatrne prestrihnite a odstráňte. 
          </p>
          <p>  
            Odliaty tvar si prezrite zo všetkých strán. Čo všetko sa odtlačilo? Aké rôzne vlastnosti sadry ste spozorovali? V čom sa líši napr. od plastelíny? Aké rôzne <b>možnosti jej využitia</b> vám napadnú? Do akej miery sa vám do tvaru odtlačil povrch tela a do akej vnútro vrecka? Má sadra pri používaní nejaké nevýhody, s ktorými pri tvorbe musela počítať aj Maria Bartuszová? 
          </p>	
        </div>
        
      </div>

    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-10 offset-sm-1  col-md-8 offset-md-2 col-lg-4 offset-lg-4"> 
          <h4>
            Externé odkazy
          </h4>
          <dl class="text-left">
						<dt>
              Diela Marie Bartuszovej na Webe umenia:
            </dt>
            <dd>
              <a v-href="kiosk?'':'https://www.webumenia.sk/autor/513'" target="_blank">
                https://www.webumenia.sk/autor/513
              </a>
            </dd>
            <dt>
              Rozhlasový profil Marie Bartuszovej:
            </dt>
            <dd>
              <a v-href="kiosk?'':'https://www.rtvs.sk/clanok/165840'" target="_blank">
                https://www.rtvs.sk/clanok/165840
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </section>

    <div class="text-center">
      <a v-href="kiosk?'':'../pdfs/Maria_Bartuszova.pdf'"  class="pdf-link mt-5 mb-3">
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
    profile() { return { ...this.profiles["Maria Bartuszová"] };}
  },
};
</script>
