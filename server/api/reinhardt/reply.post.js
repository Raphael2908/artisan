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

    axios.post(url, {
        chat_id: config.chatId,
        text: message
    }).then((response) => {
        return 'command received, response sent'
    })
}

async function greeting(){
    let message = 'Hi sir, how may I help you?'
    axios.post(url, {
        chat_id: config.chatId,
        text: message
    }).then((response) => {
        return 'greeting sent'
    })
}

export default defineEventHandler(async (event) => {
    useBody(event).then((response) => {
        if (response.message.text[0] == '/' ){
            return commandCentre(body.message.text)
        }
        else {
            return greeting()
        }
    })
    return 'success'
})

