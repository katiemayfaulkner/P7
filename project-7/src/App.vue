<template>
  <div id="app">
    <!-- <Welcome v-if="loggedIn"/> -->
    <Header/>
    <MainPage/>
    <router-view/>   

  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// import Welcome from './components/welcome.vue'
import Header from './components/header.vue'
import MainPage from './components/mainPage.vue'


export default {
  name: 'app',
  // loggedIn: true,
  components: {
    // Welcome,
    Header,
    MainPage,
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
