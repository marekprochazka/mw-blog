<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';
import { ScrollArea } from '~/components/ui/scroll-area';

const { doc } = defineProps<{ doc: ParsedContent }>();
</script>

<template>
  <ScrollArea class="h-[90%] w-full">
    <NuxtLink to="/blog"
      ><p><Twemoji emoji="👈" /> back to index</p></NuxtLink
    >
    <nav v-if="doc.navigation">
      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
    <!--      <article>-->
    <h1>{{ doc.title }}</h1>
    <p>{{ doc.description }}</p>
    <p>{{ doc.tags }}</p>
    <div class="p-5">
      <ContentRenderer :value="doc" />
    </div>
  </ScrollArea>
  <!--      </article>-->
</template>
