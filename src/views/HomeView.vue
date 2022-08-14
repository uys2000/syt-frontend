<template>
  <div class="url-field">
    <q-input
      bottom-slots
      standout="bg-grey-10"
      v-model="url"
      label="URL"
      @focus="activeBg"
      @blur="deactiveBg"
      :error="!isValid"
      error-message="I think URL is not usable for this purpose"
    >
      <template v-slot:append>
        <q-btn
          flat
          icon="east"
          :class="{ 'bg-primary': bgPrimary }"
          @click="buttonEvent"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
import { getListID, getVideoID, isList, isValid } from "@/service/CoreService";

export default {
  inject: ["setPage", "setSection"],
  data() {
    return {
      url: "https://www.youtube.com/watch?v=yA5Xx-I_46U&ab_channel=OrhunKayaalpLet%27sPlay",
      bgPrimary: false,
      isValid: true,
    };
  },
  methods: {
    activeBg: function () {
      this.bgPrimary = true;
    },
    deactiveBg: function () {
      this.bgPrimary = false;
    },
    buttonEvent: function () {
      this.setSection(true);
      if (isList(this.url)) {
        this.setPage("List");
        this.$router.push("list/" + getListID(this.url));
      } else {
        this.setPage("Video");
        this.$router.push("video/" + getVideoID(this.url));
      }
    },
  },
  mounted() {
    this.setSection(false);
  },
  watch: {
    url() {
      this.isValid = isValid(this.url);
    },
  },
};
</script>
<style scoped lang="scss">
.q-btn {
  transition: 1s;
}
.url-field {
  margin: auto;
  margin-top: 5vh;
  width: 75%;
  text-align: center;
  @media (max-width: 600px) {
    width: 100%;
  }
}
</style>
