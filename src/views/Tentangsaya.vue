<template>
  <div>
      <Navbar />
    <div class="container">
      <div class="row mt-3">
          <div class="col">
          <h2> <strong>Tentang saya </strong></h2> 
          </div>
          <Aboutme />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Aboutme from '@/components/Aboutme.vue'
export default {
name: "Tentangsaya",
components: {
    Navbar,
    Aboutme
}
}
        
   
</script>
