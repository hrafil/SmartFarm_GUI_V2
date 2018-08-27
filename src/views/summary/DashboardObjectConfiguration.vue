<template>
<b-card>
  <b-row>
    <b-col sm="4">
      <h4 class="card-title mb-0">Registrace objektů SmartFarm</h4>
    </b-col>
    <b-col sm="7" class="d-md-block">
      <b-button v-b-toggle.collapseUnregisteredObjectsComponent type="button" variant="secondary" class="float-right">
        <i class="cui-chevron-bottom"></i></b-button>
    </b-col>
  </b-row>


    <b-row>
      <b-col sm="4">
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
