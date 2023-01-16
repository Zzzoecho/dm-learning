<template>
  User
  <p>id: {{ id }}</p>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = computed(() => route.params?.id ?? '')
</script>
