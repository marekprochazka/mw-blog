<script setup lang="ts">
const {type, cls} = withDefaults(defineProps<{
  cls?: string[],
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>(), {
  type: 'h1',
  cls: () => []
})

const sizeMap = (type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => ({
  h1: ['text-4xl', 'font-bold'],
  h2: ['text-3xl', 'font-bold'],
  h3: ['text-2xl', 'font-bold'],
  h4: ['text-xl', 'font-bold'],
  h5: ['text-lg', 'font-bold'],
  h6: ['text-base', 'font-bold'],
})[type]

</script>

<template>
  <component :is="type" :class="['font-sans', 'text-slate-400',...sizeMap(type) ,...cls]">
    <slot/>
  </component>
</template>