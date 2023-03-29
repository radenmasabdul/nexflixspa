<script setup>
    import netflixLogo from '@/assets/logos_netflix.svg'
    import languageVector from '@/assets/language_vector.png'
</script>


<template>
    <!-- navbar -->
    <div class="navbar py-12 px-20">
      <div class="navbar-start">
        <img :src=netflixLogo>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a>Movies</a></li>
          <!-- <li tabindex="0">
            <a>
              Parent
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li> -->
          <li><a>TV Shows</a></li>
          <li><a>New & Popular</a></li>
        </ul>
      </div>
      <div class="navbar-end flex gap-2.5">
        <div class="cursor-pointer flex items-center gap-2">
          <h3>ID</h3>
          <img :src=languageVector alt="">
        </div>
        <button class="btn bg-gradient-to-r border-transparent w-12 w-28 from-[#BC0E19] to-[#DB202C] text-lg">
            Masuk
        </button>
      </div>
    </div>
</template>