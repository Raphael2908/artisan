<template>
  <div>
    <section class="h-screen sticky top-0 overflow-hidden">
      <div class="landing-image h-screen bg-cover bg-center"/>
      <div class="absolute flex justify-center w-full top-0">
        <img class="h-36 sm:h-44 md:h-48" src="/moon.png" alt="moon" :style="moonScroll">
      </div>
      <div class="absolute flex justify-center w-full top-0">
        <img class="h-screen object-cover" src="/GreekStatue.png" alt="statue" :style="statueScroll">
      </div>
      <h1
      class="font-semibold absolute flex justify-center items-center h-screen top-0 text-4xl sm:text-6xl lg:text-8xl text-white w-full" :style="heroTextScroll">
        Hi, I am Raphael
      </h1>
      <ChevronDownIcon class="absolute inset-x-0 bottom-16 h-24 md:h-32 text-white w-full" :style="chevronDownScroll"/>
    </section>
    
    <section class="relative h-screen bg-stone-100 text-gray-900 flex items-center">
      <div class="mx-auto container px-10 py-5 flex flex-col gap-5">

        <div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold">About me</h1>
          <p class="text-lg md:text-xl lg:text-2xl break-normal">
            I am an aspiring Software Devloper with the goal of creating quality digital products to help the world.
          </p>
        </div>

        <div class="flex text-sm gap-x-3 gap-y-5 flex-wrap">
          <h1 class="whitespace-nowrap bg-stone-300 text-stone-500 rounded-full text-center px-3 py-2">Digital Artisan</h1>
          <h1 class="whitespace-nowrap bg-stone-300 text-stone-500 rounded-full text-center px-3 py-2">Temasek Polytechnic</h1>
          <h1 class="whitespace-nowrap bg-stone-300 text-stone-500 rounded-full text-center px-3 py-2">Computer Engineering</h1>
          <h1 class="whitespace-nowrap bg-stone-300 text-stone-500 rounded-full text-center px-3 py-2">GovTech Intern</h1>
        </div>

      </div>
    </section>

      <section class="relative">
        <div class="h-1/4 md:w-1/2 md:h-screen bg-stone-100 sticky top-0 flex items-center flex-col justify-center z-10 py-5">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-center w-full">{{ this.skills[this.currentSection].title }}</h1>
            <h1 class="text-center text-xl w-full">{{ this.skills[this.currentSection].description }}</h1>
        </div>
        <div class="h-screen md:h-screen md:absolute md:top-0 bg-stone-300 flex w-full flex-wrap md:justify-end" id="mark1">
            <div class="grid grid-cols-2 gap-5 w-full md:grid-cols-3 h-1/2 place-self-center md:w-1/2 place-items-center">
              <img class="h-24 bg-stone-100 rounded-md p-4 shadow-lg hover:scale-110 duration-200" src="/laravel.png" alt="Laravel">
              <img class="h-24 bg-stone-100 rounded-md p-4 shadow-lg hover:scale-110 duration-200" src="/vue.png" alt="Vue">
              <img class="h-24 bg-stone-100 rounded-md p-4 shadow-lg hover:scale-110 duration-200" src="/tailwind.png" alt="Tailwind">
              <img class="h-24 bg-stone-100 rounded-md p-4 shadow-lg hover:scale-110 duration-200" src="/flutter.png" alt="flutter">
              <img class="h-24 bg-stone-100 rounded-md p-4 shadow-lg hover:scale-110 duration-200" src="/nuxt.png" alt="nuxt">
              <img class="h-24 bg-stone-100 rounded-md p-4 shadow-lg hover:scale-110 duration-200" src="/github.png" alt="github">
            </div>
        </div>
        <div class="h-screen md:h-screen bg-stone-400 flex w-full items-center md:justify-end" id="mark2">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-center w-1/2">mark2</h1>
        </div>
           <div class="h-screen md:h-screen bg-stone-500 flex w-full items-center md:justify-end" id="mark3">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-center w-1/2">mark3</h1>
        </div>
      </section>    


      <section class="h-screen absolute bg-stone-100 w-full flex items-center justify-center flex-col gap-5 px-2">
        <h1 class="text-2xl text-center">Let's make something <span class="font-bold">extravagant</span></h1>
        <div class="flex flex-col">
          <label for="">Name</label>
          <input type="text">
        </div>
        <div class="flex flex-col ">
          <label for="">Email</label>
          <input type="text">
        </div>
        <div class="flex flex-col ">
          <label for="">Message</label>
          <textarea/>
        </div>
      </section>

  </div>
</template>


<script>
import { ChevronDownIcon } from '@heroicons/vue/24/solid'

export default {
  components: {
    ChevronDownIcon
  },

  data(){
    return {
      parallex: 0,
      currentSection: 'mark1',
      lastYPos: document.documentElement.scrollTop, // to check scroll direction
      skills: {
        mark1: {
          title: 'Software Development',
          description: 'My comfort zone'
        },
        mark2: {
          title: 'Projects',
          description: "Always trying to build the next best thing"
        },
        mark3: {
          title: 'Accomplishments',
          description: 'Gotta make Mum proud'
        }
      }
    }
  },

  computed: {
    moonScroll(){ 
      // return `transform: translate(${this.parallex * 0.7}px, ${this.parallex * 0.7}px )`
      return `transform: translate(0, ${this.parallex * 0.7}px)`
    },
    heroTextScroll(){ 
      return `transform: translateY(-${this.parallex * 0.3}px)`
    },
    chevronDownScroll(){ 
      return `transform: translateY(${this.parallex * 4}px)`
    },
    statueScroll(){
      return `transform: translateY(-${this.parallex * 0.6}px)`
    },
    scrollingDown(){
        if(this.parallex > this.lastYPos){
          this.lastYPos = document.documentElement.scrollTop
          return true
        }
        else{
          this.lastYPos = document.documentElement.scrollTop
          return false
        }
    }
  },

  created() {
    window.addEventListener('scroll', this.parallexScroll)
  },

  mounted(){
    let options = {
      threshold: 0.5
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(entry.intersectionRatio > 0 && this.scrollingDown == true){
            this.currentSection = entry.target.getAttribute('id')
          }
          else if (entry.intersectionRatio > 0 && this.scrollingDown == false){
            this.currentSection = 
            entry.target.previousElementSibling.getAttribute('id') ? entry.target.previousElementSibling.getAttribute('id') : 'mark1'
          }
        });
      }, options);

      document.querySelectorAll('#mark1, #mark2, #mark3').forEach((skill) => {
        observer.observe(skill)
      })
  },

  methods: {
    parallexScroll(){
      this.parallex = window.scrollY
    }
  }
}
</script>

<style scoped>
.landing-image {
  background-image: url('/storm-clouds.jpeg');
}
</style>