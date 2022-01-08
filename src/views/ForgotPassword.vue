<script>
import { Form, Field, ErrorMessage } from "vee-validate";
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
  name: "ForgotPassword",
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  data() {
    return {
      email: "",
      busy: false,
      emailVal: yup
        .string()
        .required("Email is required")
        .email("Enter a valid Email"),
    };
  },
  methods: {
    async onSubmit() {
      this.busy = true;
      await this.sendRequest();
      this.email = "";
    },
    async sendRequest() {
      try {
        let resp = await axios.post("http://localhost:3000/password/forgot", {
          email: this.email,
        });
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
  <div class="relative forgot my-[80px] mx-[140px]">
    <div><img src="../assets/logo.svg" alt="logo" class="ml-1 w-[37px]" /></div>
    <div class="content my-[100px] flex justify-between">
      <div class="txt mt-[50px]">
        <h2 class="text-[46px] font-bold text-gray-300">Forgot Password</h2>
        <p class="text-gray-100 text-3xl max-w-[480px] mt-6">
          Kindly enter your registered email to reset your passsword
        </p>
      </div>
      <div class="max-w-[500px] w-full">
        <Form
          class="white-card flex flex-col w-full px-8 py-10 rounded-lg shadow-sm"
          action=""
          @submit="onSubmit"
        >
          <label class="text-sm text-gray-200 mb-2" for="email"
            >Email Address</label
          >
          <Field
            class="appearance-none border p-4 text-gray-300 border-bdr rounded h-12 ring-offset-1 hover:border-gray-100 focus:ring-2 focus:ring-primary-100 focus:border-1 focus:border-primary-200 focus:ring-opacity-50"
            id="email"
            :rules="emailVal"
            name="email"
            v-model="email"
          />
          <ErrorMessage name="email" class="text-red-600 text-xs py-2" />
          <button
            :disabled="busy"
            type="submit"
            class="disabled:bg-prim-disabled disabled:cursor-wait relative bg-primary-200 rounded h-12 shadow-sm hover:shadow-md hover:bg-primary-100 hover:-translate-y-[2px] text-white font-semibold mt-6 transition"
          >
            Recover Password
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
