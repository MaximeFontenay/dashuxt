<script lang="ts" setup>
const today = new Date();
const currentDay = today.getDate().toString();
const currentMonth = (today.getMonth() + 1).toString();
const currentYear = today.getFullYear().toString();

const activeDay = ref<string>('');
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

const yearValues = [
  '2026',
  '2025',
  '2024',
  '2023',
  '2022',
  '2021',
  '2020',
]

const setActiveDay = (day: string) => {
  activeDay.value = day
}

const setActiveMonth = (month: string) => {
  activeMonth.value = month
}

const setActiveYear = (year: string) => {
  activeYear.value = year
}

const monthsContainer = ref<HTMLElement | null>(null)

const scrollMonthContainer = (direction: 'left' | 'right') => {
  const container = monthsContainer.value
  if (container) {
    const scrollAmount = 200
    if (direction === 'left') {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      })
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }
}

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
        <div class="relative w-full">
          <div class="max-lg:hidden absolute top-1/2 -translate-y-1/2 -left-4 flx-center cursor-pointer size-5"
            @click="scrollMonthContainer('left')">
            <ICaretLeft :size="16" />
          </div>
          <ol ref="monthsContainer"
            class="months flex items-stretch justify-around px-2 sm:px-6 py-1 -my-1 overflow-x-scroll overflow-y-clip scrollbar-hide">
            <li v-for="(month, index) in months" :key="index"
              class="group flx-center duration-150 p-0.5 h-4 rounded-full text-light"
              :class="{ 'bg-primary active ': activeMonth === month }">
              <button type="button" class="tab !outline-offset-1 rounded-full duration-200"
                @click=" setActiveMonth(month)">
                <Tag class="text-light duration-200 group-[.active]:text-dark group-[.active]:font-bold"
                  :text="month" />
              </button>
            </li>
          </ol>
          <div class="max-lg:hidden absolute top-1/2 -translate-y-1/2 -right-4 flx-center cursor-pointer size-5"
            @click="scrollMonthContainer('right')">
            <ICaretRight :size="16" />
          </div>
        </div>
        <ol class="grid grid-cols-7 gap-4 w-fit place-items-center mx-auto">
          <li v-for="n in 31" :key="n"
            class="flx-center border border-light/50 text-light/50 text-xs rounded duration-150" :class="[
              currentDay === n.toString() ? 'bg-primary !text-dark font-semibold border-primary' : '',
              currentDay === n.toString() && activeDay === n.toString() ? 'outline-1 outline outline-offset-2 outline-primary pointer-events-none' : '',
              activeDay === n.toString() && currentDay !== n.toString() ? 'bg-primary/15 border-primary/50 text-primary pointer-events-none' : '',
              activeDay !== n.toString() && currentDay !== n.toString() ? 'hover:bg-primary/10 hover:border-primary/50 hover:text-light/80' : ''
            ]">
            <button type="button" @click="setActiveDay(n.toString())"
              class="tab size-6 rounded-[3px] !outline-offset-2 focus-visible:bg-primary/10 focus-visible:border-primary/10 focus-visible:text-primary">
              {{ n }}</button>
          </li>
        </ol>
      </div>
    </template>
  </WidgetCard>
</template>

<style lang="scss" scoped>
.months {
  -webkit-mask: linear-gradient(to right, transparent 0, white 10%, white 90%, transparent 100%);
  mask: linear-gradient(to right, transparent 0, white 10%, white 90%, transparent 100%);
}
</style>
