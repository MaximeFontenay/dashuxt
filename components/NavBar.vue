<script lang="ts" setup>
</script>

<template>
  <header>
    <nav class="flex justify-between items-center py-10">
      <NuxtLink to="/login"
        class="bg-dark-200 text-secondary border border-dark-100 overflow-clip rounded-full p-2 duration-300 hover:bg-primary/5 hover:text-primary hover:border-primary/50"
        exactActiveClass="text-primary pointer-events-none">
        <IUser :size="24" />
      </NuxtLink>

      <NuxtLink to="/">
        <NuxtImg src="/logo.svg" alt="Logo" width="40" height="40" />
      </NuxtLink>

      <div class="flex bg-dark-200 text-secondary border border-dark-100 overflow-clip rounded-full">
        <NuxtLink to="/"
          class="group relative py-2 px-3 duration-300 border border-transparent rounded-l-full hover:bg-primary/5 hover:text-primary hover:border-primary/50"
          exactActiveClass="text-primary pointer-events-none">
          <IHouse :size="24" />
          <div class="absolute-center">
            <ClipPath class="duration-300 opacity-0 group-[.router-link-active]:opacity-100" />
          </div>
        </NuxtLink>
        <span class="bg-dark-100 w-px my-2 rounded-full"></span>
        <NuxtLink to="/chat"
          class="group relative py-2 px-3 duration-300 border border-transparent rounded-r-full hover:bg-primary/5 hover:text-primary hover:border-primary/50"
          exactActiveClass="text-primary pointer-events-none">
          <IChatText :size="24" />
          <div class="absolute-center">
            <ClipPath class="duration-300 opacity-0 group-[.router-link-active]:opacity-100" />
          </div>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>


<style></style>