<template>
  <div><div ref="mapDiv" style="width: 100%; height: 80vh"></div></div>
</template>

<script setup>
import { toRef, ref, toRaw, watchEffect, defineProps } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
import online from "@/assets/images/markers/bus_marker_green.png";
import offline from "@/assets/images/markers/bus_marker_red.png";
import track from "@/assets/images/markers/bus_marker_track.png";
import _ from "lodash";
import { getDateFormat } from "../../helpers/utils";
import { useApp } from "../../store/useApp";

const App = useApp();
const props = defineProps({
  center: { type: Object },
  markers: {
    type: Array,
  },
});

const mapDiv = ref(null);
const markers = toRef(props, "markers");
const center = toRef(props, "center");

console.log("center: ", toRaw(center.value));
let google;

const loadGoogleMaps = async () => {
  const loader = new Loader({
    apiKey: App.googleKey,
    version: "weekly",
    libraries: ["places"],
  });

  google = await loader.load();
  initMap();
};

watchEffect(() => {
  if (props.center && props.markers) {
    loadGoogleMaps();
  }
});

const initMap = () => {
  const map = new google.maps.Map(mapDiv.value, {
    zoom: 3,
    minZoom: 1,
    zoomControl: true,
    center: _.isEmpty(toRaw(center.value))
      ? { lat: 0, lng: 0 }
      : toRaw(center.value),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  //   const centerControlDiv = document.createElement("div");
  //   addCenterControl(centerControlDiv, map);
  //   map.controls[google.maps.ControlPosition.TOP_CENTER].push(
  //     centerControlDiv
  //   );

  addMarkers(map);
};

const addMarkers = (map) => {
  markers.value.forEach((marker) => {
    const position = new google.maps.LatLng(
      marker.position.lat,
      marker.position.lng
    );

    let markerURL = "";
    if (marker.device_status === "ONLINE") {
      markerURL = online;
    } else if (marker.device_status === "TRACK") {
      markerURL = track;
    } else {
      markerURL = offline;
    }
    const customIcon = {
      url: markerURL,
      scaledSize: new google.maps.Size(23, 30), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0), // anchor
    };

    const googleMarker = new google.maps.Marker({
      position,
      map,
      icon: customIcon,
      title: marker.fullname,
      animation: google.maps.Animation.DROP, // Set animation to DROP
    });

    // Add click event listener to show information
    googleMarker.addListener("click", () => {
      showInfoWindow(map, marker, googleMarker);
    });

    // // Start the marker animation after a delay
    // setTimeout(() => {
    //   googleMarker.setAnimation(google.maps.Animation.BOUNCE); // Set animation to BOUNCE
    // }, 1000); // Adjust the delay as needed
  });
};

const showInfoWindow = (map, info, marker) => {
  const infoWindowContent = document.createElement("div");
  infoWindowContent.innerHTML = `
      <div class="d-flex flex-column bg-surface-variant- mt-1">
                <h6 class="text-body-1 text-medium-emphasis font-weight-bold">
                  Name : ${info.fullname}
                </h6>
                <h6 class="text-body-2 text-medium-emphasis font-weight-bold">
                  Phone : ${info.phone}
                </h6>
                <h6 class="text-body-2 text-medium-emphasis font-weight-bold">
                  Email : ${info.email}
                </h6>
                <h6 class="text-body-2 text-medium-emphasis font-weight-bold">
                  last location : ${tripDate(info.updatedAt)}
                </h6>
              </div>
  `;

  const infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent,
  });

  infoWindow.open(map, marker);
};

const tripDate = (dateTimeString) => {
  return getDateFormat(dateTimeString);
};
</script>

<!-- <script>
import { toRefs, ref, toRaw, watchEffect } from "vue";


export default {
  props: {
    markers: Array,
    center: Object,
  },
  setup(props) {
  

    return {
      mapDiv,
      tripDate,
    };
  },
};
</script> -->

<style lang="scss" scoped></style>
