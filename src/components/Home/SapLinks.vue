<script setup lang="ts">
import { sapLinks } from "@/data/sapLinks";
import { useStore } from "@/state";
import BaseButton from "@/components/BaseButton.vue";

const store = useStore();
</script>

<template>
  <div class="sap-links">
    <BaseButton
      v-for="opt in sapLinks"
      :key="opt.id"
      :color="opt.color"
      size="small"
      @click="store.getClientData(opt.url)"
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
  padding: 20px 0;
}
</style>
