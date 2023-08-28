<script setup lang="ts">
interface HistoryItem {
  timestamp: string;
  script: string;
  messages: string[];
}

import { ref } from "vue"


defineProps<{
  item: HistoryItem,
}>()

const collapsed = ref(true)

const toggleCollapsed = () => collapsed.value = !collapsed.value
</script>

<template>
  <div v-if="!!item" class="history-item">
    <div class="history-item__title">
      <p>{{ item.timestamp }}</p>
      <p>{{ item.script }}</p>
    </div>
      <ul v-if="!collapsed" class="history-item__messages" @click="toggleCollapsed">
        <li v-for="message, index in item.messages" :key="index">{{ message }}</li>
      </ul>
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
    background: $light-gray;
    border-radius: 10px;
    border: 1px solid $v-dark-gray;
    padding: 5px 20px;
    margin-bottom: 20px;

    &__title {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      font-weight: 600;
      padding-top: 10px;
      padding-bottom: 5px;

      & p {
          margin: 0;
      }
    }
    &__expand {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    &__messages {
        background: $v-dark-gray;
        color: $light-gray;
        padding: 15px;
        border-radius: 10px;
        cursor: pointer;
        
        & li {
            list-style-type: none;
            line-height: 200%;
        }
    }

    & .circle-icon {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $light-gray;
        border: 1px solid $light-gray;
        border-radius: 50%;
    }
}

.gg-chevron-down {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px
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
    top: 2px
}

.gg-chevron-up {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px
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
    bottom: 2px
}

</style>
