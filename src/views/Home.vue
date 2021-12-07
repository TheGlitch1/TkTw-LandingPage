<template>
   <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <join-banner />
    <Members @Vips="GetVips"/>
    <VipMembers :MemberVips="vipsData" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Header from '@/components/header.vue'
import Members from '@/components/Members.vue'
import VipMembers from '@/components/VipMembers.vue'
import JoinBanner from '../components/JoinBanner.vue'

export default {
  name: 'Home',
  components: {
    // Header,
    Members,
    VipMembers,
    JoinBanner,    
  },
  data(){
    return{
      vipsData: [],
    }
  },
  methods:{
    GetVips(value){
        this.vipsData = value
    }
  }
}
</script
    JoinBanner>
