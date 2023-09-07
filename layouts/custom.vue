<template>
  <v-card>
    <VApp :theme="isDark ? 'dark' : 'light'">
      <NavNavbar />

      <v-main style="min-height: 300px">
        <v-container>
          <slot />
          <v-footer app>footer</v-footer>
        </v-container></v-main>
    </VApp>
  </v-card>
</template>
<script setup lang="ts">
import { useCustomTheme } from '~/composables/useCustomTheme'

const { isDark } = useCustomTheme()
const { navigation } = useContent();

const drawer = ref(true);
</script>
