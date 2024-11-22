<template>
  <header class="py-12 px-4 sm:px-6 lg:px-8">
    <div class="relative mx-auto max-w-[38rem] pt-20 text-center pb-20">
      <div class="flex items-center justify-center space-x-3">
        <img loading="lazy" src="/my-logo.png" alt="codeblock" class="h-20 w-20" />
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-800 sm:text-6xl">
          Mohid Kazi
        </h1>
      </div>
      <div class="mt-4 text-base leading-7 text-slate-600">
        Lead Software Engineer with over 6 years of experience in full-stack web application development, system architecture, and database design,
        with a keen focus on Simplicity, Consistency, Cleanliness and Quality.
        I possess exceptional leadership and interpersonal skills, with a passion for leveraging technology to solve complex problems and drive innovation.
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.form-input {
  @apply block h-10 w-full rounded-md bg-white pr-3 pl-12 text-slate-900 shadow-md shadow-black/5 ring-1 ring-slate-900/5 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6;
}

.form-submit {
  @apply inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 ml-4 flex-none;
}
</style>
