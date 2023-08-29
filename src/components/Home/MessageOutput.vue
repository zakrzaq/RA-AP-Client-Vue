<script setup lang="ts">
import { useStore } from "@/state";
import BaseButton from "@/components/BaseButton.vue";
import BaseLoader from "@/components/BaseLoader.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

const store = useStore();
</script>

<template>
  <div class="output">
    <ErrorMessage v-if="!!store.error" message="{store.error}" type="error" />
    <div v-else-if="store.loading" class="code-output">
      <BaseLoader />
    </div>
    <div v-else-if="store.hasResults" class="code-output">
      <p v-for="(line, index) in store.output" :key="index">
        {{ line }}
      </p>
    </div>
    <BaseButton
      v-if="store.hasResults"
      color="tertiary"
      @click="store.resetClientData"
    >
      Return
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.output {
  margin-bottom: 30px;
}

.code-output {
  background-color: $secondary;
  color: white;
  border-radius: 12px;
  padding: 8px 15px;
  font-family: "Lucida Console", "Courier New", monospace;
  margin: 40px 0 15px;
  font-size: 12px;
}

p.code-line {
  margin: 5px 0;
}
</style>
