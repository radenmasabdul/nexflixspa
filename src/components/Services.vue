<template>
  <div class="grid grid-flow-col auto-cols-max justify-center">
    <p class="text-white font-Volkhov text-4xl justify-center">
      Layanan Terbaik yang <br />Tidak Mengecewakan
    </p>
  </div>

  <div class="container mx-auto py-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="card card-compact w-full bg-[#1F2127] shadow-xl">
        <div class="flex justify-start">
          <img src="../assets/tv.svg" alt="app" class="w-[70px] h-[70px] p-2" />
        </div>
        <div className="card-body">
          <p className="font-Montserrat text-lg text-white">
            Tonton langsung di TV
          </p>
          <p className="font-Montserrat text-sm text-white">
            Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar
            Blu-ray, dan banyak lagi
          </p>
        </div>
      </div>

      <div className="card card-compact w-full bg-[#1F2127] shadow-xl">
        <div class="flex justify-start">
          <img
            src="../assets/phone.svg"
            alt="app"
            class="w-[70px] h-[70px] p-2"
          />
        </div>
        <div className="card-body">
          <p className="font-Montserrat text-lg text-white">
            Download untuk offline
          </p>
          <p className="font-Montserrat text-sm text-white">
            Simpan dengan mudah agar selalu ada acara TV dan film yang bisa
            ditonton
          </p>
        </div>
      </div>

      <div className="card card-compact w-full bg-[#1F2127] shadow-xl">
        <div class="flex justify-start">
          <img
            src="../assets/share.svg"
            alt="app"
            class="w-[70px] h-[70px] p-2"
          />
        </div>
        <div className="card-body">
          <p className="font-Montserrat text-lg text-white">
            Akses berbagai perangkat
          </p>
          <p className="font-Montserrat text-sm text-white">
            Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop,
            dan TV-mu
          </p>
        </div>
      </div>

      <div className="card card-compact w-full bg-[#1F2127] shadow-xl">
        <div class="flex justify-start">
          <img
            src="../assets/child.svg"
            alt="app"
            class="w-[70px] h-[70px] p-2"
          />
        </div>
        <div className="card-body">
          <p className="font-Montserrat text-lg text-white">
            Buat profil untuk anak
          </p>
          <p className="font-Montserrat text-sm text-white">
            Profil anak dilengkapi kontrol orang tua yang dilindungi PIN
            sehingga kamu bisa membatasi rating usia konten yang bisa ditonton
            anak
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
