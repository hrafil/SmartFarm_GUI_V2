<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <b-row>
          <b-col sm="6">
            <h4 class="card-title mb-0">Seznam uložených veličin a procesů SmartFarm</h4>
          </b-col>
          <b-col sm="6" class="d-none d-md-block">
            <b-button v-b-toggle.collapseFarmObjectsManagement type="button" variant="secondary"
                      class="float-right"><i class="cui-chevron-bottom"></i>
            </b-button>
          </b-col>
        </b-row>
        <b-collapse id="collapseFarmObjectsManagement">
          <br>
          <b-row>
            <b-col sm="12">
              <farm-object-edit-modal :editedObj=editedObj></farm-object-edit-modal>
              <farm-object-detail-modal :detailObj=detailObj></farm-object-detail-modal>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                  <tr>
                    <th scope="col">Název</th>
                    <th scope="col">Datový typ</th>
                    <th scope="col">Fyzikální veličina</th>
                    <th scope="col">Měrné jednotky</th>
                    <th scope="col">
                      <b-button v-on:click="synchronizeAndSave()" type="button" variant="success" class="float-right"><i
                        class="cui-cloud-download icons"> </i></b-button>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in farmObjects">
                    <th scope="row">{{item.name}}</th>
                    <td>{{item.data_type}}</td>
                    <td>{{item.measurement}}</td>
                    <td>{{item.measurement_units}}</td>
                    <td>
                      <b-button-toolbar class="float-right" aria-label="Možnosti synchronizace">
                        <b-button type="button" v-on:click="sendItemToDetailComponent(item)" variant="primary" class="float-right"><i class="cui-list icons"></i>
                        </b-button>
                        <b-button type="button" v-on:click="sendItemToEditComponent(item)" variant="warning"
                                  class="float-right"><i class="cui-note icons"></i>
                        </b-button>
                        <b-button type="button" variant="danger" class="float-right"><i class="icon-ban"></i></b-button>
                      </b-button-toolbar>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
        </b-collapse>
      </b-card>
    </b-col><!--/.col-->
  </b-row><!--/.row-->
</template>


<script>
  import FarmObjectsService from '../../services/FarmObjectsService'
  import FarmObjectsLocalStorage from '../../services/FarmObjectsLocalStorage'
  import FarmObjectEditModal from './FarmObjectEditModal'
  import FarmObjectDetailModal from './FarmObjectDetailModal'

  export default {
    name: 'farm-object-management',
    components: {
      FarmObjectEditModal,
      FarmObjectDetailModal
    },
    data: function () {
      return {
        farmObjects: [],
        name: null,
        editedObj: null,
        detailObj: null,
      }
    },
    methods: {
      sendItemToEditComponent(item) {
        this.editedObj = item
      },
      sendItemToDetailComponent(item) {
        this.detailObj = item
      },
      synchronizeAndSave(){
        var rq = FarmObjectsService.getListFarmObject();
        rq.then((resolve) => {
          this.farmObjects = resolve.data.itemList;
          FarmObjectsLocalStorage.listFarmObjectSetListFarmObject(resolve.data.itemList);
        });
      }
    },
    mounted() {
      this.farmObjects = FarmObjectsLocalStorage.listFarmObjectGetListFarmObject();
    },
//    watch: {
//      farmObjects: function (newVal, oldVal) {
//        FarmObjectsLocalStorage.listFarmObjectSetListFarmObject(newVal);
//      }
//    }
//TODO: POUZIT NA SLEDOVANI
//    watch: {
//      todos: {
//        handler() {
//          console.log('Todos changed!');
//          localStorage.setItem('todos', JSON.stringify(this.todos));
//        },
//        deep: true,
//      },
//    },
  }

</script>
