<template>
  <v-row>
    <v-col>
      <v-btn prepend-icon="mdi-github" variant="text" size="small" :href="path" target="_blank">Edit on github</v-btn>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref } from "vue";
const { page } = useContent();
// const owner = ref("mdm-lab");
const owner = ref("rplanel");
// const repo = ref("wiki");
const repo = ref("defense-finder-wiki-test");
// const branch = ref("main");
const branch = ref("dev");


// const baseUrl = ref(new URL("https://gitlab.pasteur.fr"));
const baseUrl = ref(new URL("https://github.com"))

// https://github.com/rplanel/defense-finder-wiki-test/edit/dev/content/1.introduction/0.index.md
const path = ref(
  new URL(
    `/${owner.value}/${repo.value}/edit/${branch.value}/content/${page.value._file}`,
    baseUrl.value
  ).href
);
</script>
