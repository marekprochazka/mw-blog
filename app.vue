<script setup lang="ts">
import {useTheme} from '~/stores/useTheme';

const themeStore = useTheme()
const {cssClass} = storeToRefs(themeStore)
const {fromLocalStorage} = themeStore
useHead({
  bodyAttrs: {
    class: cssClass.value
  }
})

watch(() => cssClass.value, (value) => {
  if (document.body) {
    document.body.className = value
  }
})

onMounted(() => {
  fromLocalStorage()
})
</script>

<template>
  <main class="root">
    <NuxtPage/>
    <shared-navigation/>
  </main>
</template>
