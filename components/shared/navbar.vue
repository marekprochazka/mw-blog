<script setup  lang="ts">

import {navigationMenuTriggerStyle} from "~/components/ui/navigation-menu";
</script>

<template>
  <NavigationMenuItem>
    <NuxtLink to="/blog">
      <NavigationMenuLink :class="navigationMenuTriggerStyle()">
        BLog
      </NavigationMenuLink>
    </NuxtLink>
  </NavigationMenuItem>
</template>


