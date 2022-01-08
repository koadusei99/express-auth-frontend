<script></script>

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
          <label class="text-sm text-gray-200 mb-2" for="email"
            >New Password</label
          >
          <Field
            class="border p-4 text-gray-300 border-bdr rounded h-12 ring-offset-2 hover:border-gray-100 focus:ring-2 focus:ring-primary-100 focus:border-primary-200 focus:ring-opacity-30"
            id="email"
            :rules="emailVal"
            name="email"
            v-model="email"
          />


           <label class="mt-4 text-sm text-gray-200 mb-2" for="email"
            >Confirm Password</label
          >
          <Field
            class=" border p-4 text-gray-300 border-bdr rounded h-12 ring-offset-2 hover:border-gray-100 focus:ring-2 focus:ring-primary-100 focus:border-primary-200 focus:ring-opacity-30"
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
