<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';
import { ScrollArea } from '~/components/ui/scroll-area';
import { Slider } from '~/components/ui/slider';
import { DEFAULT_BLOG_BODY_WIDTH } from '~/config/constants';

const { doc } = defineProps<{ doc: ParsedContent }>();

const preferredWidth = ref([DEFAULT_BLOG_BODY_WIDTH]);
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
    <div
      :class="['p-5']"
      :style="{
        width: `${preferredWidth[0]}%`,
        margin: 'auto',
      }"
    >
      <ContentRenderer :value="doc" />
    </div>
  </ScrollArea>
  <Slider v-model="preferredWidth" :default-value="[33]" :max="100" :step="1" />
  <!--      </article>-->
</template>
