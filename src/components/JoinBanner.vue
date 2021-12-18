<template>
  <section class="text-gray-600 dark:text-gray-400 body-font dark:bg-gray-900">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img class="object-cover object-center rounded" alt="hero" src="https://discordapp.com/api/guilds/859155522800189461/widget.png?style=banner4">
      <div class="inline-flex items-center float-left">
        <div class="details p-2">
          <span>{{(data.presence_count)}} ONLINE  </span>
        </div>
        <!-- overlay avatars componenets -->
        <div class="flex -space-x-2 overflow-hidden p-2">
          <img v-for="member,key in processedAvatars" :key="key" class="inline-block h-6 w-6 rounded-full ring-2 ring-white" :src="member.avatar_url" :alt="member.username" :title="member.username">
        </div>
      </div>
      OR?
      <div class="inline-flex items-center float-left">
        <!-- overlay avatars componenets -->
        <div class="flex -space-x-2 overflow-hidden p-2">
          <img v-for="member,key in processedAvatars" :key="key" class="inline-block h-6 w-6 rounded-full ring-2 ring-white" :src="member.avatar_url" :alt="member.username" :title="member.username">
        </div>
        <div class="details p-2">
          <span> <strong>  + {{(data.presence_count-groupAvatars )}} ONLINE  </strong> </span>
        </div>
        
      </div>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white">Before they sold out
        <br class="hidden lg:inline-block">readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  setup () {
    

    return {}
  },
  data() {
    return{
      data:[],
      api:"https://canary.discord.com/api/v9/guilds/859155522800189461/widget.json",
      groupAvatars: 8
       
    }
  },
  created(){
    this.getAllMembers()
  },
  methods:{
    async getAllMembers() {
      await this.axios.get(this.api).then((response) => {
        this.data = response.data;
      });
      this.membersApi = this.data.members;
      // console.log(this.api);
    },
  },
  computed:{
    processedAvatars(){
      let length =""
      length = !this.groupAvatars ? 7 :  this.groupAvatars;
      let shuffled = this.data.members.sort(function(){return .5 - Math.random()});
      return shuffled.slice(0,length);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>