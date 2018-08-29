<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <farm-objects-management-component></farm-objects-management-component>
      <list-unregistered-objects></list-unregistered-objects>
      <sync-state-display></sync-state-display>
    </div>
  </div>
</template>

<script>
import ListUnregisteredObjects from "./summary/ListUnregisteredObjects.vue";
import SyncStateDisplay from "./summary/SyncStateDisplay.vue";
import FarmObjectsManagementComponent from "./summary/FarmObjectsManagement.vue";

export default {
  name: "farm-object-management",
  components: {
    ListUnregisteredObjects,
    SyncStateDisplay,
    FarmObjectsManagementComponent,
  },
  data: function() {
    return {
      selected: "Month"
    };
  },
  methods: {}
};
</script>

<style>
/* IE fix */
#card-chart-01,
#card-chart-02 {
  width: 100% !important;
}
</style>
