<template>
  <section
    class="
      text-gray-600
      dark:text-gray-400
      bg-white-900
      dark:bg-gray-900
      body-font
    "
  >
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1
          class="
            text-2xl
            font-medium
            title-font
            mb-4
            text-gray-600
            dark:text-white
            tracking-widest
          "
        >
          OUR TEAM
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them.
        </p>
      </div>
      <div class="flex flex-wrap m-4">
        <div
          class="p-4 lg:w-1/5"
          v-for="(member, j) in members.Guezar"
          :key="j"
        >
          <div
            class="
              h-full
              flex
              sm:flex-row
              flex-col
              items-center
              sm:justify-start
              justify-center
              text-center
              sm:text-left
            "
          >
            <img
              :alt="`${member.username} avatar`"
              class="
                flex-shrink-0
                rounded-lg
                w-32
                h-32
                object-cover object-center
                sm:mb-0
                mb-4
              "
              :src="member.avatar_url"  
              :title="member.username" @error="onImgError"
            />
            <div class="flex-grow sm:pl-8">
              <h2 class="title-font font-medium text-lg dark:text-white">
                {{ member.username }}
              </h2>
              <h3 class="text-gray-500 mb-3">
                Job/activity : {{ member.activity }}
              </h3>
              <p class="mb-4">Status : {{ member.status }}</p>
              <span class="inline-flex">
                <a class="text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                    ></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    ></path>
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import json from "../assets/data/tktw_static.json";

export default {
  setup() {
    return {};
  },
  data() {
    return {
      api:
        "https://canary.discord.com/api/v9/guilds/859155522800189461/widget.json",
      api2:
        "https://canary.discord.com/api/v6/guilds/859155522800189461/members",
      members: {},
      // everyone: json,
      data: {},
      allRoles: [],
      roles: [
        { Guezar: "859159124378124309" },
        { vips: "860683460465000459" },
        { Speachmaker: "859200399345319977" },
      ],
      avatarError:[]
    };
  },
  created() {
    this.getAllMembers(); // if u wanna get dynamic member from api (without token)
    this.getUsersbyrole();
    // this.getRoles(),
    
  },
  methods: {
    getRoles() {
      json.map((r) => {
        this.allRoles.push(...r.roles);
      });
      this.allRoles = [...new Set(this.roles)];
      // console.log(this.roles)
      // TODO: alternative of push plz
    },
    getUsersbyrole() {
      this.roles.forEach((inner, key) => {
        this.getMembers(Object.keys(inner)[0], Object.values(inner)[0]);
      });
      // this.roles.map(inner => {console.log(Object.values(inner)[0])}); // same results just for education
    },
    getMembers(key, role) {
      this.members[key] = [
        ...json
          .filter((x) => {
            let y = false;
            for (var i = 0; i < x.roles.length; i++) {
              if (role == x.roles[i]) y = true;
            }
            return y ? (x.role = y) : (x.role = false);
          })
          .map((x) => {
            x.username = x.user.username;
            !x.avatar ? x.avatar_url = `https://cdn.discordapp.com/avatars/${x.user.id}/${x.user.avatar}.png` : false
            return x;
          }),
      ];
      this.GetVips();
    },
    getAdmins() {
      let config1 = {
        headers: {
          // "mode":"no-cors",
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Methods": 'GET',
          Authorization: "Bot " + "put Token here",
          "Content-Type": "application/json",
        },
        proxy: {
          // 110.73.11.181:8123*20.115.50.21:3128
          host: "proxy.hoppscotch.io",
          // port: 3128
        },
        //  crossdomain: true
      };
      let config = {
        headers: {
          // "mode":"no-cors",
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Methods": 'GET',
          Authorization: "Bot REPLACETOKEN",
          "Content-Type": "application/json",
        },
        proxy: {
          // 110.73.11.181:8123*20.115.50.21:3128
          host: "proxy.hoppscotch.io",
          // port: 3128
        },
        //  crossdomain: true
      };

      this.axios
        .get(this.api2, config)
        .then((response) => {
          // console.log("getAdmins",response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getAllMembers() {
      await this.axios.get(this.api).then((response) => {
        this.data = response.data;
      });
      this.membersApi = this.data.members;
      // console.log(this.api);
    },
    GetVips(){
      this.$emit('Vips',this.members.vips);
    },
    onImgError(e){
      // this.avatarError[j] = true
      e.target.src = "https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png"
       
    }
  },
};
</script>

<style lang="scss" scoped></style>
