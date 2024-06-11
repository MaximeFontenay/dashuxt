<script lang="ts" setup>
const props = defineProps<{
  title?: string;
  defaultValue: string | number;
  values: string[];
}>();

const dropdown = ref<HTMLElement | null>(null)
const dropdownContainer = ref<HTMLElement | null>(null)
const showDropdown = ref<boolean>(false)
const selectedDropdownValue = ref<string | number>(props.defaultValue)
const dropdownValues = ref<string[]>(props.values)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

onClickOutside(dropdownContainer, () => {
  if (showDropdown.value) {
    showDropdown.value = false
  }
})

</script>

<template>
  <div ref="dropdownContainer"
    class="text-right relative select-none cursor-pointer ring-0 rounded px-2 duration-200 hover:text-primary"
    tabindex=" 0" :aria-label="`Dropdown, current value: ${selectedDropdownValue}`" @click="toggleDropdown"
    @keyup.enter="toggleDropdown" @keyup.space="toggleDropdown">
    <div class="flx-center gap-0.5 font-medium">
      {{ selectedDropdownValue }}
      <ICaretRight class="transition-transform duration-200 p-0.5" :class="{ 'rotate-90': showDropdown }" :size="16" />
    </div>
    <ol ref="dropdown"
      :class="{ 'opacity-100 pointer-events-auto': showDropdown, 'opacity-0 pointer-events-none': !showDropdown }"
      class="p-2 right-2.5 duration-300 rounded absolute bg-white/1 backdrop-blur-md border border-light/25 z-10 text-xs space-y-2">
      <template v-for="value in dropdownValues" :key="value">
        <li v-if="selectedDropdownValue !== value">
          <button class="tab text-light rounded-sm duration-200 hover:text-primary" type="button"
            :tabindex="showDropdown ? 0 : -1" :aria-label="`Select ${value}`" @click="selectedDropdownValue = value">
            {{ value }}
          </button>
        </li>
      </template>
    </ol>
  </div>
</template>



<style></style>