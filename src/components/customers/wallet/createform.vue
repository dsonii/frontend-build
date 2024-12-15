<template>
  <div>
    <b-form @submit.prevent="createRecharge">
      <b-form-group
        label="Customer Name/Phone/Email"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="5"
        content-cols-sm
        content-cols-lg="5"
      >
        <!-- <v-select
          @search="fetchCustomers"
          label="type"
          :filterable="false"
          :options="options"
          v-model="form.user"
        >
          <template slot="no-options">
            type to customers phone, name , email..
          </template>

          <template slot="option" slot-scope="option">
            <div class="d-center">
              {{ option.title }}
            </div>
          </template>
          <template slot="selected-option" slot-scope="option">
            <div class="selected d-center">
              {{ option.title }}
            </div>
          </template>
        </v-select> -->

        <multiselect
          v-model.trim="$v.form.user.$model"
          :options="options"
          :class="{
            'is-invalid': submitted || $v.form.user.$error,
          }"
          :state="validateState('user')"
          placeholder="start typing to customers phone, name , email..."
          label="title"
          track-by="title"
          :searchable="true"
          :loading="submitted"
          @search-change="fetchCustomers"
        >
          <template slot="option" slot-scope="props">
            <b-img
              width="40"
              height="40"
              variant="primary"
              :src="props.option.picture"
            ></b-img>
            {{ props.option.title }} : +{{ props.option.country_code
            }}{{ props.option.phone }}
          </template>
          <template slot="noOptions">
            No customers phone, name , email found.</template
          >
          <template slot="noResult">
            customers phone, name , email not matched.</template
          >
        </multiselect>
        <b-form-invalid-feedback>
          customers name is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Amount"
        label-for="name-input"
        label-cols-sm="4"
        label-cols-lg="5"
        content-cols-sm
        content-cols-lg="5"
      >
        <b-form-input
          id="name-input"
          v-model.trim="$v.form.amount.$model"
          type="number"
          placeholder="Enter name"
          :class="{
            'is-invalid': submitted || $v.form.amount.$error,
          }"
          :state="validateState('amount')"
        ></b-form-input>
        <div
          v-if="submitted || !$v.form.amount.required"
          class="invalid-feedback"
        >
          amount is required
        </div>
        <div
          v-if="submitted && !$v.form.amount.minValue"
          class="invalid-feedback"
        >
          minimum amount should be 10 or greater than 10
        </div>
      </b-form-group>

      <b-form-group class="col-md-6 offset-md-5">
        <b-button type="submit" class="btn btn-lg btn-success text-center">
          <span
            class="pl-2 spinner-border spinner-border-sm"
            v-show="submitted"
          >
          </span>
          Submit</b-button
        >
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { customerService, walletService } from "../../../services";
import Multiselect from "vue-multiselect";
import lodash from "lodash";
import { validationMixin } from "vuelidate";
import { required, numeric, minValue } from "vuelidate/lib/validators";
import { mapState } from "pinia";
import { fetchUsers } from "../../../store/fetchUsers.js";

export default {
  mixins: [validationMixin],
  name: "createform",
  data() {
    return {
      submitted: false,
      loading: false,
      options: [],
      form: {
        user: {},
        amount: "50",
      },
    };
  },
  validations: {
    form: {
      user: { required },
      amount: { required, numeric, minValue: minValue(10) },
    },
  },
  computed: {
    ...mapState(fetchUsers, ["getUser"]),
  },
  components: {
    Multiselect,
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    fetchCustomers(search, loading) {
      if (search.length) {
        this.search(loading, search, this);
      }
    },
    search: lodash.debounce(async (loading, search, vm) => {
      try {
        const response = await customerService.q({
          search: search,
        });
        vm.options = response.items;
      } catch (err) {
        console.log("err", err);
        // this.$toast.open({
        //   message: err,
        //   type: "error",
        //   position: "top-right",
        //   duration: 5000,
        // });
      }
    }, 350),
    async createRecharge() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitted = false;
        return;
      }
      this.form.adminId = this.getUser.id; // admin Id
      const reponse = await walletService.create(this.form);
      if (reponse && reponse.status) {
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
              path: `/customers`,
            }),
          3000
        );
      }
    },
  },
};
</script>

<style></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
