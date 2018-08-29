<template>

  <b-row>
    <b-col md="12">
      <b-card header-tag="header" footer-tag="footer">

        <b-row>
          <b-col sm="5">
            <h4 class="card-title mb-0">Důležité objekty SmartFarm</h4>
          </b-col>
          <b-col sm="7" class="d-md-block">
            <b-button v-on:click="getFreshValues()" type="button" variant="success" class="float-right">
              <i class="cui-cloud-download icons"></i>
            </b-button>
            <b-button v-on:click="syncDashboard()" type="button" variant="primary" class="float-right">
              <i class="cui-list icons icons"></i>
            </b-button>
          </b-col>
        </b-row>
        <br>
        <b-list-group>
          <b-list-group-item v-for="item in dashboardObjects" class="flex-column align-items-start">
            <div class="d-flex flex-row">
              <!-- <div class="align-self-start"> -->
              <div class="d-flex flex-column align-items-center justify-content-center mr-3">
                <!-- <div class="d-flex align-items-center"> -->
                <div style="color: blue;" class="h4">{{ item.value}}</div>
                <div>
                  <small v-if="item.measurement_units" class="text-muted">{{item.measurement_units}}</small>
                  <small v-else-if="item.data_type" class="text-muted">{{item.data_type}}</small>
                </div>
              </div>
              <!-- </div> -->
              <div class="d-flex flex-column justify-content-center">
                <h5 class="mb-1">{{item.name}}</h5>
                <span>
                  {{ item.desc }}
                </span>
              </div>
              <div v-if="item.is_settable" class="d-flex flex-column justify-content-center ml-auto">
                <small style="color:red;" v-if="item.submitResultInValid">Nevalidní vstup!</small>
                <small style="color:green;" v-if="item.submitResultValid">Odesláno!</small>
                <div class="input-group">
                  <input v-bind:disabled="item.submitResultValid" type="text" class="form-control" v-model="item.tempValue" placeholder="Hodnota" aria-label="Nová hodnota" aria-describedby="basic-addon2">
                  <div class="input-group-append">
                    <button v-on:click="sendObjectValue(item)" class="btn btn-outline-success" type="button">Odeslat</button>
                  </div>
                </div>
              </div>
            </div>
          </b-list-group-item>

        </b-list-group>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import FarmObjectService from "../../services/FarmObjectsService";
import FarmObjectsLocalStorage from "../../services/FarmObjectsLocalStorage";

export default {
  name: "dashboard-object-management",
  data: function() {
    return {
      dashboardObjects: []
    };
  },
  methods: {
    getFreshValues() {
      var lstr = FarmObjectService.getListFarmObject();
      var listFarmObj = [];
      var listValuesFarmObj = [];
      lstr.then(resolvelstf => {
        listFarmObj = resolvelstf.data.itemList;
        var lstvr = FarmObjectService.getListWithValuesFarmObject();
        lstvr.then(resolvelstfv => {
          listValuesFarmObj = resolvelstfv.data.itemList;
          FarmObjectService.getDashboardValues(listFarmObj, listValuesFarmObj);
          this.dashboardObjects = FarmObjectsLocalStorage.dashboardGetManagementObjects();
        });
      });
    },
    syncDashboard() {
      FarmObjectService.getDashboardValues(
        FarmObjectsLocalStorage.listFarmObjectGetListFarmObjectValue(),
        null
      );
      this.dashboardObjects = FarmObjectsLocalStorage.dashboardGetManagementObjects();
    },
    sendObjectValue(item) {
      if (isNaN(item.tempValue)) {
        item.submitResultValid = false;
        item.submitResultInValid = true;
        item.tempValue = "";
      } else {
        item.newValue = item.tempValue;
        item.submitResultInValid = false;
        item.submitResultValid = true;
        item.tempValue = "";
        var smt = FarmObjectService.putNewFarmObjectValue(item);
          smt.then((resolve) => {
            console.log("Nová hodnota objektu: " + item.name + " o hodnotě: " + item.newValue +" byla úspěšně odeslána.")
          });
      }
    }
  },
  mounted() {
    if (
      FarmObjectsLocalStorage.dashboardGetManagementObjects().length === 0 &&
      FarmObjectsLocalStorage.listFarmObjectGetListFarmObjectValue().length > 0
    ) {
      FarmObjectService.getDashboardValues(
        FarmObjectsLocalStorage.listFarmObjectGetListFarmObjectValue(),
        null
      );
    } else if (
      FarmObjectsLocalStorage.dashboardGetManagementObjects().length === 0 &&
      FarmObjectsLocalStorage.listFarmObjectGetListFarmObjectValue().length ===
        0
    ) {
      var lstr = FarmObjectService.getListFarmObject();
      var listFarmObj = [];
      var listValuesFarmObj = [];
      lstr.then(resolvelstf => {
        listFarmObj = resolvelstf.data.itemList;
        var lstvr = FarmObjectService.getListWithValuesFarmObject();
        lstvr.then(resolvelstfv => {
          listValuesFarmObj = resolvelstfv.data.itemList;
          FarmObjectService.getDashboardValues(listFarmObj, listValuesFarmObj);
          this.dashboardObjects = FarmObjectsLocalStorage.dashboardGetManagementObjects();
        });
      });
    }
    this.dashboardObjects = FarmObjectsLocalStorage.dashboardGetManagementObjects();
  }
};
</script>
