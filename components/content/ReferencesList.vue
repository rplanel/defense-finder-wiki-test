<template>
  <ClientOnly fallback-tag="span" fallback="Loading references...">
    <v-list v-if="computedItems.length > 0">
      <v-list-item v-for="item in computedItems" :key="item.title" :title="item.title" lines="three" :href="item.href"
        :target="item.target">
        <template #title="{ title }">
          <span class="font-weight-bold">{{ title }}</span>
        </template>
        <template #prepend>
          <v-avatar>
            <v-icon>{{ item.prependIcon }}</v-icon>
          </v-avatar>
        </template>
        <template #subtitle>
          <div>{{ item.subtitle }}</div>
          <div>{{ item.containerTitle }} ({{ item.year }})</div>
        </template>
        <v-card flat color="transparent" class="text-justify my-2">
          {{ item.abstract }}
        </v-card>
      </v-list-item>


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
      console.log(abstract)
      let sanitizedAbstract = abstract
      if (sanitizedAbstract) {
        sanitizedAbstract = /\<jats\:p\>(.*)\<\/jats\:p\>/.exec(sanitizedAbstract)?.[1] ?? ''
      }
      console.log(sanitizedAbstract)
      return {
        DOI,
        title: title[0],
        subtitle: toAuthorsString(doi?.message?.author ?? []),
        containerTitle: cts?.length > 0 ? cts[0] : ct?.length > 0 ? ct[0] : "",
        abstract: sanitizedAbstract,
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
