import { MapElementFactory } from "vue2-google-maps";

export default MapElementFactory({
  name: "directionsRenderer",

  ctr() {
    return window.google.maps.DirectionsRenderer;
  },

  events: [],

  mappedProps: {},

  props: {
    origin: { type: Object },
    destination: { type: Object },
    travelMode: { type: String }
  },

  afterCreate(directionsRenderer) {

    // if (window.navigator.geolocation) {
    //     // Watch the position
    //     const watchID = window.navigator.geolocation.watchPosition(updatePosition, handleError, {
    //         enableHighAccuracy: true,
    //         timeout: 10000,
    //         maximumAge: 0
    //     });
    
    //     function updatePosition(position) {
    //         const latitude = position.coords.latitude;
    //         const longitude = position.coords.longitude;
    //         const speed = position.coords.speed;
    
    //         document.getElementById('coords').textContent = `Latitude: ${latitude}\nLongitude: ${longitude}\nSpeed: ${speed ? speed : 'N/A'}`;
    //     }
    
    //     function handleError(error) {
    //         console.error('Geolocation error: ', error);
    //     }
    // } else {
    //     alert('Geolocation is not supported by this browser.');
    // }


    let directionsService = new window.google.maps.DirectionsService();
    let { origin, destination, travelMode } = this;
    // 
    // 
    if (!origin || !destination || !travelMode) return;

    directionsService.route(
        {
          origin:new window.google.maps.LatLng(origin.query.lat, destination.query.lng),
          destination:new window.google.maps.LatLng(destination.query.lat, destination.query.lng),
          travelMode
        },
        (response, status) => {
        if (status !== "OK") return;
          directionsRenderer.setDirections(response);
        }
    );
  }
});
