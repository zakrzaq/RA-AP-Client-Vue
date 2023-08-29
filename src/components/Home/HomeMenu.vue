<script setup lang="ts">
import { amOptions, pmOptions, utilOptions } from "@/data/HomeMenuOptions";
import { useStore } from "@/state";
import BaseButton from "@/components/BaseButton.vue";

const store = useStore();
</script>

<template>
  <div class="menu-options">
    <div class="menu-options__column">
      <h3>AM Run:</h3>
      <BaseButton
        v-for="opt in amOptions"
        :key="opt.id"
        width="full"
        :color="opt.color"
        @click="store.getClientData(opt.url)"
        >{{ opt.label }}</BaseButton
      >
    </div>
    <div class="menu-options__column">
      <h3>PM Run:</h3>
      <BaseButton
        v-for="opt in pmOptions"
        :key="opt.id"
        width="full"
        :color="opt.color"
        @click="store.getClientData(opt.url)"
        >{{ opt.label }}</BaseButton
      >
    </div>
    <div class="menu-options__column">
      <h3>Utility:</h3>
      <BaseButton
        v-for="opt in utilOptions"
        :key="opt.id"
        width="full"
        :color="opt.color"
        @click="store.getClientData(opt.url)"
        >{{ opt.label }}</BaseButton
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-options {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @include md {
    flex-direction: column;
    align-items: center;
  }
  @include sm {
    flex-direction: column;
    align-items: center;
  }

  &__column {
    width: 32%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @include md {
      width: 80%;
      gap: 10px;
      margin-bottom: 10px;
    }
    @include sm {
      width: 80%;
      gap: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
