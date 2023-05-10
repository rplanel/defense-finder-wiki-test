<template>
  <v-app-bar>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Microbial Warefare</v-toolbar-title>
    <v-btn @click="toggleTheme">toggle theme</v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" :border="0">
    <v-card flat>
      <v-list nav density="compact" :lines="false">
        <NavNavigation :navigation="navigation" />
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { useTheme } from "vuetify";
const { navigation, page, surround, globals } = useContent();
console.log(page.value);
const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
const drawer = ref(true);
</script>
