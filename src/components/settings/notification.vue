<template>
  <div>
    <b-form @submit.prevent="updateNotification">
      <input type="hidden" v-model="form.id" />

      <b-form-group
        label="OTP validation via Firebase"
        label-for="otp-validation-via-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-checkbox
          v-model.trim="$v.form.otp_validation_via.$model"
          :class="{
            'is-invalid': submitted && $v.form.otp_validation_via.$error,
          }"
          :state="validateState('otp_validation_via')"
          switch
          readonly
        >
        </b-form-checkbox>
      </b-form-group>

      <b-form-group
        label="Firebase Database Url"
        label-for="firebase-database-url-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          v-model.trim="$v.form.firebase_database_url.$model"
          placeholder="Firebase Database url"
          :class="{
            'is-invalid': submitted && $v.form.firebase_database_url.$error,
          }"
          :state="validateState('firebase_database_url')"
          readonly
        >
        </b-input>
        <div
          v-if="submitted || !$v.form.firebase_database_url.required"
          class="invalid-feedback"
        >
          firebase database url is required
        </div>
      </b-form-group>

      <b-form-group
        label="Firebase Admin Sdk Json"
        label-for="firbase-key-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
        description="Note: Generate private key from firebase console >> project setting >> service account"
      >
        <b-form-file
          v-model.trim="form.firebase_key"
          placeholder="Select a firebase json file or drop it here..."
        ></b-form-file>
        <!-- <div
          v-if="submitted || !$v.form.firebase_key.required"
          class="invalid-feedback"
        >
          firebase json file is required
        </div>
        <a
          v-if="
            typeof form.apple_key_name === 'string' && form.apple_key_name != ''
          "
          :href="form.apple_key_name"
          target="_blank"
          >{{ form.apple_key_name }}</a
        > -->
      </b-form-group>

      <!-- <b-form-group
        label="Apple Key Id"
        label-for="apple-key-id-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          v-model.trim="$v.form.apple_key_id.$model"
          :class="{
            'is-invalid': submitted && $v.form.apple_key_id.$error,
          }"
          placeholder="Apple key id"
          :state="validateState('apple_key_id')"
          readonly
        >
        </b-input>
        <div
          v-if="submitted || !$v.form.apple_key_id.required"
          class="invalid-feedback"
        >
          apply key id is required
        </div>
      </b-form-group>

      <b-form-group
        label="Apple Team Id"
        label-for="apple-team-id-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          v-model.trim="$v.form.apple_team_id.$model"
          placeholder="Apple team id"
          :class="{
            'is-invalid': submitted || $v.form.apple_team_id.$error,
          }"
          :state="validateState('apple_team_id')"
          readonly
        >
        </b-input>
        <div
          v-if="submitted || !$v.form.apple_key_id.required"
          class="invalid-feedback"
        >
          apply team id is required
        </div>
      </b-form-group>

      <b-form-group
        label="Apple Key"
        label-for="apple-key-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-file
          v-model.trim="$v.form.apple_key.$model"
          placeholder="Select a apple key or drop it here..."
          :class="{
            'is-invalid': submitted || $v.form.apple_key.$error,
          }"
          :state="validateState('apple_key')"
        ></b-form-file>
        <div
          v-if="submitted || !$v.form.apple_key.required"
          class="invalid-feedback"
        >
          apply key is required
        </div>
        <a
          v-if="
            typeof form.apple_key_name === 'string' && form.apple_key_name != ''
          "
          :href="form.apple_key_name"
          target="_blank"
          >{{ form.apple_key_name }}</a
        >
      </b-form-group> -->

      <b-form-group class="col-md-6 offset-md-4">
        <b-button type="submit" class="btn btn-success btn-lg text-center">
          <b-spinner small v-if="submitted" label="Loading..."></b-spinner>
          Submit</b-button
        >
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { settingService } from "../../services";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "notification",
  data() {
    return {
      form: {
        id: "",
        otp_validation_via: false,
        firebase_database_url: "",
        firebase_key: null,
        //apple_key: "",
        // apple_key_name: "",
        // apple_key_id: "",
        // apple_team_id: "",
      },
      submitted: false,
    };
  },
  validations: {
    form: {
      otp_validation_via: { required },
      firebase_database_url: { required },
      // apple_key_id: { required },
      // apple_team_id: { required },
      // apple_key: { required },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    async getSetting() {
      try {
        const response = await settingService.find("notifications");
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
    async updateNotification() {
      try {
        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        this.submitted = true;
        const formData = new FormData();
        formData.append("type", "notifications");
        formData.append("otp_validation_via", this.form.otp_validation_via);
        formData.append("apple_key", this.form.apple_key);
        formData.append("apple_key_id", this.form.apple_key_id);
        formData.append("apple_team_id", this.form.apple_team_id);
        formData.append(
          "firebase_database_url",
          this.form.firebase_database_url
        );
        formData.append("firebase_key", this.form.firebase_key);
        const response = await settingService.updateNotification(
          this.form.id,
          formData
        );
        if (response.status) {
          this.submitted = false;
          this.getSetting();
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 2000,
            // all of other options may go here
          });
        }
      } catch (e) {
        this.submitted = false;
        this.$toast.open({
          message: e.message,
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
