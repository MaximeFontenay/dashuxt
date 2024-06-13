<script lang="ts" setup>
const props = withDefaults(defineProps<{
  color?: string;
}>(), {
  color: '#5DBE74'
});

const divStyle = ref({});

const generateRandomClipPath = (): string => {
  const points = [];
  const numPoints = Math.floor(Math.random() * 2.5) + 2.5;

  for (let i = 0; i < numPoints; i++) {
    const x = Math.floor(Math.random() * 101);
    const y = Math.floor(Math.random() * 101);
    points.push(`${x}% ${y}%`);
  }

  return `polygon(${points.join(', ')})`;
};

onMounted(() => {
  const clipPathValue = generateRandomClipPath();
  divStyle.value = {
    clipPath: clipPathValue,
    WebkitClipPath: clipPathValue,
    backgroundColor: props.color,
  };
});

onUnmounted(() => {
  divStyle.value = {};
});
</script>

<template>
  <div class="flx-center blur-[40px] relative min-w-full min-h-full opacity-40">
    <div :style="divStyle" class="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
  </div>
</template>

<style></style>
