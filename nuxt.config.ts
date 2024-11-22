export default {
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "nuxt-icon"],

  css: ["~/assets/css/main.css"],

  content: {
    highlight: {
      theme: "nord",
      preload: [
        "js",
        "css",
        "html",
        "md",
        "ts",
        "tsx",
        "vue",
        "python",
        "ruby",
        "java",
      ],
    },
  },

  compatibilityDate: "2024-11-21",
};
