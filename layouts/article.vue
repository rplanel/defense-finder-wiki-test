<template>
  <v-card>
    <v-app>
      <NavNavbar />
      <v-navigation-drawer location="right" permanent>
        <v-list> <NavTableOfContent :links="page.body.toc.links" /> </v-list
      ></v-navigation-drawer>
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
