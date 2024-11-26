<template>
  <main class="min-h-screen relative">
    <Navbar />
    <!-- <ToolBar /> -->
    <Hero />
    <Social />
    <section class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 overflow-hidden">
      <post v-for="post in data" :content="post" />
    </section>
  </main>
</template>

<script setup>
const metaConfig = {
  author: "Mohid Kazi",
  title: "Experience | Mohid Kazi ",
  description: "A detailed Experience portfolio website for Mohid Kazi",
  keywords: "Mohid Kazi, portfolio, experience, freelancing, projects, readme, experience website, freelancer, freelancing",
  favicon: "https://experience.mohidkazi.com/favicon.ico",
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
        { name: "author", content: metaConfig.author },
        { name: "keywords", content: metaConfig.keywords },
        { name: "og:title", content: metaConfig.title },
        { name: "og:description", content: metaConfig.description },
        { name: "og:image", content: metaConfig.image },
        { name: "og:url", content: metaConfig.url },
        { name: "apple-touch-icon", content: metaConfig.image },
        { name: "shortcut icon", content: metaConfig.favicon },
        { name: "icon", content: metaConfig.image },
        { name: "og:type", content: "website" },
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
