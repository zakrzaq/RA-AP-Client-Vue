<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);

const toggleMenu = () => (isOpen.value = !isOpen.value);
</script>

<template>
  <button class="hamburger-btn" @click="toggleMenu">
    <span class="line" :class="isOpen ? 'open1' : ''"></span>
    <span class="line" :class="isOpen ? 'open2' : ''"></span>
    <span class="line" :class="isOpen ? 'open3' : ''"></span>
  </button>

  <nav class="menu" :class="isOpen ? 'open' : ''">
    <ul>
      <li>
        <RouterLink to="/" @click="toggleMenu"> Home </RouterLink>
      </li>
      <li>
        <RouterLink to="/log" @click="toggleMenu"> Log </RouterLink>
      </li>
      <li>
        <RouterLink to="/history" @click="toggleMenu"> History </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.hamburger-btn {
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.line {
  width: 24px;
  height: 2px;
  background: #fff;
  margin-bottom: 4px;
  transition:
    transform 0.3s,
    opacity 0.3s;
}

.open1 {
  transform: rotate(45deg) translateY(8px);
}

.open2 {
  opacity: 0;
}

.open3 {
  transform: rotate(-45deg) translateY(-8px);
}

.menu {
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  padding: 16px;
  background: $primary;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(-250%);
  opacity: 0;
  transition:
    transform 0.3s,
    opacity 0.3s;
  border-top: solid 1px $secondary;
}

.open.menu {
  transform: translateY(0);
  opacity: 1;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.menu ul li {
  font-size: 14px;
  margin-bottom: 8px;
}

/* Additional styles for your menu items */
.menu ul li a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

.menu ul li a:hover {
  color: $light-gray;
  text-decoration: underline;
}
</style>
