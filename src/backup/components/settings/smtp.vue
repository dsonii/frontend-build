<template>
  <div>
    <b-form @submit.prevent="updateSMTP">
      <input type="hidden" v-model="form.smtp.id" />
      <b-form-group
        label="Is production"
        label-for="status-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-radio-group
          :options="statusOptions"
          v-model.trim="$v.form.smtp.is_production.$model"
          :class="{
            'is-invalid': submitted || $v.form.smtp.is_production.$error,
          }"
          :state="validateState('is_production')"
        ></b-form-radio-group>
        <b-form-invalid-feedback
          v-if="submitted || !$v.form.smtp.is_production.required"
        >
          is_production is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Email Engine"
        label-for="email-engine-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-radio-group
          :options="engineOptions"
          v-model.trim="form.smtp.type"
        ></b-form-radio-group>
      </b-form-group>

      <b-form-group
        label="Host"
        label-for="host-input"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          placeholder="Host"
          v-model.trim="$v.form.smtp.host.$model"
          :class="{
            'is-invalid': submitted || $v.form.smtp.host.$error,
          }"
          :state="validateState('host')"
        >
        </b-input>
        <b-form-invalid-feedback
          v-if="submitted || !$v.form.smtp.host.required"
        >
          host is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Port"
        label-for="port-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          v-model.trim="$v.form.smtp.port.$model"
          :class="{
            'is-invalid': submitted || $v.form.smtp.port.$error,
          }"
          :state="validateState('port')"
          placeholder="port"
        >
        </b-input>
        <b-form-invalid-feedback
          v-if="submitted || !$v.form.smtp.port.required"
        >
          port is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.smtp.port.numeric">
          only numeric is allowed
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Encryption"
        label-for="encryption-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input v-model="form.smtp.encryption" placeholder="Encryption">
        </b-input>
      </b-form-group>

      <b-form-group
        label="Username"
        label-for="username-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          placeholder="username"
          v-model.trim="$v.form.smtp.username.$model"
          :class="{
            'is-invalid': submitted || $v.form.smtp.username.$error,
          }"
          :state="validateState('username')"
        >
        </b-input>
        <b-form-invalid-feedback
          v-if="submitted || !$v.form.smtp.username.required"
        >
          username is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Password"
        label-for="password-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          v-model.trim="$v.form.smtp.password.$model"
          :class="{
            'is-invalid': submitted || $v.form.smtp.password.$error,
          }"
          :state="validateState('password')"
          placeholder="password"
        >
        </b-input>

        <b-form-invalid-feedback
          v-if="submitted || !$v.form.smtp.password.required"
        >
          username is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Name"
        label-for="name-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input
          v-model.trim="$v.form.smtp.name.$model"
          :class="{
            'is-invalid': submitted || $v.form.smtp.name.$error,
          }"
          :state="validateState('name')"
          placeholder="Name"
        >
        </b-input>
        <b-form-invalid-feedback
          v-if="submitted || !$v.form.smtp.name.required"
        >
          name is required
        </b-form-invalid-feedback>

        <b-form-invalid-feedback v-if="!$v.form.smtp.name.alpha">
          only alphabet characters is allowed.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Email"
        label-for="email-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-input v-model="form.smtp.email" placeholder="Email Address">
        </b-input>
      </b-form-group>

      <b-form-group class="col-md-6 offset-md-4">
        <b-button type="submit" class="btn btn-success btn-lg text-center"
          ><b-spinner small v-if="submitted" label="Loading..."></b-spinner
          >Submit</b-button
        >
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { settingService } from "../../services";
import { validationMixin } from "vuelidate";
import { required, alpha, numeric, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "smtp",
  data() {
    return {
      statusOptions: [
        { text: "Activated", value: true },
        { text: "Deactivated", value: false },
      ],
      engineOptions: [
        { text: "SMTP", value: "SMTP" },
        // { text: "SENDMAIL", value: "SENDMAIL" },
      ],
      form: {
        type: "smtp",
        smtp: {
          id: "",
          is_production: "",
          type: "",
          username: "",
          host: "",
          port: "",
          encryption: "",
          password: "",
          name: "",
          email: "",
        },
      },
      submitted: false,
    };
  },
  validations: {
    form: {
      smtp: {
        is_production: { required },
        name: { required, alpha },
        password: { required },
        email: { required, email },
        username: { required },
        host: { required },
        port: { required, numeric },
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form.smtp[name];
      return $dirty ? !$error : null;
    },
    async getSetting() {
      try {
        const response = await settingService.find("smtp");
        if (response.status) {
          this.form.smtp = response.data;
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
    async updateSMTP() {
      try {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitted = false;
          return;
        }

        const response = await settingService.update(
          this.form.smtp.id,
          this.form
        );
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
