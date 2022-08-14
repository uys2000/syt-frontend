<template>
  <router-view />
</template>
<script>
import { Dark } from "quasar";
export default {
  mounted() {
    Dark.set(true);
  },
};
</script>
<style>

</style>
