import axios from "axios"

const config = useRuntimeConfig()


export default defineEventHandler(async (event) => {
    const body = await useBody(event)
    let message = `Message Recevied ${body}`
    return axios.post(`https://api.telegram.org/bot${config.reinhardt}/sendMessage`, {
        chat_id: config.chatId,
        text: message
    }).then((event) => {
        return 'success'
    }).catch(function (error) {
        return error
    });
})

