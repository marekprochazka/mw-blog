<script setup lang="ts"></script>

<template>
  <ContentDoc v-slot="{ doc }">
    <blog-wrapper :doc="doc" />
  </ContentDoc>
</template>
