<script setup>
const user = useSupabaseUser()

console.log(user)
</script>

<template>
  <div>
    <Account v-if="user" />
    <Auth v-else />
  </div>
</template>