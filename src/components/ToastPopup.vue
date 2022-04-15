<template>
  <div class="toast-popup">
    <slot />
  </div>
</template>

<style scoped>
.toast-popup {
  position: fixed;
  bottom: 30px;
  left: 30px;
}
</style>