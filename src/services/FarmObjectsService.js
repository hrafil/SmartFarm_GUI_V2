import axios from 'axios'
import FarmObjectsLocalStorage from './FarmObjectsLocalStorage'

const DEBUG = true;

export default {
  getListFarmObject() {
    if (DEBUG) {
      return getTestListFarmObject();
    } else {
      var conf_obj = FarmObjectsLocalStorage.configGetConfig();
      return axios.get(conf_obj.configuration.applicationGatewayUrl + "listFarmObject")
    }
  },

  getListWithValuesFarmObject() {
    if (DEBUG) {
      return getTestListValueFarmObject();
    } else {
      var conf_obj = FarmObjectsLocalStorage.configGetConfig();
      return axios.get(conf_obj.configuration.applicationGatewayUrl + "listFarmObjectValue")
    }
  },

  getUnregisteredFarmObjects() {
    if (DEBUG) {
      return getTestUnregisteredValues()
    } else {
      var conf_obj = FarmObjectsLocalStorage.configGetConfig();
      return axios.get(conf_obj.configuration.applicationGatewayUrl + "showUnregisteredFarmObject")
    }
  },

  postCreateNewFarmObject(newFarmObject) {
    if (DEBUG) {
      return postTestCreateNewFarmObject();
    } else {
      var conf_obj = FarmObjectsLocalStorage.configGetConfig();
      return axios.post(conf_obj.configuration.applicationGatewayUrl + "createFarmObject", {
        name: newFarmObject.name,
        desc: newFarmObject.desc,
        data_type: newFarmObject.data_type,
        measurement: newFarmObject.measurement,
        measurement_units: newFarmObject.measurement_units,
        is_settable: newFarmObject.is_settable
      })
    }
  },

  putNewFarmObjectValue(farmObject) {
    if (DEBUG) {
      return putNewFarmObjectValueTest();
    } else {
      var conf_obj = FarmObjectsLocalStorage.configGetConfig();
      return axios.put(conf_obj.configuration.applicationGatewayUrl + "puttFarmObject", {
        name: farmObject.name,
        value: farmObject.newValue
      })
    }
  },
  //HELPER METHODS

  getDashboardValues(listFarmObject, listValuesFarmObject) {
    return filterExcludedDashboardManagement(listFarmObject, listValuesFarmObject);
  },

  prepareFarmValuesData(listFarmObject, listFarmObjectValue) {
    createStorageValueData(listFarmObject, listFarmObjectValue)
  },

  syncDashboardConfigurationObjects(unregisteredObjects, listFarmObject) {
    arrangeDashboardExcludedIncluded(unregisteredObjects, listFarmObject)
  }

}

function putNewFarmObjectValueTest() {
  return new Promise((resolve, reject) => {
    resolve("V testovacim prostredi nedostupna funkce!");
  });
}

function postTestCreateNewFarmObject() {
  return new Promise((resolve, reject) => {
    resolve("V testovacim prostredi nedostupna funkce!");
  });
}

function getTestUnregisteredValues() {
  return new Promise((resolve) => {
    var unregisteredObjects = {
      "data": {
        "unregistered_objects": [
          "test_real",
          "test_bool",
          "test_int",
          "test_string",
          "VIB1_AR",
        ],
        "not_active": [
          "limit_ventilator",
        ],
        "uuAppErrorMap": {}
      }
    }
    resolve(unregisteredObjects);
  });
}

function getTestListFarmObject() {
  return new Promise((resolve) => {
    var farmObjects = {
      "data": {
        "itemList": [{
            "name": "ST1_RE",
            "desc": "Teplota venkovní",
            "functional_conditions": "Vázano na ST1_SIM",
            "data_type": "REAL",
            "measurement": "",
            "measurement_units": "",
            "is_settable": false,
            "awid": "1",
            "object_value_id": "5b4fa841c9b40b395cf6b36d",
            "sys": {
              "cts": "2018-07-18T20:51:14.018Z",
              "mts": "2018-07-18T20:51:14.018Z",
              "rev": 0
            },
            "id": "5b4fa842c9b40b395cf6b36e"
          },
          {
            "name": "ST1_SIM",
            "desc": "Simulace",
            "functional_conditions": "ll",
            "data_type": "BOOL",
            "measurement": "",
            "measurement_units": "",
            "is_settable": true,
            "awid": "1",
            "object_value_id": "5b535e146980d121407529b3",
            "sys": {
              "cts": "2018-07-21T16:23:48.617Z",
              "mts": "2018-07-21T16:23:48.617Z",
              "rev": 0
            },
            "id": "5b535e146980d121407529b4"
          },
          {
            "name": "VIB1_AC",
            "desc": "Automat ruka vibrolista",
            "functional_conditions": "ll",
            "data_type": "BOOL",
            "measurement": "",
            "measurement_units": "",
            "is_settable": true,
            "awid": "1",
            "object_value_id": "5b4fab0c8b3b95243c8f4c28",
            "sys": {
              "cts": "2018-07-18T21:03:08.873Z",
              "mts": "2018-07-18T21:03:08.873Z",
              "rev": 0
            },
            "id": "5b4fab0c8b3b95243c8f4c29"
          },
          {
            "name": "limit_ventilator",
            "desc": "Ventilator limitní",
            "functional_conditions": "haaa",
            "data_type": "BOOL",
            "measurement": "",
            "measurement_units": "",
            "is_settable": true,
            "awid": "1",
            "object_value_id": "5b50e944406de00b7c688896",
            "sys": {
              "cts": "2018-07-19T19:40:52.657Z",
              "mts": "2018-07-19T19:41:12.989Z",
              "rev": 2
            },
            "id": "5b50e944406de00b7c688897"
          }
        ],
        "pageInfo": {
          "pageIndex": 0,
          "pageSize": 100,
          "total": 4
        },
        "uuAppErrorMap": {}
      }
    };
    resolve(farmObjects);
  });
}


function getTestListValueFarmObject() {
  return new Promise((resolve) => {
    var inputDataList = {
      "data": {
        "itemList": [{
            "name": "AF1_AC",
            "value": 1,
            "awid": "1",
            "sys": {
              "cts": "2018-07-19T07:17:53.389Z",
              "mts": "2018-07-23T07:21:26.214Z",
              "rev": 438
            },
            "id": "5b503b21fe230e15208b8009"
          },
          {
            "name": "AF1_AR",
            "value": 1,
            "awid": "1",
            "sys": {
              "cts": "2018-07-23T07:20:41.070Z",
              "mts": "2018-07-23T07:21:26.331Z",
              "rev": 9
            },
            "id": "5b5581c92da3df104421d0b3"
          },
          {
            "name": "ST1_AI",
            "value": 27,
            "awid": "1",
            "sys": {
              "cts": "2018-07-04T07:19:05.433Z",
              "mts": "2018-07-12T08:04:41.558Z",
              "rev": 1218
            },
            "id": "5b3c74e9e6d6940d9c9caa43"
          },
          {
            "name": "ST1_RE",
            "value": 28.860001,
            "awid": "1",
            "sys": {
              "cts": "2018-07-04T07:32:24.170Z",
              "mts": "2018-07-23T07:21:23.040Z",
              "rev": 2656
            },
            "id": "5b3c7808ff9d3e16641da597"
          },
          {
            "name": "ST1_SIM",
            "value": 1,
            "awid": "1",
            "sys": {
              "cts": "2018-07-16T20:54:09.218Z",
              "mts": "2018-07-23T07:21:26.119Z",
              "rev": 479
            },
            "id": "5b4d05f15cc1d72578d87db8"
          },
          {
            "name": "ST2_AI",
            "value": 27,
            "awid": "1",
            "sys": {
              "cts": "2018-07-04T07:41:00.684Z",
              "mts": "2018-07-12T08:04:41.626Z",
              "rev": 1137
            },
            "id": "5b3c7a0cef3161197828a5b9"
          }
        ],
        "pageInfo": {
          "pageIndex": 0,
          "pageSize": 100,
          "total": 6
        },
        "uuAppErrorMap": {}
      }
    };
    resolve(inputDataList);
  });
}


//DASHBOARD configuration

function arrangeDashboardExcludedIncluded(unregisteredObjects, listFarmObject) {
  var filteredObjects = filterDashboardConfiguration(unregisteredObjects, listFarmObject)
  var objectsInDashboard = FarmObjectsLocalStorage.dasboardGetIncludedObjects();

  var includedObjects = objectsInDashboard;
  var excludedObjects = [];

  for (var i = 0; i < filteredObjects.length; i++) {
    var isInIncluded = false;
    for (var j = 0; j < objectsInDashboard.length; j++) {
      if (filteredObjects[i] === objectsInDashboard[j]) {
        isInIncluded = true;
      }
    }
    if (!isInIncluded) {
      excludedObjects.push(filteredObjects[i])
    }
  }
  FarmObjectsLocalStorage.dashboardSetExcudedObjects(excludedObjects);
  FarmObjectsLocalStorage.dashboardSetIncudedObjects(includedObjects);
}


function filterDashboardConfiguration(unregisteredObjects, listFarmObject) {
  var filteredObjects = []
  for (var j = 0; j < listFarmObject.itemList.length; j++) {
    var isInactive = checkNotActive(unregisteredObjects, listFarmObject.itemList[j].name)
    if (!isInactive) {
      filteredObjects.push(listFarmObject.itemList[j].name);
    }
  }
  return filteredObjects;
}


function checkNotActive(unregisteredObjects, objectName) {
  var foundInactive = false;
  for (var i = 0; i < unregisteredObjects.not_active.length; i++) {
    if (unregisteredObjects.not_active[i] === objectName) {
      foundInactive = true
      break;
    }
  }
  return foundInactive
}

// DASHBOARD management

function createStorageValueData(farmObjectList, farmObjectValuesList) {
  var listObjectValues = prepareData(farmObjectList, farmObjectValuesList);
  FarmObjectsLocalStorage.listFarmObjectSetListFarmObjectValue(listObjectValues);
}

function filterExcludedDashboardManagement(listFarmObjects, listFarmObjectValues = null) {
  var includedNames = FarmObjectsLocalStorage.dasboardGetIncludedObjects();
  var dashboardManagementObjects = []
  if (listFarmObjectValues !== null) {
    listFarmObjects = prepareData(listFarmObjects, listFarmObjectValues)
    FarmObjectsLocalStorage.listFarmObjectSetListFarmObjectValue(listFarmObjects);
  }
  for (var i = 0; i < includedNames.length; i++) {
    for (var j = 0; j < listFarmObjects.length; j++) {
      if (listFarmObjects[j].name === includedNames[i]) {
        dashboardManagementObjects.push(listFarmObjects[j]);
      }
    }
  }
  FarmObjectsLocalStorage.dashboardSetManagementObjects(dashboardManagementObjects);
}

// Object Value calc
function prepareData(farmObjectList, farmObjectValuesList) {
  for (var j = 0; j < farmObjectList.length; j++) {
    var curr_obj = farmObjectList[j];
    var value = findAppropriateValue(farmObjectList[j].name, farmObjectValuesList)
    if (value) {
      curr_obj.value = Math.round(findAppropriateValue(farmObjectList[j].name, farmObjectValuesList) * 10) / 10;
    } else {
      curr_obj.value = "X";
    }
    curr_obj.showInput = false;
  }
  return farmObjectList;
}

function findAppropriateValue(name, farmObjectValuesList) {
  for (var j = 0; j < farmObjectValuesList.length; j++) {
    if (name === farmObjectValuesList[j].name) {
      return farmObjectValuesList[j].value
    }
  }
  return false
}
