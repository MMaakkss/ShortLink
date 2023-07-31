<template>
  <div class="fixed top-0 left-0 right-0 border-b border-white/20 bg-blur">
    <nav class="container py-4 flex justify-between items-center">
      <NuxtLink class="text-2xl font-bold" :to="{ name: 'index' }">ShortLink</NuxtLink>
      <ul class="flex gap-5">
        <li>
          <NuxtLink :to="{ name: 'index' }">Log In</NuxtLink>
        </li>
        <li>
          <NuxtLink class="py-2 px-3 btn rounded-full" :to="{ name: 'auth' }">Sign Up</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup></script>

<style scoped></style>
