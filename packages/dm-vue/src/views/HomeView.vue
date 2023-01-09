<script setup lang="ts">
import RedCard from '@/components/Card.vue'
import type { Card } from '@/schema/Card'

const list: Card[] = [
  {
    id: '1',
    type: 'photo',
    cover: 'https://sns-img-qc.xhscdn.com/1000g0081re3b7j0eq0005n67fqjkj40n26p2elo?imageView2/2/w/540/format/webp',
    title: string,
    desc: string,
    author: {
      userId: string,
      nickName: string,
      avatar: string,
      isFollowed: boolean
    }
  }
]
</script>

<template>
  <div class="homepage">
    <div>
        <RedCard v-for="v in list" :key="v.id" :card="v" /> 
    </div>
    
  </div>
</template>

<style scoped lang="scss">
</style>
