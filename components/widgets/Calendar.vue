<script lang="ts" setup>
const today = new Date();
const currentDay = today.getDate().toString();
const currentMonth = (today.getMonth() + 1).toString();
const currentYear = today.getFullYear().toString();

const activeDay = ref<string>(currentDay);
const activeMonth = ref<string>(currentMonth);
const activeYear = ref<string>(currentYear);

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

const setActiveMonth = (month: string) => {
  activeMonth.value = month
}

const yearValues = [
  '2026',
  '2025',
  '2024',
  '2023',
  '2022',
  '2021',
  '2020',
]


onMounted(() => {
})

</script>

<template>
  <WidgetCard title="Calendar">
    <template #icon>
      <ICalendar :size="24" />
    </template>
    <template #button>
      <Dropdown :values="yearValues" :defaultValue="activeYear" @change="setActiveYear" />
    </template>
    <template #content>
      <div class="flex flex-col gap-2">
        <ol class="months flex items-stretch justify-around px-4 overflow-x-scroll overflow-y-clip scrollbar-hide">
          <li v-for="(month, index) in months" :key="index"
            class="group flx-center duration-150 p-0.5 h-4 rounded-full text-light"
            :class="{ 'bg-primary active ': activeMonth === (index + 1).toString() }">
            <button type="button" @click="setActiveMonth(month)">
              <Tag class="text-light duration-200 group-[.active]:text-dark group-[.active]:font-bold" :text="month" />
            </button>
          </li>
        </ol>
        <ol class="grid grid-cols-7 gap-4 w-fit place-items-center mx-auto">
          <li v-for="n in 31" :key="n"
            :class="{ 'bg-primary !text-dark font-semibold border-primary': currentDay === n.toString() }"
            class="flx-center border border-light/50 text-light/50 text-xs rounded duration-150 hover:bg-primary/10 hover:border-primary/50 hover:text-primary">
            <button type="button" class="size-6">{{ n }}</button>
          </li>
        </ol>
      </div>
    </template>
  </WidgetCard>
</template>

<style lang="scss" scoped>
.months {
  -webkit-mask: linear-gradient(to right, transparent 0, white 20%, white 80%, transparent 100%);
  mask: linear-gradient(to right, transparent 0, white 20%, white 80%, transparent 100%);
}
</style>
