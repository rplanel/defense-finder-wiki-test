<template>
  <h2 class="text-h4 font-weight-bold" :id="id">
    <a v-if="id && generate" :href="`#${id}`" class="text-decoration-none">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from "#imports";
defineProps<{ id?: string }>();
const heading = 2;
const { anchorLinks } = useRuntimeConfig().public.content;
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading);
</script>
<style scoped>
a {
  color: inherit;
}
</style>
