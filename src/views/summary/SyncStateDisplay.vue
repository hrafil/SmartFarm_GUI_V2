<template>
  <b-card>
    <b-row>
      <b-col sm="9">
        <h4 class="card-title mb-0">Periodická synchronizace objektů SmartFarm</h4>
      </b-col>
      <b-col sm="3" class="d-md-inline-block">
        <b-button-toolbar class="float-right" aria-label="Možnosti synchronizace">
          <b-button type="button" variant="success" class="float-right"><i class="icon-check"></i></b-button>
          <b-button type="button" variant="danger" class="float-right"><i class="icon-ban"></i></b-button>
          <b-button v-on:click="toggleSyncForm()" type="button" variant="warning" class="float-right"><i
            class="icon-settings"></i></b-button>
        </b-button-toolbar>

      </b-col>
    </b-row>
    <br>
    <b-col sm="12" md="12">
      <b-card class="card-accent-success" header="Synchronizace aktivní">
        <b-row>
          <b-col md="3">
            <strong>Objekty jsou periodicky synchronizovány!</strong>
          </b-col>
          <b-col md="3">
            Perioda čtení: <em>{{oldSyncReadPeriode}}s</em>
            <span v-if="arePeriodesChanged">
              <em>({{ newSyncReadPeriode }}s)</em>
            </span>
          </b-col>
          <b-col md="3">
            Perioda zápisu: <em>{{oldSyncWritePeriode}}s</em>
            <span v-if="arePeriodesChanged">
              <em>({{ newSyncWritePeriode }}s)</em>
            </span>
          </b-col>
          <b-col md="3">
            Adresa gateway: <em>{{applicationGatewayUrl}}</em>
          </b-col>
        </b-row>
      </b-card>
    </b-col>

    <transition name="fade">
      <div v-if="showSyncForm">
        <b-col md="12">
          <b-card>
            <div slot="header">
              <strong>Nastavení synchronizace</strong>
            </div>
            <b-form>
              <b-form-group
                label="Perioda čtení"
                label-for="horizReadPeriode"
                description="V sekundách."
                :label-cols="3"
                :horizontal="true">
                <b-form-input v-model="tempSyncReadPeriode" id="horizReadPeriode"
                              type="number"></b-form-input>
              </b-form-group>
              <b-form-group
                label="Perioda zápisu"
                label-for="horizWritePeriode"
                description="V sekundách."
                :label-cols="3"
                :horizontal="true">
                <b-form-input v-model="tempSyncWritePeriode" id="horizWritePeriode"
                              type="number"></b-form-input>
              </b-form-group>
              <div slot="footer">
                <b-button
                  v-on:click="updateSyncPeriodes()"
                  type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Uložit
                </b-button>
              </div>
            </b-form>
          </b-card>
        </b-col>

        <b-col md="12">
          <b-card>
            <div slot="header">
              <strong>Nastavení adres</strong>
            </div>
            <b-form>
              <b-form-group
                label="Adresa aplikační gateway"
                label-for="horizAppGatewayAddress"
                description="url"
                :label-cols="3"
                :horizontal="true">
                <b-form-input v-model="tempApplicationGatewayUrl" id="horizAppGatewayAddress"
                              type="url"></b-form-input>
              </b-form-group>
              <div slot="footer">
                <b-button v-on:click="updateGatewayUrl()" type="submit" size="sm" variant="success"><i
                  class="fa fa-dot-circle-o"></i> Uložit
                </b-button>
              </div>
            </b-form>
          </b-card>
        </b-col>
      </div>
    </transition>
  </b-card>
</template>

<script>
  export default {
    name: 'sync-state-display',
    data: function () {
      return {
        isActive: false,
        isNotActive: false,
        isNotConnected: false,
        showSyncForm: false,
        arePeriodesChanged: false,
        isAppGatewayUrlChanged: false,
//        ConfigurationItems
        oldSyncReadPeriode: "30",
        tempSyncReadPeriode: "",
        newSyncReadPeriode: "",
        oldSyncWritePeriode: "10",
        tempSyncWritePeriode: "",
        newSyncWritePeriode: "",
        applicationGatewayUrl: "http://192.168.0.1/",
        tempApplicationGatewayUrl: "",
      }
    },
    created: function () {
    },
    methods: {
      checkSyncStatus() {
        this.isActive = true;
        this.isNotActive = false;
        this.isNotConnected = false;
      },
      toggleSyncForm() {
        if (this.showSyncForm) {
          this.showSyncForm = false;
        } else {
          this.showSyncForm = true;
        }
      },
      updateSyncPeriodes() {
        this.arePeriodesChanged = true;
        this.newSyncReadPeriode = this.tempSyncReadPeriode;
        this.newSyncWritePeriode = this.tempSyncWritePeriode;
        this.tempSyncReadPeriode = "";
        this.tempSyncWritePeriode = "";
      },
      updateGatewayUrl() {
        this.applicationGatewayUrl = this.tempApplicationGatewayUrl;
        this.tempApplicationGatewayUrl = "";
      }
    }
  }
</script>
