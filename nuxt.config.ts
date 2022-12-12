// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        // The private keys which are only available within server-side
        // apiSecret: '123',
        reinhardt: process.env.REINHARDT,
        chatId: process.env.CHAT_ID,
        // Keys within public, will be also exposed to the client-side
        public: {
        //   apiBase: '/api'
        }
    },
    ssr: false,
   
})
