<script lang="ts" setup>
const router = useRouter()

console.log(router.currentRoute.value.path)

</script>

<template>
  <header>
    <nav class="flex justify-between items-center py-10">
      <NuxtLink to="/">
        <NuxtImg src="/logo.svg" alt="Logo" width="40" height="40" />
      </NuxtLink>

      <div class="flex bg-dark-200 text-secondary border border-dark-100 overflow-clip rounded-full">
        <NuxtLink to="/" class="group relative py-2 px-3 duration-300 hover:bg-primary/5"
          exactActiveClass="text-primary pointer-events-none">
          <IHouse :size="24" />
          <div class="absolute-center">
            <ClipPath class="duration-300 opacity-0 group-[.router-link-active]:opacity-100" />
          </div>
        </NuxtLink>
        <span class="bg-dark-100 w-px my-2 rounded-full"></span>
        <NuxtLink to="/chat" class="group relative py-2 px-3 duration-300 hover:bg-primary/5"
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