<script>
import ProfileCard from "../components/ProfileCard.vue";
import axios from "axios";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf({
  duration: 3000,
  position: {
    x: "right",
    y: "bottom",
  },
});

export default {
  name: "Home",
  async created() {
    this.fetchUsers();
  },
  components: {
    ProfileCard,
  },
  data() {
    return {
      loading: true,
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        let { data, status } = await axios.get("http://localhost:3000/users");
        if (status === 200) {
          this.users = data.users;
        }
      } catch ({ response }) {
        if (response.status === 400) {
          notyf.error(response.data.message);
        }
      }
      this.loading = false;
    },
  },
};
</script>

<template>
  <div class="home py-10 px-14">
    <div class="flex justify-between">
      <h1 class="text-4xl txt-main font-bold">Users</h1>
      <p
        class="font-semibold txt-main h-fit py-1 px-4 border border-gray-200 rounded-2xl hover:shadow"
      >
        {{ users.length }}
      </p>
    </div>
    <div class="people">
      <ul v-if="users.length" class="peepo-list gap-6 my-8">
        <li v-for="(user, id) in users"><ProfileCard :data="user" /></li>
      </ul>

      <ul v-show="loading" class="flex flex-wrap gap-6 my-8">
        <li v-for="(i, id) in [1, 2, 3, 4]" :key="id">
          <div
            class="border border-bdr shadow rounded-lg p-4 w-[220px] h-[300px] bg-white"
          >
            <div class="animate-pulse flex flex-col gap-3">
              <div
                class="rounded-full bg-slate-300 h-[100px] w-[100px] mx-auto"
              ></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-300 rounded"></div>
                <div class="space-y-5">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-300 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-300 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.peepo-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
