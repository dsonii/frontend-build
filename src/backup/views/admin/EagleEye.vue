<template>
  <b-card>
    <b-card-text>
      <b-row>
        <b-col cols="12">
          <div class="py-2 align-end">
            <b-button-group size="md">
              <b-button
                variant="outline-success"
                @click="fetchMapData('ONLINE')"
                :pressed="onlinepressed"
                >Online Driver</b-button
              >
              <b-button
                variant="outline-primary"
                @click="fetchMapData('TRACK')"
                :pressed="trackpressed"
                >Track Driver</b-button
              >
              <b-button
                variant="outline-danger"
                @click="fetchMapData('OFFLINE')"
                :pressed="offlinepressed"
                >Offline Driver</b-button
              >
            </b-button-group>
          </div></b-col
        >

        <b-col cols="3">
          <div class="py-2">
            <b-overlay :show="loading" rounded="sm" variant="black">
              <template #overlay>
                <div class="text-center">
                  <p id="cancel-label">loading drivers...</p>
                </div>
              </template>
              <b-input-group size="sm" class="mb-1">
                <b-input-group-prepend is-text>
                  <i class="menu-icon typcn typcn-zoom"></i>
                </b-input-group-prepend>
                <b-form-input
                  v-model="search"
                  placeholder="Search name or mobile number"
                ></b-form-input>
              </b-input-group>
              <div style="position: relative; height: 600px; overflow-y: auto">
                <b-list-group>
                  <b-list-group-item
                    v-for="(marker, index) in markers"
                    :key="index"
                    class="d-flex align-items-center justify-content-between"
                  >
                    <b-img
                      class="mr-2"
                      thumbnail
                      rounded="circle"
                      fluid
                      width="50"
                      :alt="marker.short_name"
                      :src="marker.picture"
                    ></b-img>

                    {{ marker.fullname }} - {{ marker.phone }}
                  </b-list-group-item>
                </b-list-group>
              </div>
            </b-overlay>
          </div>
        </b-col>

        <b-col cols="9"> <MapView :center="center" :markers="markers" /></b-col>
      </b-row>
    </b-card-text>
  </b-card>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { mapService } from "../../services";
import MapView from "../../components/googlemap/MapView.vue";
//import mapData from "./mapStyle.json";

export default {
  components: { MapView },
  setup() {
    let loading = ref(false);
    let onlinepressed = ref(false);
    let trackpressed = ref(false);
    let offlinepressed = ref(true);
    let center = ref({});
    let centerError = ref("");
    let markers = ref([]);
    let status = ref("OFFLINE");
    const search = ref("");

    const getCenter = () => {
      loading.value = true;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            center.value = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            loading.value = false;
          },
          (error) => {
            centerError.value = "Error retrieving location: " + error.message;
            loading.value = false;
          }
        );
      } else {
        centerError = "Geolocation is not supported by this browser.";
        loading.value = false;
      }
    };

    const fetchMapData = async (name) => {
      loading.value = true;
      status.value = name;
      const result = await mapService.mapData(name, search.value);
      if (result.status) {
        markers.value = result.data;
        loading.value = false;
      }
    };

    onMounted(() => {
      getCenter();
      fetchMapData(status.value);
    });

    watch(
      search,
      (value) => {
        fetchMapData(status.value, value);
      },
      { deep: true }
    );

    watch(status, () => pressedFn(), { deep: true });

    const pressedFn = () => {
      if (status.value === "ONLINE") {
        offlinepressed.value = false;
        trackpressed.value = false;
        onlinepressed.value = true;
      } else if (status.value === "TRACK") {
        offlinepressed.value = false;
        trackpressed.value = true;
        onlinepressed.value = false;
      } else if (status.value === "OFFLINE") {
        offlinepressed.value = true;
        trackpressed.value = false;
        onlinepressed.value = false;
      }
    };

    return {
      search,
      status,
      offlinepressed,
      trackpressed,
      onlinepressed,
      loading,
      center,
      centerError,
      markers,
      fetchMapData,
    };
  },
};
</script>

<style scoped>
.card .card-body {
  padding: 0.88rem 0.81rem !important;
}
.list-group-item {
  padding: 0.45rem 0.75rem !important;
}
</style>
