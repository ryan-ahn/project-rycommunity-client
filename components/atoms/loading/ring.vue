<template>
  <svg
    class="loading-wrapper"
    viewBox="50 50 100 100"
    stroke-width="5"
  >
    <circle
      cx="100"
      cy="100"
      r="20"
    />
  </svg>
</template>

<style lang="scss" scoped>
.loading-wrapper {
  --uib-size: 40px;
  --uib-speed: 2s;
  --uib-color: #999;
  width: var(--uib-size);

  height: var(--uib-size);
  vertical-align: middle;
  transform-origin: center;
  animation: rotate var(--uib-speed) linear infinite;
}

.loading-wrapper circle {
  fill: none;
  stroke: var(--uib-color);
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: stretch calc(var(--uib-speed) * 0.75) ease-in-out infinite;
}
</style>
