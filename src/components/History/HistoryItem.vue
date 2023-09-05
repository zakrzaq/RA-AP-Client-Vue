<script setup lang="ts">
interface HistoryItem {
  timestamp: string;
  script: string;
  messages: string[];
}

import { ref } from "vue";

defineProps<{
  item: HistoryItem;
}>();

const collapsed = ref(true);

const toggleCollapsed = () => (collapsed.value = !collapsed.value);
</script>

<template>
  <div v-if="!!item" class="history-item">
    <div class="history-item__title">
      <p class="history-item__p">{{ item.timestamp }}</p>
      <p class="history-item__p">{{ item.script }}</p>
    </div>
    <Transition>
      <ul
        v-if="!collapsed"
        class="history-item__messages"
        @click="toggleCollapsed"
      >
        <li v-for="(message, index) in item.messages" :key="index">
          {{ message }}
        </li>
      </ul>
    </Transition>
    <div class="history-item__expand" @click="toggleCollapsed">
      <div class="circle-icon">
        <i v-if="collapsed" class="gg-chevron-down"></i>
        <i v-else class="gg-chevron-up"></i>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.history-item {
  border: 1px solid $quaternary;
  border-radius: 10px;
  padding: 5px 20px;
  margin-bottom: 20px; 
  transition: all 0.5s;
  position: relative;
  z-index: 1000;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: $gradient-stripes-tertiary;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &__title {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0;
    color: $secondary;
  }
  &__p {
    margin: 0;
    background: white;
    border-radius: 6px;
    padding: 4px 8px ;
    border-bottom: 1px solid $secondary;
    border-left: 1px solid $secondary;
  }
  &__expand {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  &__messages {
    background: $secondary;
    color: white;
    padding: 15px;
    border-radius: 10px;
    & li {
      list-style-type: none;
      line-height: 200%;
    }
  }

  & .circle-icon {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $tertiary;
    border: 1px solid $quaternary;
    border-radius: 50%;
    margin-bottom: 10px;
  }
}

.gg-chevron-down {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 100px;
  color: $quaternary;
}
.gg-chevron-down::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid;
  border-right: 2px solid;
  transform: rotate(45deg);
  left: 4px;
  top: 2px;
  transition: all 0.5s;
}

.gg-chevron-up {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 100px;
  color: $quaternary;
}
.gg-chevron-up::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 10px;
  height: 10px;
  border-top: 2px solid;
  border-right: 2px solid;
  transform: rotate(-45deg);
  left: 4px;
  bottom: 2px;
  transition: all 0.5s;
}
</style>
