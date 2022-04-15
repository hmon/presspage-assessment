<template>
  <div class="spinner absolute w-screen h-screen flex justify-center items-center">
    <div class="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full" role="status">
      <span class="hidden">Loading...</span>
    </div>
  </div>
</template>

<style scoped>
.spinner-border {
  vertical-align: -0.125em;
  border: 0.25em solid;
  border-right-color: transparent;
}
</style>
