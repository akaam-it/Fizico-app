<template>
  <div class="font-DanaBack">
    <router-link :to="link" class="flex gap-x-2 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
      <svg class="block w-6 h-6">
        <use :href="`#${icon}`"></use>
      </svg>

      {{ title }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    link: String,
  },
};
</script>
