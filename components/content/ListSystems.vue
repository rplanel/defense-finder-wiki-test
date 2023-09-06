<script setup lang="ts">

const props = defineProps<{
    systems: any;
}>();
const itemsPerParge = ref(25)
const search = ref('')
const sortBy = ref([{ key: 'system', order: 'asc' }])
const headers = ref([{
    title: "Systems",
    key: "system"
}, { title: "Articles", key: "dois" }
])

</script>
<template>
    <v-card flat color="transparent" class="my-5">
        <v-toolbar>
            <v-toolbar-title>Defense Systems</v-toolbar-title>

            <v-text-field v-model="search" density="compact" variant="underlined" append-inner-icon="mdi-magnify" label="Search"
                single-line hide-details class="mx-2"></v-text-field>
        </v-toolbar>
        <v-data-table :items-per-page="itemsPerParge" v-model:sort-by="sortBy" :headers="headers" :items="props.systems"
            :search="search">
            <template #[`item.system`]="{ item }">
                <v-chip variant="text" link :to="`/defense-systems/${item.columns.system.toLowerCase()}`">{{
                    item.columns.system }}</v-chip>
            </template>
            <template #[`item.dois`]="{ item }">
                <ReferencesList :items="item.columns.dois"></ReferencesList>
            </template>
        </v-data-table>
    </v-card>
</template>