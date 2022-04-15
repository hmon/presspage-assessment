<template>
  <div class="home">
    <div class="mx-auto max-w-max my-6">
      <img
        alt="PressPage"
        width="300"
        src="https://www.presspage.com/images/logo_presspage.svg"
      />
    </div>

    <router-link :to="{ name: 'users'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Users
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class HomeView extends Vue {}
</script>
