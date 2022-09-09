<template>
    <section class="min-h-screen w-screen relative bg-zinc-700">
        <div class="w-full h-full">
            <!-- <Header class="z-10"/> -->
            <slot/>
            <!-- <Footer/> -->
        </div>
    </section>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
    setup() {
        
    },
    components:{
        Header,
        Footer
    }
}
</script>