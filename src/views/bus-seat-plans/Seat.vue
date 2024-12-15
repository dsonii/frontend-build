<template>
  <div>
    <b-card>
      <b-card-text>
        <b-row>
          <b-form inline>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="5"
              label-cols-lg="5"
              content-cols-sm
              content-cols-lg="5"
              label="Driver seats"
              label-for="inline-form-input-driver-seat"
            >
              <b-form-select
                id="inline-form-input-driver-seat"
                v-model="driver_seat"
                :options="options"
                class="mr-sm-2 mb-sm-0"
              ></b-form-select>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="5"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="4"
              label="Rows"
              label-for="inline-form-input-row"
            >
              <b-form-input
                min="1"
                id="inline-form-input-row"
                class="mr-sm-2 mb-sm-0"
                v-model="rows"
                type="number"
                placeholder="bus row"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="5"
              label-cols-lg="5"
              content-cols-sm
              content-cols-lg="4"
              label="Columns"
              label-for="inline-form-input-column"
            >
              <b-form-input
                min="1"
                id="inline-form-input-column"
                class="mr-sm-2 mb-sm-0"
                type="number"
                v-model="columns"
                placeholder="bus column"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="fieldset-horizontal"
              label-cols-sm="3"
              label-cols-lg="7"
              content-cols-sm
              content-cols-lg="5"
              label="Total Seats"
              label-for="inline-form-input-column"
            >
              <b-form-input
                readonly
                class="mr-sm-2 mb-sm-0"
                v-model="total_seat"
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-row>
      </b-card-text>
      <b-card-text>
        <b-row>
          <b-col cols="7">
            <table>
              <tbody>
                <tr
                  v-for="(row, rowIndex) in seatRows"
                  :key="rowIndex"
                  class="bus-row"
                >
                  <td v-for="(seat, colIndex) in row" :key="colIndex">
                    <!-- <b-img-lazy :src="busSeat" width="60" height="60"></b-img-lazy> -->

                    <b-form-input
                      v-if="seat.type == 'seat'"
                      size="sm"
                      class="mb-4 mr-4 mr-sm-4 mb-sm-0"
                      v-model="seat.name"
                      @input="$event.target.value.toUpperCase()"
                      :placeholder="seat.placeholder"
                    ></b-form-input>
                  </td>
                </tr>
              </tbody>
            </table>
          </b-col>
          <b-col cols="5">
            <table>
              <tbody>
                <tr
                  v-for="(row, rowIndex) in seatRows"
                  :key="rowIndex"
                  class="bus-row"
                >
                  <td v-for="(seat, colIndex) in row" :key="colIndex">
                    <b-img-lazy
                      v-if="seat.type == 'driver-steering' && seat.name == ''"
                      :src="busSteering"
                      width="50"
                      height="50"
                    >
                    </b-img-lazy>
                    <b-img-lazy
                      v-else-if="seat.type == 'seat' && !seat.name == ''"
                      :src="busSeat"
                      width="50"
                      height="50"
                    >
                    </b-img-lazy>
                    <div v-else class="mb-4 mr-4 mt-2">-</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { watchEffect, watch, ref } from "vue";
import busSeat from "../../assets/seats/bus-seat.png";
import busSteering from "../../assets/seats/steering.png";

export default {
  setup() {
    const driver_seat = ref("left");
    const rows = ref(0);
    const columns = ref(0);
    let total_seat = ref(0);
    const options = [
      { text: "Left", value: "left" },
      { text: "Right", value: "right" },
    ];
    let seatRows = ref([]);

    watchEffect(() => {
      seatRows.value = [];
      for (let row = 1; row <= rows.value; row++) {
        const rowSeats = [];
        for (let col = 1; col <= columns.value; col++) {
          const seatObj = {
            name: ``,
            placeholder: `enter seat no A${row}`,
            is_ladies: false,
          };

          if (driver_seat.value === "left" && row === 1 && col === 1) {
            seatObj.type = "driver-steering";
          } else if (
            driver_seat.value === "right" &&
            row === 1 &&
            col === parseInt(columns.value)
          ) {
            seatObj.type = "driver-steering";
          } else {
            seatObj.type = "seat";
          }

          rowSeats.push(seatObj);
        }
        seatRows.value.push(rowSeats);
      }
    });

    const TotalSeatsWithNames = () => {
      let total = 0;
      for (const row of seatRows.value) {
        for (const seat of row) {
          if (seat.name.trim() !== "") {
            total++;
          }
        }
      }
      return total;
    };

    const driverSteeringChanged = (name) => {
      let total = 0;
      for (const row of seatRows.value) {
        for (const seat of row) {
          if (name === "right" && seatRows.value - 1 === 1 && seat === 1) {
            console.log("right", name);
          }
        }
      }
      return total;
    };

    watch(
      seatRows,
      () => {
        total_seat.value = TotalSeatsWithNames();
      },
      { deep: true }
    );

    watch(driver_seat, (value) => {
      driverSteeringChanged(value);
    });

    return {
      driver_seat,
      options,
      rows,
      columns,
      total_seat,
      seatRows,
      busSeat,
      busSteering,
    };
  },
};
</script>

<style></style>
