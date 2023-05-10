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
          :title="navItem.title"
          active-color="primary"
          exact
          nav
        ></v-list-item>
      </template>
      <Navigation :navigation="navItem.children" />
    </v-list-group>
    <template v-else>
      <v-list-item
        :title="navItem.title"
        :value="navItem.title"
        :to="navItem._path"
        active-color="primary"
        exact
        nav
      ></v-list-item>
    </template>
  </template>
</template>
