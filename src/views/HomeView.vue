<script setup>
  // import Navbar from '@/components/Navbar.vue'

  import heroImage from '@/assets/img-hero.png'
</script>

<template>
  <main class="text-white">

    <!-- <Navbar/> -->

    <!-- hero -->
    <div>
      <div class="hero">
        <div class="hero-content flex flex-row-reverse gap-10 p-20">
          <img :src=heroImage class="rounded-lg max-w-lg">
          <div>
            <h1 class="text-5xl font-bold">Nikmati nonton dimana saja dan kapan saja</h1>
            <p class="py-6">Tonton apa saja secara online dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, dan gunakan download untuk menonton saat kamu di perjalanan dan tidak punya koneksi Internet.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
