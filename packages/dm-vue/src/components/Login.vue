<template>
  <BaseDialog :visible="visible">
    <h4>验证码登录</h4>
    <div class="login-dialog__form">
      <input type="text" placeholder="输入手机号" />
      <input type="text" placeholder="输入验证码" />
    </div>
  </BaseDialog>
</template>

<script setup lang="ts">
import BaseDialog from '@/components/BaseDialog.vue'
import { ref } from 'vue'

const visible = ref(true)
</script>

<style lang="scss" scoped>
.login-dialog {
  &__mask {
  }
}
</style>
