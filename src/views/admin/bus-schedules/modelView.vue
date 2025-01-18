<template>
  <div>
    <section class="tables">
      <table class="table  table-bordered  table-striped">
        <tr>
          <td>Route Name</td>
          <td>Vehicle Name</td>
          <td>Departure To Arrival</td>
          <td>Operations</td>
          <td>Status</td>
          <td>Created At</td>
        </tr>
        <tr>
          <td>{{ form.route_name }}</td>
          <td>{{ form.bus_name }}</td>
          <td>{{ form.departure_to_arrival_time }}</td>
          <td>{{ form.start_to_end }}</td>
          <td>{{ form.status }}</td>
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
