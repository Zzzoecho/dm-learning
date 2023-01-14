<template>
  <header class="rd-header">
    <img src="../../assets/images/logo.png" alt="logo" class="logo" />

    <nav>
      <ul class="rd-header__nav">
        <li class="rd-header__nav-item">首页</li>
        <li class="rd-header__nav-item">发现</li>
        <li class="rd-header__nav-item">关于我们</li>
      </ul>
    </nav>
  </header>
</template>

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

  &__nav {
    display: flex;

    &-item {
      padding: 0 10px;
      cursor: pointer;
    }
  }
}
</style>
