import ConfigurationStoreManager from './local_storage_managers/ConfigurationStoreManager'
import FarmObjectListManager from './local_storage_managers/FarmObjectsListManager'
import DashboardObjectsStoreManager from './local_storage_managers/DasboardObjectsStoreManager'

export default {
    //Part Config
    configGetConfig() {
      return ConfigurationStoreManager.getConfig();
    },
    configSetConfigPeriodes(readPeriode, writePeriode){
        ConfigurationStoreManager.setConfigPeriodesFunc(readPeriode, writePeriode);
    },
    configSetApplicationGatewayUrl(applicationGatewayUrl){
        ConfigurationStoreManager.setApplicationGatewayUrl(applicationGatewayUrl);
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
    },
    //Part ListFarmObject value
    listFarmObjectGetListFarmObjectValue(){
        return FarmObjectListManager.getListFarmObjectWithValue();
    },
    listFarmObjectSetListFarmObjectValue(listFarmObjectValue){
        FarmObjectListManager.setListFarmObjectWithValue(listFarmObjectValue);
    },
    // Part DashboardManagementObjects
    dashboardGetManagementObjects(){
        return DashboardObjectsStoreManager.getDashboardManagementObjects();
    },
    dashboardSetManagementObjects(managementObjects){
        DashboardObjectsStoreManager.setDashboardManagementObjects(managementObjects);
    },
    // Part Dasboard configuration
    dasboardGetExcludedObjects(){
        return DashboardObjectsStoreManager.getDashboardExcludedFarmObjects();
    },
    dashboardSetExcudedObjects(excludedObjects){
        DashboardObjectsStoreManager.setDashboardExcludedFarmObjects(excludedObjects);
    },
    dasboardGetIncludedObjects(){
        return DashboardObjectsStoreManager.getDashboardIncludedFarmObjects();
    },
    dashboardSetIncudedObjects(includedObjects){
        DashboardObjectsStoreManager.setDashboardIncludedFarmObjects(includedObjects);
    },
  }


