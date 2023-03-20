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
const app = initializeApp(firebaseConfig);

// Initialize Firebase Admin SDK
const adminApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export { app, adminApp  }