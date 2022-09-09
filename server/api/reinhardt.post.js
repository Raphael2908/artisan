import axios from "axios"

const config = useRuntimeConfig()


export default defineEventHandler(async (event) => {
    const body = await useBody(event)
    let message = `Hi Sir, there is a new message from ${body.data.name}. 
    \n His/Her contacts are: 
    \n email: ${body.data.email}
    \n phone number: ${body.data.phone_number}
    \n This is what ${body.data.name} has to say:
    \n "${body.data.message}"`
    return axios.post(`https://api.telegram.org/bot${config.reinhardt}/sendMessage`, {
        chat_id: config.chatId,
        text: message
    }).then((event) => {
        return 'success'
    }).catch(function (error) {
        return error
    });
})

