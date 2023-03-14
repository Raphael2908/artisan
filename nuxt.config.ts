// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        // The private keys which are only available within server-side
        // apiSecret: '123',
        reinhardt: process.env.REINHARDT,
        chatId: process.env.CHAT_ID,
        firebaseApiKey: process.env.FIREBASE_API_KEY,
        firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
        firebaseProjectidId: process.env.FIREBASE_PROJECT_ID,
        fireabseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        firebaseAppId: process.env.FIREBASE_APP_ID,
        fireabseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
        firebaseServiceAccountKey: process.env.FIREBASE_SERVICE_ACCOUNT_KEY,
        // Keys within public, will be also exposed to the client-side
        public: {
        //   apiBase: '/api'
        }
    },
    ssr: false,
   
})
