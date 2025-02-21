<template>
    <gmap-map ref="mymap" :center="coordinates" :zoom="17" style="width: 100%; height: 300px">
        <!-- <gmap-marker :position="position" :draggable="true" /> -->
        <gmap-polyline :path="polylinePath" :stroke-options="{ strokeColor: 'blue', strokeOpacity: 0, icons: [ { icon: lineSymbol, offset: '0', repeat: '20px' } ] }" />
    </gmap-map>
</template>


<script>
import { locationService, bookingService } from "../../services";
export default {
    data() {
        return {
            coordinates:{lat:parseFloat(0), lng:parseFloat(0)} ,
            position: {lat:parseFloat(0), lng:parseFloat(0)} ,
            polylinePath: [{ lat: parseFloat(0), lng: parseFloat(0) }, { lat: parseFloat(0), lng: parseFloat(0) }],
            lineSymbol: {
            path: 'M 0,-2 0,2',
            strokeOpacity: 2,
            scale: 2
            }
        }
    },
    mounted() {
        this.getBookingData();
        // this.moveUp();
    },
    methods: {
        getBookingData() {
            bookingService.find(this.$route.params.id).then((response) => {
            if (response.status) {
                this.coordinates.lat= parseFloat(response.data.pickupId_location.coordinates[1]);
                this.coordinates.lng = parseFloat(response.data.pickupId_location.coordinates[0]);
                this.position.lat= parseFloat(response.data.dropoffId_location.coordinates[1]);
                this.position.lng = parseFloat(response.data.dropoffId_location.coordinates[0]);

                this.polylinePath[0].lat= parseFloat(response.data.pickupId_location.coordinates[1]);
                this.polylinePath[0].lng = parseFloat(response.data.pickupId_location.coordinates[0]);
                this.polylinePath[1].lat= parseFloat(response.data.dropoffId_location.coordinates[1]);
                this.polylinePath[1].lng = parseFloat(response.data.dropoffId_location.coordinates[0]);  
                console.log(this.polylinePath);
            }
            });
        },
        async getCurrentBookingData() {
            locationService.getCurrentLocation(this.$route.params.id).then((response) => {
            if (response.status) {
                this.position.lat= response.data.current_location[0];
                this.position.lng = response.data.current_location[1];                 
            }
            });
        },
        async moveUp() {
            await this.getCurrentBookingData();
    	    setTimeout(() => this.moveUp(), 10000);
        },
    },
}

</script>

<style></style>