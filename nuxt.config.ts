import vueCssModule from "@inetss/vite-plugin-vue-css-module"
import vsharp from "vite-plugin-vsharp"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    baseURL: "/fugu-app/",
  },

  compatibilityDate: "2024-08-09",

  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  ssr: false,

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
      vsharp(),
    ],
  },

  css: [
    "~/styles/index.scss",
    "bulma/css/bulma.min.css",
  ],

  piniaPersistedstate: {
    storage: "localStorage",
  },

  runtimeConfig: {
    // Token for accessing admin API
    adminToken: "",
    baseUrl: "https://seniormarat.github.io/fugu-app/",
    database: {
      url: "postgres://localhost/fugu",
      log: false,
    },
  },

})
