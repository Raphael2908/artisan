<template>
    <form @submit.prevent="messageReinhardt" class="h-screen absolute bg-stone-100 w-full flex items-center justify-center flex-col gap-5 px-2">
        <h1 class="text-2xl md:text-4xl text-center">Let's make something <span class="font-bold">extravagant</span></h1>
        <div class="flex flex-col w-1/2 gap-2">
          <div>
            <label for="">Name</label>
            <p v-if="errorBag.name" class="text-red-500" for="">Please enter your name</p>
            <input v-model="form.name" class="border border-stone-300 text-gray-900 text-sm rounded-lg focus:border-stone-500 outline-stone-500 block w-full p-2.5" type="text">
          </div>

          <div>
            <label for="">Email</label>
            <p v-if="errorBag.email" class="text-red-500" for="">Please enter a valid email</p>
            <input v-model="form.email" class="border border-stone-300 text-gray-900 text-sm rounded-lg focus:border-stone-500 outline-stone-500 block w-full p-2.5" type="text">
          </div>

          <div>
            <label for="">Phone Number</label>
            <input v-model="form.phone_number" class="border border-stone-300 text-gray-900 text-sm rounded-lg focus:border-stone-500 outline-stone-500 block w-full p-2.5" type="text">
          </div>

          <div>
            <label for="">Message</label>
            <p v-if="errorBag.message" class="text-red-500" for="">Please send me a message :P</p>
            <textarea v-model="form.message" class="border border-stone-300 text-gray-900 text-sm rounded-lg focus:border-stone-500 outline-stone-500 block w-full p-2.5 md:h-64"/>
          </div>
        </div>
        <button class="bg-stone-500 px-4 py-2 rounded-xl text-white text-xl font-semibold shadow-lg hover:bg-stone-800 duration-200 hover:scale-110 active:scale-90">Collaborate</button>
      </form>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    setup() {
        
    },

    data(){
        return {
            form: {
                name: '',
                email: '',
                phone_number: '',
                message: ''
            },
            errorBag: {
                type: Object,
                default: {
                    name: '',
                    email: '',
                    message: ''
                }
            }
        }
    },
    methods:{
        async messageReinhardt() {  
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: 'green',
            customClass: {
            popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        })

        let res = await axios.post('/api/reinhardt', {
            data: this.form
        })

        if(res.data == 'success'){
            this.errorBag = {}
            await Toast.fire({
            icon: 'success',
            title: 'Message Delivered'
            })
        }

        if(res.data != 'success'){
            this.errorBag.name = res.data.name
            this.errorBag.email = res.data.email
            this.errorBag.message = res.data.message
        }

        },
    },
    
}
</script>