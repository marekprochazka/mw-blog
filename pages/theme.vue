<script setup lang="ts">

import {useTheme} from '~/stores/useTheme';

const themeStore = useTheme()
const {setTheme} = themeStore
</script>

<template>
  <div>
    <NuxtLink to="/">
      <p>
        <Twemoji emoji="👈"/>
        I want to go home
        <Twemoji emoji="😢"/>
      </p>
    </NuxtLink>
    
    <h1>Theme selection</h1>
    <Button @click="setTheme('default')">Default</Button>
    <Button @click="setTheme('pretty')">Pretty</Button>

  </div>

</template>


