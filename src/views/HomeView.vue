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
        <q-btn flat icon="east" :class="{ 'bg-primary': bgPrimary }" />
      </template>
    </q-input>
  </div>
</template>

<script>
import { isValid } from "@/service/CoreService";

export default {
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
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  .q-field {
    width: 75%;
  }
}
</style>
