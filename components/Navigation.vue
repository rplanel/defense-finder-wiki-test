<script setup lang="ts">
const props = defineProps<{
  navigation: any;
}>();

// const { navigation } = useContent();
// console.log(navigation.value);
</script>

<template>
  <template v-for="navItem in props.navigation">
    <v-list-group v-if="navItem?.children" :value="navItem.title">
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-account-circle"
          nav
          :title="navItem.title"
        ></v-list-item>
      </template>
      <Navigation :navigation="navItem.children" />
    </v-list-group>
    <v-list-item
      v-else
      nav
      :title="navItem.title"
      :value="navItem.title"
      :to="navItem._path"
    ></v-list-item>
  </template>
</template>
