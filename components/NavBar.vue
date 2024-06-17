<script lang="ts" setup>

</script>

<template>
  <header class="my-10">
    <nav class="grid grid-cols-3 h-11">
      <div class="size-11">
        <NuxtLink to="/login"
          class="tab flx-center bg-dark-200 text-secondary border border-dark-100 overflow-clip rounded-full w-full h-full p-2 duration-300 hover:bg-primary/5 hover:text-primary hover:border-primary/50"
          exactActiveClass="!text-primary bg-primary/5 text-primary border-primary/50 pointer-events-none">
          <IUser :size="24" />
        </NuxtLink>
      </div>

      <NuxtLink to="/" class="tab h-11">
        <NuxtImg src="/logo_full.svg" alt="Logo" width="200" height="40" class="object-contain h-full w-full" />
      </NuxtLink>

      <div class="group relative w-fit ml-auto flex bg-dark-200 text-secondary overflow-clip rounded-full">
        <NuxtLink to="/"
          class="tab group relative py-2 px-3 duration-300 border-y border-l border-dark-100 rounded-l-full hover:bg-primary/5 hover:text-primary hover:border-primary/50"
          exactActiveClass="text-primary pointer-events-none">
          <IHouse :size="24" />
          <div class="absolute-center -z-10">
            <ClipPath class="duration-300 opacity-0 group-[.router-link-active]:opacity-100" />
          </div>
        </NuxtLink>
        <span
          class="bg-dark-100 w-px my-2 rounded-full absolute-center mx-auto duration-300 group-hover:my-0 group-hover:bg-primary/50"></span>
        <NuxtLink to="/chat"
          class="tab group relative py-2 px-3 duration-300 border-y border-r border-dark-100 rounded-r-full hover:bg-primary/5 hover:text-primary hover:border-primary/50"
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