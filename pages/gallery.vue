<script setup lang="ts">
import { ScrollArea } from '~/components/ui/scroll-area';

useHead({
  title: 'Gallery',
});

const visibleRef = ref(false);
const indexRef = ref(0);

const { getAll } = useGallery();
const images = getAll();

const showImg = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);

// const randomSpan = () => [
//   `col-span-${Math.floor(Math.random() * 4) + 1}`,
//   `row-span-${Math.floor(Math.random() * 2) + 1}`,
// ];

const randomSpanStyle = () => ({
  gridColumn: `span ${Math.floor(Math.random() * 4) + 1}`,
  gridRow: `span ${Math.floor(Math.random() * 2) + 1}`,
});
</script>

<template>
  <div class="h-full">
    <shared-go-home />
    <ScrollArea class="h-5/6 w-full">
      <div class="grid grid-cols-10 gap-2">
        <div
          v-for="(src, index) in images"
          :key="index"
          :class="[
            'h-auto',
            'max-w-full',
            'rounded-lg',
            'flex',
            // ...randomSpan(),
            // 'row-span-2',
            // 'col-span-3',
          ]"
          :style="randomSpanStyle()"
          @click="() => showImg(index)"
        >
          <img class="h-full w-full object-cover" :src="src.src" >
        </div>
      </div>
    </ScrollArea>
    <VueEasyLightbox
      :imgs="images"
      :index="indexRef"
      :visible="visibleRef"
      @hide="onHide"
    />
  </div>
</template>
