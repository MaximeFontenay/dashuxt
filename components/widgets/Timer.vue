<script lang="ts" setup>
const timerData = [
  {
    id: 1,
    title: 'Building the dashboard',
    time: '1h 02m 38s',
    tag: [{ text: 'Tag1', color: '#5DBE74' }, { text: 'Tag2', color: '#FFC107' }, { text: 'Tag3', color: '#FF5722' }]
  },
  {
    id: 2,
    title: 'Arcade table project',
    time: '82h 31m 02s',
    tag: [{ text: 'Tag1', color: '#5DBE74' }, { text: 'Tag2', color: '#FFC107' }, { text: 'Tag3', color: '#FF5722' }]
  },
  {
    id: 3,
    title: 'Arcade table',
    time: '2h 50m 56s',
    tag: [{ text: 'Tag1', color: '#5DBE74' }, { text: 'Tag2', color: '#FFC107' }, { text: 'Tag3', color: '#FF5722' }]
  },
]
</script>

<template>
  <WidgetCard title="Timer">
    <template #icon>
      <ITimer :size="24" />
    </template>
    <template #button>
      <AddButton text="timer" />
    </template>
    <template #content>
      <div class="flex flex-col gap-2">
        <ol class="space-y-2">
          <li v-for="timer in timerData" :key="timer.id" class="p-2 bg-primary/10 rounded">
            <div class="flex justify-between items-center mb-2">
              <h3 class="font-base text-sm">{{ timer.title }}</h3>
              <p class="text-sm">{{ timer.time }}</p>
            </div>
            <ul class="flex gap-1">
              <li v-for="tag in timer.tag" :key="tag">
                <Tag :color="tag.color" :text="tag.text" />
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </template>
  </WidgetCard>
</template>

<style></style>
