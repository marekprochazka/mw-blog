<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';
import { UNUSED } from '~/utils/unused';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '~/components/ui/card';

const { doc } = defineProps<{ doc: ParsedContent }>();
UNUSED(doc);

const articles = ref<ParsedContent[]>([]);

async function fetchArticles() {
  articles.value = await queryContent('/blog')
    .where({ tags: { $not: { $contains: 'index' } } })
    .find();
}

fetchArticles();
</script>

<template>
  <shared-go-home />
  <div class="grid grid-cols-4 gap-4 p-2">
    <Card
      v-for="article in articles"
      :key="article._path"
      class="col-span-1 bg-transparent border-8 border-blue-200"
    >
      <CardHeader>
        <h1>{{ article.title }}</h1>
      </CardHeader>
      <CardContent>
        <ContentRenderer
          v-if="article.excerpt"
          :excerpt="true"
          :value="article"
        />
        <p v-else>No excerpt provided...</p>
      </CardContent>
      <CardFooter>
        <NuxtLink :to="article._path">
          <Button> To article </Button>
        </NuxtLink>
      </CardFooter>
    </Card>
  </div>
</template>
