<template>
  <TransitionRoot :show="isOpen">
    <TransitionChild
      enter="transition-opacity ease-linear duration-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div
        class="absolute z-10 block w-screen max-w-sm p-10 border sm:px-12 bg-stone-100 border-stone-600 sm:top-0 sm:left-0 md:top-20 md:left-1/4 lg:top-20 lg:left-2/3"
        aria-modal="true"
        aria-label="Item added to your cart"
        role="dialog"
        tabindex="-1"
      >
        <div class="flex flex-row-reverse">
          <button
            class="-mt-6 -mr-6 transition-transform sm:-mr-8 hover:scale-110"
            type="button"
            aria-label="Close"
            @click="closeCart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="relative h-64 overflow-auto">
          <div class="flex items-start pb-6">
            <img
              class="object-cover w-16 h-16 rounded-lg"
              src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
              alt="Basic Tee"
            />

            <div class="ml-4">
              <h3 class="text-sm">Basic Tee 6-Pack</h3>

              <dl class="mt-1 text-xs text-gray-500">
                <div>
                  <dt class="inline">Size:</dt>
                  <dd class="inline">XXS</dd>
                </div>

                <div>
                  <dt class="inline">Color:</dt>
                  <dd class="inline">White</dd>
                </div>
              </dl>
            </div>
          </div>
          <div class="flex items-start pb-6">
            <img
              class="object-cover w-16 h-16 rounded-lg"
              src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
              alt="Basic Tee"
            />

            <div class="ml-4">
              <h3 class="text-sm">Basic Tee 6-Pack</h3>

              <dl class="mt-1 text-xs text-gray-500">
                <div>
                  <dt class="inline">Size:</dt>
                  <dd class="inline">XXS</dd>
                </div>

                <div>
                  <dt class="inline">Color:</dt>
                  <dd class="inline">White</dd>
                </div>
              </dl>
            </div>
          </div>
          <div class="flex items-start pb-6">
            <img
              class="object-cover w-16 h-16 rounded-lg"
              src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
              alt="Basic Tee"
            />

            <div class="ml-4">
              <h3 class="text-sm">Basic Tee 6-Pack</h3>

              <dl class="mt-1 text-xs text-gray-500">
                <div>
                  <dt class="inline">Size:</dt>
                  <dd class="inline">XXS</dd>
                </div>

                <div>
                  <dt class="inline">Color:</dt>
                  <dd class="inline">White</dd>
                </div>
              </dl>
            </div>
          </div>
          <div class="flex items-start pb-6">
            <img
              class="object-cover w-16 h-16 rounded-lg"
              src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
              alt="Basic Tee"
            />

            <div class="ml-4">
              <h3 class="text-sm">Basic Tee 6-Pack</h3>

              <dl class="mt-1 text-xs text-gray-500">
                <div>
                  <dt class="inline">Size:</dt>
                  <dd class="inline">XXS</dd>
                </div>

                <div>
                  <dt class="inline">Color:</dt>
                  <dd class="inline">White</dd>
                </div>
              </dl>
            </div>
          </div>
          <div class="flex items-start pb-6">
            <img
              class="object-cover w-16 h-16 rounded-lg"
              src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
              alt="Basic Tee"
            />

            <div class="ml-4">
              <h3 class="text-sm">Basic Tee 6-Pack</h3>

              <dl class="mt-1 text-xs text-gray-500">
                <div>
                  <dt class="inline">Size:</dt>
                  <dd class="inline">XXS</dd>
                </div>

                <div>
                  <dt class="inline">Color:</dt>
                  <dd class="inline">White</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div class="space-y-4 text-center">
          <a
            class="block p-3 text-sm border rounded-lg border-deep-purple-accent-400 text-stone-500 hover:ring-1 hover:ring-deep-purple-accent-400 hover:text-stone-600 hover:-translate-y-1 hover:scale-110 duration-300"
            href="/cart"
          >
            View my cart (2)
          </a>

          <form action="/cart" method="post">
            <button
              class="block w-full p-3 text-sm rounded-lg bg-deep-purple-accent-400 text-stone-100 hover:bg-deep-purple-accent-700 hover:-translate-y-1 hover:scale-110 duration-300"
              type="submit"
            >
              Check out
            </button>
          </form>

          <a
            class="inline-block text-sm tracking-wide underline underline-offset-4 text-stone-500 hover:text-stone-600"
            href="/collections/all"
          >
            Continue shopping
          </a>
        </div>
      </div>
    </TransitionChild>
  </TransitionRoot>
</template>

<script setup>
import { TransitionChild, TransitionRoot } from "@headlessui/vue";
let props = defineProps({
  isOpen: Boolean,
});

const emits = defineEmits(["closeCart"]);

const closeCart = () => {
  emits("closeCart");
};
</script>

<style></style>
