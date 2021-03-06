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

        <h1 class="my-5 bg-dark text-light tilted d-inline-block px-3 pt-2 pb-1">
          Roman Ondak
        </h1>

        <ArtistProfile
          class="mt-5"
          v-bind:kiosk="kiosk"
          v-bind:profile="{ 
            ...profile, 
            title: '', 
            profileText: `Žije v Bratislave, kde vyštudoval maľbu na Vysokej škole výtvarných umení (1988 – 1994). Ako jeden z mála slovenských autorov pôsobí najmä na medzinárodnej umeleckej scéne a vystavuje veľa v zahraničí. V začiatkoch svojej umeleckej tvorby robil koláže a kresby, neskôr viacvýznamové objekty. Postupne prestal vytvárať materiálne diela a jeho výstavy boli založené na aktivite a interakcii. Jedna z výstav spočívala v textovom zadaní pre pracovníkov galérie, pri ďalšej zas jednoducho napodobnil realitu vonkajšieho sveta a preniesol ju do galérie.`
           }"
        />
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <h4 class="text-left">Diela a témy</h4>
          <p>
            Mnohé Ondakove diela boli vytvorené len raz, nedajú sa zopakovať, ako napríklad <a v-bind:href="kiosk?null:'https://www.artdispecing.sk/umelci/roman-ondak/loop'" target="_blank"><i>Loop</i></a> na Benátskom bienále alebo dielo <i>SK Parking</i>, ktoré vidíme aj na videu pred budovou Secession vo Viedni. Autor ich koncipoval pre konkrétne miesto a nazývame ich preto <b>miesto-špecifické</b> (site-specific art vytvorené pre daný priestor). Miesto nemá len materiálne vlastnosti, vytvárajú ho aj ľudia tým, ako ho používajú, či aký vzťah k nemu majú. Ak umelec vytvára dielo pre konkrétne miesto, zohľadňuje ako vyzerá, ale aj to, ako ho ľudia v danom kontexte vnímajú. Takéto dielo je iba zriedka možné preniesť na iné miesto. 
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/ondak/ondak_auto.jpg" />
        </div>        

        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            Ondakovu tvorbu môžeme zaradiť ku <b>konceptuálnemu umeniu</b>. Ide o súbor rôznych stratégií, konceptov či ideí, ktoré sú často prebraté z bežného života a prenesené do kontextu umenia. Narúšajú tak hranicu medzi umením a každodenným životom. Ondak zohľadňuje to, na akom mieste a v akom kultúrnom kontexte má byť umelecké dielo vystavené a zaoberá sa aj jeho divákmi. Ako sa správajú v galérii? Prečo tam chodia a čo tam hľadajú?   
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/ondak/ondak_huh.jpg" />
        </div>

        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            Ďalším Ondakovým námetom sú ľudské spomienky, zážitky či zvyky. Tie sú do veľkej miery individuálne, ale existujú aj také, ktoré zdieľajú isté kolektívne hodnoty a sú prítomné naprieč rôznymi kultúrami. Keď sa s nimi stretneme v galérii, vyvolávajú v nás emócie a asociácie. Vo videu sú zobrazené diela, ktoré pracujú s prenosom bežnej situácie do galerijného prostredia. Príkladom je Meranie vesmíru – návštevníci prichádzali do prázdneho priestoru a pracovníci galérie odmerali ich výšku a zakreslili ju na stenu. Dielo Dobré pocity v dobrých časoch tvoril umelý rad pred galériou, ku ktorému sa postupne pridávali okoloidúci.
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/ondak/ondak_rad.jpg" />
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">

        <div class="col-sm-12 col-lg-6 order-2 order-lg-1">
          <img class="framed" src="/img/ondak/ondak_radiator.jpg" />
        </div>

        <div class="col-sm-12 col-lg-6 text-left order-1 order-lg-2">
          <h4>Námety na diskusiu</h4>
          <p class="with-circle">Pred pozretím videa: Čo pre vás znamená <b>každodennosť?</b> Máte ju radi? Alebo ste radšej, keď sú dni stále iné? Je pre vás každodennosť dôležitá? Kedy sa bežná situácia môže stať výnimočnou?</p> 
          <p class="with-circle">Po pozretí videa: Pomenujte, čo všetko môže byť podľa vás <b>umeleckým dielom</b>. Prekvapilo alebo nahnevalo vás niekedy nejaké dielo (v galérii, na internete či v TV)? Popíšte ako a prečo?</p>
          <p class="with-circle">Čo vám napadne, keď vidíte <b>rad</b>, v ktorom čakajú ľudia? Priťahuje vás, lebo ste zvedaví, na čo čakajú? Alebo vás naopak hnevá, že pred vami je množstvo ľudí a vy musíte čakať? Ako by ste sa cítili, keby ste po dlhšom čase zistili, že je to hraný rad? </p>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <h4>Aktivity</h4>
          <p>Roman Ondak v diele <i>Dobré pocity v dobrých časoch</i> hovorí: <i>„Samotný rad nie je ani tak o čase, ale skôr o tom, <b>ako čas vnímame</b>. Keď v rade stojíte, tak sa dostávate do úplne inej roviny vnímania času ako tí, čo ho len pozorujú zvonku.“</i></p>	
		      <p class="with-circle">
          V akej situácii v škole vám najpomalšie / najrýchlejšie <b>plynie čas</b>? Najprv ju podrobne charakterizujte z hľadiska priestoru, zvukov či pocitov. Skúste nájsť spôsob, ako túto situáciu zachytiť napríklad vo forme zvukového záznamu alebo jednoduchého gesta. 
          </p>
        </div>
        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/ondak/ondak_wc.jpg" />
        </div>
        <div class="col-sm-12 col-lg-6 text-left">
					<p class="with-circle">
          <b>Inštruované dielo</b> je dielo, ktoré môže umelec poslať do galérie bez toho, aby tam musel prísť. Pracovníci galérie spravia dielo podľa toho, aký postup im napísal.</p> 
          <p>
          Vyberte si dielo a začnite opisovať ako vyzerá, z čoho je vytvorené a pod. Napísaný text prečítajte svojmu spolužiakovi, ktorý dielo vyhotoví.  
          </p>
        </div>
        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/ondak/ondak_gondola.jpg" />
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
              Rozhovor s umelcom, v ktorom spomína aj diela z videa:
              </dt>
              <dd>
              <a v-bind:href="kiosk?null:'https://www.artantiques.cz/umeni-vsednich-situaci'" target="_blank">
              https://www.artantiques.cz/umeni-vsednich-situaci
              </a>
            </dd>
            <dt>
              Roman Ondak v databáze Kunsthalle Bratislava:
              </dt>
              <dd>
              <a v-bind:href="kiosk?null:'http://artbase.kunsthallebratislava.sk/umelec/7446'" target="_blank">
              http://artbase.kunsthallebratislava.sk/umelec/7446 
              </a>
            </dd>
            <dt>
              Beata Jablonská o Ondakovej tvorbe:
              </dt>
              <dd>
              <a v-bind:href="kiosk?null:'https://www.artdispecing.sk/recenzenti/beata-jablonska/trhliny-v-realite-istoty-v-umeni'" target="_blank">
              https://www.artdispecing.sk/recenzenti/beata-jablonska/trhliny-v-realite-istoty-v-umeni/
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </section>

    <div class="text-center">
      <a v-bind:href="kiosk?null:'../pdfs/Roman_Ondak.pdf'"  class="pdf-link mt-5 mb-3">
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
    profile() { return { ...this.profiles["Roman Ondak"] };}
  },
};
</script>
