import ConfigurationStoreManager from './local_storage_managers/ConfigurationStoreManager'
import FarmObjectListManager from './local_storage_managers/FarmObjectsListManager'

export default {
    //Part Config
    configGetConfig() {
      return ConfigurationStoreManager.getConfig();
    },
    configSetConfigPeriodes(readPeriode, writePeriode){
        ConfigurationStoreManager.setConfigPeriodesFunc(readPeriode, writePeriode);
    },
    configSetApplicationGatewayUrl(applicationGatewayUrl){
        ConfigurationStoreManager.setApplicationGatewayUrlFunc(applicationGatewayUrl);
    },
    configGetSyncState(){
        return ConfigurationStoreManager.getSyncStateFunc();
    },
    configSetSyncState(newState){
        ConfigurationStoreManager.setSyncStateFunc(newState);
    },
  // Part ListFarmObject
    listFarmObjectGetListFarmObject(){
        return FarmObjectListManager.getListFarmObject();
    },
    listFarmObjectSetListFarmObject(listFarmObject){
        FarmObjectListManager.setListFarmObject(listFarmObject);
    }
  }


