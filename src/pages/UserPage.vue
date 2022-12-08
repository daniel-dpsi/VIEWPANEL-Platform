<template>
  <router-view />
  <q-toolbar class="text-black">

   <!-- <q-toolbar-title>
      User access
    </q-toolbar-title>-->

    <q-btn flat round dense color="white" icon="login" href="positions" />
    <q-btn class="q-pl-md" flat round dense color="white" icon="add" href="user" />

  </q-toolbar>

  <div class="q-pa-md form-style">

    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6 text-center">Login</div>
      </q-card-section>

      <q-card-section class="q-pt-none text-center">
        Forgot your password? <a href="">Click here.</a>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-form
      class="q-gutter-md"
    >
      <q-input
        label="Email"
        v-model="email"
      >
      <template v-slot:append>
        <q-icon name="close" />
      </template>
      </q-input>

      <q-input
        label="Password"
        v-model="password"
      >
      <template v-slot:append>
        <q-icon name="close" />
      </template>
      </q-input>

      <div class="text-center">
        <q-btn @click="login" label="Submit" color="primary"/>
        <!--<q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />-->
      </div>
    </q-form>
      </q-card-section>
    </q-card>

  </div>

  <div class="q-pa-md form-style q-mt-xl">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6 text-center">VIEWPANEL UNLIMITED</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="text-center">
        <b>€4.89</b> / Monthly
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-pt-none text-center q-pt-md">
        Unrestricted access to job listings.
        <br />
        Direct contact with the hiring managers.
        <br />
        EU's leading business networking community.
        <br />
        Apply to positions directly via VIEWPANEL.
        <br />
        Get notified regarding new opportunities via E-Mail.

      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div class="text-center">
          <q-btn class="full-width" label="activate" type="submit" color="primary"/>
        </div>
      </q-card-section>
    </q-card>
  </div>

  <div class="q-pa-md form-style q-mt-xl">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6 text-center">Sign Up</div>
      </q-card-section>

      <q-card-section class="q-pt-none text-center">
        Requires a valid license key which is provided to you upon activating a subscription for <b>VIEWPANEL UNLIMITED.</b>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-form
      class="q-gutter-md"
    >
    <q-input
    filled
    label="Email"
    outlined
    hint=""
  >
  <template v-slot:append>
    <q-icon name="close" />
  </template>
  </q-input>

  <q-input
    filled
    label="Password"
    type="password"
  >
  <template v-slot:append>
    <q-icon name="close" />
  </template>
  </q-input>

      <div class="text-center">
        <q-btn @click="fetchOrders" label="Login" type="login" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn @click="test" label="test"  color="red" flat class="q-ml-sm" />
      </div>
    </q-form>
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
import axios from 'axios'

const columns = [
  {
    name: ''
  }
]
const rows = [
  {
    name: ''
  }
]
export default {
  setup () {
    return {
      columns,
      rows
    }
  },
  data: function () {
    return {
      orders: []
    }
  },
  methods: {
    fetchOrders: function () {
      try {
        axios
          .get('http://127.0.0.1:8000/api/jobs')
          .then((response) => {
            this.orders = response.data
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (error) {
        console.log(error) // V kolikor je povezava ne uspesna javi v konzolo (500 Internal server error)
      }
    },
    changeStatus: function () {
      try {
        axios
          .put('http://127.0.0.1:8000/api/order/{id}', this.orders.Status)
          .then((response) => {
            this.orders.Status = response.data.Status
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (error) {
        console.log(error) // V kolikor je povezava ne uspesna javi v konzolo (500 Internal server error)
      }
    }
  }
  /* mounted: function () {
    axios
      .get("http://127.0.0.1:8000/api/orders")
      .then((response) => {
        this.orders = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, */
}
</script>

<style lang="scss">
.form-style {
  margin: 0 auto;
  max-width: 500px;
}
</style>
