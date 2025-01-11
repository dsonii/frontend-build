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
                label="Pickup Location"
                label-for="title-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <multiselect
                  v-model.trim="form.pickup_location[0].location"
                  :options="locationOptions"
                  placeholder="Pickup Location"
                  label="title"
                  track-by="title"
                  :searchable="true"
                  :loading="submitted"
                  @search-change="fetchLocations"
                >
                  <template slot="option" slot-scope="props">
                    {{ props.option.title }}
                  </template>
                  <template slot="noOptions">
                    No stop found.</template
                  >
                  <template slot="noResult">
                    stop searched not matched.</template
                  >
                </multiselect>
              </b-form-group>

              <b-form-group
                label="Drop Location"
                label-for="title-input"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
              >
                <multiselect
                  v-model.trim="form.drop_location[0].location"
                  :options="locationOptions"
                  placeholder="Drop Location"
                  label="title"
                  track-by="title"
                  :searchable="true"
                  :loading="submitted"
                  @search-change="fetchLocations"
                  @select="onDropLocationSelect"
                >
                  <template slot="option" slot-scope="props">
                    {{ props.option.title }}
                  </template>
                  <template slot="noOptions">
                    No stop found.</template
                  >
                  <template slot="noResult">
                    stop searched not matched.</template
                  >
                </multiselect>
              </b-form-group>

                <b-form-group
                  label="Route"
                  label-for="route-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-select
                    v-model.trim="$v.form.route.$model"
                    :options="routeOption"
                    :class="{
                      'is-invalid': submitted && $v.form.route.$error,
                    }"
                    :state="validateState('route')"
                    @change="getBuses"
                  >
                    <template #first>
                      <b-form-select-option
                        class="text-sm"
                        :value="null"
                        disabled
                        >-- Please select an Route
                        --</b-form-select-option
                      >
                    </template>
                  </b-form-select>
                </b-form-group>


                <b-form-group
                  label="Vehicle"
                  label-for="bus-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-select
                    v-model.trim="$v.form.bus.$model"
                    :options="buses"
                    :class="{
                      'is-invalid': submitted && $v.form.bus.$error,
                    }"
                    :state="validateState('bus')"
                    @change="getAvaialbleSeats"
                  >
                    <template #first>
                      <b-form-select-option
                        class="text-sm"
                        :value="null"
                        disabled
                        >-- Please select an Vehicle
                        --</b-form-select-option
                      >
                    </template>
                  </b-form-select>
                </b-form-group>


                <b-form-group
                  label="Seat"
                  label-for="seat-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                >
                  <b-form-select
                    v-model.trim="$v.form.seat.$model"
                    :options="seats"
                    :class="{
                      'is-invalid': submitted && $v.form.seat.$error,
                    }"
                    :state="validateState('seat')"
                  >
                    <template #first>
                      <b-form-select-option
                        class="text-sm"
                        :value="null"
                        disabled
                        >-- Please select an Seat
                        --</b-form-select-option
                      >
                    </template>
                  </b-form-select>
                </b-form-group>
                
                <b-form-group
                  label="Is Return?"
                  label-for="return-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                ><b-form-checkbox
                id="checkbox-1"
                v-model="$v.form.has_return.$model"
                name="checkbox-1"
                value="1"
                unchecked-value="0"
              >
                
              </b-form-checkbox>
            </b-form-group>
                <b-form-group
                  label="Time"
                  label-for="time-input"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  content-cols-sm
                  content-cols-lg="7"
                ><b-form-input
                    id="time-input"
                    v-model.trim="$v.form.time_for_user.$model"
                    type="time"
                    placeholder="Enter time"
                    :class="{
                      'is-invalid': submitted || $v.form.time_for_user.$error,
                    }"
                    :state="validateState('time_for_user')"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    v-if="submitted || !$v.form.time_for_user.required"
                    class="invalid-feedback"
                  >
                    Time is required
                  </b-form-invalid-feedback>
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
import { customerService, countryService, locationService, routeService, buslayoutService } from "../../services";
import lodash from "lodash";
import Multiselect from "vue-multiselect";

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
      locationOptions: [],
      loading: false,
      form: {
        company: "",
        customer_code: "",
        firstname: "",
        lastname: "",
        email: "",
        country_code: null,
        phone: "",
        gender: "",
        time_for_user: "",
        is_active: "",
        busScheduleId: "",
        pickup_location: [
          {
            location: [{}],
          },
        ],
        drop_location: [
            {
              location: [{}],
            }
        ],
        route: null,
        bus: null,
        seat: null,
        has_return:"",
      },
      submitted: false,
      options: [
        { text: "Active", value: "true" },
        { text: "Inactive", value: "false", default: true },
      ],
      countries: [],
      routeOption: [],
      buses: [],
      seats: [],
      gender_options: [
        { text: "Male", value: "Male", default: 'Male' },
        { text: "Female", value: "Female"},
      ],
      isLoading: false,
    };
  },
  components: {
    Breadcrumb,
    Multiselect
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
      route: {},
      bus: {},
      seat: {},
      time_for_user: {},
      busScheduleId: {},
      has_return: {},
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
    fetchLocations(search, loading) {
      if (search.length) {
        let type = "PD";
        this.search(loading, search, type, this);
      }
    },
    search: lodash.debounce(async (loading, search, type, vm) => {
      try {
        const response = await locationService.search({
          type: type,
          search: search,
        });
        vm.locationOptions = response.items;
      } catch (err) {
        this.$toast.open({
          message: err,
          type: "error",
          position: "top-right",
          duration: 5000,
        });
      }
    }, 350),
    onDropLocationSelect () {
      routeService.searchRoute({
        pickup_lat:this.form.pickup_location[0].location.coordinates[1],
        pickup_long:this.form.pickup_location[0].location.coordinates[0],
        drop_lat:this.form.drop_location[0].location.coordinates[1],
        drop_long:this.form.drop_location[0].location.coordinates[0],
      }).then((response) => {
        this.routeOption = response.data;
      });
      
    },
    getBuses () {
      if (this.routeOption.length > 0) {
        for (let i = 0; i < this.routeOption.length; i++) {
          if (this.routeOption[i].value == this.form.route) {
            this.buses = [{"text":this.routeOption[i].bus_details.name, "value": this.routeOption[i].route_busId}]
          }
        }
      }
    },
    getAvaialbleSeats () {
      let busScheduleId = "";
      if (this.routeOption.length > 0) {
        for (let i = 0; i < this.routeOption.length; i++) {
          if (this.routeOption[i].value == this.form.route) {
            busScheduleId = this.routeOption[i].busScheduleId;
            this.form.busScheduleId = this.routeOption[i].busScheduleId;
          }
        }
      }

      buslayoutService.searchSeat(this.form.bus, busScheduleId).then((response) => {
        this.seats = response.data;
      });
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
