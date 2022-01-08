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
  <nav class="flex justify-center items-center px-5 py-2 shadow-sm">
    <ul class="flex gap-5 text-xs font-semibold txt-gray2">
      <li v-for="route in routes" :key="route.name" class="hover:text-blue-600">
        <router-link :to="{ name: route.route }">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>

  <router-view></router-view>
</template>

<style></style>
