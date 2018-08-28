<template>
    <b-modal v-model="editModal" @ok="clearEditedObj()" title="Editace objektu SmartFarm" ok-variant="success">
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
            id="basicCustomRadios1"
            name="customRadioInline1">
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadioDataTypeReal"
                     name="customRadioInline1"
                     class="custom-control-input" value="REAL" v-model="data_type">
              <label class="custom-control-label" for="customRadioDataTypeReal">REAL</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadioDataTypeBool"
                     name="customRadioInline1"
                     class="custom-control-input" value="BOOL" v-model="data_type">
              <label class="custom-control-label" for="customRadioDataTypeBool">BOOL</label>
            </div>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group>
          <label for="street">Fyzikální veličina</label>
          <b-form-input type="text" id="street"
                        placeholder="Teplota, vlhkost ..."></b-form-input>
        </b-form-group>
        <b-row>
          <b-col sm="8">
            <b-form-group>
              <label for="city">Měrné jednotky</label>
              <b-form-input type="text" id="city"
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
                  <input type="radio" id="customRadioSettableTrue"
                         name="customRadioSettableTrue"
                         class="custom-control-input" value="1">
                  <label class="custom-control-label" for="customRadioSettableTrue">Ano</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioSettableFalse"
                         name="customRadioSettableFalse"
                         class="custom-control-input" value="2" checked>
                  <label class="custom-control-label" for="customRadioSettableFalse">Ne</label>
                </div>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
    </b-modal>
</template>


<script>
  // import FarmObjectsService from '../../services/FarmObjectsService'

  export default {
    name: 'farm-object-edit-modal',
    props:{
      editedObj: { type: Object},
    },
    data: function () {
      return {
        editModal: false,
        name: null,
        desc: null,
        measurement: null,
        data_type: null,
      }
    },
    methods: {
      clearEditedObj(){
        this.editModal = true;
      }
    },
    watch: { 
      	editedObj: function(newVal, oldVal) {
          this.editModal = true;
          this.name = newVal.name;
          this.desc = newVal.desc;
          this.measurement = newVal.measurement;
          this.data_type = newVal.data_type;
        }
    },
    mounted() {
    }
  }

</script>
