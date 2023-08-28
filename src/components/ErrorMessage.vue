<script setup lang="ts">
import { useStore } from "@/state";
defineProps<{
  message: string;
}>();

const store = useStore();

const handleClose = () => {
  store.resetClientData();
};
</script>

<template>
  <div className="error-message">
    <p>{{ message }}</p>
    <button @click="handleClose">Close</button>
  </div>
</template>

<style scoped lang="scss">
.error-message {
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
