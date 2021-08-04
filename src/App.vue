<template>
  <div id="app">
    <Menu />
    <div class="top">
      <button class="open__modal" @click="open()"><img src="./assets/img/menu-button.png" alt=""></button>
      <router-link class="home__link" to="/">
        <div class="logo">
          <img class="logo1" src="./assets/img/logo1.png" alt="">
          <img class="logo2" src="./assets/img/logo2.png" alt="">
        </div>
        <div class="logo__text">
          <img src="./assets/img/eduAdmin.png" alt="">
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
  import Menu from './views/Menu'
  import {eventEmitter} from './main'
  export default {
    name: 'App',
    data: () => ({}),
    methods: {
      open(){
        eventEmitter.$emit('menu')
      }
    },
    components: {
      Menu
    },
    created(){
      this.$store.dispatch('students')
      this.$store.dispatch('teachers')
      this.$store.dispatch('groups')
    }
  };
</script>
<style>
  @import url(./assets/css/style.css);
</style>