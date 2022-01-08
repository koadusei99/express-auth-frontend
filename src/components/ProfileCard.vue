<script>
import { AtSymbolIcon } from "@heroicons/vue/outline";
import { PhoneIcon } from "@heroicons/vue/outline";
import { formatDistanceToNow } from "date-fns";

export default {
  name: "ProfileCard",
  components: {
    AtSymbolIcon,
    PhoneIcon,
  },
  props: {
    data: Object,
  },
  computed: {
    formattedDate() {
      return formatDistanceToNow(new Date(this.data.createdAt), {
        addSuffix: true,
      });
    },
  },
};
</script>

<template>
  <div
    class="card max-w-[400px] py-5 px-3 white-card shadow-md flex flex-col items-center gap-4 rounded-lg hover:-translate-y-1 hover:shadow-lg transition group"
  >
    <div class="img w-[100px] group-hover:scale-105 aspect-square transition">
      <img
        class="rounded-full shadow-sm"
        :src="`https://avatars.dicebear.com/api/avataaars/${data.firstName}.svg`"
        alt=""
      />
    </div>
    <div class="flex flex-col txt-gray2">
      <p class="flex gap-2 font-bold txt-main text-lg">
        <span>{{ data.firstName }}</span
        ><span>{{ data.lastname }}</span>
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
      {{ formattedDate }}
    </p>
  </div>
</template>

<style></style>
