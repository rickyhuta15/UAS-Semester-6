<template>
  <div class="home">
   <Navbar />
   <div class="container">
     <Tujuan />
   </div>
     </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Tujuan from '@/components/Tujuan.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Tujuan
  },
}
</script>
