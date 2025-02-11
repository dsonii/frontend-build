<template>
    <gmap-map ref="mymap" :center="coordinates" :zoom="17" style="width: 100%; height: 300px">
        <gmap-marker :position="position" :draggable="true" />
        <DirectionsRenderer travelMode="DRIVING" :origin="origin" :destination="destionation"/>
    </gmap-map>
</template>


<script>
import DirectionsRenderer from "../../components/share/DirectionsRenderer";
export default {
    components: {
        DirectionsRenderer
    },
    origin: { type: Object },
    destination: { type: Object },
    data() {
        return {
            coordinates: {lat:24.53866022898745, lng:81.28497725212615},
            position: {lat:24.53866022898745, lng:81.28497725212615},
        }
    },
    computed: {
        origin() {
            return { query: {lat:24.53866022898745, lng:81.28497725212615} };
        },
        destionation() {
            return  {lat:24.53866022898745, lng:81.28497725212615};
        }
    },
    mounted() {
        // this.loadDirection();
        this.moveUp(0.001);
        
    },
    methods: {
        // loadDirection() {
        //     const directionsService = new window.google.maps.DirectionsService();
        //     const directionsRenderer = new window.google.maps.DirectionsRenderer();
        //     directionsService.route({
        //             origin:new window.google.maps.LatLng(24.53866022898745, 81.28497725212615),
        //             destination:new window.google.maps.LatLng(24.53446853482179, 81.29175853409387),
        //             travelMode:"DRIVING",
        //         }).then((response) => {
        //             directionsRenderer.setDirections(response);
        //         })
        // },
        moveUp(delta) {
            let lat = delta+this.position.lat;
    	    this.position.lat = lat;
    	    setTimeout(() => this.moveUp(delta), 3000);
        },
    },
}

</script>

<style></style>