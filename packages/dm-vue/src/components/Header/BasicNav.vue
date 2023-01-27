<template>
  <nav class="rd-nav">
    <router-link
      v-for="v in navList"
      :key="v.name"
      :class="['rd-nav__item', { active: v.name === currentRoute }]"
      :to="{ name: v.name }"
    >
      {{ v.label }}
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { PageName } from '@/schema/PageName'

const route = useRoute()

interface NavItem {
  label: string
  name: PageName
}
const navList: NavItem[] = [
  { label: '首页', name: PageName.Home },
  { label: '发现', name: PageName.Explore },
  { label: '关于我们', name: PageName.About },
]
const currentRoute = computed(() => route.name)
</script>

<style scoped lang="scss">
.rd-nav {
  display: flex;
  &__item {
    padding: 0 10px;
    cursor: pointer;
    color: #333333;
    &.active {
      font-weight: 500;
      color: #ff2442;
    }
  }
}
</style>
