<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <Header/>

  <main class="rd-main">
    <RouterView />
  </main>
</template>

<style lang="scss" scope>
.rd-main {
  margin-top: 72px;
}
</style>