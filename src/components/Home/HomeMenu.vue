<script setup lang="ts">
import { amOptions, pmOptions, utilOptions } from "@/data/HomeMenuOptions";
import { useStore } from "@/state";
import BaseButton from "@/components/BaseButton.vue";

const store = useStore()
</script>

<template>
  <div class="menu-options">
    <div class="menu-options__column">
      <h3>AM Run:</h3>
      <BaseButton
        v-for="opt in amOptions"
        :key="opt.id"
        @click="store.getClientData(opt.url)"
        >{{ opt.label }}</BaseButton
      >
    </div>
    <div class="menu-options__column">
      <h3>PM Run:</h3>
      <BaseButton
        v-for="opt in pmOptions"
        :key="opt.id"
        @click="store.getClientData(opt.url)"
        >{{ opt.label }}</BaseButton
      >
    </div>
    <div class="menu-options__column">
      <h3>Utility:</h3>
      <BaseButton
        v-for="opt in utilOptions"
        :key="opt.id"
        @click="store.getClientData(opt.url)"
        >{{ opt.label }}</BaseButton
      >
    </div>
  </div>
</template>
