<script>
import { AtSymbolIcon } from "@heroicons/vue/outline";
import { PhoneIcon } from "@heroicons/vue/outline";

export default {
  name: "ProfileCard",
  components: {
    AtSymbolIcon,
    PhoneIcon,
  },
  props: {
    data: Object,
  },
};
</script>

<template>
  <div
    class="card w-[220px] py-5 px-3 white-card shadow-sm flex flex-col items-center gap-4 rounded-lg hover:-translate-y-1 hover:shadow-lg transition group"
  >
    <div class="img w-[100px] group-hover:scale-105 aspect-square transition">
      <img
        class="rounded-full shadow-sm"
        :src="`https://avatars.dicebear.com/api/avataaars/${
          data.fname + data.lname
        }-${data.email}.svg`"
        alt=""
      />
    </div>
    <div class="flex flex-col txt-gray2">
      <p class="flex gap-2 font-bold txt-main text-lg">
        <span>{{ data.fname }}</span
        ><span>{{ data.lname }}</span>
      </p>
      <p class="flex gap-1 items-center mt-1">
        <span><AtSymbolIcon class="w-4" /></span>{{ data.email }}
      </p>
      <p class="flex gap-1 items-center">
        <span><PhoneIcon class="w-4" /></span>{{ data.phone }}
      </p>
    </div>
    <p
      class="mt-4 ml-auto text-xs txt-gray3 group-hover:text-blue-600 transition-colors"
    >
      {{ data.createdAt }}
    </p>
  </div>
</template>

<style></style>
