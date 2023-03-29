<template>
  <div class="navbar">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
        >
          <li>
            <a class="text-lg font-medium text-white font-Montserrat">Movies</a>
          </li>
          <li>
            <a class="text-lg font-medium text-white font-Montserrat"
              >TV Shows</a
            >
          </li>
          <li>
            <a class="text-lg font-medium text-white font-Montserrat"
              >New & Popular</a
            >
          </li>
        </ul>
      </div>
      <img src="../assets/logos_netflix.svg" alt="logo" class="w-20 h-24" />
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <a class="text-lg font-medium text-white font-Montserrat">Movies</a>
        </li>
        <li>
          <a class="text-lg font-medium text-white font-Montserrat">TV Shows</a>
        </li>
        <li>
          <a class="text-lg font-medium text-white font-Montserrat"
            >New & Popular</a
          >
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <ul class="menu menu-horizontal px-1 text-white font-Montserrat">
        <li tabindex="0">
          <a>
            ID
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2">
            <li><a>EN</a></li>
          </ul>
        </li>
      </ul>
      <button
        class="btn bg-button-red font-semibold text-base hover:bg-white hover:text-black border-none capitalize"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup></script>
