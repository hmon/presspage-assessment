<template>
  <toast-popup v-show="showError">
    <toast @close="closeToast" :message="error"/>
  </toast-popup>
  <router-view />
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ToastPopup from '@/components/ToastPopup.vue'
import Toast from '@/components/Toast.vue'
import { Store } from '@/decorators/store'
import { CommonStore } from '@/store/common.store'

@Options({
  components: {
    Toast,
    ToastPopup
  }
})
export default class App extends Vue {
  @Store() commonStore!: CommonStore

  get error() {
    return this.commonStore.error
  }

  get showError() {
    return this.commonStore.showError
  }

  closeToast() {
    this.commonStore.hideErrorMessage()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>