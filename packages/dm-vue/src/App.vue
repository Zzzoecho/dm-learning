<script setup lang="ts">
import { RouterView } from 'vue-router'
import BasicHeader from './components/header/BasicHeader.vue'
</script>

<template>
  <BasicHeader />

  <main class="rd-main">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.rd-main {
  margin-top: 72px;
}
</style>
