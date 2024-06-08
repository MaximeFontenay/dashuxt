<script lang="ts" setup>
const months = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
]
</script>

<template>
  <WidgetCard title="Calendar">
    <template #icon>
      <ICalendar :size="24" />
    </template>
    <template #button>

      <AddButton text="2024" />

    </template>
    <template #content>
      <div class="flex flex-col gap-2">
        <ol class="flex items-stretch justify-around overflow-x-scroll overflow-y-clip scrollbar-hide">
          <li v-for="(month, index) in months" :key="index" class="p-0.5">
            <button type="button">
              <Tag class="text-light" :text="month" />
            </button>
          </li>
        </ol>
        <ol class="grid grid-cols-7 gap-4 w-fit place-items-center">
          <li v-for="n in 31" :key="n"
            class="flx-center border border-light/50 text-light/50 text-xs rounded duration-300 hover:bg-primary/10 hover:text-primary">
            <button type="button" class="size-6">{{ n }}</button>
          </li>
        </ol>
      </div>
    </template>
  </WidgetCard>
</template>

<style></style>
