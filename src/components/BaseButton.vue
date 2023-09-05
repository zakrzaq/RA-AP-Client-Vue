<script setup lang="ts">
import { computed } from "vue";

export interface NamedRoute {
  name: string;
}

const props = withDefaults(
  defineProps<{
    to?: string | null | NamedRoute;
    href?: string | null;
    // color?: "red" | "blue" | "green" | "orange" | "gray";
    color?: "primary" | "secondary" | "tertiary" | "quaternary";
    size?: "small" | null;
    width?: null | "full";
  }>(),
  {
    color: "primary",
    to: null,
    href: null,
    size: null,
    width: null,
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

const buttonWidth = computed(() => {
  if (props.width === "full") return "100%";
  return "unset";
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
  width: v-bind("buttonWidth");

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

  &--primary {
    background-color: $primary;
    border: 1px solid $primary;
    color: $white;

    &:hover {
      background-color: $white;
      color: $primary;
    }
  }

  &--secondary {
    background-color: $secondary;
    border: 1px solid $secondary;
    color: $white;

    &:hover {
      background-color: $white;
      color: $secondary;
    }
  }

  &--tertiary {
    background-color: $tertiary;
    border: 1px solid $tertiary;
    color: $white;

    &:hover {
      background-color: $white;
      color: $tertiary;
    }
  }

  &--quaternary {
    background-color: $quaternary;
    border: 1px solid $quaternary;
    color: $white;

    &:hover {
      background-color: $white;
      color: $quaternary;
    }
  }
}
</style>
