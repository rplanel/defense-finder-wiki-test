<template>
  <span :id="id" class="anchor"></span>
  <h3 class="text-h6 font-weight-bold my-3">
    <a v-if="id && generate" :href="`#${id}`" class="text-decoration-none">
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from "#imports";
defineProps<{ id?: string }>();
const heading = 3;
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
