<template>
  <b-form :if="formtype" @submit.prevent="createDriver">
    <b-container fluid>
      <b-row>
        <b-col cols="12" md="6">
          <b-card title="Driver Information">
            <b-card-text>
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
                    'is-invalid': submitted || $v.form.email.$error,
                  }"
                  :state="validateState('email')"
                ></b-form-input>

                <b-form-invalid-feedback v-if="!$v.form.email.email"
                  >Please enter a valid email address</b-form-invalid-feedback
                >
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
                    <b-form-select-option class="text-sm" :value="null" disabled
                      >-- Please select an country code --</b-form-select-option
                    >
                  </template>
                </b-form-select>
                <b-form-invalid-feedback
                  v-if="submitted || !$v.form.country_code.required"
                  class="invalid-feedback"
                >
                  country code is required
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group
                label="Phone Number"
                label-for="phone-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <b-form-input
                  id="mobile-input"
                  v-model.trim="$v.form.phone.$model"
                  placeholder="Enter Mobile number"
                  :class="{
                    'is-invalid': submitted && $v.form.phone.$error,
                  }"
                  :state="validateState('phone')"
                ></b-form-input>

                <b-form-invalid-feedback
                  v-if="submitted || !$v.form.phone.required"
                >
                  Mobile number is required
                </b-form-invalid-feedback>
                <b-form-invalid-feedback v-if="!$v.form.phone.minLength">
                  Mobile number must hav at min
                  {{ $v.form.phone.$params.minLength.min }} letters.
                </b-form-invalid-feedback>
                <b-form-invalid-feedback v-if="!$v.form.phone.maxLength">
                  Mobile number must have at max
                  {{ $v.form.phone.$params.maxLength.max }} letters.
                </b-form-invalid-feedback>

                <b-form-invalid-feedback v-if="!$v.form.phone.uniquePhone">
                  This phone number is already registered.
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group
                label="Aadhaar No"
                label-for="national-id-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <b-form-input
                  id="national-id-input"
                  v-model.trim="$v.form.national_id.$model"
                  placeholder="Enter Aadhaar No"
                  :class="{
                    'is-invalid': submitted || $v.form.national_id.$error,
                  }"
                  :state="validateState('phone')"
                ></b-form-input>

                <b-form-invalid-feedback
                  v-if="submitted || !$v.form.national_id.required"
                >
                  Aadhaar No is required
                </b-form-invalid-feedback>

                <b-form-invalid-feedback
                  v-if="!$v.form.national_id.uniqueNationalId"
                >
                  This Aadhaar No is already registered.
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group
                label="Type "
                label-for="type-input"
                invalid-feedback="type is required"
                class="mt-3"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <b-form-radio-group
                  :options="option_types"
                  v-model.trim="$v.form.type.$model"
                  name="type"
                  :class="{
                    'is-invalid': submitted || $v.form.type.$error,
                  }"
                  @change="checkType"
                  :state="validateState('type')"
                ></b-form-radio-group>

                <b-form-invalid-feedback
                  v-if="submitted || !$v.form.type.required"
                  >Please select type</b-form-invalid-feedback
                >
              </b-form-group>

              <b-form-group
                label="Status "
                label-for="status-input"
                invalid-feedback="status is required"
                class="mt-3"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <b-form-radio-group
                  :options="options"
                  v-model.trim="$v.form.status.$model"
                  name="status"
                  :class="{
                    'is-invalid': submitted || $v.form.status.$error,
                  }"
                  :state="validateState('status')"
                ></b-form-radio-group>

                <b-form-invalid-feedback
                  v-if="submitted || !$v.form.status.required"
                  >Please select status</b-form-invalid-feedback
                >
              </b-form-group>

              <!-- Gender -->
              <b-form-group
                label="Gender"
                label-for="gender-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <b-form-radio-group
                  id="gender-input"
                  :options="[
                    { text: 'Male', value: 'male' },
                    { text: 'Female', value: 'female' },
                    { text: 'Not Disclose', value: 'not_disclose' },
                  ]"
                  v-model.trim="$v.form.gender.$model"
                  :class="{ 'is-invalid': submitted || $v.form.gender.$error }"
                  :state="validateState('gender')"
                ></b-form-radio-group>
                <b-form-invalid-feedback
                  v-if="submitted || !$v.form.gender.required"
                >
                  Gender is required
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- Date of Birth -->
              <b-form-group
                label="Date of Birth"
                label-for="dob-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <b-form-input
                  id="dob-input"
                  v-model="$v.form.dob.$model"
                  type="date"
                  :class="{ 'is-invalid': submitted || $v.form.dob.$error }"
                  :state="validateState('dob')"
                ></b-form-input>
                <b-form-invalid-feedback
                  v-if="submitted || !$v.form.dob.required"
                >
                  Date of birth is required
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- Temporary Address -->
              <b-form-group
                label="Temporary Address"
                label-for="temporary-address-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <b-form-textarea
                  id="temporary-address-input"
                  v-model.trim="$v.form.temporary_address.$model"
                  placeholder="Enter temporary address"
                  rows="2"
                  :class="{
                    'is-invalid': submitted || $v.form.temporary_address.$error,
                  }"
                  :state="validateState('temporary_address')"
                ></b-form-textarea>
                <b-form-invalid-feedback
                  v-if="submitted || !$v.form.temporary_address.required"
                >
                  Temporary address is required
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- Permanent Address -->
              <b-form-group
                label="Permanent Address"
                label-for="permanent-address-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <b-form-textarea
                  id="permanent-address-input"
                  v-model.trim="$v.form.permanent_address.$model"
                  placeholder="Enter permanent address"
                  rows="2"
                  :class="{
                    'is-invalid': submitted || $v.form.permanent_address.$error,
                  }"
                  :state="validateState('permanent_address')"
                ></b-form-textarea>
                <b-form-invalid-feedback
                  v-if="submitted || !$v.form.permanent_address.required"
                >
                  Permanent address is required
                </b-form-invalid-feedback>
              </b-form-group>

              <!-- Emergency Contact -->
              <b-form-group
                label="Emergency Contact"
                label-for="emergency-contact-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <b-form-input
                  id="emergency-contact-input"
                  v-model.trim="$v.form.emergency_number.$model"
                  placeholder="Enter emergency contact number"
                  type="text"
                  :class="{
                    'is-invalid': submitted || $v.form.emergency_number.$error,
                  }"
                  :state="validateState('emergency_number')"
                ></b-form-input>
                <b-form-invalid-feedback
                  v-if="submitted || !$v.form.emergency_number.required"
                >
                  Emergency contact is required
                </b-form-invalid-feedback>
              </b-form-group>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col cols="12" md="6">
          <b-card title="Documents">
            <b-card-text>
              <b-form-group
                label="Profile Picture"
                label-for="picture-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <div v-if="!form.picture">
                  <b-form-file
                    id="picture-input"
                    accept="image/jpeg, image/png, image/jpg"
                    placeholder="Choose File"
                    @change="onFileChange($event, 'picture')"
                  ></b-form-file>
                </div>
                <div v-else>
                  <img
                    class="img-fluid"
                    :src="form.picture"
                    width="150"
                    height="150"
                  />
                  <button
                    class="btn social-btn btn-rounded btn-danger mr-4"
                    @click="removeImage('picture')"
                  >
                    <i class="mdi mdi-close"></i>
                  </button>
                </div>
              </b-form-group>
              <b-form-group
                label="Licence"
                label-for="licence-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
                v-if="show"
              >
                <div v-if="!form.document_licence">
                  <b-form-file
                    id="licence-input"
                    accept="image/jpeg, image/png, image/jpg"
                    placeholder="Choose File"
                    @change="onFileChange($event, 'document_licence')"
                  ></b-form-file>
                </div>
                <div v-else>
                  <img
                    class="img-fluid"
                    :src="form.document_licence"
                    width="250"
                    height="250"
                  />
                  <button
                    class="btn social-btn btn-rounded btn-danger mr-4"
                    @click="removeImage('document_licence')"
                  >
                    <i class="mdi mdi-close"></i>
                  </button>
                </div>
              </b-form-group>
              <b-form-group
                label="Licence Expiry Date"
                label-for="licence-expiry-date-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
                v-if="show"
              >
                <div>
                  <b-form-input
                    id="licence-expiry-date-input"
                    v-model.trim="$v.form.licence_expiry_date.$model"
                    type="date"
                    placeholder="Select Date"
                  ></b-form-input>
                </div>
              </b-form-group>

              <b-form-group
                label="Aadhaar No"
                label-for="adhar-card-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
                o
              >
                <div v-if="!form.document_national_icard">
                  <b-form-file
                    id="national-icard-input"
                    accept="image/jpeg, image/png, image/gif"
                    placeholder="Choose File"
                    @change="onFileChange($event, 'document_national_icard')"
                  ></b-form-file>
                </div>
                <div v-else>
                  <img
                    class="img-fluid"
                    :src="form.document_national_icard"
                    width="250"
                    height="250"
                  />
                  <button
                    class="btn social-btn btn-rounded btn-danger mr-4"
                    @click="removeImage('document_national_icard')"
                  >
                    <i class="mdi mdi-close"></i>
                  </button>
                </div>
              </b-form-group>
              <b-form-group
                label="Police Verification"
                label-for="police-verification-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <div v-if="!form.document_police_vertification">
                  <b-form-file
                    id="police-vertification-input"
                    accept="image/jpeg, image/png, image/gif"
                    placeholder="Choose File"
                    @change="
                      onFileChange($event, 'document_police_vertification')
                    "
                  ></b-form-file>
                </div>
                <div v-else>
                  <img
                    class="img-fluid"
                    :src="form.document_police_vertification"
                    width="250"
                    height="250"
                  />
                  <button
                    class="btn social-btn btn-rounded btn-danger mr-4"
                    @click="removeImage('document_police_vertification')"
                  >
                    <i class="mdi mdi-close"></i>
                  </button>
                </div>
              </b-form-group>
              <b-form-group
                label="Police Verification Expiry Date"
                label-for="police-varification-expiry-date-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <div>
                  <b-form-input
                    id="police-varification-expiry-date-input"
                    v-model.trim="
                      $v.form.police_vertification_expiry_date.$model
                    "
                    type="date"
                    placeholder="Select Date"
                  ></b-form-input>
                </div>
              </b-form-group>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" md="12">
          <br />
          <b-form-group class="col-md-6 offset-md-4">
            <b-button
              type="submit"
              :disabled="submitted"
              class="btn btn-lg btn-success text-center mr-3"
            >
              <span
                class="pl-2 spinner-border spinner-border-sm"
                v-show="submitted"
              >
              </span>
              Submit</b-button
            >

            <b-button
              :to="{ name: 'driver' }"
              class="btn btn-lg btn-default text-center"
            >
              <b-icon-arrow-up></b-icon-arrow-up>
              Back</b-button
            >
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
  </b-form>
</template>

<script>
import { driverService } from "../../services";
import { validationMixin } from "vuelidate";
import {
  required,
  numeric,
  alpha,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import { mapState } from "pinia";
import { fetchUsers } from "../../store/fetchUsers.js";

export default {
  mixins: [validationMixin],
  name: "customform",
  props: {
    formtype: { type: Boolean },
    handleDriver: { type: Function },
  },
  data() {
    return {
      isEditing: false,
      options: [
        { text: "Active", value: "true" },
        { text: "Inactive", value: "false", default: true },
      ],
      option_types: [
        { text: "Driver", value: "driver" },
        // { text: "Assistant", value: "assistant", default: "assistant" },
      ],
      form: {
        adminId: "",
        firstname: "",
        lastname: "",
        email: "",
        country_code: "91",
        phone: "",
        national_id: "",
        picture: "",
        document_licence: "",
        licence_expiry_date: "",
        document_national_icard: "",
        document_police_vertification: "",
        police_vertification_expiry_date: "",
        status: "",
        type: "",
        gender: "",
        dob: "",
        temporary_address: "",
        permanent_address: "",
        emergency_number: "",
      },
      submitted: false,
      loading: false,
      show: true,
      countries: [],
    };
  },
  validations: {
    form: {
      email: { email },
      firstname: {
        required,
        alpha,
      },
      lastname: {
        required,
        alpha,
      },
      status: { required },
      type: { required },
      country_code: { required },
      national_id: {
        required,
        numeric,
        async uniqueNationalId(value) {
          if (value === "") return true;

          const { status } = await driverService.isExists({
            name: value,
            id: "",
          });
          return status;
        },
      },
      gender: { required },
      dob: { required },
      temporary_address: { required },
      permanent_address: { required },
      emergency_number: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(15),
      },
      phone: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
        async uniquePhone(value) {
          if (value === "") return true;

          const { status } = await driverService.isExists({
            name: value,
            id: "",
          });
          return status;
        },
      },
      licence_expiry_date: {},
      police_vertification_expiry_date: {},
      //   picture: { required },
      //   document_licence: { required },
      //   document_adhar_card: { required },
      //   document_police_vertification: { required },
    },
  },
  computed: {
    ...mapState(fetchUsers, ["getUser"]),
  },
  mounted() {
    this.loadCountries();
  },
  methods: {
    async loadCountries() {
      // const response = await countryService.load({
      //   search: "",
      // });
      this.countries = [{ text: "India (+91)", value: "91", default: true }];
    },
    checkType(val) {
      if (val === "assistant") {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onFileChange(e, fileTitle) {
      var files = e.target.files || e.dataTransfer.files;
      console.log(files);
      if (!files.length) return;
      this.createImage(files[0], fileTitle);
    },
    createImage(file, fileTitle) {
      // var picture = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.form[fileTitle] = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (titlename) {
      this.form[titlename] = "";
    },
    async createDriver() {
      try {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitted = false;
          window.scrollTo({
            top: 10,
            left: 0,
            behavior: "smooth",
          });
          return;
        }

        this.form.adminId = this.getUser.id; // admin Id
        const reponse = await driverService.create(this.form);
        // console.log("reponse", reponse);
        if (reponse.status) {
          this.submitted = false;
          this.$toast.open({
            message: reponse.message,
            type: "success",
            position: "top-right",
            duration: 3000,
            // all of other options may go here
          });
          setTimeout(
            () =>
              this.$router.push({
                path: `/drivers`,
              }),
            3000
          );
          this.submitted = false;
        } else {
          this.$toast.open({
            message: reponse.message,
            type: "error",
            position: "top-right",
            duration: 3000,
            // all of other options may go here
          });
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
  },
};
</script>

<style lang="scss" scoped></style>
