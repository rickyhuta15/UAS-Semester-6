<template>
  <div class="home">
   <Navbar />
   <div class="container">
     <Pengalaman />
   </div>
     </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Pengalaman from '@/components/Pengalaman.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Pengalaman
  },
}
</script>
