<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';

const { doc } = defineProps<{ doc: ParsedContent }>();

const isIndex = computed(() => doc.tags?.includes('index') ?? false);
</script>

<template>
  <blog-body v-if="!isIndex" :doc="doc" />
  <blog-index v-else :doc="doc" />
</template>
