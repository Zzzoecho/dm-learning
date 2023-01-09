<template>
    <header class="rd-header">
        <img src="../assets/images/logo.png" alt="logo" class="logo">


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
    align-items: center;
    background-color: #fff;
    border-bottom: 0.5px solid #fff;
    backdrop-filter: blur(25px);
    .logo {
        width: 60px;
    }
}
</style>