<script>
import Breadcrumb from "../../../components/breadcrumb";
import { paymentGatewayService } from "../../../services";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      title: "Payment Gateway",
      breadcrumbs: {
        title: "Payment Gateway",
        b1: "Manage Payment Gateway",
        b2: "Payment Gateway",
        b3: "Index",
        link: false,
        name: "Payment Gateway",
      },
      state: {},
      payment: {
        id: "",
        key: "",
        secret: "",
      },
      options: [
        { value: "sandbox", text: "Sandox" },
        { value: "production", text: "Production" },
      ],
      statusOptions: [
        { value: true, text: "Enable" },
        { value: false, text: "Disable" },
      ],
      site: "",
      submitted: false,
      errorMessage: "",
    };
  },
  validations: {
    state: {
      is_enabled: {
        required,
      },
      mode: { required },
      key: { required },
      secret: { required },
    },
  },
  components: {
    Breadcrumb,
  },
  mounted() {
    this.fetchData("Razorpay");
  },
  methods: {
    fetchData(site) {
      this.site = site;
      paymentGatewayService.fetch(site).then((response) => {
        response.data.is_enabled =
          response.data.is_enabled === "1" ? true : false;
        this.state = response.data;
      });
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.state[name];
      return $dirty ? !$error : null;
    },
    async onSubmit() {
      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        this.submitted = true;

        const { status, message } = await paymentGatewayService.update(
          this.site,
          this.state
        );
        if (status) {
          this.submitted = false;
          this.$toast.open({
            message: message,
            type: "success",
            position: "top-right",
            duration: 2000,
            // all of other options may go here
          });
        } else {
          this.submitted = false;
          this.state.is_enabled = false;
          this.$toast.open({
            message: message,
            type: "warning",
            position: "top",
            duration: 5000,
          });
        }
      } catch (err) {
        this.submitted = false;
        this.$toast.open({
          message: err.message,
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }
    },
  },
};
</script>

<template>
  <section class="tables">
    <div class="row">
      <Breadcrumb :breadcrumbs="breadcrumbs" />
      <div class="col-lg-12 grid-margin stretch-card">
        <b-card no-body>
          <b-tabs pills card vertical active-nav-item-class="font-weight-bold">
            <b-tab title="Razorpay" active @click="fetchData('Razorpay')"
              ><b-card-text>
                <b-form-group
                  label="Is Enabled"
                  label-for="is-enabled-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-checkbox
                    v-model.trim="$v.state.is_enabled.$model"
                    :class="{
                      'is-invalid': submitted && $v.state.is_enabled.$error,
                    }"
                    :state="validateState('is_enabled')"
                    switch
                  >
                    {{ state.is_enabled ? "Active" : "Inactive" }}
                  </b-form-checkbox>

                  <b-form-invalid-feedback
                    v-if="submitted || !$v.state.is_enabled.required"
                  >
                    is_enabled is required
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                  label="Mode"
                  label-for="is-enabled-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-radio-group
                    v-model.trim="$v.state.mode.$model"
                    :class="{
                      'is-invalid': submitted && $v.state.mode.$error,
                    }"
                    :state="validateState('mode')"
                    :options="options"
                    class="mb-3"
                    value-field="value"
                    text-field="text"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-form-group>

                <b-form-group
                  label="Key"
                  label-for="key-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-input
                    v-model.trim="$v.state.key.$model"
                    placeholder="Key"
                    :class="{
                      'is-invalid': submitted && $v.state.key.$error,
                    }"
                    :state="validateState('key')"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group
                  label="Secret"
                  label-for="secret-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-input
                    v-model.trim="$v.state.secret.$model"
                    placeholder="Key"
                    :class="{
                      'is-invalid': submitted && $v.state.secret.$error,
                    }"
                    :state="validateState('secret')"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group
                  label="Currency Code"
                  label-for="currency-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-input v-model="state.currency"> </b-form-input>
                </b-form-group>

                <b-form-group class="col-md-6 offset-md-4">
                  <b-button
                    @click.prevent="onSubmit"
                    type="button"
                    class="btn btn-success btn-lg text-center"
                  >
                    <b-spinner
                      small
                      v-if="submitted"
                      label="Loading..."
                    ></b-spinner>
                    Submit</b-button
                  >
                </b-form-group>
              </b-card-text></b-tab
            >
            <b-tab title="Paystack" @click="fetchData('Paystack')"
              ><b-card-text>
                <b-form-group
                  label="Is Enabled"
                  label-for="is-enabled-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-checkbox
                    v-model.trim="$v.state.is_enabled.$model"
                    :class="{
                      'is-invalid': submitted && $v.state.is_enabled.$error,
                    }"
                    :state="validateState('is_enabled')"
                    switch
                  >
                    {{ state.is_enabled ? "Active" : "Inactive" }}
                  </b-form-checkbox>
                </b-form-group>
                <b-form-group
                  label="Mode"
                  label-for="is-enabled-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-radio-group
                    v-model.trim="$v.state.mode.$model"
                    :class="{
                      'is-invalid': submitted && $v.state.mode.$error,
                    }"
                    :state="validateState('mode')"
                    :options="options"
                    class="mb-3"
                    value-field="value"
                    text-field="text"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-form-group>

                <b-form-group
                  label="Key"
                  label-for="key-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-input
                    v-model.trim="$v.state.key.$model"
                    placeholder="Key"
                    :class="{
                      'is-invalid': submitted && $v.state.key.$error,
                    }"
                    :state="validateState('key')"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group
                  label="Secret"
                  label-for="secret-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-input
                    v-model.trim="$v.state.secret.$model"
                    placeholder="Key"
                    :class="{
                      'is-invalid': submitted && $v.state.secret.$error,
                    }"
                    :state="validateState('secret')"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group
                  label="Currency Code"
                  label-for="currency-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-input v-model="state.currency"> </b-form-input>
                </b-form-group>

                <b-form-group class="col-md-6 offset-md-4">
                  <b-button
                    @click.prevent="onSubmit"
                    type="button"
                    class="btn btn-success btn-lg text-center"
                  >
                    <b-spinner
                      small
                      v-if="submitted"
                      label="Loading..."
                    ></b-spinner>
                    Submit</b-button
                  >
                </b-form-group>
              </b-card-text></b-tab
            >
            <b-tab title="Paymob" @click="fetchData('Paymob')"
              ><b-card-text>
                <b-form-group
                  label="Is Enabled"
                  label-for="is-enabled-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-checkbox
                    v-model.trim="$v.state.is_enabled.$model"
                    :class="{
                      'is-invalid': submitted && $v.state.is_enabled.$error,
                    }"
                    :state="validateState('is_enabled')"
                    switch
                  >
                    {{ state.is_enabled ? "Active" : "Inactive" }}
                  </b-form-checkbox>
                </b-form-group>
                <b-form-group
                  label="Mode"
                  label-for="is-enabled-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-radio-group
                    v-model.trim="$v.state.mode.$model"
                    :class="{
                      'is-invalid': submitted && $v.state.mode.$error,
                    }"
                    :state="validateState('mode')"
                    :options="options"
                    class="mb-3"
                    value-field="value"
                    text-field="text"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-form-group>

                <b-form-group
                  label="Username"
                  label-for="username-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-input
                    v-model.trim="state.username"
                    placeholder="Username"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group
                  label="Password"
                  label-for="password-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-input
                    v-model.trim="state.password"
                    placeholder="Password"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group
                  label="Key"
                  label-for="key-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-input
                    v-model.trim="$v.state.key.$model"
                    placeholder="Key"
                    :class="{
                      'is-invalid': submitted && $v.state.key.$error,
                    }"
                    :state="validateState('key')"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group
                  label="Secret"
                  label-for="secret-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-input
                    v-model.trim="$v.state.secret.$model"
                    placeholder="Key"
                    :class="{
                      'is-invalid': submitted && $v.state.secret.$error,
                    }"
                    :state="validateState('secret')"
                  >
                  </b-form-input>
                </b-form-group>

                <!-- <b-form-group
                    label="Currency Code"
                    label-for="currency-input"
                    class="mt-3"
                    label-cols-sm="4"
                    label-cols-lg="4"
                    content-cols-sm
                    content-cols-lg="8"
                  >
                    <b-form-input v-model="state.currency"> </b-form-input>
                  </b-form-group> -->

                <b-form-group
                  label="Integration ID"
                  label-for="integration-id-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-input
                    v-model.trim="state.integration_id"
                    placeholder="Integration Id"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group
                  label="Frame ID"
                  label-for="frame-id-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="4"
                  content-cols-sm
                  content-cols-lg="8"
                >
                  <b-form-input
                    v-model.trim="state.frame_id"
                    placeholder="Frame Id"
                  >
                  </b-form-input>
                </b-form-group>

                <b-form-group class="col-md-6 offset-md-4">
                  <b-button
                    @click.prevent="onSubmit"
                    type="button"
                    class="btn btn-success btn-lg text-center"
                  >
                    <b-spinner
                      small
                      v-if="submitted"
                      label="Loading..."
                    ></b-spinner>
                    Submit</b-button
                  ></b-form-group
                >
              </b-card-text></b-tab
            >
          </b-tabs>
        </b-card>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
