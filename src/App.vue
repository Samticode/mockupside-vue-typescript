<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation />

  <RouterView />
</template>

<style>
:root {
  --primary-black: #1c1c1c;
  --primary-white: #f1f1f1;
}

body {
  background-color: #f1f1f1;
}
</style>
