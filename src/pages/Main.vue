<template>
    <div style="height: 100vh; width: 100%">
      <l-map
        :zoom="mapOptions.zoom"
        :center="mapOptions.center"
        :options="mapOptions"
        @click="addMarker"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
      >
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker
          v-for="(marker, index) in markers"
          :key="index"
          :lat-lng="marker"
        >
          <l-popup>

          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </template>
    
    <script>
  import { latLng } from "leaflet";
  import L from "leaflet"
  import {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
  } from "@vue-leaflet/vue-leaflet";
  import "leaflet/dist/leaflet.css";
  
  export default {
    name: "Example",
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
      LTooltip,
    },
    data() {
      return {
        zoom: 13,
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        markers: [],
        mapOptions: {
          center: [48.1460165, 31.2271744],
          zoom: 6,
          maxZoom: 15,
          zoomControl: false,
        },
      };
    },
    methods: {
      zoomUpdate(zoom) {
        this.currentZoom = zoom;
      },
      centerUpdate(center) {
        this.currentCenter = center;
      },
      addMarker(event) {
        this.markers.push(event.latlng);
        this.ll = event.latlng
        console.log(this.markers);  
      },
    },
  };
  </script>