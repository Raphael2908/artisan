import axios from "axios"

const config = useRuntimeConfig()


export default defineEventHandler(async (event) => {
    const body = await useBody(event)
    let message = `Message Recevied you said ${body.message}`
    return axios.post(`https://api.telegram.org/bot${config.reinhardt}/sendMessage`, {
        chat_id: config.chatId,
        text: message
    }).then((event) => {
        return body
    }).catch(function (error) {
        return error
    });
})

