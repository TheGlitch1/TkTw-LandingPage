<template>
    <header class="text-gray-600 dark:text-gray-400 bg-white-900 dark:bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a class="nav-logo flex title-font font-medium items-center text-gray-800 dark:text-white mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl collapsed-logo-name">TkTw</span>
          <span class="ml-3 text-xl full-logo-name">Tikchbila Tiwliwla</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <router-link to="/" class="mr-5 hover:text-gray-800 dark:hover:text-white ">Home</router-link>
          <router-link to="/about" class="mr-5 hover:text-gray-800 dark:hover:text-white">About</router-link>
          <a class="mr-5 hover:text-gray-800 dark:hover:text-white ">First Link</a>
          <a class="mr-5 hover:text-gray-800 dark:hover:text-white">Second Link</a>
          <a class="mr-5 hover:text-gray-800 dark:hover:text-white">Third Link</a>
          <a class="mr-5 hover:text-gray-800 dark:hover:text-white">Fourth Link</a>
        </nav>
        <!-- <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> -->
        <div class="flex justify-end items-center space-x-2">
              <span class="text-sm text-gray-400 dark:text-gray-400">Light</span>
              <input type="checkbox" name="" id="toggle" class="hidden" :checked="(mode === 'dark') ? 'checked' : false" @change="switchMode"/>
                <label for="toggle" class="cursor-pointer">
                  <div class="w-10 h-6 flex bg-gray-300 dark:bg-gray-600 rounded-full p-1">
                    <div class="toggle-dot w-4 h-4 p-1 transform duration-300 ease-in-out bg-white rounded-full shadow-md">
                      
                    </div>  
                  </div>  
               </label>
              <span class="text-sm text-gray-600 dark:text-gray-100">Dark</span>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  props:['mode'],
  data(){
    return{
      toggleMode: this.mode === 'dark' ? true : false 
    }
  },
  methods:{
    switchMode(){
      this.toggleMode = !this.toggleMode
      this.$emit('darkMode',this.toggleMode);
    }
  }
}
</script>

<style scoped>

.full-logo-name{
  display: none;
}
.full-logo-name ,
.nav-logo ,
.collapsed-logo-name{
  transition: all 2.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

.nav-logo:hover .collapsed-logo-name {
  display: none;
}

.nav-logo:hover .full-logo-name{
  display: inline;
}


</style>