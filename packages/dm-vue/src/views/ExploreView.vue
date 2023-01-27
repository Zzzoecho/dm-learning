<script setup lang="ts">
import BasicCard from '@/components/BasicCard.vue'
import type { Card } from '@/schema/Card'

const list: Card[] = [
  {
    id: '1',
    type: 'photo',
    cover: {
      id: '78b4e482-a539-6c2c-cab6-1b5b3542ff59',
      width: 540,
      height: 720,
      url: 'https://sns-img-bd.xhscdn.com/78b4e482-a539-6c2c-cab6-1b5b3542ff59?imageView2/2/w/540/format/webp',
    },
    title: '好穿好穿！这件棉服外套是软乎乎小面包吧🍞',
    desc: '',
    author: {
      id: '123',
      nickName: '蜜糖糖糖子',
      avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/6361d25c791eb82a855411ad.jpg?imageView2/2/w/60/format/webp',
      isFollowed: false,
    },
    like: '10+',
  },
]
</script>

<template>
  <div class="homepage">
    <div>
      <BasicCard v-for="v in list" :key="v.id" :card="v" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
