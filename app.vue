<script lang="ts" setup>
const { toasts, removeToast } = useToasts()

</script>

<template>
  <Navbar />
  <main class="">
    <NuxtPage />
  </main>
  <TransitionGroup tag="ol"
    class="flex flex-col items-end gap-4 fixed right-6 bottom-4 min-w-[200px] min-h-[50px] pointer-events-none">
    <template v-for="toast in toasts" :key="toast.id">
      <Toast :id="toast.id" :message="toast.message" :type="toast.type" @removeToast="removeToast(toast.id)" />
    </template>
  </TransitionGroup>
</template>
