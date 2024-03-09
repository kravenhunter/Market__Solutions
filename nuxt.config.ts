// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxt/image"],
  css: ["~/assets/styles/global.scss"],
  app: {
    pageTransition: { name: "dachboard", mode: "out-in" },
    head: {
      titleTemplate: "%s | WizSolution",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Web-Студия дизайна и разработки приложений" },
        { name: "ogTitle", content: "WizSolution - Студия дизайна" },
        { name: "ogDescription", content: "Web-Студия дизайна и разработки приложений" },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },

  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ["cover 99.5%", "not IE < 9"],
      },
    },
  },
});
