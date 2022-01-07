<script>
export default {
  name: "App",
  data() {
    return {
      routes: [
        { name: "Home", route: "Home" },
        { name: "Register", route: "Register" },
        { name: "Login", route: "Login" },
        { name: "Forgot Password", route: "ForgotPassword" },
        { name: "Reset Password", route: "ResetPassword" },
        { name: "Verify OTP", route: "Verify" },
        { name: "Reset Confirm", route: "ForgotSuccess" },
        { name: "Create Pin", route: "CreatePin" },
        { name: "About", route: "About" },
      ],
    };
  },
};
</script>

<template>
  <nav>
    <ul class="flex gap-3">
      <li v-for="route in routes" :key="route.name" class="text-sm">
        <router-link :to="{ name: route.route }">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
  <img src="./assets/logo.svg" alt="" />

  <router-view></router-view>
</template>

<style></style>
