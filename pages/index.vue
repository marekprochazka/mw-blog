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

import {Card, CardContent, CardFooter, CardHeader} from "~/components/ui/card";
import {CheckIcon} from '@radix-icons/vue'

</script>

<template>
  <!--  <shared-navbar />-->
  <!--  <div>-->
  <!--    INDEX-->
  <!--  </div>-->
  <!--  <Button class="bg-amber-700">TEST</Button>-->

  <!--   <div v-if="articles">-->
  <!--    <h1>The blog 2</h1>-->
  <!--    <div v-for="article in articles">-->
  <!--      <NuxtLink :to="article._path" :key="article._path">{{article.title}} <br></NuxtLink>-->
  <!--    </div>-->
  <!--  </div>-->
  <div class="grid grid-cols-2 gap-4 p-2">
    <div class="col-span-1">
      <Card class="bg-transparent border-8 border-blue-200">
        <CardHeader>
          <h1>Blog</h1>
        </CardHeader>
        <CardContent>
          <p>Content</p>
        </CardContent>
        <CardFooter>
          <Button @click="navigateTo('/blog')" class="w-full">
            <CheckIcon class="mr-2 h-4 w-4"/>
            Go to blog
          </Button>
        </CardFooter>
      </Card>
    </div>
    <div class="col-span-1">
      <Card class="bg-transparent border-8 border-blue-200">
        <CardHeader>
          <h1>TBD</h1>
        </CardHeader>
        <CardContent>
          <p>Content</p>
        </CardContent>
        <CardFooter>
          <Button @click="navigateTo('/')" class="w-full">
            <CheckIcon class="mr-2 h-4 w-4"/>
            TBD
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>


