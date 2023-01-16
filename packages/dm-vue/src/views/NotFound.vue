<template>
  <div class="not-found">
    404
    <router-link :to="homeLink">回到首页</router-link>
  </div>
</template>

<script setup lang="ts">
import { PageName } from '@/schema/PageName'

const homeLink = {
  name: PageName.Home,
}
</script>

<style scoped>
.not-found {
  padding: 10px;
}
</style>
