<template>
  <div class="mb-16 relative">
    <div class="bg-fixed bg-center bg-cover current-image">
      <div class="bg-deep-purple-accent-100 bg-opacity-60">
        <div
          class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div
            class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
          >
            
            <h2
              class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto"
            >
              <span class="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-yellow-accent-200 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  ></rect>
                </svg>
                <span class="relative">The</span>
              </span>
              quick, brown fox jumps over a lazy dog
            </h2>
            <p class="text-base text-white md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div class="flex items-center sm:justify-center">
           
            <a
              href="/"
              aria-label="Scroll down"
              class="animate-bounce inline-flex items-center justify-center w-10 h-10 text-white duration-300 transform border border-yellow-200 rounded-full hover:text-yellow-accent-100 hover:border-yellow-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path
                  d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="hidden md:inset-x-0 md:-bottom-1/4 md:flex md:justify-center md:absolute md:px-4 md:z-40"
    >
      <div
        class="grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md"
      >
        <div class="inline-block p-8 text-center">
          <div
            class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50"
          >
            <svg
              class="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              ></polygon>
            </svg>
          </div>
          <p class="font-bold tracking-wide text-gray-800">Make it better</p>
        </div>
        <div class="inline-block p-8 text-center">
          <div
            class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50"
          >
            <svg
              class="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              ></polygon>
            </svg>
          </div>
          <p class="font-bold tracking-wide text-gray-800">Do it faster</p>
        </div>
        <div class="inline-block p-8 text-center">
          <div
            class="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50"
          >
            <svg
              class="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              ></polygon>
            </svg>
          </div>
          <p class="font-bold tracking-wide text-gray-800">Working harder</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.current-image {
  background-image: url("../assets/shop.jpg");
}
</style>
