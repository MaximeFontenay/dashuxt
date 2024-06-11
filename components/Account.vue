<script lang="ts" setup>
const user = useSupabaseUser();
</script>

<template>
  <div class="" v-if="user">
    <h1>Mon compte</h1>

    <h2>Mon email</h2>
    <p>
      {{ user.email }}
    </p>
  </div>
</template>



<style lang="scss" scoped></style>
