<template>
  <main class="min-h-screen relative">
    <Navbar />
    <Hero />
    <Social />
    <section class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden">
      <post v-for="post in data" :content="post" />
    </section>
  </main>
</template>

<script setup>
const metaConfig = {
  title: "Mohid Kazi - Experience",
  description: "Mohid kazi portfolio website to showcase experience and resume",
  image: "https://experience.mohidkazi.com/m.png",
  url: "https://experience.mohidkazi.com",
}
useHead({
  title: metaConfig.title,
  meta: [
    {
      title: metaConfig.title,
      name: "description",
      content: metaConfig.description,
      meta: [
        { name: "og:title", content: metaConfig.title },
        { name: "og:description", content: metaConfig.description },
        { name: "og:image", content: metaConfig.image },
        { name: "og:url", content: metaConfig.url },
        { name: "twitter:title", content: metaConfig.title },
        { name: "twitter:description", content: metaConfig.description },
        { name: "twitter:image", content: metaConfig.image },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    },
  ],
});

useSeoMeta({
  title: metaConfig.title,
  ogTitle: metaConfig.title,
  description: metaConfig.description,
  ogDescription: metaConfig.description,
  ogImage: metaConfig.image,
  twitterCard: 'summary_large_image',
})


const { data } = await useAsyncData("feed", () =>
  queryContent("/posts").find()
);
</script>
