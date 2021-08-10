<template>
  <div id="app" :class="appTheme">
    <div id="nav">
      <Header :mode="appTheme" @darkMode="switchMode" />
<!-- 
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/header.vue'
// import Members from '@/components/Members.vue'

export default {
  name: 'Home',
  components: {
    Header,
    // Members,
    // ,HelloWorld
  },
  data(){
    return {
      appTheme: localStorage.appTheme ? localStorage.appTheme : 'light',
    }
  },
  methods:{
    switchMode(value){
      localStorage.appTheme = this.appTheme = value ? 'dark' : 'light';      
    },
    checkTheme(){
      // this.appTheme = localStorage.appTheme
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
