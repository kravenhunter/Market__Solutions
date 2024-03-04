// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxt/image"],
  css: ["~/assets/styles/global.scss"],
  app: {
    pageTransition: { name: "dachboard", mode: "out-in" },
    head: {
      titleTemplate: "%s | DachBoard",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
