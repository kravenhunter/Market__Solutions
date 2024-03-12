// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/image"],
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
        {
          name: "keywords",
          content: "ui-дизайн, макет,сайт, маркетплейс, визитка, магазин, лендинг, услуги, seo",
        },
        { name: "ogTitle", content: "WizSolution Design - Студия дизайна" },
        { name: "ogDescription", content: "Web-Студия дизайна и разработки приложений" },
        // Запрет активации  телефона поссылке
        { name: "format-detection", content: "telephone=no" },
        //Запрет индексации  картинок и ссылок, текст контента доступен
        { name: "robots", content: "noimageindex, nofollow" },
        { name: "author", content: "Sergio Below" },
        { name: "copyright", content: "Sergio Below" },
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
