<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { fetchClientData } from "@/api";
import BaseButton from "../components/BaseButton.vue";
import BaseLoader from "../components/BaseLoader.vue";
import HistoryItem from "../components/History/HistoryItem.vue";
import ErrorMessage from "../components/ErrorMessage.vue";

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
      <BaseButton color="secondary" @click="addDays(1, false)">Back</BaseButton>
      <BaseButton color="tertiary" @click="date = today">Today</BaseButton>
      <BaseButton color="secondary" @click="addDays()">Forward</BaseButton>
    </div>
    <h2 class="history-page__title">{{ date.toLocaleDateString("en-GB") }}</h2>
  </div>
  <BaseLoader v-if="loading" />
  <div v-else-if="log.length > 0">
    <HistoryItem v-for="item in log" :key="item.timestamp" :item="item" />
  </div>
  <ErrorMessage
    v-else
    type="warn"
    message="No results for this day"
    :button="false"
  />
</template>

<style scoped lang="scss">
.history-page {
  &__controlls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
  }
  &__actions {
    display: flex;
    gap: 10px;
  }
  &__title {
    color: $primary;
  }
}
</style>
