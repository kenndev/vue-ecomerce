<template>
  <section>
    <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
      <div class="relative max-w-3xl mx-auto text-center">
      <span
        class="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"
      ></span>

      <h2
        class="text-2xl tracking-tight text-gray-900 relative inline-block px-4 font-bold text-center bg-white"
      >
        Featured
      </h2>
    </div>

      <div class="mt-4">
        <div class="swiper">
          <ul class="swiper-wrapper">
            <li
              class="swiper-slide"
              v-for="product in featuredProducts"
              :key="product.id"
            >
              <a
                href="/product/build-your-own-drone"
                class="relative block border border-gray-100"
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
                  class="object-contain w-full h-56 lg:h-72"
                  :src="product.image"
                />

                <div class="p-6 h-64">
                  <span
                    class="inline-block px-3 py-1 text-xs font-medium bg-yellow-400"
                  >
                    {{ product.category }}
                  </span>

                  <h5 class="mt-4 text-lg font-bold">
                    {{
                      product.title.length > 40
                        ? product.title.slice(0, 40) + "..."
                        : product.title
                    }}
                  </h5>

                  <p class="mt-2 text-sm font-medium text-gray-600">
                    $ {{ product.price }}
                  </p>

                  <button
                    name="add"
                    type="button"
                    class="absolute inset-x-0 bottom-0 flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500"
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
            </li>
          </ul>

          <div class="max-w-3xl mx-auto mt-8 swiper-pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
import useProducts from "@/composable/products";
//Sliding functionality
const initSwiper = () => {
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,
    autoplay: true,
    pagination: {
      type: "progressbar",
      el: ".swiper-pagination",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
};

const script = document.createElement("script");
script.src = "https://unpkg.com/swiper/swiper-bundle.min.js";
script.addEventListener("load", initSwiper);
document.body.appendChild(script);

//Get 5 products (featured products)
const { featuredProducts, getFeaturedProducts } = useProducts();

onMounted(() => {
  getFeaturedProducts(6);
});
</script>
<style scoped>
@import "https://unpkg.com/swiper/swiper-bundle.min.css";
.swiper-pagination {
  bottom: 0;
  position: relative;
}
</style>
