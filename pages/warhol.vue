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
          Andy Warhol
        </h1>

        <ArtistProfile
          class="mt-5"
          v-bind:kiosk="kiosk"
          v-bind:profile="{
            ...profile,
            title: '',
            profileText: `Americký maliar, filmový tvorca a dôležitá osobnosť umeleckého hnutia pop-art. Narodil sa a vyrástol v Pittsburghu v rodine rusínskych emigrantov z obce Miková pri Medzilaborciach. Vyštudoval odbor grafický dizajn na Carnegie Institute of Technology v Pittsburghu a presťahoval sa do New Yorku, aby sa venoval kariére komerčného umelca. V 60. rokoch začal vytvárať serigrafie dobre známych amerických produktov ako sú plechovky Campbellovej polievky či Coca-Coly. Neskôr ho preslávili portréty osobností ako Marilyn Monroe, Elizabeth Taylor, Elvis Presley či diktátora Mao Ce-tunga.`
          }"
        />
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <h4 class="text-left">Diela a témy</h4>
          <p>
            Prečo bol Andy Warhol fascinovaný
            <b>reklamou a svetom šoubiznisu</b>? To, čo sa nám dnes zdá úplne
            bežné, bolo pred vyše 60 rokmi niečím novým. Reklama, tak ako ju
            poznáme dnes, sa začala masovo šíriť predovšetkým vďaka
            <b>rozmachu televízie</b>. Koncom 50. rokov sa skoro v každej
            americkej domácnosti nachádzal malý čiernobiely televízny prijímač,
            ktorý zmenil nielen svet reklamy, ale aj kultúry ako takej.
            Televízia sa stala krbom domu a vďaka nej oslovila reklama veľa ľudí
            naraz a priamo doma v obývačke.
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/warhol/warhol_studio.jpg" />
        </div>

        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            Umelci v tomto období reagovali nielen na reklamu, ale aj na dobu, v
            ktorej bol „dobrý život“ definovaný predovšetkým z ekonomického
            hľadiska. Čo to znamená? Otvárali sa nové továrne, ktoré vďaka
            sériovej výrobe dokázali produkty bežnej spotreby vyrábať lacnejšie
            a spravili ich dostupnými pre širší okruh ľudí. Vďaka rozvoju
            <b>masovej produkcie</b> si ľudia mohli užívať radosť z nakupovania
            a reklama im pomáhala vybrať si z množstva produktov na trhu.
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/warhol/warhol_banana.jpg" />
        </div>

        <div class="col-sm-12 col-lg-6 text-left">
          <p>
            Okolo roku 1955 vzniklo nezávisle od seba v Anglicku a v USA nové
            umelecké hnutie <b>POP-ART</b> (skratka slova popular art –
            populárne, masové umenie). Východiskom pop-artu bolo priblížiť
            umenie človeku, životnému štýlu konzumnej spoločnosti a k bežnému
            životu.
          </p>
          <p>
            Medzi typické prejavy pop-artu patrilo zjednodušovanie tvarov,
            neprirodzené zväčšenie objektov, výrazné farby a kontrast. V dielach
            sa často objavovali slávne osobnosti, značky, predmety bežnej
            potreby, komiks či fotografia. Obraz sa stal vecou a vec obrazom.
            Warholovu tvorbu charakterizovalo aj mechanické, a v mnohých
            prípadoch neosobné, sériové vytváranie diel a ich kópií
            sieťotlačovou technikou, ktorá umožňuje takéto diela vytvárať vo
            vyššom počte.
          </p>
        </div>

        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/warhol/warhol_cans.jpg" />
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 order-2 order-lg-1">
          <img class="framed" src="/img/warhol/warhol_cans_idea.jpg" />
        </div>

        <div class="col-sm-12 col-lg-6 text-left order-1 order-lg-2">
          <h4>Námety na diskusiu</h4>
          <p>
            Tvorba Andyho Warhola bola zrkadlom doby a jej kultúry. Pre
            <b>populárnu kultúru</b> je charakteristické, že tvorí hlavný prúd
            každodennej kultúry bežného človeka.
          </p>
          <p class="with-circle">
            Čo si predstavujete pod pojmom populárna kultúra a hlavný prúd? Môže
            byť aj umenie súčasťou populárnej kultúry? Pri odpovedi skúste
            vychádzať z výrokov Andyho Warhola:
          </p>
          <p>
            „V budúcnosti bude mať každý pätnásť minút slávy.“
          </p>
          <p>
            „Keď sa niečo prezentuje ako umenie a povie sa o tom, že to je
            „umenie“, tak to aj je umenie.“
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-lg-6 order-2 order-lg-1">
          <img class="framed" src="/img/warhol/warhol_attraction.jpg" />
        </div>

        <div class="col-sm-12 col-lg-6 text-left order-1 order-lg-2">
          <p class="with-circle">
            Andy Warhol miloval krásu, <b>umelú hmotu</b>, reklamu, veci ktoré
            sa rýchlo menili a boli moderné. Ak by žil dnes, čo by ho zaujímalo
            a inšpirovalo? Vysvetlíte prečo?
          </p>
          <p class="with-circle">
            Aké nástroje používa súčasná reklama? Môže reklama zavádzať? Kedy
            nám reklama pomáha?
          </p>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-6 text-left">
          <h4>Aktivity</h4>
          <p>
            Skôr, ako sa v časopisoch začali objavovať fotografie, bola reklama
            kreslená ručne. Zvoľte si bežný predmet zo svojho okolia a
            <b>vytvorte jeho kreslenú reklamu</b>.
          </p>
          <p class="with-circle">
            Nakreslite jeho tvar čo najvernejšie obyčajnou ceruzkou na papier
            (A4). Čiarami kreslite iba obrysy predmetu, detaily vynechajte.
            Snažte sa využiť celý formát papiera. Na svoju kresbu položte čistý
            papier a oba papiere umiestnite na okno oproti slnku, aby ste
            pôvodnú kresbu vedeli obkresliť. Použite ceruzku alebo
            experimentujte s atramentovým perom. Vytvorte aspoň 2 kópie pôvodnej
            kresby.
          </p>
          <p class="with-circle">
            Nakreslený predmet dotvorte podľa vlastnej fantázie. Na každom
            papieri vytvorte iný návrh zvoleného predmetu, ktorý by sa mohol v
            rámci reklamnej kampane objaviť v časopise. Porozmýšľajte, komu by
            bol predmet v reklame určený a podľa toho vyberajte farby,
            dokresľujte predmet alebo pridávajte detaily. Použite vodové,
            zriedené temperové, akrylové farby alebo farebné ceruzky. Vytvorte 3
            rozdielne reklamné návrhy toho istého predmetu.
          </p>
        </div>
        <div class="col-sm-12 col-lg-6">
          <img class="framed" src="/img/warhol/warhol_products.jpg" />
          <img class="framed" src="/img/warhol/warhol_monroe.jpg" />
        </div>
        <div class="col-sm-12 col-lg-6 text-left">
          <p class="with-circle">
            Starší žiaci môžu zostaviť návrh reklamy do časopisu na vymyslený
            produkt <b>technikou koláže</b>. Zvoľte vhodné farby, mierku a
            jazyk. Vymyslite ľahko zapamätateľný slogan (slogan je stručný,
            zapamätateľný a výstižný text, veta alebo slovné spojenie). Na záver
            slovne zdôvodnite techniky a stratégie, ktoré ste použili vo svojom
            návrhu a svoj návrh predstavte pred spolužiakmi.
          </p>
        </div>
        <div class="col-sm-12 col-lg-6">
          <img
            class="framed"
            src="https://www.webumenia.sk/dielo/nahlad/SVK:OGD.O_2391/800"
          />
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-sm-10 offset-sm-1  col-md-10 offset-md-1 col-lg-6 offset-lg-3">
          <h4>
            Externé odkazy
          </h4>
          <dl class="text-left">
            <dt>
              Andy Warhol na Webe umenia:
            </dt><dd>
              <a v-bind:href="kiosk?null:'https://www.webumenia.sk/autor/11636'" target="_blank">
                https://www.webumenia.sk/autor/11636
              </a>
            </dd>
            <dt>
              Múzeum Andyho Warhola v Pittsburghu:
            </dt><dd>
              <a v-bind:href="kiosk?null:'https://www.warhol.org'" target="_blank">
                https://www.warhol.org
              </a>
            </dd>
            <dt>
              Múzeum moderného umenia Andyho Warhola v Medzilaborciach:
            </dt><dd>
              <a v-bind:href="kiosk?null:'https://www.muzeumaw.sk'" target="_blank">
                https://www.muzeumaw.sk
              </a>
            </dd>
            <dt>
              Videoukážka techniky kresby Andyho Warhola:
            </dt><dd>
                <a v-bind:href="kiosk?null:'https://www.youtube.com/watch?v=laOLC2eYZRM'" target="_blank">
                https://www.youtube.com/watch?v=laOLC2eYZRM
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </section>
 
    <div class="text-center">
      <a v-bind:href="kiosk?null:'../pdfs/Andy_Warhol.pdf'"  class="pdf-link mt-5 mb-3">
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
    profile() {
      return { ...this.profiles["Andy Warhol"] };
    }
  },
};
</script>
