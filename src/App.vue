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
* {
  padding: 0px;
  margin: 0px;
}
body {
  background-color: #000;
  height: 100vh;
  color: white;
}
</style>
