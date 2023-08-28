<script setup lang="ts">
import { sapLinks } from "@/data/sapLinks";
import { fetchClientData } from "@/api";
import BaseButton from "@/components/BaseButton.vue";
</script>

<template>
  <div class="sap-links">
    <BaseButton
      v-for="opt in sapLinks"
      :key="opt.id"
      :color="opt.color"
      size="small"
      @click="fetchClientData(opt.url)"
    >
      {{ opt.label }}
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.sap-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}
</style>
