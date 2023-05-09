<template>
  <v-card>
    <v-app>
      <NavNavbar />

      <NavTableOfContent :links="page.body.toc.links" />
      <v-main style="min-height: 300px">
        <v-container class="px-8">
          <slot />

          <v-footer app>footer</v-footer>
        </v-container></v-main
      >
    </v-app>
  </v-card>
</template>
<script setup lang="ts">
const { navigation, page, surround, globals } = useContent();

console.log("the toc", page.value);
</script>
