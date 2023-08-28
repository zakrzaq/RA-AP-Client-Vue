<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import HamburgerMenu from "./HamburgerMenu.vue";

const router = useRouter();

const routePath = computed(() => router.currentRoute.value.path);
const appTitle = computed(() => {
  if (routePath.value === "/") return "Main Menu";
  if (routePath.value === "/log") return "AP Log";
  if (routePath.value === "/history") return "Action History";
  return routePath.value;
});
</script>

<template>
  <header class="header">
    <div class="logo">
      <a href="/">
        <h2>
          APMM <br />
          Process
        </h2>
      </a>
    </div>
    <div class="title">
      <h2 class="title-text">
        {{ appTitle }}
      </h2>
    </div>
    <HamburgerMenu />
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  background-color: $blue;
  color: $white;
  box-shadow: $shadd;

  & .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  & .title {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .title-text {
    font-weight: 300;
    text-align: left;
  }
}
</style>
