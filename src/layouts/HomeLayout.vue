<template>
  <header :class="{ right: isRight }">
    <span>SYT</span>
    <span> Youtube Video Downloader </span>
  </header>
  <section :class="{ hide: isHide, show: !isHide }">
    <router-view />
  </section>
  <q-btn class="bg-primary" @click="changePage" />
</template>

<script>
export default {
  data() {
    return {
      page: "Home",
      isRight: false,
      isHide: true,
    };
  },
  provide() {
    return {
      setPage: (page) => (this.page = page),
      setSection: (isHide) => (this.isHide = isHide),
    };
  },
  methods: {
    setLogoPosition: function () {
      if (this.page == "Home") this.isRight = false;
      else this.isRight = true;
    },
    changePage: function () {
      if (this.page == "Home") this.page = "Video";
      else this.page = "Home";
    },
  },
  mounted() {
    this.setLogoPosition();
  },
  watch: {
    page() {
      this.setLogoPosition();
    },
  },
};
</script>

<style scoped lang="scss">
header {
  span {
    position: absolute;
    text-align: center;
    opacity: 1;
  }
  & > span:nth-of-type(1) {
    font-size: 4pc;
    top: 30%;
    right: 50%;
    transform: translate(50%, -50%);
  }
  & > span:nth-of-type(2) {
    font-size: 1.5pc;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.right {
  height: 15vh;
  & > span:nth-of-type(2) {
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
}

.show,
.show * {
  opacity: 1;
}
.hide,
.hide * {
  opacity: 0;
}
</style>
