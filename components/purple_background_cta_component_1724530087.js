<template>
  <section id="cta-section-container" class="bg-gradient-to-br from-pink-500 via-purple-600 to-black">
    <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6">
      <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg shadow-lg">

        <!-- Radial gradient -->
        <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
          <div id="radial-gradient-outer" class="bg-pink-500 absolute inset-0 translate-z-0 rounded-full blur-120 opacity-70"></div>
          <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-40 bg-purple-400"></div>
        </div>

        <!-- Blurred shape -->
        <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stop-color="#FF69B4" />
                <stop offset="100%" stop-color="#9370DB" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>

        <!-- Content -->
        <div id="content" class="max-w-3xl mx-auto text-center">
          <div id="content-subtitle" class="flex">
            <div id="content-subtitle-text" class="flex-1 font-medium text-lg text-pink-300">
              Trashy Deals, Dumped at Your Doorstep
            </div>
          </div>
          <div class="flex" id="content-title-container">
            <h2 id="content-title" class="flex-1 text-4xl font-bold mb-4 text-white">
              Waste Away: Your Garbage Disposal Marketplace
            </h2>
          </div>
          <div class="flex" id="content-body-container">
            <p id="content-body" class="flex-1 text-lg mb-8 text-purple-200">
              Discover the ultimate destination for all your refuse needs. From stinky to putrid options, we've got your trash covered.
            </p>
          </div>
          <a id="content-cta-button" href="#0" class="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-brown-600 rounded-full hover:from-green-600 hover:to-brown-700 transition duration-300 ease-in-out transform hover:scale-105">
            Start Dumping
            <span id="content-cta-arrow" class="ml-2">→</span>
          </a>
          <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Toilet_Paper_Marketplace_1724530084/main/images/680a84ab8fe642d9af9e368521bced62.jpeg" alt="Promotion Image" class="mt-8 mx-auto rounded-lg shadow-xl"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PurpleBackgroundCtaComponent",
  data() {
    return {
      expanded: false,
      tab: null
    };
  }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>