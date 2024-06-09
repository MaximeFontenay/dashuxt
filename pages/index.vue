<script lang="ts" setup>
useSeoMeta({
  title: 'Dashuxt - Home',
})

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-10">
    <WidgetsCalendar />

    <WidgetsTimer />
    <WidgetsNote />
  </div>
</template>

<style></style>
