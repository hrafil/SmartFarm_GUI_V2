<template>
  <b-card>
    <b-row>
      <b-col sm="5">
        <h4 class="card-title mb-0">Nastavení důležitých veličin a procesů</h4>
      </b-col>
      <b-col sm="7" class="d-md-block">
        <b-button v-b-toggle.collapseDashboardConfigurationComponent type="button" variant="secondary" class="float-right">
          <i class="cui-chevron-bottom"></i>
        </b-button>
      </b-col>
    </b-row>

    <b-collapse id="collapseDashboardConfigurationComponent">
      <br>
      <b-row>
        <b-col sm="6">
          <b-card header-tag="header" footer-tag="footer">
            <div slot="header">
              <!-- <i class="fa fa-align-justify"></i> -->
              <strong> Zobrazené veličiny a procesy </strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/list-group" class="card-header-action" rel="noreferrer noopener" target="_blank">
                </a>
              </div>
            </div>
            <b-list-group v-for="(item, index) in includedObjects">
              <b-list-group-item class="d-flex justify-content-between align-items-center">{{item}}
                <b-badge v-on:click="includedObjectRemoveBadgeClicked(item, index)" href="#" variant="danger" pill>-</b-badge>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col sm="6">
          <b-card header-tag="header" footer-tag="footer">
            <div slot="header">
              <!-- <i class="fa fa-align-justify"></i> -->
              <strong> Nezobrazené veličiny a procesy </strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/list-group" class="card-header-action" rel="noreferrer noopener" target="_blank">
                </a>
              </div>
            </div>
            <b-list-group v-for="(item, index) in excludedObjects">
              <b-list-group-item class="d-flex justify-content-between align-items-center">{{item}}
                <b-badge v-on:click="excludedObjectAddBadgeClicked(item, index)" href="#" variant="success" pill>+</b-badge>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </b-collapse>
  </b-card>

</template>

<script>
import FarmObjectService from "../../services/FarmObjectsService";
import FarmObjectsLocalStorage from "../../services/FarmObjectsLocalStorage";

export default {
  name: "dashboard-object-configuration",
  data: function() {
    return {
      includedObjects: [],
      excludedObjects: []
    };
  },
  mounted() {
    var unreq = FarmObjectService.getUnregisteredFarmObjects();
    unreq.then(resolveun => {
      var smt = FarmObjectService.getListFarmObject();
      smt.then(resolvelist => {
        FarmObjectService.syncDashboardConfigurationObjects(
          resolveun.data,
          resolvelist.data
        );
        this.includedObjects = FarmObjectsLocalStorage.dasboardGetIncludedObjects();
        this.excludedObjects = FarmObjectsLocalStorage.dasboardGetExcludedObjects();
      });
    });
  },
  methods: {
    excludedObjectAddBadgeClicked(item, index) {
      this.includedObjects.push(item);
      this.excludedObjects.splice(index, 1);
    },
    includedObjectRemoveBadgeClicked(item, index) {
      this.excludedObjects.push(item);
      this.includedObjects.splice(index, 1);
    }
  },
  watch: {
    includedObjects: function(newObjects, oldObjects) {
      FarmObjectsLocalStorage.dashboardSetIncudedObjects(newObjects);
    },
    excludedObjects: function(newObjects, oldObjects) {
      FarmObjectsLocalStorage.dashboardSetExcudedObjects(newObjects);
    }
  }
};
</script>
