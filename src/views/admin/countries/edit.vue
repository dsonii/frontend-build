<template>
  <div>
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
        label="Name"
        label-for="name-input"
        invalid-feedback="Name is required"
      >
        <b-form-input
          id="name-input"
          v-model="name"
          :state="validateState('name')"
          placeholder="enter a name"
          :class="{
            'is-invalid': submitted && v$.name.$error,
          }"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Short Name"
        label-for="short-name-input"
        invalid-feedback="Short name is required"
      >
        <b-form-input
          id="short-name-input"
          v-model="short_name"
          :state="validateState('short_name')"
          placeholder="enter a short name. example INR or USD"
          :class="{
            'is-invalid': submitted && v$.short_name.$error,
          }"
          :formatter="formatter"
        ></b-form-input>
        <small
          v-if="submitted && v$.short_name.maxLength"
          class="invalid-feedback"
        >
          maximum 4 character is allowed
        </small>
      </b-form-group>

      <b-form-group
        label="Phone Code"
        label-for="phone-code-input"
        invalid-feedback="Phone code is required"
      >
        <b-form-input
          id="phone-code-input"
          v-model="phone_code"
          :state="validateState('phone_code')"
          placeholder="enter a phone code. example INR or USD"
          :class="{
            'is-invalid': submitted && v$.phone_code.$error,
          }"
          :formatter="formatter"
        ></b-form-input>
        <small
          v-if="submitted && v$.phone_code.maxLength"
          class="invalid-feedback"
        >
          maximum 4 character is allowed
        </small>
      </b-form-group>

      <b-form-group
        label="Status"
        label-for="status-input"
        invalid-feedback="Status is required"
      >
        <b-form-checkbox
          v-model="status"
          name="check-status"
          :state="validateState('status')"
          :class="{
            'is-invalid': submitted && v$.status.$error,
          }"
          switch
        >
          {{ status ? "Active" : "Inactive" }}
        </b-form-checkbox>
      </b-form-group>
    </form>
  </div>
</template>

<script>
import { ref, reactive, toRefs, nextTick } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
import { countryService } from "../../../services";
import { useBVModal, useToast } from "../../../composable/helper.js";

export default {
  name: "countryedit",
  props: {
    editRow: Object,
  },
  setup(props, context) {
    let state = reactive({
      name: "",
      short_name: "",
      phone_code: "",
      status: true,
    });
    const submitted = ref(false);
    const bvModal = useBVModal();
    const toast = useToast();
    state = props.editRow;
    const rules = {
      name: { required },
      short_name: { required, maxLength: maxLength(4) },
      phone_code: { required, maxLength: maxLength(4) },
      status: { required },
    };

    const v$ = useVuelidate(rules, state, { $lazy: true });
    const validateState = (name) => {
      const { $dirty, $error } = v$.value[name];
      return $dirty ? !$error : null;
    };
    const handleSubmit = async () => {
      submitted.value = true;
      // stop here if form is invalid
      v$.value.$touch();
      if (v$.value.$invalid) {
        return;
      } else {
        const response = await countryService.update(state.ids, state);
        if (response.status) {
          toast.open({
            message: response.message,
            type: "success",
            position: "top-right",
            duration: 3000,
            // all of other options may go here
          });

          nextTick(() => {
            bvModal.hide("modal-prevent-create");
          });
        } else {
          toast.open({
            message: "Failed to update country",
            type: "error",
            position: "top-right",
            duration: 5000,
          });
        }
      }
    };
    context.expose({ handleSubmit });

    const formatter = (value) => {
      return value.toUpperCase();
    };

    return {
      ...toRefs(state),
      v$,
      submitted,
      validateState,
      handleSubmit,
      formatter,
    };
  },
};
</script>

<style lang="scss" scoped></style>
