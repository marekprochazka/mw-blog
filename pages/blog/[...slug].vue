<script setup lang="ts">


</script>

<template>
    <ContentDoc v-slot="{ doc }">
      <nav v-if="doc.navigation">
        <ContentNavigation v-slot="{ navigation }">
          <ul>
            <li v-for="link of navigation" :key="link._path">
              <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
      </nav>
<!--      <article>-->
        <h1>{{ doc.title }}</h1>
        <p>{{ doc.description }}</p>
        <ContentRenderer :value="doc"/>
<!--      </article>-->
    </ContentDoc>
</template>