<template>
  <div class="avatar" @click='handleClick'>
    <img class="avatar__img" :src="avatar" />
    <Login/>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { PageName } from '@/schema/PageName'
import Login from '@/components/Login.vue'

const { isLogin, userInfo } = useUserStore()
const router = useRouter()
const avatar = 'https://picasso-static.xiaohongshu.com/fe-platform/6c7494205379dff2d154f3d3800ac090e8a6a52b.png'

const handleClick = () => {
  if (isLogin) {
    router.push({
      name: PageName.User,
      params: { id: userInfo.id }
    })
  } else {

  }
}
</script>

<style lang="scss" scoped>
.avatar {
  &__img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>