import vueCssModule from "@inetss/vite-plugin-vue-css-module"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: "2024-08-09",

  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],

  ssr: true,

  nitro: {
    esbuild: {
      options: {
        // For native bigints.
        target: "ESNext",
      },
    },
  },

  vite: {
    plugins: [
      vueCssModule({ attrName: "mclass", pugClassLiterals: true }),
    ],
  },

  css: [
    "~/styles/index.scss",
  ],

  piniaPersistedstate: {
    storage: "localStorage",
  },

  runtimeConfig: {
    // Token for accessing admin API
    adminToken: "",
    baseUrl: "",
    database: {
      url: "postgres://localhost/fugu",
      log: false,
    },
  },
})