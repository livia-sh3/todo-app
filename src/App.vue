<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
  <h1>To-Do App!</h1>
  <!-- <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p> -->
  <nav>
    <RouterLink to="/todos">Go to todos</RouterLink>
    <RouterLink to="/completed">Go to completed</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>


</template>
