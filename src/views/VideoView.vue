<template>
  <q-card bordered dark>
    <q-card-section class="q-pa-sm">
      <!-- Time & Tile -->
      <q-skeleton
        class="full-width"
        height="50px"
        :class="{ hide: isLoaded }"
      />
      <div v-if="isLoaded" class="full-width">
        <span style="height: 50px"> {{ videoData.title }} </span>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section horizontal>
      <q-card-section class="col-6 q-pa-sm">
        <!-- Image -->
        <q-skeleton class="fit q-pa-none" :class="{ hide: isLoaded }" />
        <q-img v-if="isLoaded" class="fit" :src="videoData.thumbnails[0].url" />
      </q-card-section>
      <q-separator vertical />
      <q-card-section class="col-6 q-pa-sm">
        <!-- Description -->
        <q-skeleton
          class="full-width"
          height="150px"
          :class="{ hide: isLoaded }"
        />

        <div v-if="isLoaded" class="full-width desc">
          <span style="height: 50px"> {{ videoData.desc }} </span>
        </div>
      </q-card-section>
    </q-card-section>
    <q-separator />
    <q-card-section class="q-pa-none">
      <q-card-section horizontal class="q-pa-none">
        <q-card-section class="col-8 q-pa-sm">
          <!-- Download Options -->
          <q-skeleton
            class="full-width"
            height="50px"
            :class="{ hide: isLoaded }"
          />
          <q-select
            class="full-width"
            v-if="isLoaded"
            square
            filled
            v-model="videoQua"
            @update:model-value="updateLink"
            :options="videoOptions"
            label="Quality"
          />
        </q-card-section>
        <q-card-section class="col-4 q-pa-sm">
          <!-- Download Button -->
          <q-skeleton
            class="full-width"
            height="50px"
            :class="{ hide: isLoaded }"
          />
          <q-btn
            flat
            :disable="videoQua == ''"
            v-if="isLoaded"
            class="bg-primary fit"
            icon="expand_more"
            @click="downloadVideo"
          />
        </q-card-section>
      </q-card-section>
      <q-card-section v-if="link">
        <div>
          <a :href="link" target="_blank" download="asd">Alternative Link 1</a>
        </div>
        <div>
          <a :href="link2" target="_blank">Alternative Link 2</a>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
import {
  downloadVideoFromGoogle,
  downloadVideoFromOurServer,
  getInfoVideo,
} from "@/service/ApiService";
export default {
  inject: ["setSection"],
  data() {
    return {
      isLoaded: false,
      videoData: {},
      error: false,
      videoQua: "",
      videoOptions: [],
      link: "",
    };
  },
  methods: {
    getID: function () {
      const a = this.$route.path.split("/");
      return a[a.length - 1];
    },
    updateLink: function () {
      const formatId = this.videoQua.split("-")[1].replace(" ", "");
      this.link = downloadVideoFromGoogle(this.videoData, formatId);
      this.link2 = downloadVideoFromOurServer(this.getID(), formatId);
    },
    getInfo: function (id) {
      getInfoVideo(id).then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          this.videoData = res.data;
          const l = [...res.data.formats];
          this.videoOptions = l.map((i) => i.ext + " - " + i.format);
          this.isLoaded = true;
        } else this.error = true;
      });
    },
    downloadVideo: function () {
      this.updateLink();
      window.open(this.link, "_blank");
    },
  },
  mounted() {
    this.setSection(false);
    this.getInfo(this.getID());
  },
};
</script>
<style scoped lang="scss">
.q-card {
  margin: auto;
  width: 75%;
  @media (max-width: 600px) {
    width: 100%;
  }
  & * {
    position: relative;
  }
}
.hide {
  opacity: 0;
  position: absolute;
  display: none;
}
.desc {
  height: 150px;
  overflow-y: scroll;
}
.text {
  height: 50px;
  overflow-y: auto;
}
</style>
