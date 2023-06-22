<script setup lang="ts">
import { onMounted, ref, computed } from "vue";

export interface Item {
  "1k_cs": string;
  "1k_dchain": string;
  "1k_price": string;
  "4k_cs": string;
  "4k_dchain": string;
  assesment: string;
  assesment_date: string;
  catalog: string;
  cert: string;
  cert_name: string;
  cert_status: string;
  china_energy_lbl: string;
  date: string;
  description: string;
  duplicate: string;
  dwerk_plant_code: string;
  dwerk_plant_status: string;
  india_gst_inhts: string;
  india_gst_stuec: string;
  india_gst_taxm1: string;
  location: string;
  matnr: string;
  mif_date: string;
  mif_soerf_check: string;
  mtart: string;
  pgc: string;
  req_1k_cs: string;
  req_1k_dchain: string;
  req_catalogue: string;
  req_comment: string;
  req_legacy_no: string;
  req_material_type: string;
  req_reson: string;
  requestor: string;
  sales_text: string;
  series: string;
  service: string;
  soerf_date: string;
  target_plant: string;
  target_plant_mrp_type: string;
  target_plant_status: string;
  target_sorg: string;
  target_sorg_DWERK: string;
  target_sorg_cs: string;
  target_sorg_dchain: string;
  target_sorg_price: string;
  target_sorg_pub: string;
}

const items = ref<Item[]>();
const showRequestData = ref(false);
const showIndiaData = ref(false);

const requestDataClass = computed(() =>
  showRequestData.value ? "" : "hidden"
);
const indiaDataClass = computed(() => (showIndiaData.value ? "hidden" : ""));
const turncatedText = (text: string) =>
  text.length > 20 && !!text ? text.substring(0, 20) : text;

const getData = async (): Promise<Item[] | undefined> => {
  const response = await fetch("http://localhost:5000/api/all");
  const jsonData = (await response.json()) as Item[];
  console.log(jsonData[0]);
  return jsonData;
};

onMounted(async () => {
  items.value = await getData();
});
</script>

<template>
  <h1>APMM</h1>
  <v-table v-if="items" density="compact" :hover="true">
    <thead>
      <tr>
        <th>Date:</th>
        <th>Target Sorg:</th>
        <th>Target Plant:</th>
        <th>Requestor:</th>
        <th>MATNR:</th>
        <th>Service:</th>
        <th>Location:</th>
        <th :class="requestDataClass">REQ Catalogue:</th>
        <th :class="requestDataClass">REQ MTART:</th>
        <th :class="requestDataClass">REQ 1K DCHAIN:</th>
        <th :class="requestDataClass">REQ 1K CS:</th>
        <th :class="requestDataClass">REQ Reason:</th>
        <th :class="requestDataClass">REQ Comment:</th>
        <th>Duplicate:</th>
        <th>Description:</th>
        <th>Catalogue:</th>
        <th>Series:</th>
        <th>MTART:</th>
        <th>1k DCHAIN:</th>
        <th>1k CS:</th>
        <th>1k PRICE:</th>
        <th>4k DCHAIN:</th>
        <th>4k CS:</th>
        <th>?:</th>
        <th>Trg SORG price:</th>
        <th>Trg SORG DCHAIN:</th>
        <th>Trg SORG DWERK:</th>
        <th>Trg SORG CS:</th>
        <th>Trg PLANT status:</th>
        <th>Trg PLANT mrp:</th>
        <th>DWERK status:</th>
        <th>DWERK PLANT code:</th>
        <th>mif / soerf:</th>
        <th>Sales text:</th>
        <th :class="indiaDataClass">GST INHTS:</th>
        <th :class="indiaDataClass">GST STEUC:</th>
        <th :class="indiaDataClass">GST taxm1:</th>
        <th :class="indiaDataClass">Energy Label:</th>
        <th>Cert:</th>
        <th>Cert name:</th>
        <th>Cert status:</th>
        <th>Cert assessment:</th>
        <th>Cert assessment date:</th>
        <th>MIF date:</th>
        <th>SOERF date:</th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr v-for="item in items">
        <th v-for="i in item">{{ i ? turncatedText(i) : null }}</th>
      </tr> -->
      <tr v-for="i in items">
        <td class="req-form-data">
          <v-text-field
            v-model="i.date"
            density="compact"
            variant="underlined"
            type="datetime-local"
          ></v-text-field>
        </td>
        <td class="req-form-data">
          <v-text-field
            v-model="i.target_sorg"
            density="compact"
            variant="underlined"
          ></v-text-field>
        </td>
        <td class="req-form-data">{{ i.target_plant }}</td>
        <td class="req-form-data">{{ i.requestor }}</td>
        <td class="req-form-data">{{ i.matnr }}</td>
        <td class="req-form-data">{{ i.service }}</td>
        <td class="req-form-data">{{ i.location }}</td>
        <td :class="requestDataClass">{{ i.req_catalogue }}</td>
        <td :class="requestDataClass">{{ i.req_material_type }}</td>
        <td :class="requestDataClass">{{ i.req_1k_dchain }}</td>
        <td :class="requestDataClass">{{ i.req_1k_cs }}</td>
        <td :class="requestDataClass">{{ i.req_reson }}</td>
        <td :class="requestDataClass">{{ i.req_comment }}</td>
        <td :class="requestDataClass">{{ i.req_legacy_no }}</td>
        <td>{{ i.duplicate }}</td>
        <td>{{ i.description }}</td>
        <td>{{ i.catalog }}</td>
        <td>{{ i.series }}</td>
        <td>{{ i.mtart }}</td>
        <td>{{ i["1k_dchain"] }}</td>
        <td>{{ i["1k_cs"] }}</td>
        <td>{{ i["1k_price"] }}</td>
        <td>{{ i["4k_cs"] }}</td>
        <td>{{ i["4k_dchain"] }}</td>
        <td>{{ i.pgc }}</td>
        <td>{{ i.target_sorg_price }}</td>
        <td>{{ i.target_sorg_dchain }}</td>
        <td>{{ i.target_sorg_DWERK }}</td>
        <td>{{ i.target_sorg_cs }}</td>
        <td>{{ i.target_sorg_pub }}</td>
        <td>{{ i.target_plant_status }}</td>
        <td>{{ i.target_plant_mrp_type }}</td>
        <td>{{ i.dwerk_plant_status }}</td>
        <td>{{ i.dwerk_plant_code }}</td>
        <td>{{ i.mif_soerf_check }}</td>
        <td>{{ i.sales_text }}</td>
        <td :class="indiaDataClass">{{ i.india_gst_inhts }}</td>
        <td :class="indiaDataClass">{{ i.india_gst_stuec }}</td>
        <td :class="indiaDataClass">{{ i.india_gst_taxm1 }}</td>
        <td :class="indiaDataClass">{{ i.china_energy_lbl }}</td>
        <td>{{ i.cert }}</td>
        <td>{{ i.cert_name }}</td>
        <td>{{ i.cert_status }}</td>
        <td>{{ i.assesment }}</td>
        <td>{{ i.assesment_date }}</td>
        <td>{{ i.mif_date }}</td>
        <td>{{ i.soerf_date }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped>
.req-form-data {
  background-color: #bfb277;
}
.read-the-docs {
  color: #888;
}
.hidden {
  display: none;
}
</style>
