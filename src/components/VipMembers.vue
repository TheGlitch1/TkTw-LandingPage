<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        >
          VIP MEMBERS
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them.
        </p>
      </div>
      <div class="flex flex-wrap -m-2">
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full" v-for="(member,j) in vipscomputed" :key="j">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
          >
            <img
              
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              :alt="`${member.username} avatar`"
              :src="member.avatar_url"  
              :title="member.username" @error="onImgError"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">
                {{member.username}}
              </h2>
              <p class="text-gray-500">UI Designer</p>
            </div>
          </div>
        </div>
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div
            class="h-full flex items-center border-gray-200 border p-4 rounded-lg"
          >
            <img
              alt="team"
              class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/84x84"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 title-font font-medium">Henry Letham</h2>
              <p class="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props:{
        MemberVips:{
            type: Array,           
        },
    },
    data(){
        return{
            vips: []
            }
    },
    computed:{
        vipscomputed(){
            return this.vips = this.MemberVips
        }
    }
};
</script>

<style></style>
