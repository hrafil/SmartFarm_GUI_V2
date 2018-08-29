<template>
  <b-card>
    <b-row>
      <b-col sm="5">
        <h4 class="card-title mb-0">Registrace objektů SmartFarm</h4>
      </b-col>
      <b-col sm="7" class="d-md-block">
        <b-button v-b-toggle.collapseUnregisteredObjectsComponent type="button" variant="secondary" class="float-right">
          <i class="cui-chevron-bottom"></i></b-button>
      </b-col>
    </b-row>

    <b-collapse id="collapseUnregisteredObjectsComponent">
      <br>
      <b-row>
        <b-col md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Neuložené objekty </strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/list-group" class="card-header-action"
                   rel="noreferrer noopener" target="_blank">
                </a>
              </div>
            </div>
            <b-list-group v-for="item in unregisteredObjects">
              <a v-on:click="unregisteredObjectClicked(item)">
                <b-list-group-item href="#">{{item}}</b-list-group-item>
              </a>
            </b-list-group>
          </b-card>
        </b-col>
        <create-unregistered-object-form-component :name="name"></create-unregistered-object-form-component>
      </b-row>
    </b-collapse>
  </b-card>


</template>

<script>
  import FarmObjectsService from '../../services/FarmObjectsService'
  import CreateUnregisteredObjectFormComponent from './CreateUnregisteredObjectForm.vue'

  export default {
    name: 'list-unregistered-objects',
    components: {
      CreateUnregisteredObjectFormComponent
    },
    data: function () {
      return {
        unregisteredObjects: null,
        name: null
      }
    },
    methods: {
      unregisteredObjectClicked: function (item) {
        this.name = item;
      }
    },
    mounted(){
      var smt = FarmObjectsService.getUnregisteredFarmObjects();
      smt.then((resolve) => {
        this.unregisteredObjects = resolve.data.unregistered_objects;
      });
    }
  }
</script>

