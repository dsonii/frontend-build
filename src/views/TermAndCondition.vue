<template>
  <div>
    <b-container>
      <b-row class="my-5">
        <b-col cols="12">
          <div class="brand-logo">
            <img class="img" :src="Logo" />
          </div>
        </b-col>
        <b-col cols="12">
          <div v-html="state"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { authApi } from "../helpers/auth";
import { useApp } from "../store/useApp";

const { appLogo } = useApp();
const state = ref();
onMounted(() => getSetting());

const Logo = ref("");

const getSetting = async () => {
  try {
    const response = await authApi.get("settings/term-and-conditions");
    state.value = response.data.data;
    Logo.value = appLogo;
  } catch (e) {
    console.log(e.message);
  }
};
</script>

<style lang="scss" scoped>
.brand-logo {
  margin-bottom: 1rem;
  img {
    width: 100px;
  }
}
</style>
