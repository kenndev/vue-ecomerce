<!--
  This component uses @tailwindcss/aspect-ratio

  yarn add @tailwindcss/aspect-ratio
  npm install @tailwindcss/aspect-ratio

  plugins: [require('@tailwindcss/aspect-ratio')]
-->
<template>
  <section class="relative bg-white mt-10 mb-10">
    <img
      class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
      src="https://images.unsplash.com/photo-1601758003122-53c40e686a19"
      alt="Couple on a bed with a dog"
    />

    <div
      class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"
    ></div>

    <div
      class="relative max-w-screen-xl px-4 py-20 mx-auto lg:items-center lg:flex"
    >
      <div class="max-w-xl text-center sm:text-left">
        <h1 class="text-3xl font-extrabold sm:text-5xl">
          Act before
          <strong class="font-extrabold text-rose-700 sm:block">
            it's too late.
          </strong>
        </h1>

        <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>

        <div class="flex flex-wrap gap-4 mt-8 text-center">
          <a
            class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring"
            href="/get-started"
          >
            Get Started
          </a>

          <a
            class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
