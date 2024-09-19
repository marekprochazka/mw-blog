<script setup lang="ts">
import { useTheme } from '~/stores/useTheme';

useHead({
  title: 'Theme selection',
});

const themeStore = useTheme();
const { currentTheme, list } = storeToRefs(themeStore);
const { setTheme } = themeStore;
</script>

<template>
  <div>
    <shared-go-home />

    <h1>Theme selection</h1>
    <Button
      v-for="theme in list"
      :key="theme.identifier"
      :disabled="theme.identifier === currentTheme"
      @click="setTheme(theme.identifier)"
    >
      {{ theme.title }}
    </Button>
  </div>
</template>
