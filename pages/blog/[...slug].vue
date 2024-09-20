<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';
import { withTrailingSlash } from 'ufo';

const doc = ref<ParsedContent | null>(null);
async function getData() {
  doc.value = await queryContent(withTrailingSlash(useRoute().path)).findOne();
}

getData();
</script>

<template>
  <!--  <ContentDoc v-slot="{ doc }">-->
  <blog-wrapper v-if="doc" :doc="doc" />
  <div v-else><p>Loading</p></div>
  <!--  </ContentDoc>-->
</template>
