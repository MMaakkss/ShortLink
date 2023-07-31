<template>
  <div>
    <section class="container pt-24 mb-10">
      <h1 class="text-3xl font-bold">Dashboard</h1>
      <div class="card mt-10">
        <div class="flex justify-between gap-5">
          <input
            class="flex-1 py-3 px-3 rounded-xl"
            id="url"
            type="text"
            placeholder="Paste or enter long URL"
          />
          <input
            class="flex-[0.5] py-3 px-3 rounded-xl"
            id="shortKey"
            type="text"
            placeholder="Enter a key"
          />
          <button class="flex-[0.3] ml-3 btn text-lg px-2 rounded-xl">
            Short now!
          </button>
        </div>
      </div>
    </section>
    <section class="container mb-5 last:mb-0" v-for="n in 10">
      <LinkItem :link="{id: 's', key: 'dsd', url: 'google.com'}" />
    </section>
  </div>
</template>

<script setup></script>

<style scoped></style>
