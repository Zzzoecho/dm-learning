<template>
  <header class="rd-header">
    <router-link :to="homeLink">
      <img src="../../assets/images/logo.png" alt="logo" class="logo" />
    </router-link>

    <div class="rd-header__group">
      <BasicNav />
      <UserAvatar />
    </div>
  </header>
</template>

<script setup lang="ts">
import BasicNav from '@/components/header/BasicNav.vue'
import { PageName } from '@/schema/PageName'
import UserAvatar from '@/components/header/UserAvatar.vue'

const homeLink = {
  name: PageName.Home
}
</script>

<style lang="scss" scoped>
.rd-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 80px;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 0.5px solid #fff;
  backdrop-filter: blur(25px);

  .logo {
    width: 60px;
  }
  &__group {
    display: flex;
    align-items: center;
  }
}
</style>
