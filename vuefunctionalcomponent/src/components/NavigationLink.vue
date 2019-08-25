<template>
  <a :href="url">
    <slot>链接</slot>
  </a>
</template>

<script>
export default {
  name: "navigation-link",
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>