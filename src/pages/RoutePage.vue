<template>
  <q-page id="home">
    <!--<q-toolbar>

      <q-toolbar-title>
        Job postings
      </q-toolbar-title>
    </q-toolbar>-->

    <div class="text-center">
      <q-banner elevated class="bg-grey-3 text-black" style="height:350px; border-bottom: 1px solid #ddd">
        <br />
        <div class="text-center" style="font-size:14px;">
        <p style="font-size:xxx-large"><b>VIEWPANEL.ME</b></p>
        <br />
        <p style="font-size:x-large">Poiščite prosta delovna mesta, nasvete pri iskanju zaposlitve, različne karierne pripomočke in informacije o spodbudah za zaposlitev. </p>
         <div class="text-center" style="list-style-type: none;">
          <li>Registracija novega uporabnika<q-btn  class="btn--no-hover no-ripple" size="12px" flat round  icon="login" style="" /></li>
          <li>Registracija novega delodajalca<q-btn  class="btn--no-hover no-ripple" size="12px" flat round  icon="login" style="" /></li>
          <li>Registracija novega digitalnega potrdila<q-btn  class="btn--no-hover no-ripple" size="12px" flat round  icon="login" style="" /></li>
          <li>Zaposlovanje tujih državljanov<q-btn  class="btn--no-hover no-ripple" size="12px" flat round  icon="login" style="" /></li>

        </div>

        </div>
        </q-banner>
        </div>

        <div class="text-center">
        <q-banner elevated class="text-black" style="background-color:#397289; height:350px; border-bottom: 1px solid #ddd;">
            <div class="q-pa-md form-style">
            <p class="text-white"><b>Aktivna delovna mesta (EU/EEA)</b></p>

            <q-select class="bg-white" outlined stack-label filled v-model="model" :options="options" label="Država" />

            <br />

            <q-select class="bg-white" outlined stack-label filled v-model="model" :options="options" label="Regija" />

            <br />

            <q-select class="bg-white" outlined stack-label filled v-model="model" :options="options" label="Vrsta dela" />

            <br />

            <q-btn size="lg q-mb-xs" class="full-width" color="blue text-white" label="Iskanje" style="" />

            </div>

      </q-banner>
    </div>

      <div class="text-center">
        <br />
      <q-banner elevated class="text-black" style="background-color:#f3f3f3; border-bottom: 1px solid #ddd; border-top: 1px solid #ddd">

        <q-btn round dense flat size="26px" class="bg-transparent" icon="info" style="color:#0e506b" />

        <div class="col" style="font-size:15px;">
        <p class="text-center text-bold" style="color:#397289">Informacije glede zaposlovanja ukrajinskih državljanov</p>
          <p style="margin-top:-13px">Za osebe iz Ukrajine s priznano začasno zaščito ob prijavi pri Zavodu RS za zaposlovanje.</p>
          <p>Za delodajalce, ki želite zaposliti razseljene osebe iz Ukrajine.</p>
        </div>

    </q-banner>

      <div class="q-pa-md row justify-around" style="border-bottom: 1px solid #ddd;">
        <q-card
        flat
        class="my-card text-black bg-transparent"
        style=""
      >
        <q-card-section style="width:250px">
          <div class="text-h6 text-bold" style="color:#397289;">Zaposlovanje, delo in upokojitev</div>
          <div class="text-subtitle2">Delo je ena od temeljnih svoboščin, ki jih opredeljuje Ustava Republike Slovenije. Državljani si lahko prosto izbirajo zaposlitev, delovna mesta jim morajo biti dostopna pod enakimi pogoji. S področno zakonodajo in spremljajočimi ukrepi si prizadevamo za čim višjo zaposlenost državljanov ter udejanjanje njihove pravice do socialne varnosti, ki vključuje tudi pravico do pokojnine.</div>
        </q-card-section>

      </q-card>

      <q-card
      flat
      class="my-card text-black bg-transparent"
      style=""
    >
    <q-card-section style="width:250px">
      <div class="text-h6 text-bold" style="color:#397289">Država in družba</div>
      <div class="text-subtitle2">Družbo sestavljamo vsi ljudje in raznolike skupine, v katere se povezujemo, da bi zadovoljili svoje potrebe in uveljavili svoje interese. Znotraj družbe je država pomemben, politično organiziran del, ki varuje enakopravnost posameznika, postavlja skupna pravila in skrbi za napredek vseh, saj je blagostanje države in družbe neločljivo povezano.</div>
    </q-card-section>

    </q-card>

    <q-card
    flat
      class="my-card text-black bg-transparent"
  >
  <q-card-section style="width:250px">
    <div class="text-h6 text-bold" style="color:#397289">Izobraževanje, znanost in šport</div>
    <div class="text-subtitle2">Slovenska družba temelji na znanju, zato državljanom zagotavljamo vzgojo in izobraževanje od prvih let življenja do univerze ter spodbujamo vseživljenjsko izobraževanje in učenje. Vsem svojim prebivalcem omogočamo brezplačno osnovno in srednješolsko izobrazbo, vzdržujemo sistem višješolskega in univerzitetnega študija, dijakom in študentom zagotavljamo prehrano, bivanje in možnost dela ter jim pomagamo z različnimi sistemi štipendiranja.</div>
  </q-card-section>

  </q-card>

  <q-card
  flat
      class="my-card text-black bg-transparent"
>
<q-card-section style="width:250px">
  <div class="text-h6 text-bold" style="color:#397289">Finance in davki</div>
  <div class="text-subtitle2">Sistem, ki predstavlja srce sodobne družbe in države. Delovati mora zanesljivo, varno in v korist državljanov. Za doseganje teh ciljev na različne načine skrbimo za proračun države in usmerjamo njegovo porabo, bdimo nad ureditvijo davčnega, bančnega in zavarovalniškega sistema, kapitalskega trga in upravljanja z javnim premoženjem ter skrbno upravljamo z denarnimi sredstvi in z likvidnostjo države.</div>
</q-card-section>

</q-card>

<q-card
flat
class="my-card text-black bg-transparent"
>
<q-card-section style="width:250px">
  <div class="text-h6 text-bold" style="color:#397289">Podjetništvo in gospodarstvo</div>
  <div class="text-subtitle2">Z ukrepi, ki jih sprejemamo na področju gospodarstva in podjetništva, izboljšujemo poslovno okolje ter lajšamo delovanje gospodarskih družb in podjetnikov. Spodbujamo odgovornejše vodenje in sprejemamo administrativne poenostavitve za lažje poslovanje. Predvidljivo in stabilno poslovno okolje privabljata nove investicije in omogočata rast slovenskih izvoznikov. Z vlaganji v raziskave, razvoj in inovacije omogočamo večjo dodano vrednost na zaposlenega ter zagotavljamo več kakovostnih delovnih mest.</div>
</q-card-section>

</q-card>

<q-card
flat
class="my-card text-black bg-transparent"
>
<q-card-section style="width:250px">
  <div class="text-h6 text-bold" style="color:#397289">Zunanje zadeve</div>
  <div class="text-subtitle2">Slovenija je samostojna država in enakopraven del svetovne skupnosti. Smo člani Evropske unije in pakta NATO, dejavni v Združenih narodih, OVSE, Svetu Evrope, OECD ter drugih mednarodnih organizacijah. Naša zunanja politika deluje v interesu naše države za mirno in plodno sodelovanje z vsemi državami sveta, krepitev človekovih pravic, demokracije in varnosti v svetu in za prihodnost celotnega planeta.</div>
</q-card-section>

</q-card>
      </div>
      <!--<q-img class="fit-cover" style="height:400px" src="https://www.pewresearch.org/wp-content/uploads/2019/10/FT_19.10.16_Attitudes-toward-EU_Featured.jpg" />-->

    </div>

<q-banner style="border-bottom: 1px solid #ddd;">
  <q-card class="my-card row" style="">
  <q-img class="" src="https://net-tv.si/wp-content/uploads/2021/09/Univerza-v-Mariboru.jpg" style="height:500px;">
    <div class="absolute-bottom text-h6">
      Raziščite vaše kareriene možnosti kot študenti UM
    </div>
  </q-img>

  <q-card-section>
    Univerza v Mariboru, ustanovljena leta 1975, je s 17 fakultetami, Univerzitetno knjižnico Maribor in Študentskimi domovi druga največja in druga najstarejša univerza v Sloveniji z dolgo tradicijo. V teh letih se je razvila v uspešno znanstveno ustanovo, katere primarna naloga in sveto vodilo je širjenje in plemenitenje znanja. Hitro razvija nova področja delovanja, preizkuša nove metode študija in išče nove načine povezovanja s svojim okoljem.
    <br /><br />
    Interdisciplinarnost je visoko cenjena, saj njene fakultete pokrivajo naravoslovno-matematične, tehniške, medicinske, biotehniške, družboslovne in humanistične ter druge vede. Z ustvarjanjem delovnega okolja, ki vzpodbuja akademsko svobodo želi Univerza v Mariboru spodbuditi doseganje vrhunskih znanstvenih in umetniških dosežkov.
    <br /><br />
    Posebna pozornost se posveča tudi vključevanju študentov v raziskovalno delo in v organe odločevanja ter povezovanju z gospodarstvom tako na področju prenosa znanja in tehnologije v prakso kot na področju povezovanja in mreženja študentov ter diplomantov z delodajalci v smislu prehoda na trg dela. Univerza v Mariboru je institucija, ki ponuja vrsto priložnosti za karierni razvoj. Diplomantke in diplomanti, raziskovalke in raziskovalci, profesorice in profesorji so uspešni na domačem in svetovnem odru.
    <br /><br />
    <q-img class="" style="width:150px;" src="https://ec.europa.eu/info/sites/default/themes/europa/images/svg/logo/logo--en.svg"></q-img>
  </q-card-section>
</q-card>
</q-banner>

  <div class="q-pa-md row">
    <div class="q-pa-md col-xs-6 col-sm-6 col-lg-6">
    <q-card class="my-card" style="">
      <q-img src="https://www.um.si/wp-content/uploads/2022/12/lesena_konstrukcija.jpg">
        <div class="absolute-bottom text-h6">
          Predavanje: Izzivi sodobne lesene gradnje
        </div>
      </q-img>

      <q-card-section>
        Prof. dr. Vesna Žegarac Leskovar deluje kot redna profesorica za področje Arhitektura in prostorsko načrtovanje na Fakulteti za gradbeništvo, prometno inženirstvo in arhitekturo Univerze v Mariboru. Njeno strokovno in znanstveno delo je usmerjeno v raziskave trajnostne arhitekture s poudarkom na temah revitalizacije stavbnega fonda, energetske učinkovitosti, okoljskih vplivov ter kakovosti notranjega okolja stavb. V zadnjem času se intenzivneje posveča tudi družbenemu vidiku trajnostne arhitekture z raziskavami arhitekturne kakovosti ranljivih bivalnih okolij. Med njenimi pomembnimi znanstvenimi dosežki velja omeniti soavtorstvo dveh znanstvenih monografij, Energy-Efficient Timber-Glass Houses in Integrative approach to comprehensive building renovations, ki sta izšli pri založbi Springer in obe prejeli nagrado ARRS za odličnost v znanosti na področju tehnike.
        <br /><br />

        Prof. dr. Miroslav Premrov je zaposlen na Fakulteti za gradbeništvo, prometno inženirstvo in arhitekturo Univerze v Mariboru, kjer deluje kot redni profesor za predmetni področji Lesene konstrukcije in Betonske konstrukcije. Gre za enega izmed najbolj prepoznavnih raziskovalcev na področju lesene gradnje, njegova znanstvena in strokovna aktivnost je izkazana s številnimi referencami. Od leta 1999 se aktivno ukvarja s problemi ojačevanja sovprežnih lesenih konstrukcijskih elementov. Raziskave simultano integrirajo tako konstrukcijski, kakor tudi energetsko učinkovit in okoljski koncept takšnih moderno zasnovanih objektov. Je tudi soavtor treh patentov s področja lesenih stenskih in stropnih elementov ter soavtor računske metode za izračun horizontalne nosilnosti lesenih okvirnih stenskih elementov.
        <br /><br />

        Tematika predavanja: Les je naravni material ter tako že v osnovi okolju najprijaznejši konstrukcijski material, ki pa v postopkih projektiranja skriva tudi mnoge pasti. Mnogi se ravno zaradi tega uporabi lesa pri projektiranju neupravičeno izogibajo, pa čeprav nudi številne priložnosti in izzive. Predavanje, ki sistemsko povezuje v postopkih projektiranja tako arhitekturne, okoljske in konstrukcijske vidike, želi poslušalcem predstaviti tako prednosti kot tudi pomanjkljivosti sodobne lesene gradnje, še posebej leseno-steklene gradnje. Predavatelja bosta v predavanju predstavila številne priložnosti za nadaljnji razvoj takšnih sodobno zasnovanih objektov prihodnosti s ciljem zagotovitve čim boljšega bivalnega ugodja.
        <br /><br />
        <q-img style="width:100px" src="https://www.um.si/wp-content/themes/um_si/assets/images/logo.svg"></q-img>
      </q-card-section>
    </q-card>
  </div>

  <div class="q-pa-md col-xs-6 col-sm-6 col-lg-6">
    <q-card class="my-card" style="">
      <q-img src="https://www.um.si/wp-content/uploads/2022/11/QS-lestvica-grafika.png">
        <div class="absolute-bottom text-h6">
          10. šahovski turnir Univerzitetne knjižnice Maribor
        </div>
      </q-img>

      <q-card-section>
        QS je letos prvič meril tudi trajnostni vidik. Prva izdaja lestvice vključuje 700 univerz in uporablja metodologijo, sestavljeno iz kazalnikov, namenjenih merjenju sposobnosti institucije, da se spopade z največjimi okoljskimi, družbenimi in upravljavskimi (ESG) izzivi na svetu.
        <br /><br />
        Kazalniki so razdeljeni na ukrepe okoljske trajnosti – vključno s trajnostnimi institucijami, trajnostnim izobraževanjem in trajnostnimi raziskavami – in ukrepe socialnega vpliva, ki vključuje enakost, izmenjavo znanja, izobraževalni učinek, zaposljivost in priložnosti ter kakovost življenja.
        <br /><br />
        Podrobnejše poročilo o uvrstitvi naše univerze si lahko preberete v objavljenem dokumentu.
        <br /><br />
<q-img style="width:100px" src="https://www.um.si/wp-content/themes/um_si/assets/images/logo.svg"></q-img>
      </q-card-section>
    </q-card>

  </div>
  </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      prompt: ref(false),
      address: ref(''),
      opt: ref('Jobs'),
      land: ref('EU/EEA'),

      opts: ['Job Market', 'Digital Solutions', 'Data Analytics', 'Digital Marketing', 'Other'],
      lands: [
        'Austria', 'Belgium', 'Bulgaria', 'Cyprus', 'Czech Republic', 'Germany', 'Denmark', 'Estonia', 'Spain', 'Finland', 'France', 'United Kingdom', 'Croatia', 'Ireland, Republic of (EIRE)', 'Italy', 'Lithuania', 'Luxembourg', 'Latvia', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Sweden', 'Slovenia', 'Slovakia'
      ]
    }
  }
}
</script>

<style lang="scss">
body.desktop .q-focusable:focus .q-focus-helper,
body.desktop .q-hoverable:hover .q-focus-helper {
background: inherit;
opacity: 0;
}
body.ios .q-hoverable:active .q-focus-helper {
background: inherit;
opacity: 0;
}
.q-focus-helper {
opacity: 0;
transition: unset;
}
</style>
