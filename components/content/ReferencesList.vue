<template>
  <ClientOnly fallback-tag="span" fallback="Loading references...">
    <v-list v-if="computedItems.length > 0" :items="computedItems" item-props lines="three">
      <template #subtitle="{ item }">
        <div>{{ item.subtitle }}</div>
        <div>{{ item.containerTitle }} ({{ item.year }})</div>
      </template>
      <template #prepend="{ item }">
        <v-avatar>
          <v-icon>{{ item.prependIcon }}</v-icon>
        </v-avatar>
      </template>
    </v-list>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useFetch as useFetchVueUse } from "@vueuse/core";

// import { select, selectAll } from 'unist-util-select';

const props = defineProps<{
  items: string[];
}>();

const doiBaseUrl = ref(new URL("https://doi.org/"));
const fetchedDoi = ref(
  await Promise.all(
    props.items.map(async (doi) => {
      const url = new URL(`/works/${doi}`, " https://api.crossref.org/").href;
      const { data, error } = await useFetchVueUse<{
        message: {
          DOI: string;
          issue: number;
          title: string;
          author: Array<{ family: string; given: string }>;
          "container-title-short": string;
          "container-title": string;
          abstract: string;
          published: {
            "date-parts": string[];
          };
        };
      }>(url)
        .get()
        .json();
      return data.value;
    })
  )
);
const computedItems = computed(() => {
  return fetchedDoi.value.map((doi, i) => {
    if (doi) {
      const {
        DOI,
        title,
        "container-title-short": cts,
        "container-title": ct,
        abstract,
        published,
        ...rest
      } = doi.message;
      return {
        DOI,
        title: title[0],
        subtitle: toAuthorsString(doi?.message?.author ?? []),
        containerTitle: cts?.length > 0 ? cts[0] : ct?.length > 0 ? ct[0] : "",
        abstract,
        year: published["date-parts"][0][0],
        href: getReferenceUrl(DOI),
        target: "_blank",
        prependIcon: "mdi-newspaper-variant-outline",
      };
    } else {
      return {};
    }
  });
});

function toAuthorsString(authors: Array<{ family: string; given: string }>) {
  return authors
    .map((curr) => {
      return `${curr.family} ${curr.given}`;
    })
    .join(", ");
}

function getReferenceUrl(doi) {
  return new URL(doi, doiBaseUrl.value).href;
}
</script>
