<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <b-row>
          <b-col sm="6">
            <h4 class="card-title mb-0">Seznam uložených objektů SmartFarm</h4>
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
              <div class="table-responsive">
                <table class="table">
                  <thead>
                  <tr>
                    <th scope="col">Název</th>
                    <th scope="col">Datový typ</th>
                    <th scope="col">Fyzikální veličina</th>
                    <th scope="col">Měrné jednotky</th>
                    <th scope="col"></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in farmObjects">
                    <th scope="row">{{item.name}}</th>
                    <td>{{item.data_type}}</td>
                    <td>{{item.measurement}}</td>
                    <td>@{{item.measurement_units}}</td>
                    <td>
                      <b-button-toolbar class="float-right" aria-label="Možnosti synchronizace">
                        <b-button type="button" variant="primary" class="float-right"><i class="cui-list icons"></i>
                        </b-button>
                        <b-button type="button" variant="warning" class="float-right"><i class="cui-note icons"></i>
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

  export default {
    name: 'farm-object-management',
    data: function () {
      return {
        farmObjects: [],
        name: null,
      }
    },
    mounted() {
      FarmObjectsService.syncListFarmObject();
      if (localStorage.getItem('farmObjectNoValuesList')) this.farmObjects = JSON.parse(localStorage.getItem('farmObjectNoValuesList'));
      if (this.farmObjects.count > 0) {
        this.farmObjectsExist = true;
      }
    }
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
