// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles/reset.css", "@/assets/styles/global.scss"],
  runtimeConfig: {
    public: {
      apiKey: process.env.TMDB_KEY,
    },
  },
});
