<template>
  <div>
    <section class="tables">
      <div class="row">
        <Breadcrumb :breadcrumbs="breadcrumbs" />
        <div class="col-lg-8 offset-lg-2 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <b-form @submit.prevent="createUser">

                <b-form-group
                  label="Company Name"
                  label-for="company-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-input
                    id="company-input"
                    v-model.trim="$v.form.company.$model"
                    type="text"
                    placeholder="Enter company name"
                    :class="{
                      'is-invalid': submitted || $v.form.company.$error,
                    }"
                    :state="validateState('company')"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.company.required"
                    class="invalid-feedback"
                  >
                    company name is required
                  </b-form-invalid-feedback>

                  <b-form-invalid-feedback
                    v-if="!$v.form.company.alpha"
                    id="input-1-live-feedback"
                    >Only alphabetic characters are
                    allowed</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-form-group
                  label="Customer Code"
                  label-for="customer-code-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-input
                    id="customer-code-input"
                    v-model.trim="$v.form.customer_code.$model"
                    type="text"
                    placeholder="Enter customer code"
                    :class="{
                      'is-invalid': submitted || $v.form.customer_code.$error,
                    }"
                    :state="validateState('customer_code')"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.customer_code.required"
                    class="invalid-feedback"
                  >
                    customer code name is required
                  </b-form-invalid-feedback>

                  <b-form-invalid-feedback
                    v-if="!$v.form.customer_code.alpha"
                    id="input-1-live-feedback"
                    >Only alphabetic characters are
                    allowed</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-form-group
                  label="First Name"
                  label-for="firstname-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-input
                    id="firstname-input"
                    v-model.trim="$v.form.firstname.$model"
                    type="text"
                    placeholder="Enter first name"
                    :class="{
                      'is-invalid': submitted || $v.form.firstname.$error,
                    }"
                    :state="validateState('firstname')"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.firstname.required"
                    class="invalid-feedback"
                  >
                    first name is required
                  </b-form-invalid-feedback>

                  <b-form-invalid-feedback
                    v-if="!$v.form.firstname.alpha"
                    id="input-1-live-feedback"
                    >Only alphabetic characters are
                    allowed</b-form-invalid-feedback
                  >
                </b-form-group>
                <b-form-group
                  label="Last Name"
                  label-for="lastname-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-input
                    id="lastname-input"
                    v-model.trim="$v.form.lastname.$model"
                    type="text"
                    placeholder="Enter last name"
                    :class="{
                      'is-invalid': submitted || $v.form.lastname.$error,
                    }"
                    :state="validateState('lastname')"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.lastname.required"
                    class="invalid-feedback"
                  >
                    last name is required
                  </b-form-invalid-feedback>
                  <b-form-invalid-feedback
                    v-if="!$v.form.lastname.alpha"
                    id="input-1-live-feedback"
                    >Only alphabetic characters are
                    allowed</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-form-group
                  label="Gender"
                  label-for="gender-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-radio-group
                    :options="gender_options"
                    v-model.trim="$v.form.gender.$model"
                    :class="{
                      'is-invalid': submitted || $v.form.gender.$error,
                    }"
                    :state="validateState('gender')"
                    name="gender"
                  ></b-form-radio-group>

                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.gender.required"
                    >Please select Gender</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-form-group
                  label="Email Address"
                  label-for="email-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-input
                    id="email-input"
                    v-model.trim="$v.form.email.$model"
                    type="email"
                    placeholder="Enter email address"
                    :class="{
                      'is-invalid': submitted && $v.form.email.$error,
                    }"
                    :state="validateState('email')"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.email.required"
                    class="invalid-feedback"
                  >
                    email address is required
                  </b-form-invalid-feedback>
                </b-form-group>

                
                <b-form-group
                  label="Country code"
                  label-for="country-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-select
                    v-model.trim="$v.form.country_code.$model"
                    :options="countries"
                    :class="{
                      'is-invalid': submitted && $v.form.country_code.$error,
                    }"
                    :state="validateState('country_code')"
                  >
                    <template #first>
                      <b-form-select-option
                        class="text-sm"
                        :value="null"
                        disabled
                        >-- Please select an country code
                        --</b-form-select-option
                      >
                    </template>
                  </b-form-select>
                </b-form-group>
                <b-form-group
                  label="Mobile Number"
                  label-for="phone-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-input
                    id="phone-input"
                    v-model.trim="$v.form.phone.$model"
                    placeholder="Enter phone number"
                    :class="{
                      'is-invalid': submitted || $v.form.phone.$error,
                    }"
                    :state="validateState('phone')"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.phone.required"
                    class="invalid-feedback"
                  >
                    mobile number is required
                  </b-form-invalid-feedback>
                  <b-form-invalid-feedback v-if="!$v.form.phone.minLength">
                    mobile number must have at least
                    {{ $v.form.phone.$params.minLength.min }} letters.
                  </b-form-invalid-feedback>

                  <b-form-invalid-feedback v-if="!$v.form.phone.maxLength">
                    mobile number must have at least
                    {{ $v.form.phone.$params.maxLength.max }} letters.
                  </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                  label="Refer Code"
                  label-for="refercode-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-input
                    id="refercode-input"
                    v-model.trim="$v.form.refercode.$model"
                    type="text"
                
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Status "
                  label-for="status-input"
                  class="mt-3"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-radio-group
                    :options="options"
                    v-model.trim="$v.form.is_active.$model"
                    :class="{
                      'is-invalid': submitted || $v.form.is_active.$error,
                    }"
                    :state="validateState('is_active')"
                    name="status"
                  ></b-form-radio-group>

                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.is_active.required"
                    >Please select status</b-form-invalid-feedback
                  >
                </b-form-group>

                <b-form-group class="col-md-6 offset-md-4">
                  <b-button
                    type="submit"
                    class="btn btn-lg btn-success text-center"
                    >Submit</b-button
                  >
                </b-form-group>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumb from "../../components/breadcrumb";
import { validationMixin } from "vuelidate";
import {
  required,
  numeric,
  email,
  minLength,
  maxLength,
  alpha
} from "vuelidate/lib/validators";
import { customerService, countryService } from "../../services";

export default {
  name: "customercreate",
  mixins: [validationMixin],
  data() {
    return {
      breadcrumbs: {
        title: "Create Customer",
        b1: "Manage Customers",
        b2: "Customers",
        b3: "Index",
        link: true,
        name: "customers",
      },
      form: {
        company: "",
        customer_code: "",
        firstname: "",
        lastname: "",
        email: "",
        country_code: "",
        phone: "",
        gender: "",
        refercode: "",
        is_active: "",
        
      },
      submitted: false,
      options: [
        { text: "Active", value: "true" },
        { text: "Inactive", value: "false", default: true },
      ],
      countries: [],
      gender_options: [
        { text: "Male", value: "Male", default: 'Male' },
        { text: "Female", value: "Female"},
      ],
      isLoading: false,
    };
  },
  components: {
    Breadcrumb,
  },
  validations: {
    form: {
      company: { required },
      customer_code: { required },
      email: { required, email },
      firstname: { required, alpha },
      lastname: { required, alpha },
      phone: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      is_active: { required },
      country_code: { required },
      gender: { required },
      refercode: {},
    },
  },
  mounted() {
    this.loadCountries();
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    async loadCountries() {
      const response = await countryService.load({
        search: "",
      });
      this.countries = response.items;
    },
    async createUser() {
      try {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitted = false;
          return;
        }
        const response = await customerService.create(this.form);
        if (response.status) {
          this.submitted = false;
          this.$toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 3000,
          });
          setTimeout(
            () =>
              this.$router.push({
                path: `/customers`,
              }),
            3000
          );
        }
      } catch (e) {
        console.log("e", e);
        this.$toast.open({
          message: e,
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
