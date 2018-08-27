<template>

  <b-row>
    <b-col md="12">
      <b-card
        header-tag="header"
        footer-tag="footer">

        <b-row>
          <b-col sm="12">
            <h4 class="card-title mb-0">Důležité objekty</h4>
          </b-col>
        </b-row>
        <br>
        <b-list-group>
          <b-list-group-item v-for="item in farmObjects" class="flex-column align-items-start">
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
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Hodnota"
                         aria-label="Recipient's username" aria-describedby="basic-addon2">
                  <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="button">Odeslat</button>
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
  import FarmObjectService from '../../services/FarmObjectsService'

  export default {
    name: "dashboard-object-management",
    data: function () {
      return {
        farmObjects: FarmObjectService.getPreparedValues()
      };
    },
    mounted() {
      this.farmObjects = FarmObjectService.getPreparedValues();
      console.log(FarmObjectService.getPreparedValues())
    }
  };
</script>
