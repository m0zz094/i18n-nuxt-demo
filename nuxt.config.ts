// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    vueI18n: {
      legacy: false,
      locale: "it",
      messages: {
        it: {
          welcome: "Benvenuto",
        },
        en: {
          welcome: "Welcome",
        },
      },
    },
  },
});
