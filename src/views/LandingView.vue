<template>
  <section class="min-h-[calc(100vh*0.80)] w-full flex justify-center mb-52" id="landing-page">
    <div class="flex items-center space-x-0 space-y-7 md:space-y-0 md:space-x-7 flex-col md:flex-row m-auto">
      <img
        :class="[
          'w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full shadow-md transition-all motion-reduce:transition-none duration-500 delay-[400ms]',
          showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0'
        ]"
        :src="getImageUrl(content.portraitLink)"
        alt="Portrait"
      />

      <div class="flex flex-col space-y-2 max-w-2xl">
        <p :class="[
            'text-lg lg:text-xl transition-all motion-reduce:transition-none duration-500 delay-[500ms]',
            showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0'
          ]">
          {{ content.intro }}
        </p>

        <h1 :class="[
            'text-2xl lg:text-4xl font-bold transition-all motion-reduce:transition-none duration-500 delay-[550ms]',
            showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0'
          ]">
          {{ content.name }}
        </h1>

        <!-- Summary (used to be content.message) -->
        <p v-if="content.summary"
           :class="[
             'text-sm lg:text-base text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-[600ms]',
             showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0'
           ]">
          {{ content.summary }}
        </p>

        <!-- Tech highlights -->
        <ul v-if="content.highlights?.length"
            :class="[
              'mt-3 flex flex-wrap gap-2 transition-all motion-reduce:transition-none duration-500 delay-[650ms]',
              showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0'
            ]">
          <li v-for="h in content.highlights" :key="h"
              class="text-xs md:text-sm px-3 py-1 rounded-full border border-gray-300 dark:border-neutral-600">
            {{ h }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  content: Object,
  showTransition: Boolean
})

const showIntro = ref(false)

// Images are in src/assets/images/...
const getImageUrl = (path) => new URL(`../assets/${path}`, import.meta.url).href
</script>
