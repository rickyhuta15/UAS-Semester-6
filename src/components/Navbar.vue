<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand">Data Pribadi</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="Tentangsaya">Tentang Saya</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/HalamanPendidikan">
              History Pendidikan
            </router-link>
          </li>
        
          <li class="nav-item">
            <router-link class="nav-link" to="/PengalamanKerja">
              Pengalaman Berkerja
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contactme">
              Contact me
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>          
</template>