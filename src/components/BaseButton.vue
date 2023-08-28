<script setup lang="ts">
import { computed } from "vue";

export interface NamedRoute {
  name: string;
}

const props = withDefaults(
  defineProps<{
    to?: string | null | NamedRoute;
    href?: string | null;
    color?: "red" | "blue" | "green" | "orange" | "gray";
    size?: "small" | null;
  }>(),
  {
    color: "blue",
    to: null,
    href: null,
    size: null,
  },
);

const emit = defineEmits<{
  (e: "click", value: Event): void; // eslint-disable-line
}>();

const componentType = computed(() => {
  if (props.to) "RouterLink";
  if (props.href) "a";
  return "button";
});
</script>

<template>
  <component
    :is="componentType"
    class="button"
    :class="[`button--${props.color}`, props.size ? 'button--small' : null]"
    :href="props.href"
    :to="props.to"
    @click="emit('click', $event)"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.button {
  padding: 8px 16px;
  text-decoration: none;
  background-color: $blue;
  color: $white;
  border-radius: 8px;
  border: 1px solid $blue;
  transition: 0.3s;
  display: inline;
  text-align: center;

  &:hover {
    background-color: $white;
    color: $blue;
    box-shadow: $shadd;
  }

  &--small {
    font-size: 10px;
    padding: 4px 12px;
    border-radius: 12px;
    max-height: 26px;
  }

  &--orange {
    background-color: $orange;
    border: 1px solid $orange;
    color: $white;

    &:hover {
      background-color: $white;
      color: $orange;
    }
  }

  &--red {
    background-color: $red;
    border: 1px solid $red;
    color: $white;

    &:hover {
      background-color: $white;
      color: $red;
    }
  }

  &--green {
    background-color: $green;
    border: 1px solid $green;
    color: $white;

    &:hover {
      background-color: $white;
      color: $green;
    }
  }

  &--gray {
    background-color: $v-dark-gray;
    color: $white;
    border: 1px solid $v-dark-gray;

    &:hover {
      background-color: $white;
      color: $v-dark-gray;
    }
  }
}
</style>
