<template>
  <v-card>
    <v-app>
      <v-app-bar>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>Microbial Warefare</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer">
        <v-card flat>
          <v-list>
            <Navigation :navigation="navigation" />
          </v-list>
        </v-card>
      </v-navigation-drawer>

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
const { navigation, page, surround, globals } = useContent();

const drawer = ref(true);

console.log(page.value);

console.log("navigation", navigation.value);
console.log(surround.value);
console.log(globals.value);
</script>
