import { initializeApp } from "firebase/app";
import admin from 'firebase-admin';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = useRuntimeConfig()
const firebaseConfig = {
  apiKey: config.firebaseApiKey,
  authDomain: config.firebaseAuthDomain,
  projectId: config.firebaseProjectidId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.firebaseMessagingSenderId,
  appId: config.firebaseAppId,
  measurementId: config.fireabseMeasurementId
};

const serviceAccount = JSON.parse(Buffer.from(config.firebaseServiceAccountKey, 'base64').toString())

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const message = {
        notification: {
          title: 'Hello, World!',
          body: 'This is a notification message!'
        },
        token: body.registration_token
      };
      
      // Send a message to the device corresponding to the provided
      // registration token.
    
    return admin.messaging().send(message)
        .then((response) => {
          // Response is a message ID string.
          return Promise.resolve('Successfully sent message:', response);
        })
        .catch((error) => {
          return Promise.reject('Error sending message:', error);
        });
})