<script setup lang="ts">
import type {ParsedContent, QueryBuilderParams} from "@nuxt/content";
import {Button} from "~/components/ui/button";

const q: QueryBuilderParams = {path: '/blog' };

const articles = ref<any>(null);

async function fetchArticles() {
  articles.value = await queryContent('/blog').where({ tags: {$not: {$contains:'no-nav'}} }).find()
  console.log(articles.value)
}

onMounted(() => {
  fetchArticles()
})

</script>

<template>
  <shared-navbar />
  <div>
    INDEX
  </div>
  <Button class="bg-amber-700">TEST</Button>

   <div v-if="articles">
    <h1>The blog 2</h1>
    <div v-for="article in articles">
      <NuxtLink :to="article._path" :key="article._path">{{article.title}} <br></NuxtLink>
    </div>
  </div>
</template>


