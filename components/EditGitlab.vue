<template>
  <v-row>
    <v-col>
      <v-btn
        prepend-icon="mdi-gitlab"
        variant="text"
        size="small"
        :href="path"
        target="_blank"
        >Edit on gitlab</v-btn
      >
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref } from "vue";
const { page } = useContent();
const owner = ref("mdm-lab");
const repo = ref("wiki");
const branch = ref("main");

const baseUrl = ref(new URL("https://gitlab.pasteur.fr"));
const path = ref(
  new URL(
    `/${owner.value}/${repo.value}/-/edit/${branch.value}/content/${page.value._file}`,
    baseUrl.value
  ).href
);
</script>
