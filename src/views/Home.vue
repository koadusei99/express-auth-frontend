<script>
import ProfileCard from "../components/ProfileCard.vue";
export default {
  name: "Home",
  components: {
    ProfileCard,
  },
  data() {
    return {
      peepo: [
        {
          fname: "Kenpachi",
          lname: "Zaraki",
          email: "zaraki@soul.society",
          phone: "589 591 0598",
          createdAt: "1 day ago",
        },
        {
          fname: "Yaw",
          lname: "Moro",
          email: "yawmo@gmail.com",
          phone: "268 026 5882",
          createdAt: "1 day ago",
        },
        {
          fname: "Liveria",
          lname: "Schox",
          email: "shoxie@jmuo.org",
          phone: "590 063 5953",
          createdAt: "1 day ago",
        },
        {
          fname: "Krandon",
          lname: "Miller",
          email: "krand@yerr.com",
          phone: "582 210 8818",
          createdAt: "1 day ago",
        },
        {
          fname: "Voiyt",
          lname: "Mykutr",
          email: "voitr@gmail.com",
          phone: "320 032 08+3",
          createdAt: "1 day ago",
        },
        {
          fname: "Manu",
          lname: "Ginobili",
          email: "manuman@jmuo.org",
          phone: "867 780 5482",
          createdAt: "1 day ago",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="home py-10 px-14">
    <div class="flex justify-between">
      <h1 class="text-4xl txt-main font-bold">Users</h1>
      <p
        class="font-semibold txt-main py-1 px-4 border border-gray-200 rounded-2xl hover:shadow"
      >
        {{ peepo.length }}
      </p>
    </div>
    <div class="people-list">
      <ul class="flex flex-wrap gap-6 my-8">
        <li v-for="(peep, id) in peepo"><ProfileCard :data="peep" /></li>
      </ul>
    </div>
  </div>
</template>

<style></style>
