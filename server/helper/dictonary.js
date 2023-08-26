const pickuplines = [
    'Can I follow you? Because my mum told me to follow my dreams',
    'Do you happen to have a Band-Aid? Cause I scraped my knees falling for you.',
    'I never believed in love at first sight, but that was before I saw you.',
    'You look like fine wine, when can I make you mine?',
    'Do you have a map? I just got lost in your eyes.',
    'I’d like to take you to the movies, but they don’t let you bring in your own snacks.',
    'I always thought happiness started with an ‘h,’ but it turns out mine starts with ‘u.’',
    'I believe in following my dreams. Can I have your Instagram?',
    'Are you an American school? Because I want to shoot kids inside you.',
    'Let us flip a coin, whatever it lands on is whatever I get',
    'Your hand looks heavy—can I hold it for you?',
    'Did you know I am a time traveller? And you are in my future',
    'Is your mum‘s name practice? Because practice makes perfect',
    'Are you a secret? Because I don‘t think I can share you'
]

function randomLinesGen(){
    return pickuplines[Math.floor(Math.random() * (pickuplines.length - 1))]
}

export default function dictonary(){
    return `Hi sir, you may want to try to use this: \n \n${randomLinesGen()} \n \nAll the best sir.`
}
