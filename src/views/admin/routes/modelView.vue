<template>
  <div>
    <section class="tables">
      <table class="table  table-bordered  table-striped">
        <tr>
          <td>Title</td>
          <td>Stops</td>
          <td>Departure Location</td>
          <td>Arrival Location</td>
          <td>Status</td>
          <td>Created At</td>
        </tr>
        <tr>
          <td>{{ form.title }}</td>
          <td>{{ form.total_stops }}</td>
          <td>{{ form.da }}</td>
          <td>{{ form.al }}</td>
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
  computed: { ...mapState(useApp, ["dateFormat", "timeFormat"]) },

  methods: {
    dateConvert(createdAt, format) {
      return getDateFormat(createdAt, format);
    },
  },
};
</script>

<style></style>
