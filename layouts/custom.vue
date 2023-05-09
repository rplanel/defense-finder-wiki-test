<template>
  <v-card>
    <v-app>
      <NavNavbar />

      <v-main style="min-height: 300px">
        <v-container>
          <slot />
          <v-footer app>footer</v-footer>
        </v-container></v-main
      >
    </v-app>
  </v-card>
</template>
<script setup lang="ts">
const { navigation } = useContent();

const drawer = ref(true);
</script>
