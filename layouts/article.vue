<script setup lang="ts">
const { page, surround } = useContent();
console.log(page)
console.log("surround object!!!!!")
console.log(surround)
</script>
<template>
  <v-card>
    <v-app>
      <v-main style="min-height: 300px">
        <!-- <v-container class="fill-height w-auto" > -->
        <!-- <v-card flat max-width="1000" min-height="300" color="transparent">
            <v-card-text> -->
        <v-container>
          <slot />
          <!-- </v-card-text>
          </v-card> -->
          <EditGitlab />
          <v-row justify="space-between">
            <v-col v-for="(surroundPage, i) in surround" :key="surroundPage?._id" cols="auto">
              <v-btn v-if="surroundPage" :prepend-icon="i === 0 ? 'mdi-arrow-left' : undefined"
                :append-icon="i === 1 ? 'mdi-arrow-right' : undefined" variant="outlined" color="primary"
                :to="surroundPage?._path">{{ surroundPage?.title }}</v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-footer id="app-footer" app>footer</v-footer>
        <!-- </v-container> -->
      </v-main>
      <NavNavbar />
      <NavTableOfContent :links="page.body.toc.links" />
    </v-app>
  </v-card>
</template>

<style scoped>
#app-footer {
  border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}
</style>
