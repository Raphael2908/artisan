import axios from "axios"

const config = useRuntimeConfig()

const url = `https://api.telegram.org/bot${config.reinhardt}/sendMessage`

async function commandCentre(command) {
    let message = ''
    switch (command) {
        case '/dictionary':
             message = "Hi sir, you may try to use this: \n \n Are you a secret? Because I can't share you. \n \n All the best sir."
            break;
    
        default:
            message = "Hi sir, I don't quite get your command"
            break;
    }

    axios.post(url, {
        chat_id: config.chatId,
        text: message
    })
    return 'success'
}

async function greeting(){
    let message = 'Hi sir, how may I help you?'
    axios.post(url, {
        chat_id: config.chatId,
        text: message
    })
    return 'success'
}

export default defineEventHandler(async (event) => {
    const body = await useBody(event)

    if (body.message.text[0] == '/' ){
        await commandCentre(body.message.text)
    }
    else {
        await greeting()
    }

    return 'Message Received, Reply sent'
})

