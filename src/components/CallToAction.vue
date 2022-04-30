<template>
  

  <div class="max-w-screen-xl px-4 py-8 mx-auto">
    <div class="relative max-w-3xl mx-auto text-center">
      <span
        class="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"
      ></span>

      <h2
        class="text-2xl tracking-tight text-gray-900 relative inline-block px-4 font-bold text-center bg-white"
      >
        Customers also purchased
      </h2>
    </div>

    <div class="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
      <a
        href="/product/build-your-own-drone"
        class="relative block border border-gray-100"
        v-for="(product, index) in products"
        :key="index"
      >
        <button
          type="button"
          name="wishlist"
          class="absolute p-2 text-white bg-black rounded-full right-4 top-4"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>

        <img
          loading="lazy"
          alt="Build Your Own Drone"
          class="object-contain w-full h-56"
          :src="product.image"
        />

        <div class="p-6">
          <p class="text-sm font-medium text-gray-600">${{ product.price }}</p>

          <h3 class="text-sm text-gray-700 mt-1">
            {{
              product.title.length > 40
                ? product.title.slice(0, 40) + "..."
                : product.title
            }}
          </h3>

          <button
            name="add"
            type="button"
            class="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
          >
            <span class="text-sm font-medium"> Add to Cart </span>

            <svg
              class="w-5 h-5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </a>
    </div>

    <div class="mt-4 text-center">
      <button type="button" class="text-xs text-gray-500 underline">
        Clear Recently Viewed
      </button>
    </div>
  </div>
</template>
<script setup>
import useProducts from "@/composable/products";
import { onMounted } from "vue";

const { products, getProducts } = useProducts();

onMounted(() => {
  getProducts(8);
});
</script>
