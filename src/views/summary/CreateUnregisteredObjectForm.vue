<template>
  <transition name="fade">
    <b-col v-if="showForm" sm="6">
      <b-card>
        <div slot="header">
          <strong>Zaregistrovat objekt </strong>
          <small>Form</small>
        </div>
        <b-form-group>
          <label>Název</label>
          <b-form-input v-model="name" type="text" id="name" disabled></b-form-input>
        </b-form-group>
        <b-form-group>
          <label>Popis</label>
          <b-form-input v-model="desc" type="text" id="desc"></b-form-input>
        </b-form-group>
        <b-form-group>
          <label>Datový typ</label>
          <b-form-radio-group
            id="dataTypeRadios1"
            name="dataTypeRadios1">
            <div class="custom-control custom-radio custom-control-inline">
              <input v-model="data_type" type="radio" id="customRadioDataTypeRealCreate"
                     name="customRadioDataTypeReal"
                     class="custom-control-input" value="REAL">
              <label class="custom-control-label" for="customRadioDataTypeRealCreate">REAL</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input v-model="data_type" type="radio" id="customRadioDataTypeBoolCreate"
                     name="customRadioDataTypeBool"
                     class="custom-control-input" value="BOOL">
              <label class="custom-control-label" for="customRadioDataTypeBoolCreate">BOOL</label>
            </div>
          </b-form-radio-group>
        </b-form-group> 
        <b-form-group>
          <label for="street">Fyzikální veličina</label>
          <b-form-input v-model="measurement" type="text" id="street"
                        placeholder="Teplota, vlhkost ..."></b-form-input>
        </b-form-group>
        <b-row>
          <b-col sm="8">
            <b-form-group>
              <label for="city">Měrné jednotky</label>
              <b-form-input v-model="measurement_units" type="text" id="city"
                            placeholder="Ph, °C"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="4">
            <b-form-group>
              <label for="postal-code">Nastavitelný</label>
              <b-form-radio-group
                id="isSettableRadios1"
                name="isSettableRadios1">
                <div class="custom-control custom-radio custom-control-inline">
                  <input v-model="is_settable" type="radio" id="customRadioSettableTrueCreate"
                         name="customRadioSettableTrue"
                         class="custom-control-input" value="1">
                  <label class="custom-control-label" for="customRadioSettableTrueCreate">Ano</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input v-model="is_settable" type="radio" id="customRadioSettableFalseCreate"
                         name="customRadioSettableFalse"
                         class="custom-control-input" value="0">
                  <label class="custom-control-label" for="customRadioSettableFalseCreate">Ne</label>
                </div>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
        <div slot="footer">
          <b-button v-on:click="validateAndSend()" type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Odeslat</b-button>
          <b-button v-on:click="clearFormAndHide()" type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i>
            Smazat
          </b-button>
        </div>
      </b-card>
    </b-col>
  </transition>
</template>

<script>
  import FarmObjectsService from "../../services/FarmObjectsService";

  export default {
    name: 'create-unregistered-object',
    props: ['name'],
    data: function () {
      return {
        showForm: false,

        desc: null,
        data_type: null,
        measurement: null,
        measurement_units: null,
        is_settable: false
      }
    },
    watch: {
      name: function (newVal, oldVal) { // watch it
        if (name !== null) {
          this.showForm = true
        }
      }
    },
    methods: {
      validateAndSend(){
          console.log(this.is_settable);
          var newFarmObj = {
            name: this.name,
            desc: this.desc,
            data_type: this.data_type,
            measurement: this.measurement,
            measurement_units: this.measurement_units,
            is_settable: !!+this.is_settable
          };
          console.log(newFarmObj);
          var smt = FarmObjectsService.postCreateNewFarmObject(newFarmObj);
          smt.then((resolve) => {
            //TODO: Message
            //TODO: Splice objects
//            this.unregisteredObjects = resolve.data.unregistered_objects;
          });

          this.clearFormAndHide();
      },
      clearFormAndHide() {
        this.desc = null;
        this.data_type = null;
        this.measurement = null;
        this.measurement_units = null;
        this.is_settable = false;

        this.showForm = false;
      }
    }
  }
</script>
