<template>
  <div>
    <Meta name="description" :content="description" />
    <Meta name="title" :content="title" />
    <Meta name="og:description" :content="description" />
    <Meta name="og:title" :content="title" />
  </div>
  <main class="min-h-screen bg-white">
    <Navbar />
    <div class="mx-auto max-w-2xl py-48 sm:py-64 lg:py-72">
      <div class="text-center">
        <div class="flex items-center justify-center space-x-3">
          <h1
            class="max-w-full mx-auto text-5xl font-bold sm:text-pretty tracking-tighter sm:tracking-normal sm:text-6xl text-neutral-950 md:text-7xl lg:text-8xl xl:text-[102px] font-giarek">
            WIP.
          </h1>

        </div>
        <p class="mt-4 text-base leading-7 text-slate-600">
          This Page is under maintenance, please come back again later to view the updated resume
        </p>
      </div>
    </div>

    <!-- <Hero /> -->
    <!-- <section class="min-h-[calc(100vh-102px)] pt-4">
      <div
        class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <post v-for="(post, i) in data" :content="post" :key="i" />
      </div>
    </section> -->
  </main>
</template>

<script setup lang="ts">
const description = ref('Mohid kazi portfolio website to showcase experience and resume')
const title = ref('Mohid Kazi - Resume');
</script>