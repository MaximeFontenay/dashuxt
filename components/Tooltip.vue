<script lang="ts" setup></script>

<template>
  <div class="group relative flx-center w-fit h-fit">
    <slot name="text"></slot>
    <div
      class="content group-hover:!delay-1000 group-hover:opacity-100 pointer-events-none duration-300 absolute z-[1] bottom-full left-1/2 -translate-x-1/2 opacity-0 flx-center gap-1 text-xs px-2 py-0.5 backdrop-blur-md bg-dark/80 rounded">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  transition-delay: 0s;
}
</style>