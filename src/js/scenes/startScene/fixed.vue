<script>
export default {
  name: "SartSceneFixed"
}
</script>

<template>
<button class="stair-enter-button interactive-button"
    v-on:click="this.onClick('stair')"
  />
<button class="info-enter-button interactive-button"
  v-on:click="this.onClick('info')"
/>
</template>
