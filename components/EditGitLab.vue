<template>
  <ProseA :to="path" target="blank">
    <span> Edit this page on GitLab </span>
  </ProseA>
</template>
<script setup lang="ts">
import { ref } from "vue";
const { page } = useContent();
const config = useDocus();
const props = defineProps<{
  owner: string;
  repo: string;
  branch: string;
}>();
const baseUrl = ref(new URL("https://gitlab.pasteur.fr"));
const path = ref(
  new URL(
    `/${props.owner}/${props.repo}/-/edit/${props.branch}/content/${page.value._file}`,
    baseUrl.value
  ).href
);
</script>
