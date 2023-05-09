<script setup lang="ts">
const props = defineProps<{
  links: any;
}>();

// const { navigation } = useContent();
// console.log(navigation.value);
</script>

<template>
  <template v-for="link in props.links">
    <v-list-item
      nav
      :title="link.text"
      :value="link.id"
      :href="`#${link.id}`"
      variant="plain"
    >
      <template v-if="link?.children?.length > 0 && link.depth <= 3">
        <TableOfContent :links="link.children" />
      </template>
    </v-list-item>
  </template>
</template>
