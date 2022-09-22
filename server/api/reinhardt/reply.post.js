import axios from "axios"

const config = useRuntimeConfig()

const url = `https://api.telegram.org/bot${config.reinhardt}/sendMessage`

async function commandCentre(command) {
    let message = ''
    switch (command) {
        case '/dictionary':
             message = "Hi sir, you may try to use this: \n \nAre you a secret? Because I can't share you. \n \nAll the best sir."
            break;
    
        default:
            message = "Hi sir, I don't quite get your command"
            break;
    }

    await axios.post(url, {
        chat_id: config.chatId,
        text: message
    })
    return 'success'
}

async function greeting(){
    let message = 'Hi sir, how may I help you?'
    await axios.post(url, {
        chat_id: config.chatId,
        text: message
    })
    return 'success'
}

export default defineEventHandler(async (event) => {
    const body = await useBody(event)

    if (body.message.text[0] == '/' ){
        commandCentre(body.message.text)
    }
    else {
        greeting()
    }

    return 'Message Received, Reply sent'
})

