<template>
  <div>
    <b-form @submit.prevent="updatePayment">
      <input type="hidden" v-model="form.refunds.id" />
      <b-form-group
        label="Type"
        label-for="type-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-radio-group
          :options="typeOptions"
          v-model.trim="$v.form.refunds.type.$model"
          :class="{
            'is-invalid': submitted || $v.form.refunds.type.$error,
          }"
          :state="validateState('type')"
        ></b-form-radio-group>
        <b-form-invalid-feedback
          v-if="submitted || !$v.form.refunds.type.required"
        >
          type is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Amount"
        label-for="amount-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <b-form-input
          id="lastname-input"
          v-model.trim="$v.form.refunds.amount.$model"
          type="text"
          placeholder="Enter amount"
          :class="{
            'is-invalid': submitted || $v.form.refunds.amount.$error,
          }"
          :state="validateState('amount')"
        ></b-form-input>
        <b-form-invalid-feedback
          v-if="submitted || !$v.form.refunds.amount.required"
        >
          amount is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.refunds.amount.numeric">
          only numeric values are allowed
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Message "
        label-for="contents-input"
        class="mt-3"
        label-cols-sm="4"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="7"
      >
        <vue-editor
          class="mt-3"
          :editor-toolbar="customToolbar"
          v-model="form.refunds.contents"
        ></vue-editor>
      </b-form-group>

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
import { VueEditor } from "vue2-editor";
import { settingService } from "../../services";
import { validationMixin } from "vuelidate";
import { required, numeric } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "refund",
  data() {
    return {
      typeOptions: [
        { text: "Percentage", value: "percentage" },
        { text: "Fixed", value: "number" },
      ],
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["code-block"],
      ],
      submitted: false,
      form: {
        type: "refunds",
        refunds: {
          id: "",
          amount: "",
          type: "",
          contents: "",
        },
      },
    };
  },
  validations: {
    form: {
      refunds: {
        type: { required },
        amount: { required, numeric },
      },
    },
  },
  components: {
    VueEditor,
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form.refunds[name];
      return $dirty ? !$error : null;
    },
    async getSetting() {
      try {
        const response = await settingService.find("refunds");
        if (response.status) {
          this.form.refunds = response.data;
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
    async updatePayment() {
      try {
        this.submitted = true;

        // stop here if form is invalid
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitted = false;
          return;
        }

        const response = await settingService.update(
          this.form.refunds.id,
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
