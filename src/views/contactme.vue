<template>
  <div class="home">
   <Navbar />
   <div class="container">
     <contact />
   </div>
     </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import contact from '@/components/contact.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    contact
  },
}
</script>
