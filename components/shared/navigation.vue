<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Separator } from '~/components/ui/separator';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Blog', path: '/blog' },
  { title: 'Gallery', path: '/gallery' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'Themes', path: '/theme' },
];

const gridCols = pages.length;
</script>

<template>
  <Drawer class="v-navbar">
    <DrawerTrigger class="w-full text-center v-navbar--button">
      <Icon class="navigation-icon" icon="radix-icons:component-2">Open</Icon>
    </DrawerTrigger>
    <DrawerContent class="v-navbar--content">
      <DrawerHeader>
        <DrawerTitle class="text-center"
          ><h2>Where do you want to go?</h2></DrawerTitle
        >
      </DrawerHeader>
      <div :class="['grid grid-rows-1', `grid-cols-${gridCols}`]">
        <div v-for="page in pages" :key="page.title">
          <DrawerClose class="w-full">
            <NuxtLink :to="page.path"
              ><p class="text-center">{{ page.title }}</p></NuxtLink
            >
          </DrawerClose>
        </div>
      </div>
      <DrawerFooter>
        <Separator
          bg-class="v-separator--label-bg"
          :label="true"
          line-class="v-separator--line-bg"
          ><p>
            It's great to have you here
            <Twemoji class="ml-1.5" emoji="🫶" /></p
        ></Separator>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
