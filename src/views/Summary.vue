<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <dashboard-objects-management></dashboard-objects-management>
      <dashboard-object-configuration></dashboard-object-configuration>
      <sync-state-display></sync-state-display>
    </div>
  </div>
</template>

<script>
import ListUnregisteredObjects from "./summary/ListUnregisteredObjects.vue";
import SyncStateDisplay from "./summary/SyncStateDisplay.vue";
import FarmObjectsManagementComponent from "./summary/FarmObjectsManagement.vue";
import DashboardObjectsManagement from "./summary/DashboardObjectManagement.vue";
import DashboardObjectConfiguration from "./summary/DashboardObjectConfiguration.vue";
//  import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
//  import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
//  import CardBarChartExample from './dashboard/CardBarChartExample'
//  import MainChartExample from './dashboard/MainChartExample'
//  import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
//  import CalloutChartExample from './dashboard/CalloutChartExample'
//  import { Callout } from '@coreui/vue'

export default {
  name: "summary-dashboard",
  components: {
    ListUnregisteredObjects,
    SyncStateDisplay,
    FarmObjectsManagementComponent,
    DashboardObjectsManagement,
    DashboardObjectConfiguration
  },
  data: function() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style>
/* IE fix */
#card-chart-01,
#card-chart-02 {
  width: 100% !important;
}
</style>
