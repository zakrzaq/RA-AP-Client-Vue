<script setup lang="ts">
import { useStore } from "@/state";
import BaseButton from "@/components/BaseButton.vue";
import BaseLoader from "@/components/BaseLoader.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

const store = useStore();
</script>

<template>
  <div>
    <ErrorMessage v-if="!!store.error" message="{store.error}" />
    <div v-else-if="store.loading" class="code-output">
      <BaseLoader />
    </div>
    <div v-else-if="store.hasResults" class="code-output">
      <p v-for="(line, index) in store.output" :key="index">
        {{ line }}
      </p>
    </div>
    <BaseButton v-if="store.hasResults" :to="{ name: 'HomePage' }">
      Return
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.code-output {
  background-color: $v-dark-gray;
  color: $light-gray;
  border-radius: 12px;
  padding: 15px;
  font-family: "Lucida Console", "Courier New", monospace;
  margin: 40px 0 60px;
  font-size: 12px;
}

p.code-line {
  margin: 5px 0;
}
</style>
