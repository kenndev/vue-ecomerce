<template>
  <div
    class="bg-white md:sticky top-0 z-50 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8"
  >
    <div class="relative flex items-center justify-between">
      <a
        href="/"
        aria-label="Company"
        title="Company"
        class="inline-flex items-center"
      >
        <svg
          class="w-8 text-deep-purple-accent-400"
          viewBox="0 0 24 24"
          stroke-linejoin="round"
          stroke-width="2"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke="currentColor"
          fill="none"
        >
          <rect x="3" y="1" width="7" height="12"></rect>
          <rect x="3" y="17" width="7" height="6"></rect>
          <rect x="14" y="1" width="7" height="6"></rect>
          <rect x="14" y="11" width="7" height="12"></rect>
        </svg>
        <span
          class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
          >Company</span
        >
      </a>
      <div class="flex">
        <ul class="items-center hidden space-x-8 lg:flex">
          <li>
            <router-link
              :to="{ name: 'Home' }"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'Shop' }"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >Shop</router-link
            >
          </li>

          <li>
            <router-link
              :to="{ name: 'About' }"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >About us</router-link
            >
          </li>
        </ul>

        <div class="flex items-center">
          <span>
            <a
              @click.prevent="handleCart"
              class="block p-6 border-b-4 border-transparent hover:hover:border-deep-purple-accent-700"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>

              <span class="sr-only">Cart</span>
            </a>
          </span>
          <span>
            <a
              href="/account"
              class="block p-6 border-b-4 border-transparent hover:border-deep-purple-accent-700"
            >
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span class="sr-only"> Account </span>
            </a>
          </span>
        </div>
      </div>

      <div class="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          @click="handleMenu"
        >
          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            ></path>
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            ></path>
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            ></path>
          </svg>
        </button>
        <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
          <div class="p-5 bg-white border rounded shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <a
                  href="/"
                  aria-label="Company"
                  title="Company"
                  class="inline-flex items-center"
                >
                  <svg
                    class="w-8 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke="currentColor"
                    fill="none"
                  >
                    <rect x="3" y="1" width="7" height="12"></rect>
                    <rect x="3" y="17" width="7" height="6"></rect>
                    <rect x="14" y="1" width="7" height="6"></rect>
                    <rect x="14" y="11" width="7" height="12"></rect>
                  </svg>
                  <span
                    class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                    >Company</span
                  >
                </a>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  @click="handleMenu"
                >
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul class="space-y-4">
                <li>
                  <router-link
                    :to="{ name: 'Home' }"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Home</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'Shop' }"
                    aria-label="Our product"
                    title="Our product"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >Shop</router-link
                  >
                </li>

                <li>
                  <router-link
                    :to="{ name: 'About' }"
                    aria-label="About us"
                    title="About us"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >About us</router-link
                  >
                </li>
                <li>
                  <a
                    href="/"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <shopping-cart :isOpen="isCartOpen" @closeCart="handleCart" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

const isMenuOpen = ref(false);
const isCartOpen = ref(false);

const handleCart = () => {
  isCartOpen.value = !isCartOpen.value;
};

const handleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
