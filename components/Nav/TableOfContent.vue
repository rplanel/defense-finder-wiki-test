<script setup lang="ts">
import { useDisplay } from "vuetify";
const props = defineProps<{
  links: any;
}>();

const { mobile } = useDisplay();

// const { navigation } = useContent();
// console.log(navigation.value);
</script>

<template>
  <v-navigation-drawer
    v-if="!mobile"
    id="app-toc"
    location="right"
    :border="0"
    permanent
  >
    <template #prepend>
      <div class="text-h6 font-weight-medium mt-4 mb-2 ms-4">Contents</div>
    </template>
    <ul class="px-2 py-2">
      <NavTableOfContentItem :links="props.links" /></ul
  ></v-navigation-drawer>
</template>
<style scoped>
#app-toc ul {
  list-style-type: none;
}
</style>
