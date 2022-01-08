<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { EyeIcon, EyeOffIcon } from "@heroicons/vue/solid";
import * as yup from "yup";
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
  name: "ResetPassword",
  components: {
    Form,
    Field,
    ErrorMessage,
    EyeIcon,
    EyeOffIcon,
  },

  data() {
    return {
      eye1: false,
      eye2: false,
      password: "",
      confirmPassword: "",
      busy: false,
      passwordVal: yup.string().required("Password is required").length(8),
    };
  },
  methods: {
    async onSubmit() {
      this.busy = true;
      await this.sendRequest();
      this.password = "";
      this.confirmPassword = "";
    },
    async sendRequest() {
      try {
        let resp = await axios.post("http://localhost:3000/password/reset", {
          password: this.password,
          confirmPassword: this.confirmPassword,
        });
        console.log(resp);
        if (resp.data) {
          notyf.success(resp.data.message);
        }
      } catch ({ response }) {
        console.log(response.data);
        if (response.data) {
          notyf.error(response.data);
        }
      }
      this.busy = false;
    },
  },
};
</script>

<template>
  <div class="relative forgot my-[80px] mx-[80px]">
    <div><img src="../assets/logo.svg" alt="logo" class="ml-1 w-[37px]" /></div>
    <div class="content my-[100px] flex justify-between">
      <div class="txt mt-[50px]">
        <h2 class="text-[46px] font-bold text-gray-300">Reset Password</h2>
        <p class="text-gray-100 text-3xl max-w-[480px] mt-6">
          Create a unique password to keep your account protected
        </p>
      </div>
      <div class="max-w-[500px] w-full">
        <Form
          class="white-card flex flex-col w-full px-8 py-10 rounded-lg shadow-sm"
          action=""
          @submit="onSubmit"
        >
          <label class="text-sm text-gray-200 mb-2" for="password"
            >New Password</label
          >
          <div class="relative w-full">
            <Field
              class="border w-full p-4 text-gray-300 border-bdr rounded h-12 ring-offset-2 hover:border-gray-100 focus:ring-2 focus:ring-primary-100 focus:border-primary-200 focus:ring-opacity-30"
              id="password"
              :rules="passwordVal"
              name="password"
              v-model="password"
              :type="eye1 ? 'text' : 'password'"
            />
            <span
              v-show="eye1"
              class="absolute cursor-pointer z-20 top-[14px] right-[14px]"
              @click="eye1 = !eye1"
              ><EyeIcon class="text-gray-100 w-5"
            /></span>
            <span
              v-show="!eye1"
              class="absolute cursor-pointer z-20 top-[14px] right-[14px]"
              @click="eye1 = !eye1"
              ><EyeOffIcon class="text-gray-100 w-5"
            /></span>
          </div>

          <label class="mt-4 text-sm text-gray-200 mb-2" for="passwordc"
            >Confirm Password</label
          >
          <div class="relative w-full">
            <Field
              class="border w-full p-4 text-gray-300 border-bdr rounded h-12 ring-offset-2 hover:border-gray-100 focus:ring-2 focus:ring-primary-100 focus:border-primary-200 focus:ring-opacity-30"
              id="passwordc"
              :rules="passwordVal"
              name="confirmPassword"
              v-model="confirmPassword"
              :type="eye2 ? 'text' : 'password'"
            />
            <span
              v-show="eye2"
              class="absolute cursor-pointer z-20 top-[14px] right-[14px]"
              @click="eye2 = !eye2"
              ><EyeIcon class="text-gray-100 w-5"
            /></span>
            <span
              v-show="!eye2"
              class="absolute cursor-pointer z-20 top-[14px] right-[14px]"
              @click="eye2 = !eye2"
              ><EyeOffIcon class="text-gray-100 w-5"
            /></span>
          </div>

          <ErrorMessage name="email" class="text-red-600 text-xs py-2" />
          <button
            :disabled="busy"
            type="submit"
            class="disabled:bg-prim-disabled disabled:cursor-wait relative bg-primary-200 rounded h-12 shadow-sm hover:shadow-md hover:bg-primary-100 hover:-translate-y-[2px] text-white font-semibold mt-6 transition"
          >
            Reset Password
            <span
              :class="`${
                busy ? 'show' : 'hidden'
              } w-5 h-5 bg-white absolute right-3 top-3 rounded-full animate-ping`"
            ></span>
          </button>

          <router-link
            class="text-primary-200 text-sm mt-6 text-center font-semibold"
            :to="{ name: 'Login' }"
            >Return to Log In</router-link
          >
        </Form>
      </div>
    </div>
  </div>
</template>

<style></style>
