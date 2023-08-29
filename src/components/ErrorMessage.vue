<script setup lang="ts">
import { useStore } from "@/state";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    message: string;
    type: "error" | "warn";
    button?: boolean;
  }>(),
  {
    button: true,
  }
);

const store = useStore();

const messageType = computed(() => `error-message--${props.type}`)

const handleClose = () => {
  store.resetClientData();
};
</script>

<template>
  <div class="error-message" :class="messageType">
    <p>{{ message }}</p>
    <button v-if="props.button" @click="handleClose">Close</button>
  </div>
</template>

<style scoped lang="scss">
.error-message {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &--error {
    color: $quaternary;
    background-color: $tertiary;
    border: 1px solid $tertiary;
  }

  &--warn {
    color: $tertiary;
    background-color: $quaternary;
    border: 1px solid $quaternary;
  }
}

.error-message p {
  margin: 0;
}

.error-message button {
  background-color: transparent;
  border: none;
  color: #721c24;
  cursor: pointer;
}
</style>
