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
          Anna Daučíková
        </h1>

        <ArtistProfile
          v-bind:kiosk="kiosk"
          v-bind:profile="{ 
            ...profile, 
            title: '', 
            profileText: `Anna Daučíková študovala v ateliéri Sklo v architektúre na Vysokej škole výtvarných umení v Bratislave. Od roku 1999 do roku 2002 pôsobila na Katedre grafiky VŠVU, neskôr viedla ateliér Videa a multimediálnej tvorby. V rokoch 2010 až 2019 viedla ateliér Nových médií na Akadémii výtvarných umení v Prahe.`
           }"
        />
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <h4 class="text-left">Diela a témy</h4>
          <p>
            Tvorba Anny Daučíkovej zahŕňa prácu so sklom, šperk, maľbu, fotografiu, performanciu a <b>video</b>, ktorému sa v súčasnosti venuje najviac. Keďže video predstavuje prechod od statického obrazu k pohyblivému, kamera je pre ňu najvhodnejším nástrojom na sprostredkovanie procesu zmeny. Veci totiž nevníma ako raz a navždy dané, ale naopak, ako premenlivé a neustále sa utvárajúce - tak, ako sa neustále vyvíja a utvára naša osobnosť.  
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/daucikova/daucikova_kamera.jpg" />
        </div>
      </div>        

      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            Výraznými témami Anny Daučíkovej sú <b>telo a telesnosť, identita, intimita</b>. Ako transsexuálna umelkyňa, ktorej identita sa nezhoduje s jej biologickým pohlavím, skúma cez vlastné telo a prežívanie širší kultúrny a spoločenský kontext. Pocit inakosti, nespokojnosti s tým, do akých rámcov sa nás spoločnosť niekedy snaží vtesnať, aké role sa nám snaží vnútiť, sa u nej prejavuje po celý život. Umenie jej poskytuje priestor, kde ich môže rôznymi spôsobmi vyjadriť a slobodnejšie o nich uvažovať.     
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
            <img class="framed" src="/img/daucikova/daucikova_vychova.jpg" />
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            Vo videu predstavené <b>autoportréty</b> zachytávajú jej túžbu po zmene identity, telesnosti. Na prvom z nich svoju tvár prekrýva šperkom – maskou, na ďalších vtipne dopĺňa svoje telo časťami, ktoré mu chýbajú.
          </p>
          <p>
            V staršom fotografickom cykle <i>Moskva / Ženy / Nedeľa</i> zachytáva moskovské ženy na ranných nedeľných nákupoch. Otvára tak otázku <b>typických ženských rolí</b> v spoločnosti.
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/daucikova/daucikova_zeny.jpg" />
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <p>
          Po návrate z Moskvy spoluzaložila združenie <b>Aspekt</b>, ktoré sa venuje <b>rodovej rovnosti a feminizmu</b> – hnutiu presadzujúcemu práva žien a snažiacemu sa odstrániť diskrimináciu na základe pohlavia na všetkých úrovniach, v spoločnosti i v súkromí. Takúto diskrimináciu považuje za sociálny problém – dôsledok toho, ako je nastavené vnímanie a postavenie mužov a žien. 
          </p>
          <p>
          Pre Annu Daučíkovú predstavujú feministické myšlienky pevný základ jej postoja a uvažovania nielen v tvorbe.
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/daucikova/daucikova_aspekt.jpg" />
        </div>
      </div>

    </section>

    <section class="container">
      <div class="row">

        <div class="col-sm-12 col-lg-6 order-2 order-lg-1">
          <img class="framed" src="/img/daucikova/daucikova_wecare.jpeg" />
        </div>

        <div class="col-sm-12 col-lg-5 text-left order-1 order-lg-2">
          <h4>Námety na diskusiu</h4>
          <p class="with-circle">Uvažujte o pojme <b>identita</b>. Čo ju tvorí? Skúste porozmýšľať, čo konkrétne sa najvýznamnejšie podieľa(lo) na utváraní vašej identity. Môže sa identita človeka v rôznych situáciách či prostrediach meniť? </p> 
          <p class="with-circle">Jedným z faktorov, ktoré ovplyvňujú našu identitu, je <b>pohlavie</b>. Spíšte si činnosti alebo situácie, ktoré sa väčšinou spájajú s mužmi a tie prisudzované ženám. Premýšľajte, prečo je to tak a do akej miery je to nemenné. Stretli ste sa niekedy, alebo počuli ste o diskriminácii na základe rodu? Prečo je dôležité sa o tom rozprávať? Poznáte niekoho, kto sa vo svojom tele necíti dobre? Čo všetko môže na takýto pocit vplývať?</p>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <h4>Aktivity</h4>
          <p class="with-circle">
            Funkciou <b>autoportrétu</b> je okrem zachytenia podoby tiež skúmanie a spoznávanie samého seba. Pozorujte sa v zrkadle a na pauzovací papier fixkami zachyťte čo najvernejšie svoju podobu. Náš výzor je ale iba jedna vrstva, ktorá tvorí našu osobnosť, našu identitu. Vezmite si ďalšie pauzovacie papiere a na každý z nich zakreslite to, čo spoluvytvára vašu osobnosť – činnosť, ktorú najradšej robíte, predmety, ktoré najčastejšie používate či váš najintenzívnejší zážitok. Takto si môžete vytvoriť ďalšie nákresy, ktoré vás spoločne charakterizujú. 
          </p>
          <p>
            Navrch uložte vašu podobu a všetky ostatné papiere uložte pod ňu. Vznikne vám autoportrét s viacerými vrstvami.	
		      </p>
        </div>
        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/daucikova/daucikova_sluchadla.jpg" />
        </div>
      </div>

      <div class="row">
        
        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/daucikova/daucikova_video.jpg" />
        </div>

        <div class="col-sm-12 col-lg-6 text-left">
          <h4>Aktivity</h4>
          <p class="with-circle">
            Annu Daučíkovú nezaujíma iba to, na čo sa cez kameru pozerá, ale aj pohľad samotný. Aký dôležitý je pre vás pohľad iných? Prispôsobujete sa mu? Do akej miery si to uvedomujete? 
          </p>	
          <p>
          Vytvorte <b>sériu krátkych videí</b> z vášho domáceho prostredia alebo miesta, kde budete sami. Nakrúcajte sa pri každodenných činnostiach, ktoré bežne robievate. Zmenilo sa pred kamerou v niečom vykonávanie týchto činností alebo váš pocit z nich? Hoci ste pri nich boli sami, predsa na vás spočíval pohľad kamery – uvažujte, či a ako ste sa tomu prispôsobili. 
          </p>
        </div>
        
      </div>

    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 ">
          <h4>
            Externé odkazy
          </h4>
          <ul class="text-left">
						<li>
              Viac o autorke a jej tvorbe:
              <a href="http://artbase.kunsthallebratislava.sk/umelec/1918" target="_blank">
                http://artbase.kunsthallebratislava.sk/umelec/1918
              </a>
            </li>
            <li>
              Profil autorky v lexikóne Ars:
              <a href="https://www.arslexicon.sk/?registre&objekt=daucikova-anna" target="_blank">
                https://www.arslexicon.sk/?registre&objekt=daucikova-anna
              </a>
            </li>
            <li>
              Metodické materiály združenia Aspekt o rodovocitlivej pedagogike pre učiteľov:
              <a href="http://www.ruzovyamodrysvet.sk/sk/hlavne-menu/ucebna" target="_blank">
                http://www.ruzovyamodrysvet.sk/sk/hlavne-menu/ucebna
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div class="text-center">
      <Button v-bind:text="downloadPdf" v-bind:href="'../pdfs/Anna_Daucikova.pdf'" :newTab="true" class="mt-4" />
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
    profile() { return { ...this.profiles["Anna Daučíková"] };}
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
