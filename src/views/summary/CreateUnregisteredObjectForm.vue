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
          <b-form-input v-model="registeredObject.desc" type="text" id="desc"></b-form-input>
        </b-form-group>
        <b-form-group>
          <label>Datový typ</label>
          <b-form-radio-group
            id="basicCustomRadios1"
            name="customRadioInline1">
            <div class="custom-control custom-radio custom-control-inline">
              <input v-model="registeredObject.data_type" type="radio" id="customRadioDataTypeReal"
                     name="customRadioInline1"
                     class="custom-control-input" value="1">
              <label class="custom-control-label" for="customRadioDataTypeReal">REAL</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input v-model="registeredObject.data_type" type="radio" id="customRadioDataTypeBool"
                     name="customRadioInline1"
                     class="custom-control-input" value="2" checked>
              <label class="custom-control-label" for="customRadioDataTypeBool">BOOL</label>
            </div>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group>
          <label for="street">Fyzikální veličina</label>
          <b-form-input v-model="registeredObject.measurement" type="text" id="street"
                        placeholder="Teplota, vlhkost ..."></b-form-input>
        </b-form-group>
        <b-row>
          <b-col sm="8">
            <b-form-group>
              <label for="city">Měrné jednotky</label>
              <b-form-input v-model="registeredObject.measurement_units" type="text" id="city"
                            placeholder="Ph, °C"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="4">
            <b-form-group>
              <label for="postal-code">Nastavitelný</label>
              <b-form-radio-group
                id="basicCustomRadios1"
                name="customRadioInline1">
                <div class="custom-control custom-radio custom-control-inline">
                  <input v-model="registeredObject.data_type" type="radio" id="customRadioSettableTrue"
                         name="customRadioInline1"
                         class="custom-control-input" value="1">
                  <label class="custom-control-label" for="customRadioSettableTrue">Ano</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input v-model="registeredObject.data_type" type="radio" id="customRadioSettableFalse"
                         name="customRadioInline1"
                         class="custom-control-input" value="2" checked>
                  <label class="custom-control-label" for="customRadioSettableFalse">Ne</label>
                </div>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
        <div slot="footer">
          <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Odeslat</b-button>
          <b-button v-on:click="clearFormAndHide()" type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i>
            Smazat
          </b-button>
        </div>
      </b-card>
    </b-col>
  </transition>
</template>

<script>
  export default {
    name: 'create-unregistered-object',
    props: ['name'],
    data: function () {
      return {
        showForm: false,
        registeredObject: {
          desc: null,
          data_type: null,
          measurement: null,
          measurement_units: null,
          is_settable: false
        }
      }
    },
    created: function () {
      console.log('name data from parent component:');
      console.log(this.name) //prints out an empty string
    },
    watch: {
      name: function (newVal, oldVal) { // watch it
        if (name !== null) {
          this.showForm = true
        }
        console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      }
    },
    methods: {
      clearFormAndHide() {
        this.registeredObject = {
          desc: null,
          data_type: null,
          measurement: null,
          measurement_units: null,
          is_settable: false
        };
        this.showForm = false;
      }
    }
  }
</script>
