<template>
    <l-map  style="height: 300px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="position"></l-marker>
    </l-map>
  </template>


<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  name: 'MyAwesomeMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom:14,
      center: L.latLng(47.413220, -1.219482),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy;',
      position: L.latLng(47.413220, -1.219482),
    }
  },
  mounted() {
  	this.moveUp(0.001);
  },
  methods: {
  	moveUp: function (delta) {
        console.log(delta, this.position.lat);
        let lat = delta+this.position.lat;
    	this.position = L.latLng(lat, -1.219482)
    	setTimeout(() => this.moveUp(delta), 3000);
    }
  }
};
</script>

<style></style>