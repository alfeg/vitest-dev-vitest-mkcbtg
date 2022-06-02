<template>
  <div>
    <div>Hello</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const main = ref(null);
const el = window.document.body;
window.getComputedStyle(el).fontFamily;

setInterval(() => {
  const el = window.document.body;
  window.getComputedStyle(el).fontFamily;
}, 1);
</script>
