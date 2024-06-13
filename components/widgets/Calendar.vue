<script lang="ts" setup>
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

const activeDay = ref<number>();
const activeMonth = ref<number>(currentMonth);
const activeYear = ref<number>(currentYear);

const daysNumberInSelectedMonth = ref<number>();
const firstDayInSelectedMonth = ref<number>();

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

const setActiveDay = (day: number) => {
  activeDay.value = day
}

const setActiveMonth = (month: number) => {
  activeMonth.value = month
}

const setActiveYear = (year: number | string) => {
  activeYear.value = (typeof year === 'number') ? year : parseInt(year)
}

const monthsContainer = ref<HTMLElement | null>(null)
const showLeftArrow = ref<boolean>(false);
const showRightArrow = ref<boolean>(true);

const scrollMonthContainer = (direction: 'left' | 'right') => {
  const container = monthsContainer.value
  if (container) {
    const scrollAmount = 75
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

const updateArrowVisibility = () => {
  const container = monthsContainer.value;
  if (container) {
    showLeftArrow.value = container.scrollLeft > 0;
    showRightArrow.value = container.scrollLeft < container.scrollWidth - container.clientWidth;
  }
}

const refreshSelectedMonth = () => {
  daysNumberInSelectedMonth.value = new Date(activeYear.value, activeMonth.value + 1, 0).getDate();
  firstDayInSelectedMonth.value = new Date(activeYear.value, activeMonth.value, 1).getDay() - 1;

}

onMounted(() => {
  const container = monthsContainer.value;
  if (container) {
    container.addEventListener('scroll', updateArrowVisibility);
    updateArrowVisibility();
  }
  refreshSelectedMonth()
});

watch([activeMonth, activeYear], () => {
  if (activeMonth.value === currentMonth && activeYear.value === currentYear) {
    activeDay.value = currentDay;
  } else {
    activeDay.value = undefined;
  }
  refreshSelectedMonth()
})

onUnmounted(() => {
  if (monthsContainer.value) monthsContainer.value.removeEventListener('scroll', updateArrowVisibility);
})
</script>

<template>
  <WidgetCard title="Calendar">
    <template #icon>
      <ICalendar :size="24" />
    </template>
    <template #button>
      <Dropdown :values="yearValues" :defaultValue="activeYear" @changeValue="setActiveYear" />
    </template>
    <template #content>
      <div class="flex flex-col gap-2">
        <div class="relative w-full">
          <div v-show="showLeftArrow"
            class="max-md:hidden absolute top-1/2 -translate-y-1/2 -left-4 flx-center cursor-pointer size-5 duration-300 hover:text-primary"
            @click="scrollMonthContainer('left')">
            <ICaretLeft :size="16" />
          </div>
          <ol ref="monthsContainer"
            class="months flex items-stretch justify-around px-2 sm:px-6 py-1 -my-1 overflow-x-scroll overflow-y-clip scrollbar-hide">
            <li v-for="(month, index) in months" :key="index"
              class="group flx-center duration-150 p-0.5 h-4 rounded-full text-light"
              :class="{ 'bg-primary active ': activeMonth === index }">
              <button type="button" class="tab !outline-offset-1 rounded-full duration-200"
                @click="setActiveMonth(index)">
                <Tag
                  class="text-light duration-200 group-[.active]:text-dark group-[.active]:font-bold hover:text-primary"
                  :text="month" />
              </button>
            </li>
          </ol>
          <div v-show="showRightArrow"
            class="max-md:hidden absolute top-1/2 -translate-y-1/2 -right-4 flx-center cursor-pointer size-5 duration-300 hover:text-primary"
            @click="scrollMonthContainer('right')">
            <ICaretRight :size="16" />
          </div>
        </div>
        <ol class="grid grid-cols-7 gap-4 w-fit place-items-center mx-auto mt-2">
          <li v-for="n in 7" :key="n" class="text-light/50 -mb-3 min-w-[26px]">
            <Tag :text="['L', 'M', 'M', 'J', 'V', 'S', 'D'][n - 1]" />
          </li>
          <li v-for="n in firstDayInSelectedMonth" :key="n"></li>
          <li v-for="n in daysNumberInSelectedMonth" :key="n"
            class="flx-center border border-light/50 text-light/50 text-xs rounded duration-150" :class="[
        currentMonth === activeMonth && currentDay === n ? 'bg-primary !text-dark font-semibold border-primary' : '',
        currentDay === n && activeDay === n ? 'outline-1 outline outline-offset-2 outline-primary pointer-events-none' : '',
        activeDay === n && currentDay !== n ? 'bg-primary/15 border-primary/50 text-primary pointer-events-none' : '',
        activeDay !== n && currentDay !== n ? 'hover:bg-primary/10 hover:border-primary/50 hover:text-light/80' : ''
      ]">
            <button type="button" @click="setActiveDay(n)"
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
