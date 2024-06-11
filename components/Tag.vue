<script lang="ts" setup>
defineProps({
  color: String,
  text: String,
})
</script>

<template>
  <span :style="{ backgroundColor: color }"
    class="text-xxxs px-1.5 pb-px flx-center rounded-full leading-3 select-none">
    {{ text }}
  </span>
</template>


<style></style>