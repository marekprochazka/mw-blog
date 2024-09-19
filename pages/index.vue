<script setup lang="ts">
// import type {ParsedContent, QueryBuilderParams} from "@nuxt/content";
// import {Button} from "~/components/ui/button";
//
// const q: QueryBuilderParams = {path: '/blog' };
//
// const articles = ref<any>(null);
//
// async function fetchArticles() {
//   articles.value = await queryContent('/blog').where({ tags: {$not: {$contains:'no-nav'}} }).find()
//   console.log(articles.value)
// }
//
// onMounted(() => {
//   fetchArticles()
// })

import {Card, CardContent, CardHeader} from '~/components/ui/card';

</script>

<template>
  <div class="grid grid-cols-6 gap-4 p-2">
    <div class="col-span-1">
      <NuxtLink to="/blog">
        <Card class="bg-transparent border-8 border-blue-200">
          <CardHeader>
            <h1>Blog</h1>
          </CardHeader>
          <CardContent>
            <img alt="mind-blown" class="h-40 mx-auto" src="/assets/gifs/mind-blown.webp">
          </CardContent>
        </Card>
      </NuxtLink>
    </div>
    <div class="col-span-1">
      <NuxtLink to="/">
        <Card class="bg-transparent border-8 border-blue-200">
          <CardHeader>
            <h1>TBD</h1>
          </CardHeader>
          <CardContent>
            <img alt="obi-wan" class="h-40 mx-auto w-full" src="/assets/gifs/hello-there.webp">
          </CardContent>
        </Card>
      </NuxtLink>
    </div>
  </div>
</template>


