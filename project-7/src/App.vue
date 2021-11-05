<template>
  <div id="app">
    <auth/>
    <Header/>
    <MainPage/>
    <createPost/>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import Auth from './components/auth.vue'
import Header from './components/header.vue'
import MainPage from './components/mainPage.vue'
import createPost from './components/createPost.vue'

export default {
  name: 'app',
  components: {
    Auth,
    Header,
    MainPage,
    createPost,
  }
}

</script>

<style>
*{
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
