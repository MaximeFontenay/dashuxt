<script lang="ts" setup>
defineProps({
  title: String,
})
</script>

<template>
  <article class="widget-card relative p-6 bg-white/1 rounded-lg flex flex-col gap-4">
    <div class="flex justify-between items-center gap-8">
      <div class="flex gap-1">
        <h2 class="font-bold text-2xl leading-6">{{ title }}</h2>
        <div class="opacity-15 -translate-y-2 text-primary">
          <slot name="icon" />
        </div>
      </div>
      <slot name="button" />
    </div>
    <slot name="content" />
    <div class="absolute-center -z-10">
      <ClipPath />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.widget-card::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  border: solid 2px rgba(255, 255, 255, 0.1);
  translate: -50% -50%;
  border-radius: .5rem;
  z-index: -10;
}
</style>