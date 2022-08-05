<template>
  <div :class="{ 'center-logo': isCenterLogo }">
    <span>SYT</span>
  </div>
  <div :class="{ 'center-sub-logo': isCenterSubText }">
    <span> Youtube Video Downloader </span>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      isCenterLogo: true,
      isCenterSubText: true,
    };
  },
};
</script>

<style scoped lang="scss">
.center-logo {
  display: flex;
  justify-content: center;
  span {
    margin-top: 20vh;
    font-size: 4pc;
  }
}
.center-sub-logo {
  display: flex;
  justify-content: center;
  span {
    font-size: 1.5pc;
    margin: auto;
  }
}
</style>
