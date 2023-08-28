<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { fetchClientData } from "@/api";
import BaseButton from "../components/BaseButton.vue";
import BaseLoader from "../components/BaseLoader.vue";
import HistoryItem from "../components/History/HistoryItem.vue";

const today = new Date();
const date = ref(today);
const log = ref([]);
const loading = ref(false);

const addDays = (days = 1, up = true) => {
  const currentDate = new Date(date.value);
  up
    ? currentDate.setDate(currentDate.getDate() + days)
    : currentDate.setDate(currentDate.getDate() - days);
  date.value = currentDate;
};

const getActionLog = async (date = new Date()) => {
  loading.value = true;
  const selectedDate = date ? `&date=${date.toLocaleDateString("en-GB")}` : "";
  const url = `/api/history?response_type=json${selectedDate}`;
  const data = await fetchClientData(url);
  log.value = data;
  loading.value = false;
};

onMounted(() => {
  getActionLog(date.value);
});

watch(date, (newVal) => {
  getActionLog(newVal);
});
</script>

<template>
  <div class="history-page__controlls">
    <div class="history-page__actions">
      <BaseButton @click="addDays(1, false)">Back</BaseButton>
      <BaseButton @click="date = today">Today</BaseButton>
      <BaseButton @click="addDays()">Forward</BaseButton>
    </div>
    <h2>{{ date.toLocaleDateString("en-GB") }}</h2>
  </div>
  <BaseLoader v-if="loading" />
  <div>
    <HistoryItem v-for="item in log" :key="item.timestamp" :item="item" />
  </div>
</template>

<style scoped lang="scss">
.history-page {
  &__controlls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__actions {
    display: flex;
    gap: 10px;
  }
}
</style>
