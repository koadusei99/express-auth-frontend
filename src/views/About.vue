<script>
export default {
  name: "About",
  data() {
    return {
      contributors: ["Daverose", "David", "Papa", "Mark", "Kwaku"],
    };
  },
};
</script>

<template>
  <h1>About</h1>
  <ul>
    <li v-for="c in contributors">{{ c }}</li>
  </ul>
</template>

<style></style>
