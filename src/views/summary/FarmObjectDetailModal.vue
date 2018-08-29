<template>
    <b-modal v-model="detailModal" @ok="clearEditedObj()" title="Editace objektu SmartFarm" ok-variant="success">
        <h5>Název</h5>
        {{name}}
        <br>
        <h5>Popis</h5>
        {{desc}}
        <br>
        <h5>Funkční podmínky</h5>
    </b-modal>
</template>


<script>
  // import FarmObjectsService from '../../services/FarmObjectsService'

  export default {
    name: 'farm-object-detail-modal',
    props:{
      detailObj: { type: Object},
    },
    data: function () {
      return {
        detailModal: false,
        name: null,
        desc: null,
        measurement: null,
        data_type: null,
      }
    },
    methods: {
      clearEditedObj(){
        this.detailModal = true;
      }
    },
    mounted() {
    },
    watch: { 
      	detailObj: function(newVal, oldVal) {
          this.detailModal = true;
          this.name = newVal.name;
          this.desc = newVal.desc;
          this.measurement = newVal.measurement;
          this.data_type = newVal.data_type;
        }
    },
  }

</script>
