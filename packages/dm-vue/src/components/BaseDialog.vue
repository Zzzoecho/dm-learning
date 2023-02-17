<template>
  <div v-if="visible" class="modal">
    <div class="modal__mask" />
    <div class="modal__container">
      <div class='modal__header'>
        <i class='' />
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
}>()
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: map-get($zindex, modal);

  &__container {
    position: absolute;
    padding: 60px 30px;
    width: 60vw;
    border-radius: 16px;
    background-color: $white;
    transition: all .2s;
  }
}
</style>
