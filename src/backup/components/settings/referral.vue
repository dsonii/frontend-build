<template>
  <div>
    <b-form @submit.prevent="updateReferral">
      <input type="hidden" v-model="refferal.id" />

      <div v-for="referral in refferal.refferal" :key="referral">
        <b-form-group
          :label="referral.name"
          :label-for="`${referral.name}-input`"
          class="mt-3"
          label-cols-sm="4"
          label-cols-lg="3"
          content-cols-sm
          content-cols-lg="7"
        >
          <b-input v-model.trim="referral.value" :placeholder="referral.name">
          </b-input>
        </b-form-group>
      </div>

      <b-form-group class="col-md-6 offset-md-4">
        <b-button type="submit" class="btn btn-success btn-lg text-center">
          <b-spinner small v-if="submitted" label="Loading..."></b-spinner
          >Submit</b-button
        >
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { settingService } from "../../services";

export default {
  name: "refferal",
  data() {
    return {
      submitted: false,
      refferal: [],
    };
  },
  methods: {
    async getSetting() {
      try {
        const response = await settingService.find("referral");
        if (response.status) {
          this.refferal = response.data;
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }
    },
    async updateReferral() {
      try {
        this.submitted = true;
        const response = await settingService.update(this.refferal.id, {
          type: "refferal",
          refferal: this.refferal.refferal,
        });
        if (response.status) {
          this.submitted = false;
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 2000,
            // all of other options may go here
          });
        }
      } catch (e) {
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 4000,
        });
      }
    },
  },
  mounted() {
    this.getSetting();
  },
};
</script>
