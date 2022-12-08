<template>
  <q-page id="lists">
    <!--<q-toolbar>

      <q-toolbar-title>
        Job postings
      </q-toolbar-title>
    </q-toolbar>-->
    <br />
    <div class="text-center" style="font-size:14px;">
      <p style="font-size:xxx-large"><b>Iskanje dela</b></p>
    </div>

      <q-expansion-item
      class="bg-grey-3 q-ma-md"
      expand-separator
      icon="perm_identity"
      label="Sortiraj"
      caption="Prilagodite izpis"
    >
      <q-card>
        <q-card-section>
          <div class="q-pa-md form-style">

            <q-select outlined stack-label filled disable v-model="model" :options="options" label="Območje" />

             <q-select class="q-pt-md" outlined stack-label filled  v-model="city" :options="cities" label="Država" />

             <q-select class="q-pt-md" outlined stack-label filled  v-model="city" :options="cities" label="Regija" />

             <q-select class="q-pt-md" outlined stack-label filled  v-model="city" :options="cities" label="Mesto" />

             <q-select class="q-pt-md" outlined stack-label filled  v-model="city" :options="cities" label="Področje" />

             <q-btn class="q-mt-lg text-white" label="Prikaži" style="background-color:#397289"></q-btn>

            </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>

      <div class="q-pa-md">
        <q-table
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
      >

        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width />
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn size="sm" color="" style="background-color:#397289" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
            </q-td>
            <q-td
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.value }}
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <q-item clickable v-ripple :href="props.row.url">
                <q-item-section side>
                  <q-avatar rounded size="64px">
                    <img :src="props.row.srcLogo" />
                    <!--<q-badge floating color="blue">new</q-badge>-->
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{props.row.src}}</q-item-label>
                  <q-item-label caption>{{props.row.url}}</q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section side>
                  <q-avatar rounded size="64px">
                    <img :src="props.row.logo" />
                    <!--<q-badge floating color="blue">new</q-badge>-->
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{props.row.company}}</q-item-label>
                  <q-item-label caption>{{props.row.phone}}</q-item-label>
                  <q-item-label caption>{{props.row.contact}}</q-item-label>
                  <q-item-label caption>{{props.row.address}}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </q-tr>
        </template>

      </q-table>
      </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'NAZIV',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'dateStart', align: 'center', label: 'DATUM OBJAVE', field: 'dateStart' },

  { name: 'location', align: 'center', label: 'LOKACIJA', field: 'location' },

  { name: 'field', align: 'center', label: 'PODROČJE', field: 'field' },

  { name: 'type', align: 'center', label: 'TIP', field: 'type' },

  { name: 'salary', align: 'center', label: 'PLAČILO', field: 'salary' }
]

const rows = [
  {
    id: 1,
    name: 'Razvijalec Mobilnih Aplikacij',
    dateStart: '2022-02-02',
    dateEnd: '2022-03-03',
    location: 'Ljubljana, Slovenia',
    type: 'Hybrid',
    field: 'Računalništvo in Programiranje',
    salary: '1350-1450 EUR',
    info: 'Išče se razvijalec za tel',
    url: 'https://www.ess.gov.si/iskalci-zaposlitve/iskanje-zaposlitve/iskanje-dela/?idp=2923715/#/pdm/2923715',
    src: 'ZRSZ',
    srcLogo: 'https://www.ess.gov.si/typo3conf/ext/ag_zrsz/Resources/Public/Images/zrsz_logo_icon.svg',
    srcUser: 'Blaž Novak',
    phone: '041 555 555',
    contact: 'zaposlitev@viewpanel.me',
    address: 'Poskusna Ul. 4, 2000 MARIBOR',
    company: 'ManpowerGroup d.o.o.',
    logo: 'https://manpower.si/images/logo.jpg',
    created_at: '2022-03-03T00:00:00.000000Z',
    updated_at: '2022-03-03T00:00:00.000000Z'
  },
  {
    id: 2,
    name: 'Testing',
    dateStart: '2022-02-02',
    dateEnd: '2022-03-03',
    location: 'Ljubljana, Slovenia',
    type: 'Hybrid',
    field: 'Računalništvo in Programiranje',
    salary: '1350-1450 EUR',
    info: 'Išče se razvijalec za tel',
    url: 'https://google.com/',
    src: 'MojeDelo',
    srcLogo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/3e/a6/ad/3ea6ad8f-ee19-a92c-6a8a-8eee79f6e619/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg',
    srcUser: 'Blaž Novak',
    phone: '041 555 555',
    contact: 'zaposlitev@viewpanel.me',
    address: 'Poskusna Ul. 4, 2000 MARIBOR',
    company: 'ManpowerGroup d.o.o.',
    logo: 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
    created_at: '2022-03-03T00:00:00.000000Z',
    updated_at: '2022-03-03T00:00:00.000000Z'
  },
  {
    id: 3,
    name: 'Newer',
    dateStart: '2022-02-02',
    dateEnd: '2022-03-03',
    location: 'Ljubljana, Slovenia',
    type: 'Hybrid',
    field: 'Računalništvo in Programiranje',
    salary: '1350-1450 EUR',
    info: 'Išče se razvijalec za tel',
    contact: 'admin@testing.me',
    url: 'https://google.com/',
    company: 'ManpowerGroup d.o.o.',
    logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/3e/a6/ad/3ea6ad8f-ee19-a92c-6a8a-8eee79f6e619/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg',
    created_at: '2022-03-03T00:00:00.000000Z',
    updated_at: '2022-03-03T00:00:00.000000Z'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]

export default {
  setup () {
    const $q = useQuasar()

    const selected = ref([])
    const lastIndex = ref(null)
    const tableRef = ref(null)

    return {
      selected,
      lastIndex,
      tableRef,

      columns,
      rows,

      getSelectedString () {
        return selected.value.length === 0 ? '' : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${rows.length}`
      },

      onSelection ({ rows, added, evt }) {
        if (rows.length === 0 || tableRef.value === void 0) {
          return
        }

        const row = rows[0]
        const filteredSortedRows = tableRef.value.filteredSortedRows
        const rowIndex = filteredSortedRows.indexOf(row)
        const localLastIndex = lastIndex.value

        lastIndex.value = rowIndex
        document.getSelection().removeAllRanges()

        if ($q.platform.is.mobile === true) {
          evt = { ctrlKey: true }
        } else if (evt !== Object(evt) || (evt.shiftKey !== true && evt.ctrlKey !== true)) {
          selected.value = added === true ? rows : []
          return
        }

        const operateSelection = added === true
          ? selRow => {
            const selectedIndex = selected.value.indexOf(selRow)
            if (selectedIndex === -1) {
              selected.value = selected.value.concat(selRow)
            }
          }
          : selRow => {
            const selectedIndex = selected.value.indexOf(selRow)
            if (selectedIndex > -1) {
              selected.value = selected.value.slice(0, selectedIndex).concat(selected.value.slice(selectedIndex + 1))
            }
          }

        if (localLastIndex === null || evt.shiftKey !== true) {
          operateSelection(row)
          return
        }

        const from = localLastIndex < rowIndex ? localLastIndex : rowIndex
        const to = localLastIndex < rowIndex ? rowIndex : localLastIndex
        for (let i = from; i <= to; i += 1) {
          operateSelection(filteredSortedRows[i])
        }
      }
    }
  }
}
</script>

<style lang="scss"></style>
