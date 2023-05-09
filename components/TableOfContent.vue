<script setup lang="ts">
const props = defineProps<{
  links: any;
  depth: {
    type: number;
    default: 2;
  };
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
      <template v-if="link?.children && links.depth <= props.depth">
        <TableOfContent :links="link.children" />
      </template>
    </v-list-item>
  </template>
</template>
