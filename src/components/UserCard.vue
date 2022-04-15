<template>
  <figure data-cy="user-card" class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 text-fuchsia-50 shadow-lg shadow-slate-400">
    <img class="w-24 h-24 rounded-full mx-auto" :src="user.avatar_url" alt="" width="384" height="512">
    <div class="pt-6">
      <figcaption class="font-medium flex-col space-y-4">
        <div class="text-sky-500 dark:text-sky-400 space-y-3">
          <a :href="user.html_url" data-cy="username">@{{ user.login }}</a>
        </div>
        <div class="text-slate-700 dark:text-slate-500">
          <button data-cy="delete-user" @click="deleteUser" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
        </div>
      </figcaption>
    </div>
  </figure>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { User } from '@/models/users'
import { Store } from '@/decorators/store'
import { UserStore } from '@/store/user.store'

export default class UserCard extends Vue{
  @Prop() user!: User
  @Store() userStore!: UserStore

  deleteUser () {
    this.userStore.deleteUser(this.user.id)
  }
}
</script>

<style scoped>

</style>