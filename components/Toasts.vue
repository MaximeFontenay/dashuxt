<script lang="ts" setup>
const toastContainer = ref<HTMLElement | null>(null)
const toasts = ref<Array<{ id: number, message: string }>>([
  {
    id: 1,
    message: 'This is a toast message',
  },
  {
    id: 2,
    message: 'This is another toast message',
  },
  {
    id: 3,
    message: 'This is a third toast message This is a third toast message This is a third toast message',
  },
])
</script>

<template>
  <ol ref="toastContainer" class="flex flex-col items-end gap-4 fixed right-6 bottom-4 min-w-[200px] min-h-[50px]">
    <li v-for="toast in toasts" :key="toast.id"
      class="relative text-green/80  bg-green/10 py-2 px-3 rounded-xl rounded-tl-none border border-green/60 w-fit max-w-80">
      <span>{{ toast.message }}</span>
      <div class="absolute-center -z-10">
        <ClipPath />
      </div>
    </li>
  </ol>
</template>

<style lang="scss" scoped></style>