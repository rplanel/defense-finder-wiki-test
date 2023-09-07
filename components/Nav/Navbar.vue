<template>
  <v-app-bar>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>DefenseFinder Wiki</v-toolbar-title>
    <v-btn icon="mdi-theme-light-dark" @click="toggle()">
    </v-btn>
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
import { useCustomTheme } from '~/composables/useCustomTheme'

const { toggle } = useCustomTheme()

const { navigation, page, surround, globals } = useContent();


const drawer = ref(true);
</script>
