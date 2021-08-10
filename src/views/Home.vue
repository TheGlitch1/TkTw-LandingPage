<template>
   <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
    <Members />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Header from '@/components/header.vue'
import Members from '@/components/Members.vue'

export default {
  name: 'Home',
  components: {
    // Header,
    Members,
    // HelloWorld
  }
}
</script>
