<template>
  <span :id="id" class="anchor"></span>
  <h2 class="text-h4 font-weight-bold my-4">
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
.anchor {
  display: block;
  position: relative;
  top: -64px;
  visibility: hidden;
}
</style>
