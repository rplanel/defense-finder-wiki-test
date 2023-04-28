<template>
  <ClientOnly fallback-tag="span" fallback="Loading references...">
    <ProseOl v-if="computedItems.length > 0">
      <ProseA
        v-for="item in computedItems"
        :key="item.DOI"
        :href="item.href"
        target="blank"
      >
        <ProseLi class="refArticle">
          <div class="ref-title">{{ item.title }}.</div>
          <div class="ref-authors">{{ item.authorsString }}</div>
          <div>{{ item?.containerTitle }}</div>
        </ProseLi>
      </ProseA>
    </ProseOl>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useFetch as useFetchVueUse } from "@vueuse/core";
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
        };
      }>(url)
        .get()
        .json();
      return data.value;
    })
  )
);
const computedItems = computed(() => {
  return fetchedDoi.value.map((doi) => {
    if (doi) {
      const {
        DOI,
        title,
        "container-title-short": cts,
        "container-title": ct,
        abstract,
        ...rest
      } = doi.message;
      return {
        DOI,
        title: title[0],
        authorsString: toAuthorsString(doi?.message?.author ?? []),
        containerTitle: cts?.length > 0 ? cts[0] : ct?.length > 0 ? ct[0] : "",
        abstract,
        href: getReferenceUrl(DOI),
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
