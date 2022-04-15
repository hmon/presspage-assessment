<template>
  <loading-spinner v-if="isLoading"/>
  <div v-else class="users container mx-auto grid grid-cols-4 gap-4 my-6">
    <user-card v-for="user in users" :key="user.id" :user="user"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Store } from '@/decorators/store'
import { UserStore } from '@/store/user.store'
import UserCard from '@/components/UserCard.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

@Options({
  components: {
    UserCard,
    LoadingSpinner
  }
})
export default class UsersView extends Vue {
  @Store() userStore!: UserStore

  get users() {
    return this.userStore.getUsersChunk
  }

  get isLoading () {
    return this.userStore.isLoading
  }

  created () {
    this.userStore.fetchUsers()
  }
}
</script>
