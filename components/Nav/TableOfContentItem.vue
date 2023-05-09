<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();
console.log(theme);
const route = useRoute();

const props = defineProps<{
  links: any;
}>();
</script>
<template>
  <template v-for="link in props.links">
    <li
      :title="link.text"
      :value="link.id"
      :class="[
        `ps-${(link.depth - 1) * 3}`,
        {
          'text-primary': route.hash === `#${link.id}`,
          'text-medium-emphasis': route.hash !== `#${link.id}`,
        },
      ]"
      :style="{
        'border-left':
          route.hash === `#${link.id}`
            ? `2px solid ${theme.current.value.colors.primary}`
            : '2px solid #e5e5e5',
      }"
    >
      <NuxtLink
        :to="`#${link.id}`"
        class="text-decoration-none"
        style="color: inherit"
        >{{ link.text }}</NuxtLink
      >
    </li>
    <template v-if="link?.children?.length > 0">
      <NavTableOfContentItem :links="link.children" />
    </template>
  </template>
</template>
<style scoped>
li {
  border-left: 2px solid #e5e5e5;
}
</style>
