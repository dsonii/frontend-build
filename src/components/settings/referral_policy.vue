<template>
  <div>
    <b-form @submit.prevent="updateReferralPolicy">
      <input type="hidden" v-model="form.id" />
      <b-form-group
        label="Referral Policy "
        label-for="referral-policy-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="2"
        content-cols-sm
        content-cols-lg="10"
      >
        <vue-editor class="mt-3" v-model="form.referral_policy"></vue-editor>
      </b-form-group>

      <b-form-group class="col-md-6 offset-md-4">
        <b-button
          type="submit"
          class="btn btn-success btn-lg text-center"
          disabled
          ><b-spinner small v-if="submitted" label="Loading..."></b-spinner
          >Submit</b-button
        >
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { settingService } from "../../services";
export default {
  name: "referralpolicy",
  data() {
    return {
      form: {
        type: "referral_policy",
        id: "",
        referral_policy: "",
      },
      submitted: false,
    };
  },
  components: {
    VueEditor,
  },
  methods: {
    async getSetting() {
      try {
        const response = await settingService.find("referral_policy");
        if (response.status) {
          this.form = response.data;
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
    async updateReferralPolicy() {
      try {
        this.submitted = true;
        console.log("response", this.form);
        const response = await settingService.update(this.form.id, this.form);

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

<style lang="scss" scoped></style>
