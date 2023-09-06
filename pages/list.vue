<script setup lang="ts">
definePageMeta({
    documentDriven: false
})
const { path } = useRoute()
const headers = ref([{
    title: "Systems",
    key: "system"
}])
const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()

})
console.log(data)
</script>
<template>
    <v-card v-if="data?.body" class="mt-5" flat>
        <ul>
            <li v-for="e in data.body" :key="e.system">
                {{ e.system }}
            </li>
        </ul>
        <v-card-text>
            <v-data-table items-per-page="5" :headers="headers" :items="data.body" class="elevation-1"></v-data-table>
        </v-card-text>
    </v-card>
</template>