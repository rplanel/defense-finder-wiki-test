<template>
  <v-card>
    <v-app>
      <v-main style="min-height: 300px">
        <!-- <v-container class="fill-height w-auto" > -->
        <!-- <v-card flat max-width="1000" min-height="300" color="transparent">
            <v-card-text> -->
        <slot />
        <!-- </v-card-text>
          </v-card> -->
        <v-footer id="app-footer" app>footer</v-footer>
        <!-- </v-container> -->
      </v-main>
      <NavNavbar />
      <NavTableOfContent :links="page.body.toc.links" />
    </v-app>
  </v-card>
</template>
<script setup lang="ts">
const { page } = useContent();

console.log("the toc", page.value);
</script>
<style scoped>
#app-footer {
  border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}
</style>
