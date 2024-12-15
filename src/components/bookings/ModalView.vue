<template>
  <div>
    <b-tabs pills content-class="mt-3">
      <b-tab title="Booking Details" active>
        <b-container>
          <b-row>
            <b-col cols="4">PNR No</b-col>
            <b-col cols="8"
              ><p>{{ modalData.pnr_no }}</p></b-col
            >
            <b-col cols="4">Date / Time</b-col>
            <b-col cols="8">
              <p>
                {{ dateConvert(modalData.booking_date, dateFormat.value) }}
                <br />
                {{ modalData.start_time }} - {{ modalData.drop_time }}
              </p>
            </b-col>

            <b-col cols="4">Stops / Route</b-col>
            <b-col cols="8">
              <p>
                {{ modalData.location.pickup_location }} -
                {{ modalData.location.drop_location }}
                <br />
                from <b>{{ modalData.location.route_name }}</b>
              </p></b-col
            >

            <b-col cols="4">Bus</b-col>
            <b-col cols="8">
              <p>
                Name : {{ modalData.bus_reg_no }}<br />
                Model Number : {{ modalData.bus_model_no }}<br />
                Plate/Registration Number : {{ modalData.bus_reg_no }}
                <br />
                Type : {{ modalData.bus_type_name }}<br />
                Layout Name : {{ modalData.bus_layout_name }}<br />
                Layout : {{ layoutName(modalData.bus_layout_layout) }}
              </p>
            </b-col>

            <b-col cols="4">Is Pass</b-col>
            <b-col cols="8"
              ><p>{{ modalData.is_pass }}</p>
            </b-col>
            <b-col cols="4" v-if="modalData.is_pass === 'Yes'"
              >No of Pass</b-col
            >
            <b-col cols="8" v-if="modalData.is_pass === 'Yes'"
              ><p>{{ modalData.no_of_pass }}</p>
            </b-col>

            <b-col cols="4">Total Passengers</b-col>
            <b-col cols="8"
              ><p>{{ modalData.passengers }}</p></b-col
            >
            <b-col cols="4">Seat Number</b-col>
            <b-col cols="8"
              ><p>{{ modalData.seat_nos.toString() }}</p>
            </b-col>
            <b-col cols="4">Travel status</b-col>
            <b-col cols="8"
              ><p>{{ modalData.travel_status }}</p></b-col
            >

            <b-col cols="4">Created By</b-col>
            <b-col cols="8"
              ><p>
                {{
                  dateConvert(
                    modalData.createdAt,
                    `${dateFormat.value} ${timeFormat.value}`
                  )
                }}
              </p></b-col
            >
          </b-row>
        </b-container></b-tab
      >
      <b-tab title="Passenger Details">
        <b-table striped hover :items="modalData.passenger_details"></b-table>
      </b-tab>
      <b-tab title="Payment Details">
        <b-container>
          <b-row>
            <b-col cols="4">Payment Status</b-col>
            <b-col cols="8"
              ><p>{{ modalData.payment_status }}</p></b-col
            >
            <b-col cols="4">OrderID</b-col>
            <b-col cols="8"
              ><p>{{ modalData.orderId }}</p></b-col
            >
            <b-col cols="4">Method</b-col>
            <b-col cols="8"
              ><p>{{ modalData.payment_details.method }}</p></b-col
            >
            <b-col cols="4">Payment created</b-col>
            <b-col cols="8"
              ><p>
                {{
                  dateConvert(
                    modalData.payment_details.payment_created_date,
                    `${dateFormat.value} ${timeFormat.value}`
                  )
                }}
              </p></b-col
            >

            <b-col cols="4">Sub Total</b-col>
            <b-col cols="8"
              ><p>{{ defaultCurrency }}{{ modalData.sub_total }}</p></b-col
            >
            <b-col cols="4">Tax ({{ modalData.tax }}%)</b-col>
            <b-col cols="8"
              ><p>{{ defaultCurrency }}{{ modalData.tax_amount }}</p></b-col
            >
            <b-col cols="4">Fee</b-col>
            <b-col cols="8"
              ><p>{{ defaultCurrency }}{{ modalData.fee }}</p></b-col
            >
            <b-col cols="4">Total (round off)</b-col>
            <b-col cols="8"
              ><p>
                {{ defaultCurrency }}{{ modalData.payment_details.amount }}
              </p></b-col
            >
          </b-row>
        </b-container>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useApp } from "../../store/useApp";
import { getDateFormat } from "../../helpers/utils";

export default {
  name: "modelView",
  props: ["modalData"],
  computed: {
    ...mapState(useApp, ["dateFormat", "timeFormat", "defaultCurrency"]),
  },

  methods: {
    dateConvert(createdAt, format) {
      return getDateFormat(createdAt, format);
    },
    layoutName(name) {
      if (name == "layout-1") {
        return "1 X 1";
      } else if (name == "layout-2") {
        return "1 X 2";
      } else if (name == "layout-3") {
        return "2 X 1";
      } else if (name == "layout-4") {
        return "2 X 2";
      } else if (name == "layout-5") {
        return "2 X 3";
      } else if (name == "layout-6") {
        return "3 X 2";
      }
    },
  },
};
</script>

<style></style>
