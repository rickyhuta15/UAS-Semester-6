<template>
  <div>
      <Navbar />
    <div class="container">
      <div class="row mt-3">
          <div class="col">
          <h2> <strong> Halaman Pendidikan </strong></h2> 
          </div>
          <HistoryPendidikan />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import HistoryPendidikan from '@/components/HistoryPendidikan.vue'
export default {
name: "HalamanPendidikan",
components: {
    Navbar,
    HistoryPendidikan
}
}

</script>