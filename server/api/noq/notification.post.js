// Order Status:
// Pending -> When Order is created
// Preparing/Rejected -> Stall owner can choose to accept or reject order
// Ready -> When stall has prepared the food and is ready for collection
// Collected -> When consumer comes to collect the food
// Logic of receiver is handled by supabase
// This function just sends the notification

import { adminApp, app } from "~~/helpers/firebaseInit";

const admin = adminApp

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const message = {
      notification: {
        title: body.title,
        body: body.body
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