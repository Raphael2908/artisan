import axios from "axios"


const config = useRuntimeConfig()
const url = `https://api.telegram.org/bot${config.reinhardt}/sendMessage`


async function commandCentre(command) {
    let message = ''
    switch (command) {
        case '/dictionary':
            message = "Hi sir, you may want to try to use this: \n \nAre you a secret? Because I can't share you. \n \nAll the best sir."
            break;
        case '/sos':
            message = "SOS protocol initiated sir"
        default:
            message = "Hi sir, I don't quite get your command"
            break;
    }

    return axios.post(url, {
        chat_id: config.chatId,
        text: message
    }).then((response) => {
        return 'command received, response sent'
    })
}

async function greeting() {
    let message = 'Hi sir, how may I help you?'
    return axios.post(url, {
        chat_id: config.chatId,
        text: message
    }).then((response) => {
        return 'greeting sent'
    })
}

export default defineEventHandler(async (event) => {
    return useBody(event).then((response) => {
        if (response.message.text[0] == '/'){
            return commandCentre(response.message.text)
        }
        else if(response.message.text.includes('Reinhardt')){
            return greeting()
        }
        else{
            return 'Message Received, Reinhardt will not reply'
        }
    })
})

