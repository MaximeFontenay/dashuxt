<script lang="ts" setup>
defineProps({
  text: String,
})
</script>

<template>
  <button type="button"
    class="tab group flx-center text-secondary font-bold cursor-pointer rounded-full duration-300 ease !outline-offset-0 outline outline-1 outline-transparent hover:outline-primary">
    <span
      class="group-hover:bg-transparent group-focus-visible:bg-transparent duration-300 ease rounded-full bg-primary p-1 size-6 flx-center">
      <svg
        class="group-hover:translate-x-1 group-focus-visible:translate-x-1 group-hover:text-primary group-focus-visible:text-primary duration-200 ease  text-dark"
        width=" 12" height="12" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 5C10 4.61866 9.69086 4.30952 9.30952 4.30952H5.7211V0.721096C5.7211 0.322846 5.39825 0 5 0C4.60175 0 4.2789 0.322846 4.2789 0.721096V4.30952H0.690476C0.309137 4.30952 0 4.61866 0 5C0 5.38134 0.309137 5.69048 0.690476 5.69048H4.2789V9.2789C4.2789 9.67715 4.60175 10 5 10C5.39825 10 5.7211 9.67715 5.7211 9.2789V5.69048H9.30952C9.69086 5.69048 10 5.38134 10 5Z"
          fill="currentColor" />
      </svg>
    </span>
    <span
      class="group-hover:bg-transparent group-focus-visible:bg-transparent duration-300 ease flx-center rounded-full bg-primary py-1 px-2 leading-none max-h-6 min-h-6">
      <span
        class="group-hover:-translate-x-1 group-hover:text-primary group-focus-visible:-translate-x-1 group-focus-visible:text-primary duration-200 ease text-base font-[650] uppercase text-dark">
        {{ text }}
      </span>
    </span>
  </button>
</template>
