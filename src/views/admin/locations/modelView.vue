<template>
  <div>
    <section class="tables">
      <b-container>
        <b-row>
          <b-col cols="4">Title</b-col>
          <b-col cols="8">{{ form.title }}</b-col>

          <b-col cols="4">Address</b-col>
          <b-col cols="8">{{ form.location_address }}</b-col>

          <b-col cols="4">Latitude</b-col>
          <b-col cols="8">{{ form.location_lat }}</b-col>
          <b-col cols="4">Longitude</b-col>
          <b-col cols="8">{{ form.location_lng }}</b-col>
          <b-col cols="4">Status</b-col>
          <b-col cols="8">{{ form.status }}</b-col>
          <b-col cols="4">Type</b-col>
          <b-col cols="8">{{
            form.type == "DA"
              ? "Departure / Arrival location"
              : "Pick-up / Drop off location"
          }}</b-col>

          <b-col cols="4">Created At</b-col>
          <b-col cols="8"
            >{{
              dateConvert(
                form.createdAt,
                `${dateFormat.value} ${timeFormat.value}`
              )
            }}
          </b-col>
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
  props: ["form"],
  computed: { ...mapState(useApp, ["dateFormat", "timeFormat"]) },

  methods: {
    dateConvert(createdAt, format) {
      return getDateFormat(createdAt, format);
    },
  },
};
</script>

<style></style>
