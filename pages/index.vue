<script setup lang="ts">

import {Card, CardContent, CardHeader} from '~/components/ui/card';

</script>

<template>
  <div class="grid grid-cols-6 gap-4 p-2">
    <div class="col-span-1">
      <NuxtLink to="/blog">
        <Card>
          <CardHeader>
            <h1>Blog</h1>
          </CardHeader>
          <CardContent>
            <img alt="mind-blown" class="h-40 mx-auto" src="/assets/gifs/mind-blown.webp">
          </CardContent>
        </Card>
      </NuxtLink>
    </div>
     <div class="col-span-1">
      <NuxtLink to="/theme">
        <Card>
          <CardHeader>
            <h1>Themes</h1>
          </CardHeader>
          <CardContent>
            <img alt="bella baxter" class="h-40 mx-auto w-full" src="/assets/gifs/bella.webp">
          </CardContent>
        </Card>
      </NuxtLink>
    </div>
         <div class="col-span-1">
      <NuxtLink to="/gallery">
        <Card>
          <CardHeader>
            <h1>Gallery</h1>
          </CardHeader>
          <CardContent>
            <img alt="just stop oil" class="h-40 mx-auto w-full" src="/assets/gifs/jso.webp">
          </CardContent>
        </Card>
      </NuxtLink>
    </div>
    <div class="col-span-1">
      <NuxtLink to="/">
        <Card>
          <CardHeader>
            <h1>TBD</h1>
          </CardHeader>
          <CardContent>
            <img alt="obi-wan" class="h-40 mx-auto w-full" src="/assets/gifs/hello-there.webp">
          </CardContent>
        </Card>
      </NuxtLink>
    </div>
  </div>
</template>


