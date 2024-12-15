<script>
import Breadcrumb from "../../../components/breadcrumb";
import { paymentSettingService } from "../../../services";
import { validationMixin } from "vuelidate";
//import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      title: "Payment Settings",
      breadcrumbs: {
        title: "Payment Settings",
        b1: "Manage Payment Settings",
        b2: "Payment Settings",
        b3: "Index",
        link: false,
        name: "Payment Settings",
      },
      paymentMethods: [],
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
    };
  },
  validations: {
    // payment: {
    //   key: { required },
    //   secret: { required },
    // },
  },
  components: {
    Breadcrumb,
  },
  mounted() {
    this.fetchData("Razorpay");
  },
  methods: {
    fetchData() {
      paymentSettingService.fetch().then((response) => {
        this.paymentMethods = response.data;
      });
    },
    // validateState(name) {
    //   const { $dirty, $error } = this.$v.payment[name];
    //   return $dirty ? !$error : null;
    // },
    async onSubmit(payment) {
      try {
        const response = await paymentSettingService.update(
          payment.name,
          payment
        );
        if (response.status) {
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 2000,
            // all of other options may go here
          });
        }
      } catch (err) {
        this.$toast.open({
          message: err,
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
      <b-container class="mb-3">
        <b-row>
          <b-col
            class="py-2"
            cols="6"
            v-for="payment in paymentMethods"
            :key="payment"
          >
            <b-card :title="payment.name">
              <b-card-text>
                <b-form-group id="input-group-4">
                  <b-form-select
                    v-model="payment.status"
                    :options="statusOptions"
                  ></b-form-select
                ></b-form-group>

                <b-form-group id="input-group-1">
                  <b-form-select
                    v-model="payment.mode"
                    :options="options"
                  ></b-form-select>
                </b-form-group>

                <b-form-group
                  v-if="`${payment.name} === 'Paymob'`"
                  id="input-username-1"
                  label="Username"
                  label-for="input-username-1"
                  description="insert username"
                >
                  <b-form-input
                    id="input-username-1"
                    v-model="payment.username"
                    type="text"
                    placeholder="Enter Username"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  v-if="`${payment.name} === 'Paymob'`"
                  id="input-password-1"
                  label="Password"
                  label-for="input-password-1"
                  description="insert password"
                >
                  <b-form-input
                    id="input-password-1"
                    v-model="payment.password"
                    type="text"
                    placeholder="Enter Password"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-1"
                  :label="`${payment.name} Key`"
                  label-for="input-1"
                  :description="`Insert ${payment.name} Key`"
                >
                  <b-form-input
                    id="input-1"
                    v-model="payment.key"
                    type="text"
                    placeholder="Enter key"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-1"
                  :label="`${payment.name} Secret`"
                  label-for="input-1"
                  :content-cols-sm="`Insert ${payment.name} Secret`"
                >
                  <b-form-input
                    id="input-1"
                    v-model="payment.secret"
                    type="text"
                    placeholder="Enter secret"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  if="!payment.name == 'Razorpay'"
                  id="input-group-1"
                  :label="`${payment.name} Callback URL`"
                  label-for="input-1"
                  :content-cols-sm="`Insert ${payment.name} callback url`"
                >
                  <b-form-input
                    id="input-1"
                    v-model="payment.callback_url"
                    type="text"
                    placeholder="Enter callback url"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  if="!payment.name == 'Razorpay'"
                  id="input-group-1"
                  :label="`${payment.name} Webhook URL`"
                  label-for="input-1"
                  :content-cols-sm="`Insert ${payment.name} Webhook URL`"
                >
                  <b-form-input
                    id="input-1"
                    v-model="payment.webhook_url"
                    type="text"
                    placeholder="Enter webhook url"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group class="col-md-3 offset-md-9">
                  <b-button
                    type="submit"
                    class="btn btn-md btn-success text-center"
                    @click="onSubmit(payment)"
                    >Save</b-button
                  >
                </b-form-group>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
