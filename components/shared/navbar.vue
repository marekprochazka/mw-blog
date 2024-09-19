<script setup lang="ts">

import {Icon} from '@iconify/vue';
import {Separator} from '~/components/ui/separator';
</script>

<template>
  <Drawer>
    <DrawerTrigger class="w-full text-center v-navbar--button">
      <Icon class="text-slate-400 text-5xl text-center w-full" icon="radix-icons:component-2">Open</Icon>
    </DrawerTrigger>
    <DrawerContent class="bg-black">
      <DrawerHeader>
        <DrawerTitle class="text-center"><h2>Where do you want to go?</h2></DrawerTitle>
      </DrawerHeader>
      <div class="grid grid-rows-1 grid-cols-4">
        <div>

          <DrawerClose class="w-full">
            <NuxtLink to="/blog"><p class="text-center">Blog</p></NuxtLink>
          </DrawerClose>
        </div>
        <div>
          <DrawerClose class="w-full">
            <NuxtLink to="/"><p class="text-center">Home</p></NuxtLink>
          </DrawerClose>
        </div>
        <div>
          <DrawerClose class="w-full">
            <NuxtLink to="/about"><p class="text-center">About</p></NuxtLink>
          </DrawerClose>
        </div>
        <div>
          <DrawerClose class="w-full">
            <NuxtLink to="/contact"><p class="text-center">Contact</p></NuxtLink>
          </DrawerClose>
        </div>
      </div>
      <DrawerFooter>
        <Separator :label="true">
          It's great to have you here <Twemoji class="ml-1.5" emoji="👾" />
        </Separator>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>

</template>


