<template>
  <section class="min-h-screen w-full" ref="aboutSection" id="about-section">
    <!-- Header -->
    <div
      class="relative flex py-5 items-center"
      :class="[
        visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm',
        'transition-all motion-reduce:transition-none duration-500'
      ]"
    >
      <h1 class="text-3xl font-bold pr-5">😎 About Me</h1>
      <div class="flex-grow border-t border-black dark:border-white border-1"></div>
    </div>

    <!-- Content -->
    <div
      :class="[
        'flex flex-col gap-y-8 xl:grid xl:grid-cols-2 xl:gap-x-8 mb-36 text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-300',
        visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm'
      ]"
    >
      <!-- Left: text -->
<div class="order-2 xl:order-none leading-relaxed space-y-6">
  <div v-for="(paragraph, i) in content.autobiography" :key="i">
    <p>{{ paragraph }}</p>
  </div>

  <!-- Tech stack section -->
  <div>
    <p class="pb-3 font-medium text-gray-700 dark:text-gray-200">Most Recent Tech Stack</p>
    <ul class="list-none grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
      <li v-for="(tech, i) in content.techStack" :key="i"
          class="relative pl-6 before:content-['✅'] before:absolute before:left-0 before:top-0">
        {{ tech }}
      </li>
    </ul>
  </div>
</div>

      <!-- Right: single photo (balanced fixed size) -->
      <!-- Right: single photo (portrait rectangle, better spacing) -->
<div class="order-1 xl:order-none flex justify-center items-start xl:pl-6">
  <figure class="w-full max-w-md aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
    <img
      :src="getImageUrl(content.photo1Link)"
      :alt="content.photo1Alt || 'Photo'"
      class="w-full h-full object-cover"
      loading="lazy"
      decoding="async"
    />
  </figure>
</div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { onIntersect } from '../composables/onIntersect'

const props = defineProps({
  content: Object,
  transitions: Object
})

const aboutSection = ref({})
const visible =
  props.transitions.active &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    ? onIntersect(aboutSection, !!props.transitions.showOnce, {
        threshold: props.transitions.thresholdOption
      })
    : true

// Static Images
const getImageUrl = (path) => new URL(`../assets/${path}`, import.meta.url).href
</script>
