<script lang="ts" setup>
const timerData = [
  {
    id: 1,
    title: 'Go to grocery',
  },
  {
    id: 2,
    title: '1H Gym',
  },
  {
    id: 3,
    title: '30 minutes of reading',
  },
  {
    id: 4,
    title: 'Buy the new BD in the library, locat...',
  },
]
</script>

<template>
  <WidgetCard title="Take a note">
    <template #icon>
      <INoteBlank :size="24" />
    </template>
    <template #button>
      <AddButton text="note" />
    </template>
    <template #content>
      <div class="flex flex-col gap-2">
        <ol class="space-y-2">
          <li v-for="timer in timerData" :key="timer.id" class="p-2 bg-primary/10 rounded">
            <div class="flex justify-between items-stretch">
              <h3 class="font-base text-sm">{{ timer.title }}</h3>
              <button type="button" class="flx-center text-light/40 duration-200 w-5 aspect-square hover:text-light">
                <IPencilSimple :size="12" />
              </button>
            </div>
          </li>
        </ol>
      </div>
    </template>
  </WidgetCard>
</template>

<style></style>
