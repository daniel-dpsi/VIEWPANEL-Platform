<template>
  <q-layout view="lHh Lpr lff">
    <q-header reveal elevated class="text-white row" style="background-color:#397289">

      <div class="q-pt-lg" style="margin-top:12px">
      <q-btn size="16px" flat @click="dialog = true" dense round  icon="menu" style="" />
      <q-btn size="14px" flat @click="dialog = true" dense round icon="search" style="" />
</div>

      <q-toolbar-title stack class="text-right q-mr-sm q-mt-sm">
          <img src="https://www.ft.um.si/wp-content/uploads/logo_um_bel.png" style="width:170px">
      </q-toolbar-title>

      <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="text-white q-pa-md" style="background-color: #397289;">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6" style="">
            <a style="text-decoration:none; color:white" href="">VIEWPANEL.ME</a>
          <br /><br />
          <a style="text-decoration:none; color:white" href="list"><b>Delovna mesta</b></a>
          <br />
          <a style="text-decoration:none; color:white" href="services"><b>Storitve</b></a>
          <br />
          <a style="text-decoration:none; color:white" href="network"><b>Skupnost</b></a>
          <br />
          <a style="text-decoration:none; color:white" href="account"><b>Nastavitve</b></a>
          <br /><br />

          <a style="text-decoration:none; color:white" href="https://www.um.si/">Univerza v Mariboru</a>
          <br />
          <a style="text-decoration:none; color:white" href="https://www.ess.gov.si/">Zavod za zaposlovanje</a>
          <br />
          <a style="text-decoration:none; color:white" href="https://gov.si/">Državna uprava</a>
          <br />
          <a style="text-decoration:none; color:white" href="https://erasmus-plus.ec.europa.eu/">Erasmus</a>
          <br />
          <a style="text-decoration:none; color:white" href="https://ec.europa.eu/">Evropska Komisija</a>
          <br /><br />

          <a style="text-decoration:none; color:white" href="network">Družbena omrežja</a>
          <br />
          <a style="text-decoration:none; color:white" href="account">O spletnem portalu</a>
          <br />
          <a style="text-decoration:none; color:white" href="account">Kontakt in več informacij</a>
          <br /><br /><br />
      </div>
      © 2022 VIEWPANEL
        </q-card-section>

        <q-card-section class="">

        </q-card-section>
      </q-card>
    </q-dialog>

    </q-header>
    <!--<q-header reveal elevated class="bg-indigo text-white">
      <q-toolbar class="">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>
          <a href="/" style="text-decoration:none; color:white">VIEWPANEL.ME</a>
        </q-toolbar-title>

          <q-btn flat dense color="white" icon="person" label="LOGIN" href="user" />

      </q-toolbar>
      <q-tabs v-model="tab" class="" >
        <a style="text-decoration:none; color:white" href="list"><q-tab name="images" label="Listings"></q-tab></a>
        <a style="text-decoration:none; color:white" href="services"><q-tab name="images" label="Services"></q-tab></a>
        <a style="text-decoration:none; color:white" href="network"><q-tab name="images" label="Network"></q-tab></a>
        <a style="text-decoration:none; color:white" href="account"><q-tab name="images" label="Account"></q-tab></a>
      </q-tabs>
    </q-header>-->

    <q-drawer
    v-model="drawer"
    :permanent="isComputer"
    :width="300"
    :breakpoint="400"
  >
    <q-scroll-area class="" style="height: calc(100% - 150px); margin-top: 150px; margin-left: -15px; border-right: 0px solid #ddd">
      <q-list padding class="text-bold" style="font-size: medium;">
        <q-item clickable v-ripple>
          <q-item-section avatar>

          </q-item-section>

          <q-item-section>
            Domov
          </q-item-section>
        </q-item>

        <q-item active clickable v-ripple active-class=" text-cyan-9">
          <q-item-section avatar>

          </q-item-section>

          <q-item-section>
            Zaposlitve
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>

          </q-item-section>

          <q-item-section>
            Delodajalci
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>

          </q-item-section>

          <q-item-section>
            Statistika
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>

          </q-item-section>

          <q-item-section>
            Obvestila
          </q-item-section>
        </q-item>

      </q-list>
    </q-scroll-area>

    <div class="absolute-top" style="height: 150px">
      <div class="text-center bg-transparent q-pt-lg" style="">
         <q-img src="https://www.ess.gov.si/_files/1/zavod-zaposlovanje.gif" style="width:190px"></q-img>
      </div>
    </div>
  </q-drawer>

    <q-footer bordered class="" style="background-color:#397289">
      <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-white" v-model="tab">
        <q-tab name="images" label="© 2022 VIEWPANEL" />
        <q-tab name="videos" label="TOS" />
        <q-tab name="articles" label="FAQ" />
        <a style="text-decoration:none; color:white" href="https://linkedin.com/in/viewpaneldaniel"><q-tab name="images" label="LinkedIn"></q-tab></a>
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false),
      dialog: ref(false),
      maximizedToggle: ref(true)
    }
  },
  isComputer () {
    return this.$vuetify.breakpoint.name !== 'xs'
  },
  showDrawer () {
    return this.isComputer || this.drawer
  }
}
</script>

<style>
</style>
