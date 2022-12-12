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
    nitro: {
        prerender: {
          routes: ['/', '/works/index']
        }
    },
    head: {
      link: [
        {
          rel: 'preconnect',
          hre: 'https://fonts.googleapis.com'
        },
        {
          rel:"preconnect", 
          href:"https://fonts.gstatic.com"
        },
        {
          rel:"stylesheet",
          href:"https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap" 
        }
      ]
    }
})
