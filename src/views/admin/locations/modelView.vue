<template>
  <div>
    <section class="tables">
      <table class="table  table-bordered  table-striped">
        <tr>
          <td>Title</td>
          <td>Address</td>
          <td>Latitude</td>
          <td>Longitude</td>
          <td>Status</td>
          <td>Type</td>
          <td>Created At</td>
        </tr>
        <tr>
          <td>{{ form.title }}</td>
          <td>{{ form.location_address }}</td>
          <td>{{ form.location_lat }}</td>
          <td>{{ form.location_lng }}</td>
          <td>{{ form.status }}</td>
          <td>{{
            form.type == "DA"
              ? "Departure / Arrival location"
              : "Pick-up / Drop off location"
          }}</td>
          <td>{{
              dateConvert(
                form.createdAt,
                `${dateFormat.value} ${timeFormat.value}`
              )
            }}</td>
        </tr>
      </table>
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
