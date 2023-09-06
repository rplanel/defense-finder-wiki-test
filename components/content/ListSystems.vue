<script setup lang="ts">

const props = defineProps<{
    systems: any;
}>();

const headers = ref([{
    title: "Systems",
    key: "system"
}])

</script>
<template>
    <v-card>
        <v-card-text>
            <v-data-table items-per-page="5" :headers="headers" :items="props.systems" class="elevation-1"></v-data-table>
        </v-card-text>
    </v-card>
</template>