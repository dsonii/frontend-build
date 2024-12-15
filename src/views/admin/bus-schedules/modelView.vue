<template>
  <div>
    <section class="tables">
      <b-container>
        <b-row>
          <b-col cols="4">Route Name</b-col>
          <b-col cols="8">{{ form.route_name }}</b-col>
          <b-col cols="4">Bus Name</b-col>
          <b-col cols="8">{{ form.bus_name }}</b-col>
          <b-col cols="4">Departure To Arrival</b-col>
          <b-col cols="8">{{ form.departure_to_arrival_time }}</b-col>
          <b-col cols="4">Operations</b-col>
          <b-col cols="8">{{ form.start_to_end }}</b-col>
          <b-col cols="4">Status</b-col>
          <b-col cols="8">{{ form.status }}</b-col>

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
  computed: {
    ...mapState(useApp, ["dateFormat", "timeFormat"]),
  },
  methods: {
    dateConvert(createdAt, format) {
      return getDateFormat(createdAt, format);
    },
  },
};
</script>

<style></style>
