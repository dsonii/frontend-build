<template>
  <div>
    <section class="tables">
      <b-container>
        <b-row>
          <b-col cols="4">Full Name</b-col>
          <b-col cols="8">{{ modalData.fullname }} </b-col>

          <b-col cols="4">Email Address</b-col>
          <b-col cols="8">{{ modalData.email }}</b-col>
          <b-col cols="4">Phone</b-col>
          <b-col cols="8">{{ modalData.phone }}</b-col>
          <b-col cols="4">Status</b-col>
          <b-col cols="8">
            <b-badge
              :variant="modalData.is_active == 'Active' ? 'success' : 'danger'"
              >{{ modalData.is_active }}</b-badge
            ></b-col
          >
          <b-col cols="4">Profile Picture</b-col>
          <b-col cols="8">
            <b-img-lazy v-bind="mainProps" :src="modalData.picture"></b-img-lazy
          ></b-col>

          <b-col cols="4">Created At</b-col>
          <b-col cols="8">{{
            dateConvert(
              modalData.createdAt,
              `${dateFormat.value} ${timeFormat.value}`
            )
          }}</b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useApp } from "../../../store/useApp";
import { getDateFormat } from "../../../helpers/utils";

export default {
  name: "modelView",
  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: false,
        blank: true,
        blankColor: "#bbb",
        width: 80,
        height: 80,
        class: "my-2",
      },
    };
  },
  props: ["modalData"],
  computed: { ...mapState(useApp, ["dateFormat", "timeFormat"]) },

  methods: {
    dateConvert(createdAt, format) {
      return getDateFormat(createdAt, format);
    },
  },
};
</script>

<style></style>
