import { createStore } from 'vuex'
import { UserStore } from '@/store/user.store'
import { CommonStore } from '@/store/common.store'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user: UserStore,
    common: CommonStore
  }
})
